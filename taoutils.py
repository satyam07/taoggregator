import BeautifulSoup
import cgi
import datetime
import itertools
import multiprocessing
import Queue
import threading
import time
import uuid

def first(seq, predicate=None):
    """Return the first item in seq.  If predicate is specified, return the first item in seq that predicate returns
    True for.  Raises StopIteration if no item is found.

    >>> first([1,2,3])
    1
    >>> first((1,2,3), lambda x: x > 2)
    3
    >>> first([])
    Traceback (most recent call last):
        ...
    StopIteration
    """
    if predicate is None:
        return itertools.islice(seq, 1).next()
    filtered = itertools.ifilter(predicate, seq)
    return filtered.next()

def exhaust(seq, resulttype=list):
    """Returns a list for all items in seq.  Sequence can (and usually is) a generator.

    >>> exhaust((1, 2, 3))
    [1, 2, 3]
    >>> exhaust([1, 2, 3], tuple)
    (1, 2, 3)
    """
    return resulttype(a for a in seq)

def ilen(seq, predicate=None):
    """Return the number of items in seq.  If predicate is specified, return the number of items in seq that predicate
    is true for.

    >>> ilen([1, 2, 3])
    3
    >>> ilen([1, 2, 3, 4], predicate=lambda x: x > 2)
    2
    >>> ilen(iter([1, 2, 3]))
    3
    """
    i = 0
    if predicate is None:
        #if len works, use that- otherwise iterate over.
        try:
            return len(seq)
        except TypeError:
            pass
        for item in seq:
            i += 1
    else:
        for item in seq:
            if predicate(item):
                i += 1
    return i

def take(seq, number):
    """Returns a list with len <= number from items in seq.

    >>> take([2, 5, 1, 3], 2)
    [2, 5]
    >>> take([1, 2, 3], 5)
    [1, 2, 3]
    """
    result = []
    for item in seq:
        if len(result) >= number:
            break
        result.append(item)
    return result

def remove_non_ascii(s):
    """Remove any non-ascii char in s (ord(char) < 128)."""
    return ''.join(i for i in s if ord(i)<128)

def laconate_text(s, maxlength=100, elipsis='...'):
    """Trim string s so that its length is less than or equal to maxlength.  If trimming is required, result will end
    with 'elipsis' argument.

    >>> laconate_text('s' * 7)
    'sssssss'

    >>> laconate_text('s' * 8, maxlength=5, elipsis='ggg')
    'ssggg'
    """
    if len(s) <= maxlength:
        return s
    lenelip = len(elipsis)
    result = s[:maxlength - lenelip] + elipsis
    return result

def datespan(startdate, enddate, delta=datetime.timedelta(days=1)):
    """Yield datetimes while walking from startdate to enddate.  If startdate is later than endddate, will count
    backwards starting at startdate.

    Note that startdate is inclusive (will always be the first yield), enddate is exclusive (it or later will never be
    yielded).

    startdate: The first date to yield.
    enddate: The date to stop yielding at.
    delta: The size of the step.

    >>> len(list(datespan(datetime.datetime(2010, 2, 20), datetime.datetime(2010, 4, 21))))
    60
    >>> len(list(datespan(datetime.datetime(2010, 2, 20), datetime.datetime(2010, 4, 21), datetime.timedelta(days=2))))
    30
    >>> len(list(datespan(datetime.datetime(2010, 4, 21), datetime.datetime(2010, 2, 20))))
    60
    """
    #Create the comparison/increment method depending on if we are reversing or not.
    compare = (lambda current, end: current < end) if startdate < enddate else (lambda current, end: current > end)
    increment = (lambda current: current + delta) if startdate < enddate else (lambda current: current - delta)
    currentdate = startdate
    #while currentDate < enddate:
    while compare(currentdate, enddate):
        yield currentdate
        #currentdate += delta)
        currentdate = increment(currentdate)

def unique(seq, transform=lambda x: x):
    """Returns an iterator of unique elements in seq.  If transform is provided, will apply the method to items in seq
    as the keys for uniqueness.

    >>> list(unique(['a', 'b', 'c', 'b']))
    ['a', 'b', 'c']
    >>> list(unique([{'a':1, 'b':2}, {'a':1, 'b':2}], lambda x: x['a']))
    [{'a': 1, 'b': 2}]
    """
    seen = set()
    for item in seq:
        marker = transform(item)
        if marker in seen:
            continue
        seen.add(marker)
        yield item
    return

