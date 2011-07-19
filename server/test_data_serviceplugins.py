"""Used like a config file that defines all plugins (ContentSources and ContentTargets) used by the aggregator service.
Contents should be called via execfile, and the plugins will be available via the TARGETS and SOURCES locals.
"""

import taoggregator.server.contentmanagement as contentmanagement
TARGETS, SOURCES = [], []

def get_taoggregator_twitter_conninfo(additional_keys_and_values=()):
    """Return a dictionary (that can be modified) containing the consumer keys and tokens for the taoggregator twitter
    authentication info.

    additional_keys_and_values: A collection of keys and values (dict, sequence of 2-tuples) that will be part of the
    returned dictionary.
    """
    result = {'consumer_key': 'ck',
            'consumer_secret': 'cs',
            'token': 'tok',
            'token_secret': 'toksec'}
    for key, value in additional_keys_and_values:
        result[key] = value
    return result

TARGETS.append(contentmanagement.TwitterContentTarget(**get_taoggregator_twitter_conninfo()))
for screen_name in ('spam', 'eggs',):
    SOURCES.append(
        contentmanagement.TwitterContentSource(**get_taoggregator_twitter_conninfo([('screenname', screen_name,)])))

for rss in ('http://www.robg3d.com/?feed=rss2',):
    SOURCES.append(contentmanagement.RssContentSource(rss))

TARGETS.append(contentmanagement.WordPressContentTarget('url', 'u', 'p'))