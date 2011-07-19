import sqlalchemy
import sqlalchemy.ext.declarative
import sqlalchemy.orm

Base = sqlalchemy.ext.declarative.declarative_base()

def create_new_db(filename):
    db = ServiceDatabase(filename)
    ContentItemRow.metadata.bind = db.engine
    ContentItemRow.metadata.create_all()
    return db

class ContentItemRow(Base):
    __tablename__ = 'content'

    guid = sqlalchemy.Column('guid', sqlalchemy.String(36), primary_key=True, unique=True)
    id = sqlalchemy.Column('id', sqlalchemy.String)
    title = sqlalchemy.Column('title', sqlalchemy.String)
    author = sqlalchemy.Column('author', sqlalchemy.String)
    datetime = sqlalchemy.Column('datetime', sqlalchemy.DateTime)
    url = sqlalchemy.Column('url', sqlalchemy.String)
    categories = sqlalchemy.Column('categories', sqlalchemy.String)
    html = sqlalchemy.Column('html', sqlalchemy.String)
    summary = sqlalchemy.Column('summary', sqlalchemy.String)
    is_published = sqlalchemy.Column('is_published', sqlalchemy.Boolean)
    likes = sqlalchemy.Column('likes', sqlalchemy.Integer)

    CONTENTITEM_ATTRS = ['id', 'title', 'summary', 'author', 'datetime', 'url', 'categories', 'html', 'metadata']
    CONTENTITEMMETA_ATTRS = ['guid', 'is_published', 'likes']
    CONTENTITEMALL_ATTRS = CONTENTITEM_ATTRS + CONTENTITEMMETA_ATTRS
    CONTENTITEMALL_ATTRS.remove('metadata')

    def __init__(self, itemdict=None):
        if itemdict:
            self.from_contentitem(itemdict)
        return

    def __repr__(self):
        s = ', '.join('%s: %s' % (key, value) for key, value in self.__dict__.items() if key in self.CONTENTITEMALL_ATTRS)
        return '%s(%s)' % (type(self).__name__, s)

    def from_contentitem(self, itemdict):
        """Mutates self according to keys/values of the contentitem dict.

        >>> ContentItemRow({'id':0, 'metadata':{'guid':'someguid'}, 'categories':[]})
        ContentItemRow(guid: someguid, id: 0, categories: [])
        """
        self.__dict__.update(itemdict)
        try:
            self.__dict__.update(self.__dict__.pop('metadata'))
        except KeyError:
            raise KeyError('metadata not found in %s' % self.__dict__.keys())
        self.__dict__['categories'] = repr(self.__dict__['categories'])
        return self
    def to_contentitem(self):
        """Returns a contentitem dictionary.

        >>> ContentItemRow({'id':0, 'metadata':{'guid':'someguid'}, 'categories':[]}).to_contentitem()
        {'author': None, 'url': None, 'title': None, 'datetime': None, 'html': None, 'summary': None, 'id': 0, 'categories': [], 'metadata': {'guid': 'someguid', 'likes': None, 'is_published': None}}
        """
        result = dict((k, self.__dict__.get(k)) for k in self.CONTENTITEM_ATTRS)
        result['metadata'] = dict((k, self.__dict__.get(k)) for k in self.CONTENTITEMMETA_ATTRS)
        result['categories'] = eval(result['categories'])
        return result


class ServiceDatabase(object):
    content_tablename = 'content'
    def __init__(self, filename):
        self.engine = sqlalchemy.create_engine('sqlite:///%s' % filename)
        self.metadata = sqlalchemy.MetaData(self.engine)
        self.Session = sqlalchemy.orm.Session
        self.TQ = sqlalchemy.orm.Query
        self.TS = sqlalchemy.orm.Session
        self.Session = sqlalchemy.orm.sessionmaker(bind=self.engine)
    def insert_items(self, *items):
        session = self.Session()
        session.add_all(map(ContentItemRow, items))
        session.commit()
        return
    def update_items(self, *items):
        session = self.Session()
        itemsrows = map(ContentItemRow, items)
        for row in itemsrows:
            session.merge(row)
        session.commit()
        return
    def itemcount(self):
        return self.Session().query(ContentItemRow).count()
    def get_between(self, newer_than, older_than):
        q = (self.Session().query(ContentItemRow, ContentItemRow.datetime)
            .filter(ContentItemRow.datetime > newer_than)
            .filter(ContentItemRow.datetime < older_than)
            .order_by(sqlalchemy.desc(ContentItemRow.datetime)))
        for row in q:
            yield row.ContentItemRow.to_contentitem()
    def get_slice(self, startindex=0):
        q = (self.Session().query(ContentItemRow, ContentItemRow.datetime)
            .order_by(sqlalchemy.desc(ContentItemRow.datetime)))
        index = 0
        for row in q:
            if index >= startindex:
                ci = row.ContentItemRow.to_contentitem()
                yield ci
            index += 1
    def get_from_guid(self, guid):
        q = (self.Session().query(ContentItemRow, ContentItemRow.guid)
            .filter(ContentItemRow.guid == guid))
        for row in q:
            return row.ContentItemRow.to_contentitem()

if __name__ == '__main__':
    #state.test_data()
    pass