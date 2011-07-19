"""
EXAMPLE FILE: This file is used for illustration purposes only.  It is just like a cfg file, customize it for how you need.

Used like a config file that defines all plugins (ContentSources and ContentTargets) used by the aggregator service.
Contents should be called via execfile, and the plugins will be available via the TARGETS and SOURCES locals.
"""

from contentmanagement import *
TARGETS, SOURCES = [], []

def get_taoggregator_twitter_conninfo(additional_keys_and_values=()):
    """Return a dictionary (that can be modified) containing the consumer keys and tokens for the taoggregator twitter
    authentication info.

    additional_keys_and_values: A collection of keys and values (dict, sequence of 2-tuples) that will be part of the
    returned dictionary.
    """
    result = {'consumer_key': 'NEED TWITTER API KEY',
            'consumer_secret': 'NEED TWITTER API KEY',
            'token': '124633897-NEED TWITTER API KEY',
            'token_secret': 'NEED TWITTER API KEY'}
    for key, value in additional_keys_and_values:
        result[key] = value
    return result

#TARGETS.append(TwitterContentTarget(**get_taoggregator_twitter_conninfo()))
#twitternames = 'NathanHorneTD', 'voMethod'
#for screen_name in twitternames:
#    SOURCES.append(TwitterContentSource(**get_taoggregator_twitter_conninfo([('screenname', screen_name,)])))

#If you add a feed, remember to enable the TestServicePlugins class test in test_contentmanagement to make sure it works
#(try commenting out all the other feeds to speed things up), and comment out the test when done.
for rss in (
    'http://adammechtley.com/feed/',
    'http://www.andrewmelnychuk.com/?feed=rss2',
    'http://feeds.feedburner.com/CodeBetter?format=xml',
    #'http://feeds.feedburner.com/LostInTheTriangles?format=xml', #getting 'ValueError: unichr() arg not in range(0x10000) (narrow Python build)'
    #'http://www.gamedev.net/rss/blog/',
    #'http://www.gamedev.net/rss/ccs/1-articles/',
        ):
    SOURCES.append(RssContentSource(rss))

TARGETS.append(TechArtistsOrgTarget(*['http://tech-artists.org/blog/xmlrpc.php', 'BLOG USERNAME', 'BLOG PASSWORD']))