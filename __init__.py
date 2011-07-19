EXPORTED_METHODS = ('request_content_by_date', 'request_content_slice', 'downloadedcontent_count', 'publish_content',
                    'adjust_likes', 'is_authenticated')

def getDefaultHostAndPort(isClient=True):
    return 'localhost' if isClient else '*', 7878

def createConnStr(*hostAndPort):
    return 'tcp://%s:%s' % hostAndPort