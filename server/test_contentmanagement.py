import unittest

import contentmanagement
from contentmanagement import *

class TestClientCreation(unittest.TestCase):
    """Tests the client creation helper methods."""
    def testCreateTwitterReturnsOnInvalid(self):
        """Ensures a twitter.Twitter is created from create_twitter_client."""
        client = create_twitter_client('', '', '', '')
        self.assertEqual(type(client), twitter.Twitter)
        return
    def testCreateWordPressThrowsInvalid(self):
        """Ensures an IOError is raised by create_wordpress_client if passed invalid arguments."""
        self.assertRaises(IOError, create_wordpress_client, '', '', '')
        return

class MockBaseContentManager(BaseContentManager):
    def __init__(self):
        BaseContentManager.__init__(self, {'somekey':'somevalue'})
    def _create_cache(self):
        return ['blah']

class TestBaseContentManager(unittest.TestCase):
    def testInitArgs(self):
        """Tests that get_init_args returns the result passed into it."""
        d = {'a':1}
        bcm = BaseContentManager(d)
        self.assertEqual(bcm.get_init_args(), d)
    def testCacheNotImpl(self):
        """Ensures _create_cache() throws NotImplementedError."""
        bcm = BaseContentManager('')
        self.assertRaises(NotImplementedError, bcm._create_cache)
    def testCachingIsDeferred(self):
        """Ensures that _create_cache is not called until cache() is called."""
        cm = MockBaseContentManager()
        self.assertFalse(cm.cache.hasvalue)
        cm.cache()
        self.assertTrue(cm.cache.hasvalue)
    def testCachingIsSameObj(self):
        """Ensures that the object returned from cache() is the same created in _create_cache."""
        cm = MockBaseContentManager()
        test = 12345
        cm._create_cache = lambda: test
        self.assertEqual(test, cm.cache())

class MockBaseContentTarget(BaseContentTarget):
    def __init__(self):
        super(MockBaseContentTarget, self).__init__({})
        return

class TestBaseContentTarget(unittest.TestCase):
    """Tests for BaseContentTarget."""
    def testContentItemToPostableNotImpl(self):
        """Ensures contentitem_to_postable raises a NotImplmentedError."""
        self.assertRaises(NotImplementedError, MockBaseContentTarget()._contentitem_to_postable, None)
    def testPostContentNotImpl(self):
        """Ensures post_content raises a NotImplementedError."""
        self.assertRaises(NotImplementedError, MockBaseContentTarget().publish_content, None)


class TestWordPressContentTarget(unittest.TestCase):
    def setUp(self):
        self.target = WordPressContentTarget()
    def testConvertContentItemToPost(self):
        """Ensure that all data comes over when converting from contentitem to post when calling
        _contentitem_to_postable.
        """
        ci = taoutils.create_contentitem(10, 'testtitle', 'testsummary', 'testauth', datetime.datetime.now(), 'url',
                                         html='html', categories=('testing_taoggregator'))
        post = self.target._contentitem_to_postable(ci)
        self.assertEqual(post.description, ci.html)
        self.assertEqual(post.categories, ci.categories)
        self.assertEqual(post.date, ci.datetime)
        self.assertEqual(post.link, ci.url)
        self.assertEqual(post.title, ci.title)
        self.assertEqual(post.excerpt, ci.summary)
        self.assertEqual(post.user, ci.author)
        return
    def testCreateCacheThrowsForInvalid(self):
        """Ensures create_cache throws with invalid parameters."""
        self.assertRaises(IOError, self.target._create_cache)

class TestTechArtistsOrgContentTarget(unittest.TestCase):
    def setUp(self):
        self.target = TechArtistsOrgTarget('', '', '')
        self.expost = contentmanagement.create_wordpresspost(date=datetime.datetime(2010, 2, 3, 4, 5, 6),
                                                 description='descr',
                                                 link='www.foo.com',
                                                 user='userblah',
                                                 title='sometitle')
    def testConvertToContentitem(self):
        ci = taoutils.create_contentitem(datetime=datetime.datetime(2010, 2, 3, 4, 5, 6), html='descr',
                                         url='www.foo.com', author='userblah', title='sometitle')
        post = self.target._contentitem_to_postable(ci)
        self.assertTrue('userblah' in post.categories)
        self.assertTrue(post.title.startswith('userblah: '))
    def testPrependContentPost(self):
        self.target._prepend_content_repost_to_description(self.expost)
        s = ('<a href="www.foo.com">Content reposted.  Click here to view original content.<br>Originally posted 04:05'
            ' Wed, Feb 03 2010.</a><br>descr')
        self.assertEqual(self.expost.description, s)
    def testPrependUsertoTitle(self):
        self.target._prepend_user_to_title(self.expost)
        self.assertEqual(self.expost.title, 'userblah: sometitle')
    def testEnsureAuthorInCategories(self):
        self.target._ensure_author_in_categories(self.expost)
        self.assertTrue(self.expost.user in self.expost.categories)

class TestTwitterContentTarget(unittest.TestCase):
    def setUp(self):
        self.target = TwitterContentTarget()
    def testConvertContentItemToPost(self):
        ci = taoutils.create_contentitem(html='<p><b>foo</b>bar</p>')
        self.assertEqual('foobar', self.target._contentitem_to_postable(ci))
        ci2 = taoutils.create_contentitem(html='foobar')
        self.assertEqual('foobar', self.target._contentitem_to_postable(ci2))
        return
    def testCreateCache(self):
        """Ensures create_cache doesn't throw."""
        self.target._create_cache()

class MockBaseContentSource(BaseContentSource):
    def __init__(self):
        BaseContentSource.__init__(self, {})
        return

