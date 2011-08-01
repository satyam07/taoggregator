"""Types that define the taoggregator service implementation and socket/RPC based processes for hosting it.  The
implementation is a protocol-agnostic implementation.  There is a socket-based implementation for receiving and sending
json-encoded strings between processes using sockets, and a JSONRPC server for handling requests for the web (using CGI)
to communicate to the local socket-communicated process.

Run the process with -runsoc to start the socket-based server, and -runrpc to start the rpc-based server.

Note that the very, very basic authentication set up by the service stores passwords as plain text and is really not a
scalable system beyond the very basic usage required.
"""

import datetime
import logging
import os
import simplejson
import threading
import yaml
import zmq

import taoggregator.server.database as database
import taoggregator
import taoggregator.server.contentmanagement as contentmanagement
import taoggregator.taoutils as taoutils

#SERVICE


class ServiceState(object):
    """Represents the state of a TaoggregatorService that can be serialized to persist across sessions."""
    def __init__(self, filename, sec_between_sync=111600, last_sync_time=datetime.datetime(datetime.MINYEAR, 1, 1)):
        """Create a new instance.

        filename: The filename of the yaml file used for 'save' and 'load' methods.  Passing a filename does NOT try to
        load the file in the constructor.
        sec_between_sync: Seconds between when a call to '_sync_content' ends and when the next starts.  If 0 or
            negative, do not start the timer.
        last_sync_time: The datetime of the last sync, earliest date possible if never done.
        """
        super(ServiceState, self).__init__()
        self.filename = filename
        self.last_sync_time = last_sync_time
        self.sec_between_sync = sec_between_sync
        return
    def __getstate__(self):
        return {'last_sync_time':self.last_sync_time,
                'sec_between_sync':self.sec_between_sync,
                }
    def __setstate__(self, state):
        self.last_sync_time = state['last_sync_time']
        self.sec_between_sync = state['sec_between_sync']
        return
    def save(self):
        """Writes this state out to filename."""
        yaml.dump(self.__getstate__(), open(self.filename, 'w'))
    def load(self):
        """Mutates this state according to the contents of the file at filename.  Does nothing if file not found.
        Returns self.
        """
        try:
            storedstate = yaml.load(open(self.filename))
        except IOError:
            return self
        self.__setstate__(storedstate)
        return self

