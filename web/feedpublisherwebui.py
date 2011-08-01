#import pyjd # dummy in pyjs
from pyjamas.ui import HasAlignment

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.DisclosurePanel import DisclosurePanel
from pyjamas.JSONService import JSONProxy
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui.FlowPanel import FlowPanel
from pyjamas.ui.ToggleButton import ToggleButton
from pyjamas.ui.FlowPanel import FlowPanel
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.ui.SimplePanel import SimplePanel
import commoncontrols

import pyjamas.JSONParser
jsonparser = pyjamas.JSONParser.JSONParser()

global logpanel

class Styles:
    LOGGER_HEADER = 'color-toolbar logpanel-header-fontstyle pos-disclpanel-header'
    LOGGER_CONTENT = 'color-toolbar logpanel-content-fontstyle pos-disclpanel-content'
    LOGGER_BUTTON = 'button font-button pos-toolbarbutton color-button'
    LOGGER_LINES = 'logpanel-lines-pos'
    TOOLBAR_HORIZONTAL = 'color-toolbar pos-toolbar'
    TOOLBAR_VERTICAL = 'color-toolbar pos-toolbar'
    TOOLBAR_VERTICALEDGE = 'vert-edge-toolbar'
    TOOLBAR_BUTTON = 'button pos-toolbarbutton color-button font-button button'
    TOOLBAR_BUTTON_PUBLISHED = TOOLBAR_BUTTON.replace('color-button', 'contenttoolbar-color-ispublished')
    TOOLBAR_TEXT = 'color-toolbar pos-toolbarbutton font-toolbar'
    TOOLBAR_TOGGLEBUTTON = 'button font-button color-button pos-toolbarbutton'
    CONTENTITEM_CELL_HEADER = 'color-content font-header pos-disclpanel-header'
    CONTENTITEM_CELL_CONTENT = 'color-content font-content pos-disclpanel-content'
    CONTENTITEM_COMPONENT_LABEL = 'color-content font-content contentcell-label'
    CONTENTITEM_COMPONENT_CONTENT = 'color-content font-content contentcell-content'
    pass

class ContentItemComponent(HorizontalPanel):
    def __init__(self, labelname, contenthtml, labelnamesuffix=': ', ensure_labelnamesuffix=True):
        HorizontalPanel.__init__(self)
        if ensure_labelnamesuffix and not labelname.endswith(labelnamesuffix):
            labelname += labelnamesuffix
        self.add(Label(labelname, StyleName=Styles.CONTENTITEM_COMPONENT_LABEL))
        self.add(HTML(contenthtml, StyleName=Styles.CONTENTITEM_COMPONENT_CONTENT))
        return

class ContentItemToolbar(HorizontalPanel):
    def __init__(self, contentitem, onPublish, onLike, onDislike):
        """Create a ContentItemToolbar.

        Event handlers should be methods that take: sender
        """
        HorizontalPanel.__init__(self)
        self.contentitem = contentitem
        self.publishBtn = Button('Publish', listener=onPublish, StyleName=Styles.TOOLBAR_BUTTON)
        self.add(self.publishBtn)
        self.likeBtn = Button('FOO', listener=onLike, StyleName=Styles.TOOLBAR_BUTTON)
        self.add(self.likeBtn)
        self.dislikeBtn = Button('Dislike', listener=onDislike, StyleName=Styles.TOOLBAR_BUTTON)
        self.add(self.dislikeBtn)
        self.updateStatusFromItem()
        return
    def updateStatusFromItem(self, updatedItem=None):
        if updatedItem:
            self.contentitem = updatedItem
        likes = self.contentitem['metadata']['likes']
        self.likeBtn.setText('Like (%s)' % likes)
        isPublished = self.contentitem['metadata']['is_published']
        self.publishBtn.setStyleName(Styles.TOOLBAR_BUTTON_PUBLISHED if isPublished else Styles.TOOLBAR_BUTTON)

