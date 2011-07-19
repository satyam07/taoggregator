"""Module that defines implementations for ContentSources and ContentTargets, and functionality for working with source/
target plugin files.
"""
import datetime
import logging
import feedparser
import twitter
import wordpresslib
import yaml

import taoggregator.taoutils as taoutils

def create_wordpresspost(**kwargs):
    wp = wordpresslib.WordPressPost()
    for key, val in kwargs.items():
        setattr(wp, key, val)
    return wp

def create_twitter_client(token, token_secret, consumer_key, consumer_secret):
    """Creates a twitter.Twitter client using the supplied OAuth parameters."""
    auth = twitter.OAuth(token, token_secret, consumer_key, consumer_secret)
    client = twitter.Twitter(auth=auth)
    return client

def create_wordpress_client(xmlrpcurl, username, password):
    """Creates a wordpresslib.WordPressClient using the given parameters."""
    return wordpresslib.WordPressClient(xmlrpcurl, username, password)

class BaseContentManager(object):
    """The base class for ContentSources and ContentTargets."""
    def __init__(self, initargs):
        """Initialize a new instance.

        initargs: The arguments needed to construct a functionally identical ContentManager (configuration info).
        """
        self._initargs = initargs
        self.cache = taoutils.Lazy(lambda: self._create_cache())
    def _create_cache(self):
        """Create the object returned from .cache() (such as a twitter client, wordpress client, or parsed rss feed."""
        raise NotImplementedError()
    def get_init_args(self):
        return self._initargs

class BaseContentTarget(BaseContentManager):
    """Base class for ContentTargets."""
    def __init__(self, initargs):
        """Initialize a new instance.

        kwargs: Args used by base class.
        """
        super(BaseContentTarget, self).__init__(initargs)
    def _contentitem_to_postable(self, contentitem):
        """Convert a contentitem into content that can be posted."""
        raise NotImplementedError()
    def publish_content(self, contentitem, publish=True):
        """Post a contentitem to this target.

        contentitem: The ContentItem to post.
        publish: If True, publish the article.  If False, not not publish it.  Useful for Targets that can put content
        on the server without making it publicly available.
        """
        raise NotImplementedError()

class WordPressContentTarget(BaseContentTarget):
    """Allows posting of content to a WordPress blog."""
    def __init__(self, xmlrpcurl='', username='', password=''):
        super(WordPressContentTarget, self).__init__({'xmlrpcurl':xmlrpcurl, 'username':username, 'password':password})
        self.logger = logging.getLogger(self.__class__.__name__)
        return
    def _create_cache(self):
        return create_wordpress_client(**self.get_init_args())
    def _contentitem_to_postable(self, contentitem):
        """Convert a ContentItem into a WordPressPost that can be posted."""
        post = wordpresslib.WordPressPost()
        post.description = contentitem['html']
        post.categories = contentitem['categories']
        post.date = contentitem['datetime'] if contentitem['datetime'] else datetime.datetime.now()
        post.link = contentitem['url']
        post.title = contentitem['title']
        post.excerpt = contentitem['summary']
        post.user = contentitem['author']
        return post
    def publish_content(self, contentitem, publish=True):
        post = self._contentitem_to_postable(contentitem)
        self.logger.info('Publishing (%s): %s' % (publish, post))
        if publish:
            newpostid = self.cache().newPost(post, publish)
            self.logger.info('Published, got new post ID of %s.' % newpostid)


class TechArtistsOrgTarget(WordPressContentTarget):
    """Set up for specific posting of content to tech-artists.org- including custom setup and configuration."""
    def __init__(self, *args, **kwargs):
        super(TechArtistsOrgTarget, self).__init__(*args, **kwargs)
    def _contentitem_to_postable(self, contentitem):
        post = super(TechArtistsOrgTarget, self)._contentitem_to_postable(contentitem)
        self._ensure_author_in_categories(post)
        self._prepend_user_to_title(post)
        self._prepend_content_repost_to_description(post)
        return post
    def _prepend_content_repost_to_description(self, post):
        """Preprends info about content reposting to post.description."""
        line1= '<a href="%s">Content reposted.  Click here to view original content.<br>' % post.link
        line2 = 'Originally posted %s.</a><br>' % self._get_formatted_date(post.date)
        post.description = line1 + line2 + post.description
        return
    def _prepend_user_to_title(self, post):
        """Prepends '<username>: ' to post.title."""
        post.title = '%s: %s' % (post.user, post.title)
        return
    def _ensure_author_in_categories(self, post):
        """Ensures that post.user is contained in post.categories."""
        if post.user not in post.categories:
            self.logger.info('Adding %s to categories.' % post.user)
            post.categories.append(post.user)
        return
    def _get_formatted_date(self, str_or_datetime):
        dt = taoutils.parse_datetime(str_or_datetime)
        return dt.strftime('%H:%M %a, %b %d %Y')

