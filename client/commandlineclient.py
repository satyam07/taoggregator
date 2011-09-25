import taoggregator
import taoggregator.clientimpls as clientimpls
import taoggregator.taoutils as taoutils

def format_contentitem(contentitem):
    s = 'ContentItem:\nid=%s\ntitle=%s\nurl=%s\nauthor=%s\ndatetime=%s\nsummary=%s\ncategories=%s\nhtml:%s' % (
        contentitem['id'], contentitem['title'], contentitem['url'], contentitem['author'], contentitem['datetime'],
        contentitem['summary'], contentitem['categories'], contentitem['html']
    )
    s2 = taoutils.remove_non_ascii(s)
    return s2

class CommandlineClient(object):
    def __init__(self):
        print 'Starting client...'
        self.proxy = clientimpls.SocketClient(taoggregator.createConnStr(taoggregator.getDefaultHostAndPort()))
        print 'Client started.'
        return
    def run(self):
        self.print_usage()
        while True:
            cmd = raw_input('>>>')
            if not cmd:
                pass
            elif cmd.startswith('req '):
                cnt = cmd.split()[1]
                print 'Requesting {0} items.'.format(cnt)
                items = self.proxy.request_content_slice(number=cnt)
                print 'Got {0} items.'.format(len(items))
                for ci in items:
                    print format_contentitem(ci)
            elif cmd == 'cnt':
                print 'Getting dl count...'
                cnt = self.proxy.downloadedcontent_count()
                print 'Got cnt of %s' % cnt
            elif cmd == 'exit':
                print 'Exiting...'
                break
            else:
                print '"' + cmd + '" not recognized.'
        return
    def print_usage(self):
        print 'Usage:'
        print '\treq <num>: request <num> most recent items.'
        print '\tcnt : Show number of items downloaded onto server.'
        print '\texit: exit.'
        print '\t?: Show usage.'

if __name__ == '__main__':
    cmd = CommandlineClient()
    cmd.run()