class ContentItemCell(DisclosurePanel):
    def __init__(self, contentitem, onPublish, onLike, onDislike):
        """Create a ContentItemCell.

        Event handlers should be methods that take: sender, contentitem
        """
        DisclosurePanel.__init__(self, header=ContentItemCell.create_title(contentitem), isOpen=False)
        self.getHeader().setStyleName(Styles.CONTENTITEM_CELL_HEADER)
        self.panel = VerticalPanel(StyleName=Styles.CONTENTITEM_CELL_CONTENT)
        self.add(self.panel)
        self.toolbar = ContentItemToolbar(contentitem,
                                          onPublish=lambda sndr: onPublish(self, self.contentitem),
                                          onLike=lambda sndr: onLike(self, self.contentitem),
                                          onDislike=lambda sndr: onDislike(self, self.contentitem))
        self.panel.add(self.toolbar)

        self.panel.add(ContentItemComponent('ID', contentitem['id']))
        self.panel.add(ContentItemComponent('Title', contentitem['title']))
        self.panel.add(ContentItemComponent('Summary', contentitem['summary']))
        self.panel.add(ContentItemComponent('Author', contentitem['author']))
        self.panel.add(ContentItemComponent('Datetime', self.pretty_format_datetime(contentitem['datetime'])))
        self.panel.add(ContentItemComponent('Url', '<a href="%s">%s</a>' % (contentitem['url'], contentitem['url'])))
        self.panel.add(ContentItemComponent('Categories', contentitem['categories']))
        self.panel.add(ContentItemComponent('Content', contentitem['html']))
        self.contentitem = contentitem
        return
    def updateMetadata(self):
        self.toolbar.updateStatusFromItem()
    @classmethod
    def create_title(cls, contentitem):
        dt = contentitem['datetime']
        return '(%s) %s: %s' % (dt[:dt.find('T')], contentitem['author'], contentitem['title'])
    @classmethod
    def pretty_format_datetime(cls, datetimestr):
        #datetimestr = '2011-06-10T17:01:22'
        #date, time = datetimestr.split('T')
        #year, month, day = date.split('-')
        #hour, min, sec = time.split(':')
        return datetimestr.replace('T', ' ')

class AlignedPanel(FlowPanel):
    VERTICAL = 0
    HORIZONTAL = 1
    def __init__(self, align=0, **kwargs):
        super(AlignedPanel, self).__init__(**kwargs)
        self.content = HorizontalPanel() if align == self.HORIZONTAL else VerticalPanel()
        return

class SortPanelButton(Button):
    def __init__(self, html, listener, sortkeyselector, defaultAscending):
        super(SortPanelButton, self).__init__('FOO', self._onClick, StyleName=Styles.TOOLBAR_BUTTON)
        self.origHtml = html
        self.sortAscending = defaultAscending
        self.listener = listener
        self.sortKeySelector = sortkeyselector
        self._refreshText()
    def _onClick(self, sender):
        self.sortAscending = not self.sortAscending
        self._refreshText()
        self.listener(self)
    def _refreshText(self):
        self.setText('%s (%s)' % (self.origHtml, 'Asc' if self.sortAscending else 'Dsc'))


class SortPanel(AlignedPanel):
    buttonStates = {}
    def __init__(self, onSort=None, align=0, **kwargs):
        super(SortPanel, self).__init__(align, **kwargs)
        self.content.add(Label('Sort By:', StyleName=Styles.TOOLBAR_TEXT))
        self.content.add(SortPanelButton('Date', self._onBtnClick, lambda cic: cic.contentitem['datetime'],  False))
        self.content.add(SortPanelButton('Author', self._onBtnClick, lambda cic: cic.contentitem['author'], True))
        self.content.add(SortPanelButton('Title', self._onBtnClick, lambda cic: cic.contentitem['title'], True))
        self.content.add(SortPanelButton('Likes', self._onBtnClick, lambda cic: cic.contentitem['metadata']['likes'],
                                         False))
        self.sortDelegate = onSort
        self.add(self.content)
    def _onBtnClick(self, sender):
        self.sortDelegate(sender, sender.sortKeySelector, sender.sortAscending)


