"""Do NOT import this module, this is meant to be run stand-alone
from a shell script.
"""

if __name__ != '__main__':
    raise RuntimeError('Module should never be imported, only run from __main__.')

import os
import sys

TAOPATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.path.append(TAOPATH)
import taoggregator.server.taoggregatorservice as taosvc
taosvc.main()