class Lazy(object):
    """Create a callable object that will initialize and cache its value when called the first time, and return the
    cached value when called subsequent times.

    >>> Lazy(lambda: 5)()
    5
    >>> Lazy(lambda: 'a').hasvalue
    False

    >>> lazy = Lazy(lambda: 'b'); lazy(); lazy.hasvalue
    'b'
    True
    """
    def __init__(self, factory):
        """Create a new instance.

        factory: a method/callable that takes no parameters.
        """
        self.factory = factory
        self.hasvalue = False
        return
    def __call__(self, *args, **kwargs):
        if not self.hasvalue:
            self.__value = self.factory()
            self.hasvalue = True
        return self.__value

def strip_html(html):
    """Strips all html tags from html argument.

    >>> strip_html('<p>hello<h1>test</h1></p>')
    u'hellotest'
    >>> strip_html('<p>hi<b>test</b></p>')
    u'hitest'
    """
    soup = BeautifulSoup.BeautifulSoup(html)
    s = ''.join(soup.findAll(text=True))
    return s

def decode_html(html):
    """Converts all 'escaped' strings in the html into their correct presentation counterpart.

    >>> decode_html('&gt;')
    '>'
    >>> decode_html('>')
    '>'
    >>> decode_html('a')
    'a'
    """
    decoded = BeautifulSoup.BeautifulStoneSoup(html, convertEntities=BeautifulSoup.BeautifulStoneSoup.HTML_ENTITIES)
    return str(decoded)

def encode_html(html):
    """Converts all unsafe chars in html into their escaped counterpart.

    >>> encode_html('>')
    '&gt;'
    >>> encode_html('&gt')
    '&amp;gt'
    >>> encode_html('a')
    'a'
    """
    encoded = cgi.escape(html)
    return encoded

class DotableDict(dict):
    def __getattribute__(self, name):
        try:
            result = dict.__getattribute__(self, name)
        except AttributeError:
            result = self[name]
        return result

def create_contentitem(id=-1, title='', summary='', author='', datetime=None, url='', categories=None, html='',
                       meta=None):
    """Create a standard Content Item dictionary.

    id: The id of the ContentItem.  This will always be a string type but can represent a url, number, etc.  Must be
    a string to get around possible issues with number length.
    title: The title.
    summary: A text-only (no html) summary of the ContentItem's html.
    author: Name of the author.
    datetime: The datetime object of this ContentItem's posting (or latest update).
    url: The url of this ContentItem.
    categories: Categories or tags that this ContentItem is listed under.
    html: The html content of this ContentItem.
    meta: The item metadata (see: create_contentitem_metadata).  If not specified, create new metadata.
    """
    d = DotableDict(id=str(id), title=title, summary=summary, author=author, datetime=datetime, url=url,
                    categories=categories or [], html=html, metadata=meta or create_contentitem_metadata())
    return d

def create_contentitem_metadata(guid=None, is_published=False, likes=0):
    """Create a contentitem metadata dictionary.

    guid: The guid of the item.  Will generate a new one if not specified.  Will be stored as a string, to work around
    potential serialization issues.
    is_published: Whether the associated contentitem is currently published.
    likes: Total number of likes (ie, number of likes minus dislikes).
    """
    return DotableDict(guid=str(guid or uuid.uuid4()), is_published=is_published, likes=likes)

def create_datetime(obj, default_date=datetime.date(2000, 1, 1)):
    """Takes a date, time, datetime, struct_time, or sequence and returns a datetime.  Will use as much information
    from argument as is available.

    >>> create_datetime(datetime.datetime(2010, 4, 20))
    datetime.datetime(2010, 4, 20, 0, 0)
    >>> create_datetime(datetime.date(2010, 4, 20))
    datetime.datetime(2010, 4, 20, 0, 0)
    >>> create_datetime(datetime.time(23, 59, 59))
    datetime.datetime(2000, 1, 1, 23, 59, 59)
    >>> create_datetime(time.struct_time([2010, 4, 20, 23, 59, 59, 1, 1, 1]))
    datetime.datetime(2010, 4, 20, 23, 59, 59, 1)
    >>> create_datetime((2010, 4, 20, 4))
    datetime.datetime(2010, 4, 20, 4, 0)
    """
    if isinstance(obj, datetime.datetime):
        return obj
    if isinstance(obj, datetime.date):
        return datetime.datetime(obj.year, obj.month, obj.day)
    if isinstance(obj, datetime.time):
        return datetime.datetime(default_date.year, default_date.month, default_date.day, obj.hour, obj.minute,
                                 obj.second, obj.microsecond)
    if isinstance(obj, time.struct_time):
        return datetime.datetime(*obj[:7])
    return datetime.datetime(*obj)