class TaoggregatorServiceImpl(object):
    """Service that continually runs and pulls down content from several sources, and caches it locally.  Clients can
    request ContentItems from the service, and then instruct the service to publish ContentItems to a target.
    """
    def __init__(self, service_state=None, service_database=None, contentsources=(), contenttargets=(), authinfos=None):
        """Create a new TaoggregatorService.

        statefilename: The filename of the yaml file the objects state will be saved to.
        service_database: The dbservicestate.DBServiceState that stored the downloadedcontent this service should use.
        contentsources: Sequence of BaseContentSource objects to pull content from.
        contenttargets: Sequence of BaseContentTarget objects to push content to.
        authinfo: dict(key=username, value=password).
        """
        self.logger = logging.getLogger('ServiceImpl')
        self.logger.info('Creating service.')
        self.state = service_state
        self.db = service_database
        self.contentsources = contentsources
        self.contenttargets = contenttargets
        self.authinfos = authinfos
        self._set_and_start_timer()
        self.logger.info('Finished creating service.')
        delta = datetime.datetime.now() - self.state.last_sync_time
        if (self.state.sec_between_sync > 0) and taoutils.total_seconds(delta) > self.state.sec_between_sync:
            self._sync_content()
        return
    def request_content_by_date(self, oldestdatetime, newestdatetime=None, maxnumber=15):
        """Return a sequence of all ContentItems from the Service that fulfill the ContentRequest, newest first.

        oldestdatetime: A time-like object (datetime, date, struct_time, or tuple).  No item will be returned as old or
        older.
        newestdatedate: A time-like object.  No item will be returned as new or newer.  Defaults to now.
        maxnumber: The maximum number of items to return.
        """
        self.logger.info(str.format('Requesting content with oldest {0}, newest {1}, max {2}.', oldestdatetime,
                                    newestdatetime, maxnumber))
        oldestdt = taoutils.create_datetime(oldestdatetime )
        newestdt = taoutils.create_datetime(newestdatetime or datetime.datetime.now())
        result = taoutils.take(self.db.get_between(oldestdt, newestdt), maxnumber)
        self.logger.info(str.format('Returning {0} items for request.', len(result)))
        return result
    def request_content_slice(self, startindex=0, number=20):
        """Returns at most 'number' items, starting from 'startindex', newest items first."""
        self.logger.info(str.format('Requesting item slice of size {0} from index {1} .', number, startindex))
        result = taoutils.take(self.db.get_slice(startindex), number)
        self.logger.info(str.format('Returning {0} items.', len(result)))
        return result
    def publish_content(self, contentitem, publish=True):
        """Instructs the Service to post the contentitem to the aggregate feed and returns True if published, False
        if already published.

        contentitem: The item to publish.
        publish: Some targets are capable of uploading, but not publishing their content publicly.  If False, attempt
        to upload but not publicly if supported, if not supported do not upload.
        """
        guid = contentitem['metadata']['guid']
        matchingitem = self.db.get_from_guid(guid)
        if matchingitem['metadata']['is_published']:
            self.logger.info('Published requested for %s, but already published.  Returning False.' % guid)
            return False

        self.logger.info('Publishing item %s to %s targets (%s).' %
                         (guid, len(self.contenttargets), self.contenttargets))
        for target in self.contenttargets:
            target.publish_content(matchingitem, publish)
        matchingitem['metadata']['is_published'] = True
        self.db.update_items(matchingitem)
        return True
    def adjust_likes(self, contentitem, amount=1):
        """Adds 'amount' the internally-stored contentitem's 'likes' level, and returns the new values.  Does NOT
        attempt to change the 'contentitem' argument's value.
        """
        self.logger.info('Adjust likes by %s for %s.' % (amount, contentitem))
        match = self.db.get_from_guid(contentitem['metadata']['guid'])
        match['metadata']['likes'] += amount
        self.db.update_items(match)
        return match['metadata']['likes']
    def downloadedcontent_count(self):
        """Returns the total count of all items in downloadedcontent."""
        cnt = self.db.itemcount()
        return cnt
    def is_authenticated(self, username, password):
        """Ensures that username and password is valid."""
        return self.authinfos.get(username) == password
    def _set_and_start_timer(self):
        """Create and start a threading.Timer if sec_between_sync is greater than 0, otherwise set timer to None.  Note
        that this will not stop/cancel the timer if it is running.
        """
        if self.state.sec_between_sync > 0:
            self.timer = threading.Timer(self.state.sec_between_sync, self._sync_content)
            self.timer.start()
        else:
            self.timer = None
        return
    def _sync_content(self):
        """Syncs content from all content sources.  This is automatically called on a timer if the Service is set up
        to automatically sync.
        """
        self.logger.info('Syncing content.')
        if hasattr(self, 'timer') and self.timer:
            self.timer.cancel()
        startdate, enddate = self.state.last_sync_time, datetime.datetime.now()
        newitems = []

        def refresh_and_get(source):
            source.cache(force_refresh=True)
            items = source.get_content_between(startdate, enddate)
            return items
        for syncedcontent in taoutils.paggr(self.contentsources, refresh_and_get):
            newitems.extend(syncedcontent)

        self.logger.info('Synced %s new items' % len(newitems))
        self.db.insert_items(*newitems)
        self._set_and_start_timer()
        self.state.last_sync_time = datetime.datetime.now()
        self.state.save()
        self.logger.info('Content sync finished.')
        return

class AuthInfo(dict):
    def __getstate__(self):
        return dict(self)
    def __setstate__(self, state):
        self.clear()
        for k, v in state.items():
            self[k] = v
        return
    def save(self, filename):
        """Writes this state out to filename."""
        yaml.dump(self.__getstate__(), open(filename, 'w'))
    def load(self, filename):
        """Mutates this state according to the contents of the file at filename.  Does nothing if file not found.
        Returns self.
        """
        try:
            storedstate = yaml.load(open(filename))
        except IOError:
            return self
        self.__setstate__(storedstate)
        return self