class TestBaseContentSource(unittest.TestCase):
    """Tests for BaseContentSource."""
    def testNativeToContentItemNotImpl(self):
        """Ensures native_entry_to_contentitem raises a NotImplmentedError."""
        self.assertRaises(NotImplementedError, MockBaseContentSource()._nativeentry_to_contentitem, None)
    def testGetContentBetweenNotImpl(self):
        """Ensures get_content_between raises a NotImplementedError."""
        self.assertRaises(NotImplementedError, MockBaseContentSource().get_content_between, None, None)

class TestRssContentSource(unittest.TestCase):
    """Tests for RssContentSource."""
    def setUp(self):
        self.source = RssContentSource('url')
    def testCreateCacheDoesNotThrow(self):
        """Ensures _create_cache doesn't throw with invalid args."""
        self.source._create_cache()
        return
    def testNativeEntryToContentItemResults(self):
        """Ensures native_entry_to_contentitem returns expected results."""
        dt = datetime.datetime(2011, 5, 28, 13, 45, 12)
        entry = {'summary':'sum', 'title':'thetitle', 'author':'auth', 'updated':'Sat, 28 May 2011 13:45:12 +0000',
                 'id':'someurlid', 'link':'urllink', 'content':[{'value':'actualcontent'}]}
        ci = self.source._nativeentry_to_contentitem(entry)
        self.assertEqual(ci.title, entry['title'])
        self.assertEqual(ci.summary, self.source._get_entry_summary(entry))
        self.assertEqual(ci.html, entry['content'][0]['value'])
        self.assertEqual(ci.author, entry['author'])
        self.assertEqual(ci.datetime, dt)
        self.assertEqual(ci.id, entry['id'])
        self.assertEqual(ci.url, entry['link'])

class TestTwitterContentSource(unittest.TestCase):
    """Tests for TwitterContentSource."""
    def setUp(self):
        self.source = TwitterContentSource()
    def testNativeEntryToContentItemResults(self):
        """Tests that the conversion from tweet to ContentItem works."""
        dt = datetime.datetime(2010, 10, 5, 15, 22, 11)
        tweet = {'created_at':'Mon Oct 5 15:22:11 +0000 2010', 'text':'tweettext', 'user':{'screen_name':'screeny'},
                 'id':1234}
        ci = self.source._nativeentry_to_contentitem(tweet)
        self.assertEqual(ci.title, self.source._get_title_for_tweet(tweet))
        self.assertEqual(ci.summary, tweet['text'])
        self.assertEqual(ci.html, tweet['text'])
        self.assertEqual(ci.author, tweet['user']['screen_name'])
        self.assertEqual(ci.datetime, dt)
        self.assertEqual(ci.id, str(tweet['id']))
        self.assertEqual(ci.url, self.source._screenname_to_url(tweet))
        return

class MockTestSourcePlugin(BaseContentSource):
    def __init__(self, somearg=''):
        super(MockTestSourcePlugin, self).__init__({'somearg':somearg})
        return

class MockTestTargetPlugin(BaseContentTarget):
    def __init__(self, somearg2=''):
        super(MockTestTargetPlugin, self).__init__({'somearg2':somearg2})
        return

class TestPluginLoader(unittest.TestCase):
    """Unittests for PluginLoader class."""
    def setUp(self):
        self.pl = PluginLoader()
        self.filename = 'server\\test_data_serviceplugins.py'
    def testLoadDoesNotFailOnIO(self):
        """Ensures that calling load doesn't fail if the file doesn't exist."""
        self.pl.load_sources_and_targets(r'X:\blah\foo.rawr')
    def testUseOfSourceAndTargetGlobals(self):
        """Ensures that the plugin config uses SOURCE and TARGET globals and that the plugin loader is looking for and
        finding them (ensure that file at self.filename uses SOURCE and TARGET).
        """
        self.pl.load_sources_and_targets(self.filename)
    def testPluginsLoaded(self):
        """Ensure that all plugins in the test file get loaded."""
        sources, targets = self.pl.load_sources_and_targets(self.filename, True)
        self.assertEqual(len(sources), 3)
        self.assertEqual(len(targets), 2)

#class TestServicePlugins(unittest.TestCase):
#    """Unit tests to make sure all plugins in data_serviceplugins work.  You should only run this test after adding
#    new service plugins- these can take a while to run.
#    """
#    def setUp(self):
#        self.srcs, self.tgts = contentmanagement.PluginLoader().load_sources_and_targets('data_serviceplugins.py', True)
#    def testCache(self):
#        """Ensures that force-refreshing the cache doesn't throw on all plugins."""
#        for plugin in self.srcs + self.tgts:
#            plugin.cache(force_refresh=True)
#    def testSourceGetContentBetween(self):
#        now = datetime.datetime.now()
#        lastyear = now.replace(year=now.year - 1)
#        allcontent = []
#        for source in self.srcs:
#            allcontent.extend(source.get_content_between(lastyear, now))
#        self.assertEqual(len(allcontent), 5)

def suite():
    import doctest
    s = unittest.TestSuite((
        doctest.DocTestSuite(contentmanagement),
        unittest.makeSuite(TestClientCreation),
        unittest.makeSuite(TestBaseContentManager),
        unittest.makeSuite(TestBaseContentTarget),
        unittest.makeSuite(TestWordPressContentTarget),
        unittest.makeSuite(TestTechArtistsOrgContentTarget),
        unittest.makeSuite(TestTwitterContentTarget),
        unittest.makeSuite(TestBaseContentSource),
        unittest.makeSuite(TestRssContentSource),
        unittest.makeSuite(TestTwitterContentSource),
        unittest.makeSuite(TestPluginLoader),
        #unittest.makeSuite(TestServicePlugins),
    ))
    return s

if __name__ == '__main__':
    unittest.TextTestRunner().run(suite())