def parse_datetime(s, key=None, additional_formats=()):
    """Parses s into a datetime.  Uses all known time formats from all ContentSources (wordpress, feedburner, blogger,
    twitter, etc.).

    s: The string to parse.  If s is a datetime, return s.  If s is indexable (list/dictionary/etc), use key to lookup.
    additional_formats: Additional datetime strptime format strings to try.

    >>> parse_datetime({'created_at':'Mon Oct 5 15:22:11 +0000 2010'}, 'created_at')
    datetime.datetime(2010, 10, 5, 15, 22, 11)

    >>> parse_datetime('Mon Oct 5 15:22:11 +0000 2010')
    datetime.datetime(2010, 10, 5, 15, 22, 11)

    >>> parse_datetime('Mon Oct 5 15:22:11 +1000 2010')
    Traceback (most recent call last):
    ...
    ValueError: Could not parse "Mon Oct 5 15:22:11 +1000 2010" into any known datetime format.

    >>> parse_datetime(u'Sat, 28 May 2011 13:45:12 +0000')
    datetime.datetime(2011, 5, 28, 13, 45, 12)
    >>> parse_datetime({'updated':u'Sat, 28 May 2011 13:45:12 +0000'}, 'updated')
    datetime.datetime(2011, 5, 28, 13, 45, 12)
    >>> parse_datetime('2011-03-02T02:08:38.293-06:00')
    datetime.datetime(2011, 3, 2, 2, 8, 38, 293000)
    >>> parse_datetime('2011-06-09T16:01:13')
    datetime.datetime(2011, 6, 9, 16, 1, 13)
    >>> parse_datetime('Thu, 12 Aug 2010 02:44:00 GMT')
    datetime.datetime(2010, 8, 12, 2, 44)
    >>> parse_datetime('2011-02-27T21:21:28.745Z')
    datetime.datetime(2011, 2, 27, 21, 21, 28, 745000)
    >>> parse_datetime('Mon, 16 May 2011 10:24:00 -0400')
    datetime.datetime(2011, 5, 16, 10, 24)
    >>> parse_datetime('Tue, July 31 2008 09:00:00 GMT')
    datetime.datetime(2008, 7, 31, 9, 0)
    >>> parse_datetime('2011-06-20T13:50:30.854000')
    datetime.datetime(2011, 6, 20, 13, 50, 30, 854000)
    """
    #if s is already a datetime, return it.
    if isinstance(s, datetime.datetime):
        return s

    #Assign val to s, or a value in s if a key is provided.
    val = s
    if key is not None:
        try:
            val = s[key]
        except TypeError:
            pass
        except KeyError:
            raise KeyError('Could not find %s in %s.' % (key, s.keys()))

    parsedvar = [None] #so we can 'assign by reference' inside our nested func
    def try_assign_parsedtime(format, value=None):
        if not value:
            value = val
        try:
            parsedvar[0] = datetime.datetime.strptime(value, format)
            return True
        except ValueError:
            return False

    #From twitter: Mon Oct 5 15:22:11 +0000 2010
    twittertime = '%a %b %d %H:%M:%S +0000 %Y'
    #From wordpress: Sat, 28 May 2011 13:45:12 +0000
    wordpressformatstr = '%a, %d %b %Y %H:%M:%S +0000'
    #format for content that has already been transformed by taoggregator: 2011-06-09T16:01:13
    taoggregatorredformatstr = '%Y-%m-%dT%H:%M:%S'
    #Not sure from what feed: Thu, 12 Aug 2010 02:44:00 GMT
    unknownformatA = '%a, %d %b %Y %H:%M:%S GMT'
    #Another unknown: 2011-02-27T21:21:28.745Z
    unknownformatB = '%Y-%m-%dT%H:%M:%S.%fZ'
    #Tue, July 31 2008 09:00:00 GMT
    unknownformatC = '%a, %B %d %Y %H:%M:%S GMT'
    #2011-06-20T13:50:30.854000
    unknownformatD = '%Y-%m-%dT%H:%M:%S.%f'

    for fstr in itertools.chain([twittertime, wordpressformatstr, taoggregatorredformatstr, unknownformatA,
                                 unknownformatB, unknownformatC, unknownformatD],
                                additional_formats):
        if try_assign_parsedtime(fstr):
            return parsedvar[0]

    #blogspot feeds: 2011-03-02T02:08:38.293-06:00
    #we can't parse the timezone, so strip it off
    if val[-6] == '-' or val[-6] == '+':
        blogspotformatstr = '%Y-%m-%dT%H:%M:%S.%f'
        parseable = val[:-6].strip()
        if try_assign_parsedtime(blogspotformatstr, parseable):
            return parsedvar[0]

    #another unknown format: Mon, 16 May 2011 10:24:00 -0400
    #strip the timezone off again
    if val[-5] == '-' or val[-5] == '+':
        unknownformatC = '%a, %d %b %Y %H:%M:%S'
        parseable = val[:-5].strip()
        if try_assign_parsedtime(unknownformatC, parseable):
            return parsedvar[0]
        
    raise ValueError('Could not parse "%s" into any known datetime format.' % val)
    #tz = int(s[s.rfind(':') - 3:].replace(':', ''))
    #d = datetime.datetime()

