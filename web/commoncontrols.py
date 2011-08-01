import pyjd

from pyjamas.ui.Calendar import DateField
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Button import Button
from pyjamas.ui.DisclosurePanel import DisclosurePanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.ui.PasswordTextBox import PasswordTextBox

def fireAll(listeners, *args, **kwargs):
    for li in listeners:
        li(*args, **kwargs)
    return

class Spinner(HorizontalPanel):
    CHAR_WIDTH = 15
    def __init__(self, minvalue=0, maxvalue=100, startvalue=10, interval=1, buttonStyleName=None, decrText='<',
                 incrText='>', **kwargs):
        HorizontalPanel.__init__(self, **kwargs)
        self.minvalue = minvalue
        self.maxvalue = maxvalue
        self.interval = interval
        self.changeListeners = []

        self.lessButton = Button(decrText, listener=self._onArrowClick, StyleName=buttonStyleName)
        self.add(self.lessButton)
        self.textbox = TextBox()
        self.textbox.addInputListener(self._onTextboxInput)
        self.add(self.textbox)

        self.moreButton = Button(incrText, listener=self._onArrowClick, StyleName=buttonStyleName)
        self.add(self.moreButton)

        self.value = startvalue + 1
        self.setValue(startvalue)
        return
    def _resizeTextbox(self):
        width = max(2, len(self.textbox.getText())) * self.CHAR_WIDTH
        if self.textbox.getWidth() != width:
            self.textbox.setWidth(width)
    def _onArrowClick(self, sender):
        if sender == self.lessButton:
            incr = -1 * self.interval
        elif sender == self.moreButton:
            incr = self.interval
        else:
            raise NotImplementedError()
        val = self.getValue() + incr
        self.setValue(val)
    def _onTextboxInput(self, sender):
        text = sender.getText()
        try:
            val = int(text)
        except Exception:
            return
        self.setValue(val)
        return
    def addOnChangeListener(self, listener):
        self.changeListeners.append(listener)
    def removeOnChangeListener(self, listener):
        self.changeListeners.remove(listener)
    def getValue(self):
        return self.value
    def setValue(self, value):
        fixedval = min(self.maxvalue, value)
        fixedval = max(self.minvalue, fixedval)
        if fixedval == self.value:
            return
        self.value = fixedval
        self.textbox.setText(str(self.value))
        self._resizeTextbox()
        self.raiseOnChanged()
    def raiseOnChanged(self):
        for c in self.changeListeners:
            c(self.value)

class DateFieldExt(DateField):
    def __init__(self, format='%Y/%m/%d', remove_todaylink=False, StyleName=None):
        DateField.__init__(self, format)
        if remove_todaylink:
            self.todayLink.removeFromParent()
        if StyleName:
            self.setStyleName(StyleName)
        return
    def getDate(self):
        return self.calendar.currentYear, self.calendar.currentMonth, self.calendar.currentDay
    def setDate(self, year, month, day):
        self.calendar.onDate(None, year, month, day)
        return


class LoggerPanel(DisclosurePanel):
    def __init__(self, maxhistory=100, maxloglinelength=200, headerStyleName=None, panelStyleName=None,
                 buttonStyleName=None, labelStyleName=None):
        super(LoggerPanel, self).__init__(self, header='BLAH', isOpen=False)
        self.labelStyleName = labelStyleName
        self.maxhistory = maxhistory
        self.maxloglinelength = maxloglinelength

        self.getHeader().setStyleName(headerStyleName)
        self.logpanel = VerticalPanel(StyleName=panelStyleName)
        self.setContent(self.logpanel)

        self.clearbutton = Button('Clear', listener=self.clear, StyleName=buttonStyleName)
        self.logpanel.add(self.clearbutton)
        self.updateHeaderText()
    def log(self, string):
        self.logpanel.add(Label(string[:self.maxloglinelength], StyleName=self.labelStyleName))
        widgcnt = self.logpanel.getWidgetCount()
        if widgcnt > self.maxhistory:
            for i in range(0, widgcnt - self.maxhistory):
                self.logpanel.remove(self.logpanel.getWidget(i))
        self.updateHeaderText()
    def __call__(self, string):
        self.log(string)
        return
    def updateHeaderText(self):
        self.getHeader().setText('Logging: %s items' % (self.logpanel.getWidgetCount() - 1))
    def clear(self):
        self.logpanel.clear()
        self.logpanel.add(self.clearbutton)
        self.updateHeaderText()

class AuthPanel(VerticalPanel):
    def __init__(self, beginVerifyAuth, onClose, baseStyleName='gwt-authdlgbox'):
        """Initialize a new instance.

        beginVerifyAuth: callable that takes (string username, string password).Should call 'endVerifyAuth' when
        finished.
        onClose: callable that takes (AuthDlgBox sender, bool wasAuthorized, string username, string password).  Called
        when Cancel is pressed, or OK is pressed and verification is successful.
        baseStyleName: base css name for type.  baseStyleName + -label, -textbox, and -warninglabel should also be
        defined.
        """
        VerticalPanel.__init__(self, StyleName=baseStyleName)
        self.onClose = onClose
        self.wasAuthorized = False
        self._beginVerifyAuth = beginVerifyAuth
        self.baseStyleName = baseStyleName
        self._createContent()
    def _createContent(self):
        self.add(self._createUsernamePanel())
        self.add(self._createPasswordPanel())
        self.add(self._createButtonPanel())
        self.warningLabel = Label('', StyleName='-warninglabel')
        self.add(self.warningLabel)
    def _createUsernamePanel(self):
        hp = HorizontalPanel()
        hp.add(Label('Username: ', StyleName=self.baseStyleName + '-label'))
        self.usernameTB = TextBox(StyleName=self.baseStyleName + '-textbox')
        hp.add(self.usernameTB)
        return hp
    def _createPasswordPanel(self):
        hp = HorizontalPanel()
        hp.add(Label('Password: ', StyleName=self.baseStyleName + '-label'))
        self.passTB = PasswordTextBox(StyleName=self.baseStyleName + '-textbox')
        hp.add(self.passTB)
        return hp
    def _createButtonPanel(self):
        hp = HorizontalPanel()
        self.okBtn = Button('OK', self.onOk, StyleName=self.baseStyleName + '-button')
        self.cancelBtn = Button('Cancel', self.onCancel, StyleName=self.baseStyleName + '-button')
        hp.add(self.okBtn)
        hp.add(self.cancelBtn)
        return hp
    def getUserAndPass(self):
        return self.usernameTB.getText(), self.passTB.getText()
    def onOk(self, sender):
        self._beginVerifyAuth(*self.getUserAndPass())
        return
    def onCancel(self, sender):
        self.onClose(self, False, None, None)
        return
    def endVerifyAuth(self, result, username, password, msg='Username/password invalid.'):
        if result:
            self.onClose(self, True, username, password)
        else:
            self.warningLabel.setText(msg)