class FilterFeedPanel(AlignedPanel):
    def __init__(self, onFilter=None, align=0, **kwargs):
        super(FilterFeedPanel, self).__init__(align, **kwargs)
        self.content.add(Label('Hide Feeds:', wordWrap=False, StyleName=Styles.TOOLBAR_TEXT))
        tbstyle = {'StyleName':Styles.TOOLBAR_TOGGLEBUTTON}
        self.twitbtn = ToggleButton('Twitter', handler=lambda sndr: onFilter(sndr, self._filterPredicate), **tbstyle)
        self.content.add(self.twitbtn)
        self.blogbtn = ToggleButton('Blogs', handler=lambda sndr: onFilter(sndr, self._filterPredicate), **tbstyle)
        self.content.add(self.blogbtn)
        self.pubbtn = ToggleButton('Published', handler=lambda sndr: onFilter(sndr, self._filterPredicate), **tbstyle)
        self.content.add(self.pubbtn)
        self.dislikebtn = ToggleButton('Disliked', handler=lambda sndr: onFilter(sndr, self._filterPredicate), **tbstyle)
        self.content.add(self.dislikebtn)
        self.add(self.content)
    def _filterPredicate(self, contentitemcell):
        """Return true if item should be shown, false if item should be filtered out."""
        result = True
        if self.twitbtn.isDown():
            istwi = 'twitter.com' in contentitemcell.contentitem['url']
            result &= not istwi
        if self.blogbtn.isDown():
            isblog = True
            result &= not isblog
        if self.pubbtn.isDown():
            ispublished = contentitemcell.contentitem['metadata']['is_published']
            result &= not ispublished
        if self.dislikebtn.isDown():
            disliked = contentitemcell.contentitem['metadata']['likes'] < 0
            result &= not disliked
        return result
    

class HorizontalToolbar(SimplePanel):
    def __init__(self, onRequestMore=None, onCollapseAll=None, onExpandAll=None, onSort=None):
        super(HorizontalToolbar, self).__init__(StyleName=Styles.TOOLBAR_HORIZONTAL)
        self.content = HorizontalPanel()

        self.requestMoreButton = Button('More', onRequestMore, StyleName=Styles.TOOLBAR_BUTTON)
        self.content.add(self.requestMoreButton)

        self.itemsShowingLabel = Label(StyleName=Styles.TOOLBAR_TEXT)
        self.content.add(self.itemsShowingLabel)
        self.setNumberOfItemsShowingText(0, 0)

        self.collapseAllButton = Button('Collapse All', onCollapseAll, StyleName=Styles.TOOLBAR_BUTTON)
        self.content.add(self.collapseAllButton)
        self.expandAllButton = Button('Expand All', onExpandAll, StyleName=Styles.TOOLBAR_BUTTON)
        self.content.add(self.expandAllButton)

        if onSort:
            self.content.add(SortPanel(onSort))

        self.setWidget(self.content)
        return
    def setNumberOfItemsShowingText(self, number, total):
        self.itemsShowingLabel.setText('Showing %s of %s total items.' % (number, total))
        return

class SideVerticalToolbar(VerticalPanel):
    def __init__(self, onSort=None, onFilter=None):
        super(SideVerticalToolbar, self).__init__(StyleName=Styles.TOOLBAR_VERTICAL)
        if onSort:
            self.add(SortPanel(onSort))
        if onFilter:
            self.add(FilterFeedPanel(onFilter))
        return

class ContentPanel(HorizontalPanel):
    def __init__(self, onItemPublish, onItemLike, onItemDislike, onSort=None, onFilter=None):
        super(ContentPanel, self).__init__()
        self.newItemArgs = {'onPublish':onItemPublish, 'onLike':onItemLike, 'onDislike':onItemDislike}

        self.sidebar = SideVerticalToolbar(onSort=onSort, onFilter=onFilter)
        text = '<br>'.join(list('More Tools'))
        self.sidebarEdge = Button(text, listener=self.onSidebarEdgeClick, StyleName=Styles.TOOLBAR_VERTICALEDGE)
        self.add(self.sidebarEdge)

        self.contentpanel = VerticalPanel()
        self.add(self.contentpanel)
        self.allContentCells = []
        return
    def _getAllContentItemCells(self):
        for widg in self.contentpanel.getChildren():
            if isinstance(widg, ContentItemCell):
                yield widg
    def addItems(self, items):
        for item in items:
            widg = ContentItemCell(item, **self.newItemArgs)
            self.contentpanel.add(widg)
            self.allContentCells.append(widg)
    def itemCount(self):
        return len(self.allContentCells)
    def onSidebarEdgeClick(self):
        #If parent is set, hide it- otherwise, remove it
        if self.sidebar.parent:
            self.sidebar.removeFromParent()
        else:
            self.insert(self.sidebar, 0)
    def setItemsOpenState(self, state):
        for cell in self._getAllContentItemCells():
            cell.setOpen(state)
    def sortItems(self, keyselector, ascending):
        allchildren = list(self.contentpanel.getChildren())
        self.contentpanel.clear()
        sall = sorted(allchildren, key=keyselector)
        if not ascending:
            sall = reversed(sall)
        for child in sall:
            self.contentpanel.add(child)
    def filterItems(self, predicate):
        self.contentpanel.clear()
        cellsToShow = [cell for cell in self.allContentCells if predicate(cell)]
        for cell in cellsToShow:
            self.contentpanel.add(cell)

