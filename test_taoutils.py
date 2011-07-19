"""Tests for taoutils module."""

import unittest
import doctest
import taoutils

def suite():
    s = unittest.TestSuite(doctest.DocTestSuite(taoutils))
    return s

if __name__ == '__main__':
    unittest.TextTestRunner().run(suite())