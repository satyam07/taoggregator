import logging
import simplejson
import zmq

class SocketClient(object):
    def __init__(self, serveraddr, return_only_strings=False):
        self.logger = logging.getLogger('SocketClient')
        self.logger.info('Establishing connection to "%s".' % serveraddr)
        context = zmq.Context()
        self.socket = context.socket(zmq.REQ)
        self.socket.connect(serveraddr)
        self.return_only_strings = return_only_strings
    def _sendmessage(self, funcname, *args, **kwargs):
        obj = [funcname, args, kwargs]
        s = simplejson.dumps(obj)
        self.logger.info('Sending to service: "%s"' % s)
        self.socket.send(s)
        received = self.socket.recv()
        self.logger.info('Received from service: "%s"' % received)
        result = received if self.return_only_strings else simplejson.loads(received)
        self.logger.info('Returning: %s' % repr(result))
        return result
    def request_content_by_date(self, *args, **kwargs):
        items = self._sendmessage('request_content_by_date', *args, **kwargs)
        return items
    def request_content_slice(self, *args, **kwargs):
        items = self._sendmessage('request_content_slice', *args, **kwargs)
        return items
    def downloadedcontent_count(self):
        return self._sendmessage('downloadedcontent_count')
    def publish_content(self, *args, **kwargs):
        pub = self._sendmessage('publish_content', *args, **kwargs)
        return pub
    def adjust_likes(self, *args, **kwargs):
        newlikes = self._sendmessage('adjust_likes', *args, **kwargs)
        return newlikes
    def is_authenticated(self, *args, **kwargs):
        result = self._sendmessage('is_authenticated', *args, **kwargs)
        return result