class PublisherPanel(VerticalPanel):
    def __init__(self):
        VerticalPanel.__init__(self)
        self.remoteproxy = JsonTaoggregatorService()
        self.totalitemcount = 0
        self.idToCallbackMap = {}

        createToolbar = lambda: HorizontalToolbar(self.onRequestMore, self.onCollapseAll, self.onExpandAll)
        topbar = createToolbar()
        self.add(topbar)

        self.contentpanel = ContentPanel(self.onCIPublish,
                                         lambda sen, ci: self.onCIAdjustLike(sen, ci, 1),
                                         lambda sen, ci: self.onCIAdjustLike(sen, ci, -1),
                                         self.onSort,
                                         self.onFilter)
        self.add(self.contentpanel)

        botbar = createToolbar()
        self.add(botbar)

        self.horiztoolbars = [topbar, botbar]

        self.lastOnSortArgs = None
        self.lastOnFilterArgs = None
        self.requestDownloadedContentCount()
        self.onRequestMore(None)
    def onRequestMore(self, sender):
        logpanel.log('More items being requested.')
        startind = int(self.contentpanel.itemCount())
        number = 15
        logpanel.log('Requesting item slice, starting at %s with length of %s.' % (startind, number))
        self.remoteproxy.request_content_slice(self, startind, number)
        logpanel.log('Request sent.')
        return
    def onExpandAll(self, sender):
        logpanel.log('Expanding all items.')
        self.contentpanel.setItemsOpenState(True)
        return
    def onCollapseAll(self, sender):
        logpanel.log('Collapsing all items.')
        self.contentpanel.setItemsOpenState(False)
        return
    def onSort(self, sender, keyselector, ascending):
        logpanel.log('Sorting %s by %s' % ('asc' if ascending else 'dsc', keyselector))
        self.lastOnSortArgs = sender, keyselector, ascending
        self.contentpanel.sortItems(keyselector, ascending)
    def onFilter(self, sender, predicate):
        self.lastFilterPredicate = predicate
        self.filterUsingFilterArgs()
    def filterUsingFilterArgs(self):
        logpanel.log('Filtering by %s' % self.lastFilterPredicate)
        self.contentpanel.filterItems(self.lastFilterPredicate)
    def onCIPublish(self, sender, contentitem):
        logpanel.log('Publish requested: %s' % contentitem)
        id = self.remoteproxy.publish_content(self, contentitem)
        self.idToCallbackMap[id] = sender
        return
    def onCIAdjustLike(self, sender, contentitem, amount):
        logpanel.log('Promote requested: %s' % contentitem)
        id = self.remoteproxy.adjust_likes(self, contentitem, amount)
        self.idToCallbackMap[id] = sender
        return
    def requestDownloadedContentCount(self):
        logpanel.log('Requesting downloaded content count.')
        self.remoteproxy.downloadedcontent_count(self)
    def onRemoteResponse(self, response, request_info):
        #request_info: id:ID1, method:request_recent_content, handler:instance of feedpublisherwebui.PublisherPanel
        logpanel.log('Remote response received.')
        logpanel.log('RequestInfo: id: %s, method: %s, handler: %s' %
                          (request_info.id, request_info.method, request_info.handler))
        if response:
            logpanel.log('Response: len=%s, str=%s' % (len(str(response)), str(response)))
        else:
            logpanel.log('Response: Empty/None')

        decoded = jsonparser.decode(response)
        logpanel.log('Decoded into: %s' % (str(decoded)))