class TwitterContentTarget(BaseContentTarget):
    """Allows posting of content to a Twitter feed."""
    def __init__(self, token='', token_secret='', consumer_key='', consumer_secret=''):
        super(TwitterContentTarget, self).__init__({'token':token, 'token_secret':token_secret,
                                            'consumer_key':consumer_key, 'consumer_secret':consumer_secret})
        return
    def _create_cache(self):
        return create_twitter_client(**self.get_init_args())
    def _contentitem_to_postable(self, contentitem):
        """Convert a tweet into a string for posting to twitter."""
        result = taoutils.strip_html(contentitem['html'])
        result = taoutils.decode_html(result)
        return str(result)
    def publish_content(self, contentitem, publish=True):
        if publish:
            self.cache().statuses.update(status=contentitem.h)
        return

class BaseContentSource(BaseContentManager):
    def __init__(self, initargs):
        super(BaseContentSource, self).__init__(initargs)
        return
    def _nativeentry_to_contentitem(self, entry):
        """Convert a native entry into a ContentItem.  entry is something like a wordpresspost, tweet dictionary, etc.
        """
        raise NotImplementedError()
    def get_content_between(self, startdatetime, enddatetime):
        """Gets all ContentItems between start datetime and enddatetime exclusive."""
        raise NotImplementedError()

class RssContentSource(BaseContentSource):
    """The ContentSource implementation for RSS feeds, for pulling ContentItems from an rss."""
    def __init__(self, rssurl=''):
        """Create a new RssContentSource.

        url: The url of the rss/atom feed.
        """
        super(RssContentSource, self).__init__({'rssurl':rssurl})
        self.logger = logging.getLogger(self.__class__.__name__ + ':' + rssurl)
        return
    def _create_cache(self):
        args = (self.get_init_args().values())
        #self.logger.info('feedparser.parse being called on "%s"' % args)
        result = feedparser.parse(*args)
        #self.logger.info('Successfully parsed %s' % args)
        return result
    def gets(self, d, keys, nomatch_result=None):
        if isinstance(keys, basestring):
            keys = (keys,)
        for key in keys:
            try:
                return d[key]
            except KeyError:
                pass
        if nomatch_result is None:
            msg = 'None of %s was found in %s.' % (keys, d.keys())
            self.logger.exception(msg)
            raise KeyError(msg)
        else:
            return nomatch_result
    def _get_entry_html(self, entry):
        """Gets the html/content for an rss entry.  Raises if none can be determined, because everything needs SOME
        content of some sort.
        """
        result = self.gets(entry, ('content', 'summary'))
        #some blogs don't have 'content'- those that do, have a list of content.
        if not isinstance(result, basestring):
            result = result[0]['value']
        return result
    def _get_entry_title(self, entry):
        return self.gets(entry, 'title')
    def _get_entry_author(self, entry):
        return self.gets(entry, 'author', nomatch_result='Unknown Author')
    def _get_entry_summary(self, entry):
        """Gets the summary of an rss entry, unless it is empty, in which case it gets an abbreviated html/content
         excerpt.
        """
        result = self.gets(entry, 'summary', '') #empty summary or no key returns empty string, use stripped html
        if not result:
            html = self._get_entry_html(entry)
            stripped = taoutils.strip_html(html)
            result = stripped
        return result[:300]
    def _get_entry_datetimestr(self, entry):
        return self.gets(entry, 'updated', nomatch_result=datetime.datetime(1956, 01, 31))
    def _get_entry_id(self, entry):
        return self.gets(entry, ('id', 'link'))
    def _get_entry_url(self, entry):
        return self.gets(entry, 'link')
    def _nativeentry_to_contentitem(self, entry):
        """Convert an rss entry dictionary (from a parsed feed's ['entries'] value) into a ContentItem."""
        html = self._get_entry_html(entry)
        ci = taoutils.create_contentitem(title=self._get_entry_title(entry),
                         summary=self._get_entry_summary(entry),
                         html=html,
                         author=self._get_entry_author(entry),
                         datetime=taoutils.parse_datetime(self._get_entry_datetimestr(entry)),
                         id=self._get_entry_id(entry),
                         url=self._get_entry_url(entry))
        return ci
    def get_content_between(self, startdate, enddate):
        for entry in self.cache()['entries']:
            dtstr = self._get_entry_datetimestr(entry)
            dt = taoutils.parse_datetime(dtstr)
            if dt > startdate and dt < enddate:
                ci = self._nativeentry_to_contentitem(entry)
                yield ci
        return