class InvalidMessageError(Exception):
    """Indicates that the message sent to the server could be serialized but holds invalid data that could not be used.
    """
    def __init__(self, message):
        Exception.__init__(self, message)
        return

class SocketServiceRunner(object):
    """Class to that will route messages to/from the service implementation over sockets via ZeroMQ."""
    def __init__(self, hostAndPort=None,
                 serviceimpl=None,
                 statefilename='servicestate.yaml',
                 pluginfilename='data_serviceplugins.py',
                 authinfofilename='data_authinfo.yaml',
                 databasefilename='servicestate.db'):
        """Creates a TaoggregatorService object.  If serviceimpl is supplied, use that ServiceImpl.  If None, use the
        statefilename, pluginfilename, and authinfofilename to create a new ServiceImpl.
        """
        self.logger = logging.getLogger('SocketService')
        if not serviceimpl:
            srcs, tgts = contentmanagement.PluginLoader().load_sources_and_targets(pluginfilename, True)
            state = ServiceState(statefilename).load()
            authinfo = AuthInfo().load(authinfofilename)
            if not os.path.exists(databasefilename):
                db = database.create_new_db(databasefilename)
            else:
                db = database.ServiceDatabase(databasefilename)
            serviceimpl = TaoggregatorServiceImpl(service_state=state, service_database=db, contentsources=srcs,
                                                  contenttargets=tgts, authinfos=authinfo)
        self.serviceimpl = serviceimpl
        hostAndPort = hostAndPort or taoggregator.getDefaultHostAndPort(False)
        self.addr = taoggregator.createConnStr(*hostAndPort)
        return
    def run(self):
        self.logger.info('Binding to ' + self.addr)
        context = zmq.Context()
        self.socket = context.socket(zmq.REP)
        self.socket.bind(self.addr)
        self.logger.info('Bound')
        while True:
            jsonmsgstr = self.socket.recv()
            self.logger.info(str.format('Handling {0}', jsonmsgstr[:200]))
            msg = simplejson.loads(jsonmsgstr)
            handledresult = self.handle_message(msg)
            jsonresultstr = self.serializetojson(handledresult)
            self.logger.info(str.format('Sending {0}', jsonresultstr[:200]))
            self.socket.send(jsonresultstr)
    def handle_message(self, message):
        error = self._verify_message(message)
        if error:
            self.logger.info(str.format('Message {0} failed to verify.  Got "{1}".', message, error))
            return error
        funcname = message[0]
        func = self.serviceimpl.__getattribute__(funcname)
        self.logger.info(str.format('Running: {0}(*{1}, **{2}', funcname, message[1], message[2]))
        return func(*message[1], **message[2])
    def _verify_message(self, decodedmessage):
        if not isinstance(decodedmessage, list) or len(decodedmessage) != 3:
            return InvalidMessageError('Message must be list of [funcname, *args, **kwargs]')
        funcname = decodedmessage[0]
        if funcname not in taoggregator.EXPORTED_METHODS:
            return InvalidMessageError('Func name "%s" is not part of exported methods.' % funcname)
        return
    def serializetojson(self, obj):
        try:
            result = simplejson.dumps(obj, default=encodeobjtojson)
        except ValueError:
            raise
        return result

def encodeobjtojson(obj):
    if hasattr(obj, 'isoformat'):
        return obj.isoformat()
    else:
        return obj#raise TypeError, 'Object of type %s with value of %s is not JSON serializable' % (type(Obj), repr(Obj))
    
if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                    datefmt='%m-%d %H:%M',
                    filename='service.log',
                    filemode='w')
    # define a Handler which writes INFO messages or higher to the sys.stderr
    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    # set a format which is simpler for console use
    formatter = logging.Formatter('%(name)-12s: %(levelname)-8s %(message)s')
    # tell the handler to use this format
    console.setFormatter(formatter)
    # add the handler to the root logger
    logging.getLogger('').addHandler(console)

    runner = SocketServiceRunner()
    runner.run()