MPMODE_THREADING = 0
MPMODE_MULTIPROCESSING = 1
def pfor(seq, action, block=True, mpmode=MPMODE_THREADING):
    """Iterate over sequence, performing action(item) for each item.  Note that if side effects happen in 'action', you
    must make sure the actions are thread/process safe, depending on mpmode.  If you want to aggregate the result of
    'for' calls (data processing), use the 'paggr' function.

    action: callable that takes an item in seq as a paramter.  Must be pickalble if mpmode is multiprocessing.
    block: If True, wait for all actions to return before returning form this method.
    mpmode: Whether to use threading or multiprocessing.

    >>> q = Queue.Queue()
    >>> pfor((1, 2, 3, 4), lambda x: q.put(x))
    >>> q.qsize()
    4
    """
    #>>> q = multiprocessing.Queue()
    #>>> pfor((1, 2, 3, 4), lambda x: q.put(x), MPMODE_MULTIPROCESSING)
    #>>> q.qsize()
    #4L
    threads = []
    for item in seq:
        if mpmode == MPMODE_THREADING:
            t = threading.Thread(target=action, args=[item])
        else:
            raise NotImplementedError
            t = multiprocessing.Process(target=action, args=[item])
        t.start()
        if block:
            threads.append(t)

    for t in threads:
        t.join()
        
    return

def paggr(seq, action, mpmode=MPMODE_THREADING):
    """Iterate over sequence, yielding the result of action(item) for each item in sequence.  Results are usually
    not in the same order as seq.

    action: callable that takes an item in seq as a paramter.  Must be pickalble if mpmode is multiprocessing.
    
    >>> sorted(exhaust(paggr((1, 2, 3, 4,), lambda x: x * 2)))
    [2, 4, 6, 8]
    """
    #>>> sorted(exhaust(paggr((1, 2, 3, 4,), lambda x: x * 2, MPMODE_MULTIPROCESSING)))
    #[2, 4, 6, 8]
    if mpmode == MPMODE_THREADING:
        queue = Queue.Queue()
    else:
        raise NotImplementedError
        queue = multiprocessing.Queue()
        
    def wrappedaction(item):
        actres = action(item)
        queue.put(actres)

    pfor(seq, wrappedaction, mpmode=mpmode)
    while True:
        try:
           yield queue.get_nowait()
        except Queue.Empty:
            break

def total_seconds(timedelta):
    """Stolen from python 2.7, gets the total seconds represented by a timedelta object."""
    return timedelta.days * 24 * 60 * 60 + timedelta.seconds