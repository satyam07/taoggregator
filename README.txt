Taoggregator: A content feed aggregator and reposter.

Overview
========

Created for www.tech-artists.org but can be reused anywhere.
Written by Rob Galanakis, rob.galanakis@gmail.com, www.robg3d.com

Conceptually similar to a 'planet' feed aggergator, but hopefully simpler and more flexible/powerful.

Install
=======
You must have the following packages installed.  Just easy_install each item in the list (including the wordpresslib url).
	Dependencies:
		Service:
			BeautifulSoup
			feedparser
			pyyaml
			simplejson
			sqlalchemy
			twitter
			http://www.blackbirdblog.it/download/software/wordpresslib.zip
			pyzmq
		UI:
			PyQt4

				
Configuration
=============
	taoggregator\server\ contains some data files that should be customized per-service, and potentially hold sensitive data.  You should create
	copies of these files (without '_EXAMPLE') and adjust them based on the comments and format inside.
	

Usage
=====
1. Run taoggregator/web/startservice.bat
2. Run taoggregator/web/startcgi.bat
3. Open a browser to http://127.0.0.1:8000/feedpublisherwebui.html .  It may take a while to load as the server locks up
	when it syncs content.
	

To Do
=====
Go back through the project and make a proper to-do list.