class TwitterContentSource(BaseContentSource):
    """A ContentSource for pulling information from Twitter."""
    def __init__(self, screenname='', token='', token_secret='', consumer_key='', consumer_secret=''):
        """Create a new instance."""
        super(TwitterContentSource, self).__init__({'screenname':screenname, 'token':token, 'token_secret':token_secret,
                         'consumer_key':consumer_key, 'consumer_secret':consumer_secret})
        self.screenname = screenname
        return
    def _create_cache(self):
        args = self.get_init_args()
        return create_twitter_client(args['token'], args['token_secret'], args['consumer_key'], args['consumer_secret'])
    def _screenname_to_url(self, screenname):
        """Convert a screenname into the url for that user.

         screenname: A screenname string, or a tweet object.

        >>> TwitterContentSource('')._screenname_to_url('foo')
        'http://www.twitter.com/foo'
        >>> TwitterContentSource('')._screenname_to_url({'user':{'screen_name':'foo'}})
        'http://www.twitter.com/foo'
        """
        s = screenname if isinstance(screenname, str) else screenname['user']['screen_name']
        result = 'http://www.twitter.com/' + s
        return result
    def _get_title_for_tweet(self, tweet):
        """Get a title for a ContentItem from a tweet, usually an abbreivated form of its text.

        tweet: A tweet object, or the title string.

        >>> TwitterContentSource('', '', '', '', '')._get_title_for_tweet('a' * 100)
        'aaaaaaaaaaaaaaaaaaaaaaaaaaa...'
        >>> TwitterContentSource('', '', '', '', '')._get_title_for_tweet({'text':('a' * 100)})
        'aaaaaaaaaaaaaaaaaaaaaaaaaaa...'
        """
        s = tweet if isinstance(tweet, str) else tweet['text']
        return taoutils.laconate_text(s, maxlength=30)
    def _nativeentry_to_contentitem(self, tweet):
        """Convert a tweet from the twitter API into a ContentItem."""
        parsedtime = taoutils.parse_datetime(tweet, 'created_at')
        text = tweet['text']
        ci = taoutils.create_contentitem(title=self._get_title_for_tweet(tweet),
                         summary=text,
                         html=text,
                         author=tweet['user']['screen_name'],
                         datetime=parsedtime,
                         id=tweet['id'],
                         url=self._screenname_to_url(tweet))
        return ci
    def get_content_between(self, startdate, enddate):
        updates = self.cache().statuses.user_timeline(screen_name=self.screenname)
        for tweet in updates:
            dt = taoutils.parse_datetime(tweet, 'created_at')
            if dt > startdate and dt < enddate:
                ci = self._nativeentry_to_contentitem(tweet)
                yield ci
        return

class PluginLoader(object):
    """Manages the loading and filtering of ContentManagement plugins."""
    def load_sources_and_targets(self, filename, raise_on_ioerror=False):
        """Returns a tuple (contentsources, contenttargets,) from .py config file located at filename.  Returns
        empty sequences if filename is not found, unless 'raise_on_ioerror' is True.

        filename: Should be the filename of a python file that can be execfile'd to have all plugins in its ALL_PLUGINS
        global/local.
        raise_on_ioerror: If true, raise on IO error during execfile (usually due to file not found).
        """
        gl, lo = {}, {}
        try:
            execfile(filename, gl, lo)
        except IOError, ex:
            if raise_on_ioerror:
                raise ex
            return (), ()
        return lo['SOURCES'], lo['TARGETS']


