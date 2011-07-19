INSTALL: You must have the following packages installed.  Just easy_install each item in the list (including the wordpresslib url).
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

DATA FILES:
	\server\ contains some data files that should be customized per-service, and potentially hold sensitive data.  You should create
	copies of these files (without '_EXAMPLE') and adjust them based on the comments and format inside.
	
CHANGES:
15/07/11.  Rob Galanakis
	Initial upload.  No GUI client available (was using pyjamas but it is too difficult a dependency to install so I'm not committing it).