"""Tests for dbservicestate.py"""

import copy
from datetime import datetime as dt
import os
import sqlalchemy
import tempfile
import unittest
import uuid

import database
import taoggregator.taoutils as taoutils

class TestDatabase(unittest.TestCase):
    def setUp(self):
        self.filename = tempfile.mkstemp(suffix='.db')[1]
        self.db = database.create_new_db(self.filename)
    def testInsertInsertsCorrectAmount(self):
        items = [taoutils.create_contentitem() for i in range(0, 10)]
        self.db.insert_items(*items)
        self.assertEqual(len(items), self.db.itemcount())
    def testInsertFailsOnDupes(self):
        uid = uuid.uuid4()
        item = taoutils.create_contentitem(meta=taoutils.create_contentitem_metadata(guid=uid))
        self.db.insert_items(item)
        self.assertRaises(sqlalchemy.exc.IntegrityError, self.db.insert_items, item)
    def testUpdatePersistsOnUpdate(self):
        itemOrig = taoutils.create_contentitem()
        itemClone = copy.copy(itemOrig)
        itemClone['metadata'] = copy.copy(itemClone['metadata'])
        #add the item
        self.db.insert_items(itemOrig)
        #change a clone
        itemClone['url'] = 'BLAH'
        #update with clone
        self.db.update_items(itemClone)
        #fetch the updated and see if it is the same
        gotten = taoutils.first(self.db.get_slice())
        self.assertEqual(itemClone['url'], gotten['url'])
    def testUpdatePersistsOnAdd(self):
        orig = taoutils.create_contentitem()
        self.db.update_items(orig)
        gotten = taoutils.first(self.db.get_slice())
        self.assertEqual(orig['metadata']['guid'], gotten['metadata']['guid'])
    def testGetBetweenCount(self):
        twok11 = dt.now().replace(year=2011)
        twok9 = twok11.replace(year=2009)
        ci1 = taoutils.create_contentitem(datetime=twok11.replace(year=2010))
        ci2 = taoutils.create_contentitem(datetime=twok11.replace(year=2008))
        self.db.insert_items(ci1, ci2)
        result = list(self.db.get_between(twok9, twok11))
        self.assertEqual(len(result), 1)
    def testGetBetweenOrder(self):
        twok11 = dt.now().replace(year=2011)
        twok6 = twok11.replace(year=2006)
        ci1 = taoutils.create_contentitem(datetime=dt.now().replace(year=2010))
        ci2 = taoutils.create_contentitem(datetime=dt.now().replace(year=2008))
        ci3 = taoutils.create_contentitem(datetime=dt.now().replace(year=2009))
        self.db.insert_items(ci1, ci2, ci3)
        result = list(self.db.get_between(twok6, twok11))
        self.assertEqual(result[0]['datetime'].year, 2010)
        self.assertEqual(result[1]['datetime'].year, 2009)
        self.assertEqual(result[2]['datetime'].year, 2008)
    def insertItems(self, number, db=None):
        if db is None:
            db = self.db
        items = [taoutils.create_contentitem() for i in range(0, number)]
        db.insert_items(*items)
        return items
    def testGetSliceCountZeroStart(self):
        self.insertItems(10)
        result = taoutils.exhaust(self.db.get_slice())
        self.assertEqual(len(result), 10)
    def testGetSliceCountNonZeroStart(self):
        self.insertItems(10)
        result = taoutils.exhaust(self.db.get_slice(startindex=7))
        self.assertEqual(len(result), 3)
    def testGetSliceIsSorted(self):
        self.insertItems(10)
        result = taoutils.exhaust(self.db.get_slice())
        srt = sorted(result, key=lambda a: a['datetime'])
        self.assertEqual(result, srt)
    def testGetFromGuidMatches(self):
        tomatch = self.insertItems(10)[5]
        gotten = self.db.get_from_guid(tomatch['metadata']['guid'])
        self.assertTrue(gotten)
    def testGetFromGuidReturnsNoneIfNoMatch(self):
        self.insertItems(5)
        gotten = self.db.get_from_guid('555')
        self.assertEqual(gotten, None)
    def testGetFromGuidReturnsContentItem(self):
        orig = taoutils.first(self.insertItems(5))
        gotten = self.db.get_from_guid(orig['metadata']['guid'])
        self.assertEqual(sorted(orig.keys()), sorted(gotten.keys()))
        self.assertEqual(sorted(orig['metadata'].keys()), sorted(gotten['metadata'].keys()))
    def testNoBloatBetweenSessions(self):
        persistfilename = tempfile.gettempdir() + '\\temptaoggregatordb.db'
        #os.remove(persistfilename)
        if not os.path.exists(persistfilename):
            db = database.create_new_db(persistfilename)
            items = self.insertItems(5, db)
        else:
            db = database.ServiceDatabase(persistfilename)
            items = list(db.get_slice())
        #ensure there are only 5 in here when we start- no bloat, or was created correctly first time
        self.assertEqual(db.itemcount(), 5)
        #now refresh items and make sure it doesn't bloat now or ever
        db.update_items(*items)
        self.assertEqual(db.itemcount(), 5)
#        db2 = database.ServiceDatabase(persistfilename)
#        self.assertEqual(5, self.db.itemcount())
#        self.db.insert_items(*items)
#        self.assertEqual(5, self.db.itemcount())


def suite():
    import doctest, test_taoutils
    s = unittest.TestSuite((
        test_taoutils.suite(),
        doctest.DocTestSuite(database),
        unittest.makeSuite(TestDatabase),
    ))
    return s


if __name__ == '__main__':
    #createNewTestDB()
    unittest.TextTestRunner().run(suite())