#        if request_info.id in self.idToCallbackMap:
#            callback = self.idToCallbackMap.pop(request_info.id)
#            callback(*decoded)
        if request_info.method in ('request_content_slice',):
            logpanel.log('Adding items to contentpanel.')
            self.contentpanel.addItems(decoded)
            if self.lastOnFilterArgs:
                self.onFilter(*self.lastOnFilterArgs)
            if self.lastOnSortArgs:
                self.onSort(*self.lastOnSortArgs)
            for toolbar in self.horiztoolbars:
                toolbar.setNumberOfItemsShowingText(self.contentpanel.itemCount(), self.totalitemcount)
        elif request_info.method == 'downloadedcontent_count':
            self.totalitemcount = decoded
            for toolbar in self.horiztoolbars:
                toolbar.setNumberOfItemsShowingText(self.contentpanel.itemCount(), self.totalitemcount)
        elif request_info.method in ('adjust_likes', 'publish_content'):
            cellsender = self.idToCallbackMap.pop(request_info.id)
            if request_info.method == 'adjust_likes':
                cellsender.contentitem['metadata']['likes'] = decoded
            elif request_info.method == 'publish_content':
                cellsender.contentitem['metadata']['is_published'] = decoded
            cellsender.updateMetadata()
            self.filterUsingFilterArgs()
        return
    def onRemoteError(self, code, errobj, request_info):
        # onRemoteError gets the HTTP error code or 0 and
        # errobj is an jsonrpc 2.0 error dict:
        #     {
        #       'code': jsonrpc-error-code (integer) ,
        #       'message': jsonrpc-error-message (string) ,
        #       'data' : extra-error-data
        #     }
        message = errobj['message']
        if code != 0:
            logpanel.log("HTTP error %d: %s" % (code, message))
        else:
            code = errobj['code']
            logpanel.log("JSONRPC Error %s: %s" % (code, message))
        return

EXPORTED_METHODS = ('request_content_by_date', 'request_content_slice', 'downloadedcontent_count', 'publish_content',
                    'adjust_likes', 'is_authenticated')

class JsonTaoggregatorService(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, "services/JSONRPCRerouterService.py", EXPORTED_METHODS)

class AuthPanel(commoncontrols.AuthPanel):
    def __init__(self):
        commoncontrols.AuthPanel.__init__(self, self.beginVerifyAuth, onAuthClose, 'authdlgbox')
        self.add(Label('To test: username "tao", password "tao1"', StyleName='authdlgbox-label'))
        self.usernameTB.setText('tao')
        self.passTB.setText('tao1')
        self.proxy = JsonTaoggregatorService()
        self.authReqs = {}
    def beginVerifyAuth(self, user, password):
        logpanel.log('Verifying user %s and password %s' % (user, password))
        id = self.proxy.is_authenticated(self, user, password)
        self.authReqs[id] = (user, password, )
    def onRemoteResponse(self, response, request_info):
        logpanel.log('Response ID%s: Received %s' % (request_info.id, response))
        decoded = jsonparser.decode(response)
        user, password = self.authReqs[request_info.id]
        self.endVerifyAuth(decoded, user, password)

def onAuthClose(sender, result, username, password):
    logpanel.log('Auth result: %s' % result)
    sender.removeFromParent()
    if result:
        addPublisherPanel()
    else:
        RootPanel().add(Label('AUTHORIZATION DENIED', StyleName=Styles.TOOLBAR_TEXT))

def addPublisherPanel():
    app = PublisherPanel()
    RootPanel().add(app)
    return

if __name__ == '__main__':
    # for pyjd, set up a web server and load the HTML from there:
    # this convinces the browser engine that the AJAX will be loaded
    # from the same URI base as the URL, it's all a bit messy...
    #pyjd.setup("http://127.0.0.1/examples/jsonrpc/public/feedpublisherwebui.html")
    logpanel = commoncontrols.LoggerPanel(headerStyleName=Styles.LOGGER_HEADER, panelStyleName=Styles.LOGGER_CONTENT,
                                          buttonStyleName=Styles.LOGGER_BUTTON, labelStyleName=Styles.LOGGER_LINES)
    RootPanel().add(logpanel)
    #dlg = AuthPanel()
    #RootPanel().add(dlg)
    addPublisherPanel()
    #pyjd.run()

