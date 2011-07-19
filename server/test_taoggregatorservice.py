"""Tests for taoggregatorservice.py"""

import unittest, tempfile, datetime
from taoggregatorservice import *
import taoggregatorservice
import database
import taoggregator.taoutils as taoutils
dt = datetime.datetime

def createTestContentItems(title='', html=''):
    items = [
        taoutils.create_contentitem(id=1, title=title, html=html, datetime=dt(2010, 1, 2, 4, 20, 0)),
        taoutils.create_contentitem(id=3, title=title, html=html, datetime=dt(2010, 1, 8, 3, 20, 10)),
        taoutils.create_contentitem(id=2, title=title, html=html, datetime=dt(2010, 1, 9, 6, 40, 11)),
        taoutils.create_contentitem(id=8, title=title, html=html, datetime=dt(2010, 1, 8, 1, 20, 10)),
        taoutils.create_contentitem(id=8, title=title, html=html, datetime=dt(2010, 1, 8, 2, 20, 10)),
        taoutils.create_contentitem(id=4, title=title, html=html, datetime=dt(2010, 1, 1, 1, 1, 1))]
    return items

class MockContentSource(object):
    def __init__(self, items=None):
        self.items = items
        self.cache = taoutils.Lazy(lambda: None)
        return
    def get_content_between(self, startdate, enddate):
        for item in self.items:
            if item.datetime > startdate and item.datetime < enddate:
                yield item
    def get_init_args(self):
        return {}

class TestService(unittest.TestCase):
    """Tests for Service."""
    def setUp(self):
        state = ServiceState(tempfile.mkstemp('.yaml')[1], sec_between_sync=0)
        db = database.create_new_db(tempfile.mkstemp('.db')[1])
        self.service = taoggregatorservice.TaoggregatorServiceImpl(service_state=state, service_database=db)
        self.service.contentsources = [MockContentSource(createTestContentItems('s1', 's1html')),
                                       MockContentSource(createTestContentItems('s2', 's2html'))]
    def testSyncContentFromAll(self):
        """Ensure content is synced from all contentsources."""
        self.service._sync_content()
        allCiCnt = 0
        for cs in self.service.contentsources:
            allCiCnt += len(cs.items)
        self.assertEqual(self.service.downloadedcontent_count(), allCiCnt)
        return
    def testSyncContentUnique(self):
        """Ensure the same content is not synced multiple times from the same source."""
        self.service._sync_content()
        oldcnt = self.service.downloadedcontent_count()
        self.service._sync_content()
        newcnt = self.service.downloadedcontent_count()
        self.assertEqual(oldcnt, newcnt)
        return
    def requestByDate(self, earliest, latest, expected_return_len):
        self.service._sync_content()
        items = self.service.request_content_by_date(earliest, latest)
        #one CI falls between the dates, and there is one for each source
        self.assertEqual(len(items), expected_return_len)
    def testRequestContentByDateCount(self):
        """Ensure that ContentItems are requested properly."""
        self.requestByDate(dt(2010, 1, 2, 4, 20, 0), dt(2010, 1, 8, 2, 20, 10), 2)
        return
    def testRequestContentByDateCountWithTupleArgs(self):
        """Ensures that request_content can be called with tuple datetimes, instead of true datetimes."""
        self.requestByDate((2010, 1, 2, 4, 20, 0), (2010, 1, 8, 2, 20, 10), 2)
        return
    def testRequestContentByDateCountWithNoTimeArgs(self):
        """Ensures that request_content can be called with a tuple of just the year/month/day, rather than a datetime.
        """
        self.requestByDate((2010, 1, 2), (2010, 1, 8, 2), 4)
        return
    def testRequestSliceReturnsAtMostNumItems(self):
        """Ensure that request_recent_content returns num_items even if it has more than that."""
        self.service.db.insert_items(*createTestContentItems())
        self.assertEqual(len(self.service.request_content_slice(0, 3)), 3)
    def testRequestSliceReturnsAllIfNotEnough(self):
        """Ensure request_recent_content returns all the items it has if num_items is more than the number of items it
        has.
        """
        allitems = createTestContentItems()
        self.service.db.insert_items(*allitems)
        self.assertEqual(len(self.service.request_content_slice(number=100)), len(allitems))
    def testRequestSliceNonZeroStart(self):
        """Ensure that slicing from non-zero works as expected."""
        allitems = createTestContentItems()
        self.service.db.insert_items(*allitems)
        self.assertEqual(len(self.service.request_content_slice(2, 3)), 3)

class TestServiceState(unittest.TestCase):
    """Tests the _ServiceState class."""
    def gFN(self):
        return tempfile.mkstemp('.yaml')[1]
    def testIO(self):
        """Tests that basic IO works."""
        filename = self.gFN()
        ss = taoggregatorservice.ServiceState(filename)
        ss.save()
        ss.load()
        return
    def testSyncTimePersistence(self):
        """Tests persistence of last_sync_time."""
        now = dt.now()
        filename = self.gFN()
        ss = taoggregatorservice.ServiceState(filename, last_sync_time=now)
        ss.save()
        ss = taoggregatorservice.ServiceState(filename)
        ss.load()
        self.assertEqual(now, ss.last_sync_time)
    def testSecBetweenSyncPersistence(self):
        """Tests persistence of sec_between_sync attribute."""
        filename = self.gFN()
        ss = taoggregatorservice.ServiceState(filename, sec_between_sync=33)
        ss.save()
        ss = taoggregatorservice.ServiceState(filename)
        ss.load()
        self.assertEqual(33, ss.sec_between_sync)

def suite():
    import doctest, test_taoutils, test_contentmanagement, test_database
    s = unittest.TestSuite((
        doctest.DocTestSuite(taoggregatorservice),
        test_taoutils.suite(),
        test_contentmanagement.suite(),
        test_database.suite(),
        unittest.makeSuite(TestService),
        unittest.makeSuite(TestServiceState),
    ))
    return s

if __name__ == '__main__':
#    c = taoggregatorservice.ServiceConfig()
#    c.filename = 'test_connections.cfg'
#    c.set_rss_url('http://www.robg3d.com/?feed=rss2')
#    c.set_twitter_auth('124633897-6RPmXViqZV9Ho2yVuWGgqzd4CnvXD9OCQlnMJLTf',
#                       '89i4VaoYRnE7cVw9DE5L4MEUrWQXoNipujVvt6L4EM',
#                       'XCGuWmWcfqYMbnpeHtvLg',
#                       'MgxCmWE5MSHAIhXsFa45tZXN0zh3eKhmbuKWeCAyLXE')
#    c.set_wordpress_auth('Rob Galanakis', 'marsVictor753', 'http://www.robg3d.com/wordpress/xmlrpc.php')
#    twis = contentmanagement.TwitterContentSource('sn', 'tok', 'ts', 'ck', 'cs')
#    twit = contentmanagement.TwitterContentTarget('tok', 'ts', 'ck', 'cs')
#    rss = contentmanagement.RssContentSource('url')
#    wp = contentmanagement.WordPressContentTarget('url', 'username', 'pword')
#    plugins = [{'type':item.__class__, 'args':item.get_init_args()} for item in (twis, twit, rss, wp)]
#    yaml.dump(plugins, open('serviceplugins.yaml', 'w'))
#    d = yaml.load(open('serviceplugins.yaml'))
    unittest.TextTestRunner().run(suite())
