/* start module: feedpublisherwebui */
$pyjs.loaded_modules['feedpublisherwebui'] = function (__mod_name__) {
	if($pyjs.loaded_modules['feedpublisherwebui'].__was_initialized__) return $pyjs.loaded_modules['feedpublisherwebui'];
	var $m = $pyjs.loaded_modules["feedpublisherwebui"];
	$m.__repr__ = function() { return "<module: feedpublisherwebui>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'feedpublisherwebui';
	$m.__name__ = __mod_name__;
	var $attr197,$attr198,$attr218,$attr212,$attr213,$attr211,$attr216,$attr217,$attr214,$attr215;

	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['ToggleButton'] = $p['___import___']('pyjamas.ui.ToggleButton.ToggleButton', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['commoncontrols'] = $p['___import___']('commoncontrols', null);
	$m['pyjamas'] = $p['___import___']('pyjamas.JSONParser', null);
	$m['jsonparser'] = $m['pyjamas']['JSONParser']['JSONParser']();
	$m['Styles'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$cls_definition['LOGGER_HEADER'] = 'color-toolbar logpanel-header-fontstyle pos-disclpanel-header';
		$cls_definition['LOGGER_CONTENT'] = 'color-toolbar logpanel-content-fontstyle pos-disclpanel-content';
		$cls_definition['LOGGER_BUTTON'] = 'button font-button pos-toolbarbutton color-button';
		$cls_definition['LOGGER_LINES'] = 'logpanel-lines-pos';
		$cls_definition['TOOLBAR_HORIZONTAL'] = 'color-toolbar pos-toolbar';
		$cls_definition['TOOLBAR_VERTICAL'] = 'color-toolbar pos-toolbar';
		$cls_definition['TOOLBAR_VERTICALEDGE'] = 'vert-edge-toolbar';
		$cls_definition['TOOLBAR_BUTTON'] = 'button pos-toolbarbutton color-button font-button button';
		$cls_definition['TOOLBAR_BUTTON_PUBLISHED'] = $cls_definition['TOOLBAR_BUTTON']['$$replace']('color-button', 'contenttoolbar-color-ispublished');
		$cls_definition['TOOLBAR_TEXT'] = 'color-toolbar pos-toolbarbutton font-toolbar';
		$cls_definition['TOOLBAR_TOGGLEBUTTON'] = 'button font-button color-button pos-toolbarbutton';
		$cls_definition['CONTENTITEM_CELL_HEADER'] = 'color-content font-header pos-disclpanel-header';
		$cls_definition['CONTENTITEM_CELL_CONTENT'] = 'color-content font-content pos-disclpanel-content';
		$cls_definition['CONTENTITEM_COMPONENT_LABEL'] = 'color-content font-content contentcell-label';
		$cls_definition['CONTENTITEM_COMPONENT_CONTENT'] = 'color-content font-content contentcell-content';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Styles', $p['tuple']($bases), $data);
	})();
	$m['ContentItemComponent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(labelname, contenthtml, labelnamesuffix, ensure_labelnamesuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				labelname = arguments[1];
				contenthtml = arguments[2];
				labelnamesuffix = arguments[3];
				ensure_labelnamesuffix = arguments[4];
			}
			if (typeof labelnamesuffix == 'undefined') labelnamesuffix=arguments.callee.__args__[5][1];
			if (typeof ensure_labelnamesuffix == 'undefined') ensure_labelnamesuffix=arguments.callee.__args__[6][1];
			var $attr1,$and1,$attr2,$attr4,$add2,$add1,$attr3,$and2;
			$m['HorizontalPanel']['__init__'](self);
			if ($p['bool'](($p['bool']($and1=ensure_labelnamesuffix)?!$p['bool'](labelname['endswith'](labelnamesuffix)):$and1))) {
				labelname = $p['__op_add']($add1=labelname,$add2=labelnamesuffix);
			}
			self['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:(($attr1=($attr2=$m['Styles'])['CONTENTITEM_COMPONENT_LABEL']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'CONTENTITEM_COMPONENT_LABEL'):
						$m['Styles']['CONTENTITEM_COMPONENT_LABEL'])}, labelname]));
			self['add']($pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:(($attr3=($attr4=$m['Styles'])['CONTENTITEM_COMPONENT_CONTENT']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'CONTENTITEM_COMPONENT_CONTENT'):
						$m['Styles']['CONTENTITEM_COMPONENT_CONTENT'])}, contenthtml]));
			return null;
		}
	, 1, [null,null,['self'],['labelname'],['contenthtml'],['labelnamesuffix', ': '],['ensure_labelnamesuffix', true]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ContentItemComponent', $p['tuple']($bases), $data);
	})();
	$m['ContentItemToolbar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(contentitem, onPublish, onLike, onDislike) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				contentitem = arguments[1];
				onPublish = arguments[2];
				onLike = arguments[3];
				onDislike = arguments[4];
			}
			var $attr9,$attr8,$attr5,$attr7,$attr6,$attr14,$attr15,$attr16,$attr11,$attr10,$attr13,$attr12;
			$m['HorizontalPanel']['__init__'](self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contentitem', contentitem) : $p['setattr'](self, 'contentitem', contentitem);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('publishBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:onPublish, StyleName:(($attr5=($attr6=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Publish'])) : $p['setattr'](self, 'publishBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:onPublish, StyleName:(($attr5=($attr6=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Publish']));
			self['add']((($attr7=($attr8=self)['publishBtn']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'publishBtn'):
						self['publishBtn']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('likeBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:onLike, StyleName:(($attr9=($attr10=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'FOO'])) : $p['setattr'](self, 'likeBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:onLike, StyleName:(($attr9=($attr10=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'FOO']));
			self['add']((($attr11=($attr12=self)['likeBtn']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'likeBtn'):
						self['likeBtn']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dislikeBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:onDislike, StyleName:(($attr13=($attr14=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Dislike'])) : $p['setattr'](self, 'dislikeBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:onDislike, StyleName:(($attr13=($attr14=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Dislike']));
			self['add']((($attr15=($attr16=self)['dislikeBtn']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'dislikeBtn'):
						self['dislikeBtn']));
			self['updateStatusFromItem']();
			return null;
		}
	, 1, [null,null,['self'],['contentitem'],['onPublish'],['onLike'],['onDislike']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('updateStatusFromItem', function(updatedItem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				updatedItem = arguments[1];
			}
			if (typeof updatedItem == 'undefined') updatedItem=arguments.callee.__args__[3][1];
			var isPublished,$attr20,$attr21,$attr22,$attr23,$attr19,likes,$attr24,$attr17,$attr18;
			if ($p['bool'](updatedItem)) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contentitem', updatedItem) : $p['setattr'](self, 'contentitem', updatedItem);
			}
			likes = (($attr17=($attr18=self)['contentitem']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'contentitem'):
						self['contentitem']).__getitem__('metadata').__getitem__('likes');
			self['likeBtn']['setText']($p['sprintf']('Like (%s)', likes));
			isPublished = (($attr19=($attr20=self)['contentitem']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'contentitem'):
						self['contentitem']).__getitem__('metadata').__getitem__('is_published');
			self['publishBtn']['setStyleName'](($p['bool'](isPublished)? ((($attr21=($attr22=$m['Styles'])['TOOLBAR_BUTTON_PUBLISHED']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'TOOLBAR_BUTTON_PUBLISHED'):
						$m['Styles']['TOOLBAR_BUTTON_PUBLISHED'])) : ((($attr23=($attr24=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON']))));
			return null;
		}
	, 1, [null,null,['self'],['updatedItem', null]]);
		$cls_definition['updateStatusFromItem'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ContentItemToolbar', $p['tuple']($bases), $data);
	})();
	$m['ContentItemCell'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(contentitem, onPublish, onLike, onDislike) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				contentitem = arguments[1];
				onPublish = arguments[2];
				onLike = arguments[3];
				onDislike = arguments[4];
			}
			var $attr29,$lambda3,$lambda2,$lambda1,$attr30,$attr37,$attr26,$attr27,$attr28,$attr38,$attr25;
			$pyjs_kwargs_call($m['DisclosurePanel'], '__init__', null, null, [{header:$m['ContentItemCell']['create_title'](contentitem), isOpen:false}, self]);
			self['getHeader']()['setStyleName']((($attr25=($attr26=$m['Styles'])['CONTENTITEM_CELL_HEADER']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'CONTENTITEM_CELL_HEADER'):
						$m['Styles']['CONTENTITEM_CELL_HEADER']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:(($attr27=($attr28=$m['Styles'])['CONTENTITEM_CELL_CONTENT']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'CONTENTITEM_CELL_CONTENT'):
						$m['Styles']['CONTENTITEM_CELL_CONTENT'])}])) : $p['setattr'](self, 'panel', $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:(($attr27=($attr28=$m['Styles'])['CONTENTITEM_CELL_CONTENT']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'CONTENTITEM_CELL_CONTENT'):
						$m['Styles']['CONTENTITEM_CELL_CONTENT'])}]));
			self['add']((($attr29=($attr30=self)['panel']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'panel'):
						self['panel']));
			var 			$lambda1 = function(sndr) {
				var $attr32,$attr31;
				return onPublish(self, (($attr31=($attr32=self)['contentitem']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
							$p['getattr']($attr32, 'contentitem'):
							self['contentitem']));
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null,['sndr']];
			var 			$lambda2 = function(sndr) {
				var $attr33,$attr34;
				return onLike(self, (($attr33=($attr34=self)['contentitem']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
							$p['getattr']($attr34, 'contentitem'):
							self['contentitem']));
			};
			$lambda2.__name__ = '$lambda2';

			$lambda2.__bind_type__ = 0;
			$lambda2.__args__ = [null,null,['sndr']];
			var 			$lambda3 = function(sndr) {
				var $attr35,$attr36;
				return onDislike(self, (($attr35=($attr36=self)['contentitem']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'contentitem'):
							self['contentitem']));
			};
			$lambda3.__name__ = '$lambda3';

			$lambda3.__bind_type__ = 0;
			$lambda3.__args__ = [null,null,['sndr']];
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('toolbar', $pyjs_kwargs_call(null, $m['ContentItemToolbar'], null, null, [{onPublish:$lambda1, onLike:$lambda2, onDislike:$lambda3}, contentitem])) : $p['setattr'](self, 'toolbar', $pyjs_kwargs_call(null, $m['ContentItemToolbar'], null, null, [{onPublish:$lambda1, onLike:$lambda2, onDislike:$lambda3}, contentitem]));
			self['panel']['add']((($attr37=($attr38=self)['toolbar']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'toolbar'):
						self['toolbar']));
			self['panel']['add']($m['ContentItemComponent']('ID', contentitem.__getitem__('id')));
			self['panel']['add']($m['ContentItemComponent']('Title', contentitem.__getitem__('title')));
			self['panel']['add']($m['ContentItemComponent']('Summary', contentitem.__getitem__('summary')));
			self['panel']['add']($m['ContentItemComponent']('Author', contentitem.__getitem__('author')));
			self['panel']['add']($m['ContentItemComponent']('Datetime', self['pretty_format_datetime'](contentitem.__getitem__('datetime'))));
			self['panel']['add']($m['ContentItemComponent']('Url', $p['sprintf']('\x3Ca href=\x22%s\x22\x3E%s\x3C/a\x3E', $p['tuple']([contentitem.__getitem__('url'), contentitem.__getitem__('url')]))));
			self['panel']['add']($m['ContentItemComponent']('Categories', contentitem.__getitem__('categories')));
			self['panel']['add']($m['ContentItemComponent']('Content', contentitem.__getitem__('html')));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contentitem', contentitem) : $p['setattr'](self, 'contentitem', contentitem);
			return null;
		}
	, 1, [null,null,['self'],['contentitem'],['onPublish'],['onLike'],['onDislike']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('updateMetadata', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['toolbar']['updateStatusFromItem']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateMetadata'] = $method;
		$method = $pyjs__bind_method2('create_title', function(contentitem) {
    var cls = this.prototype;
			var dt;
			dt = contentitem.__getitem__('datetime');
			return $p['sprintf']('(%s) %s: %s', $p['tuple']([$p['slice'](dt, 0, dt['find']('T')), contentitem.__getitem__('author'), contentitem.__getitem__('title')]));
		}
	, 2, [null,null,['cls'],['contentitem']]);
		$cls_definition['create_title'] = $method;
		$method = $pyjs__bind_method2('pretty_format_datetime', function(datetimestr) {
    var cls = this.prototype;

			return datetimestr['$$replace']('T', ' ');
		}
	, 2, [null,null,['cls'],['datetimestr']]);
		$cls_definition['pretty_format_datetime'] = $method;
		var $bases = new Array($m['DisclosurePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ContentItemCell', $p['tuple']($bases), $data);
	})();
	$m['AlignedPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$cls_definition['VERTICAL'] = 0;
		$cls_definition['HORIZONTAL'] = 1;
		$method = $pyjs__bind_method2('__init__', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				align = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof align != 'undefined') {
					if (align !== null && typeof align['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = align;
						align = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof align == 'undefined') align=arguments.callee.__args__[3][1];
			var $attr39,$attr40;
			$pyjs_kwargs_call($p['$$super']($m['AlignedPanel'], self), '__init__', null, kwargs, [{}]);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', ($p['bool']($p['op_eq'](align, (($attr39=($attr40=self)['HORIZONTAL']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'HORIZONTAL'):
						self['HORIZONTAL'])))? ($m['HorizontalPanel']()) : ($m['VerticalPanel']()))) : $p['setattr'](self, 'content', ($p['bool']($p['op_eq'](align, (($attr39=($attr40=self)['HORIZONTAL']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'HORIZONTAL'):
						self['HORIZONTAL'])))? ($m['HorizontalPanel']()) : ($m['VerticalPanel']())));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['align', 0]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FlowPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AlignedPanel', $p['tuple']($bases), $data);
	})();
	$m['SortPanelButton'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(html, listener, sortkeyselector, defaultAscending) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
				listener = arguments[2];
				sortkeyselector = arguments[3];
				defaultAscending = arguments[4];
			}
			var $attr44,$attr42,$attr43,$attr41;
			$pyjs_kwargs_call($p['$$super']($m['SortPanelButton'], self), '__init__', null, null, [{StyleName:(($attr43=($attr44=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'FOO', (($attr41=($attr42=self)['_onClick']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, '_onClick'):
						self['_onClick'])]);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('origHtml', html) : $p['setattr'](self, 'origHtml', html);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sortAscending', defaultAscending) : $p['setattr'](self, 'sortAscending', defaultAscending);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('listener', listener) : $p['setattr'](self, 'listener', listener);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sortKeySelector', sortkeyselector) : $p['setattr'](self, 'sortKeySelector', sortkeyselector);
			self['_refreshText']();
			return null;
		}
	, 1, [null,null,['self'],['html'],['listener'],['sortkeyselector'],['defaultAscending']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $attr46,$attr45;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sortAscending', !$p['bool']((($attr45=($attr46=self)['sortAscending']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'sortAscending'):
						self['sortAscending']))) : $p['setattr'](self, 'sortAscending', !$p['bool']((($attr45=($attr46=self)['sortAscending']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'sortAscending'):
						self['sortAscending'])));
			self['_refreshText']();
			self['listener'](self);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['_onClick'] = $method;
		$method = $pyjs__bind_method2('_refreshText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr47,$attr50,$attr48,$attr49;
			self['setText']($p['sprintf']('%s (%s)', $p['tuple']([(($attr47=($attr48=self)['origHtml']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'origHtml'):
						self['origHtml']), ($p['bool']((($attr49=($attr50=self)['sortAscending']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'sortAscending'):
						self['sortAscending']))? ('Asc') : ('Dsc'))])));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_refreshText'] = $method;
		var $bases = new Array($m['Button']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SortPanelButton', $p['tuple']($bases), $data);
	})();
	$m['SortPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$cls_definition['buttonStates'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function(onSort, align) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				onSort = arguments[1];
				align = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof align != 'undefined') {
					if (align !== null && typeof align['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = align;
						align = arguments[3];
					}
				} else 				if (typeof onSort != 'undefined') {
					if (onSort !== null && typeof onSort['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = onSort;
						onSort = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof onSort == 'undefined') onSort=arguments.callee.__args__[3][1];
			if (typeof align == 'undefined') align=arguments.callee.__args__[4][1];
			var $lambda7,$lambda5,$lambda4,$attr69,$attr58,$attr51,$attr53,$attr52,$attr54,$attr57,$attr61,$lambda6,$attr62,$attr65,$attr70,$attr66;
			$pyjs_kwargs_call($p['$$super']($m['SortPanel'], self), '__init__', null, kwargs, [{}, align]);
			self['content']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:(($attr51=($attr52=$m['Styles'])['TOOLBAR_TEXT']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'TOOLBAR_TEXT'):
						$m['Styles']['TOOLBAR_TEXT'])}, 'Sort By:']));
			var 			$lambda4 = function(cic) {
				var $attr55,$attr56;
				return (($attr55=($attr56=cic)['contentitem']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
							$p['getattr']($attr56, 'contentitem'):
							cic['contentitem']).__getitem__('datetime');
			};
			$lambda4.__name__ = '$lambda4';

			$lambda4.__bind_type__ = 0;
			$lambda4.__args__ = [null,null,['cic']];
			self['content']['add']($m['SortPanelButton']('Date', (($attr53=($attr54=self)['_onBtnClick']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, '_onBtnClick'):
						self['_onBtnClick']), $lambda4, false));
			var 			$lambda5 = function(cic) {
				var $attr59,$attr60;
				return (($attr59=($attr60=cic)['contentitem']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
							$p['getattr']($attr60, 'contentitem'):
							cic['contentitem']).__getitem__('author');
			};
			$lambda5.__name__ = '$lambda5';

			$lambda5.__bind_type__ = 0;
			$lambda5.__args__ = [null,null,['cic']];
			self['content']['add']($m['SortPanelButton']('Author', (($attr57=($attr58=self)['_onBtnClick']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, '_onBtnClick'):
						self['_onBtnClick']), $lambda5, true));
			var 			$lambda6 = function(cic) {
				var $attr64,$attr63;
				return (($attr63=($attr64=cic)['contentitem']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
							$p['getattr']($attr64, 'contentitem'):
							cic['contentitem']).__getitem__('title');
			};
			$lambda6.__name__ = '$lambda6';

			$lambda6.__bind_type__ = 0;
			$lambda6.__args__ = [null,null,['cic']];
			self['content']['add']($m['SortPanelButton']('Title', (($attr61=($attr62=self)['_onBtnClick']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, '_onBtnClick'):
						self['_onBtnClick']), $lambda6, true));
			var 			$lambda7 = function(cic) {
				var $attr67,$attr68;
				return (($attr67=($attr68=cic)['contentitem']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
							$p['getattr']($attr68, 'contentitem'):
							cic['contentitem']).__getitem__('metadata').__getitem__('likes');
			};
			$lambda7.__name__ = '$lambda7';

			$lambda7.__bind_type__ = 0;
			$lambda7.__args__ = [null,null,['cic']];
			self['content']['add']($m['SortPanelButton']('Likes', (($attr65=($attr66=self)['_onBtnClick']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, '_onBtnClick'):
						self['_onBtnClick']), $lambda7, false));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sortDelegate', onSort) : $p['setattr'](self, 'sortDelegate', onSort);
			self['add']((($attr69=($attr70=self)['content']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'content'):
						self['content']));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['onSort', null],['align', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_onBtnClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $attr74,$attr73,$attr72,$attr71;
			self['sortDelegate'](sender, (($attr71=($attr72=sender)['sortKeySelector']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'sortKeySelector'):
						sender['sortKeySelector']), (($attr73=($attr74=sender)['sortAscending']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
						$p['getattr']($attr74, 'sortAscending'):
						sender['sortAscending']));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['_onBtnClick'] = $method;
		var $bases = new Array($m['AlignedPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SortPanel', $p['tuple']($bases), $data);
	})();
	$m['FilterFeedPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(onFilter, align) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				onFilter = arguments[1];
				align = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof align != 'undefined') {
					if (align !== null && typeof align['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = align;
						align = arguments[3];
					}
				} else 				if (typeof onFilter != 'undefined') {
					if (onFilter !== null && typeof onFilter['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = onFilter;
						onFilter = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof onFilter == 'undefined') onFilter=arguments.callee.__args__[3][1];
			if (typeof align == 'undefined') align=arguments.callee.__args__[4][1];
			var $lambda9,$lambda8,$lambda11,$lambda10,$attr82,$attr81,$attr86,$attr85,$attr89,$attr95,$attr94,$attr96,$attr90,$attr93,$attr78,$attr77,$attr76,tbstyle,$attr75;
			$pyjs_kwargs_call($p['$$super']($m['FilterFeedPanel'], self), '__init__', null, kwargs, [{}, align]);
			self['content']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{wordWrap:false, StyleName:(($attr75=($attr76=$m['Styles'])['TOOLBAR_TEXT']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'TOOLBAR_TEXT'):
						$m['Styles']['TOOLBAR_TEXT'])}, 'Hide Feeds:']));
			tbstyle = $p['dict']([['StyleName', (($attr77=($attr78=$m['Styles'])['TOOLBAR_TOGGLEBUTTON']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'TOOLBAR_TOGGLEBUTTON'):
						$m['Styles']['TOOLBAR_TOGGLEBUTTON'])]]);
			var 			$lambda8 = function(sndr) {
				var $attr80,$attr79;
				return onFilter(sndr, (($attr79=($attr80=self)['_filterPredicate']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
							$p['getattr']($attr80, '_filterPredicate'):
							self['_filterPredicate']));
			};
			$lambda8.__name__ = '$lambda8';

			$lambda8.__bind_type__ = 0;
			$lambda8.__args__ = [null,null,['sndr']];
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('twitbtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda8}, 'Twitter'])) : $p['setattr'](self, 'twitbtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda8}, 'Twitter']));
			self['content']['add']((($attr81=($attr82=self)['twitbtn']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'twitbtn'):
						self['twitbtn']));
			var 			$lambda9 = function(sndr) {
				var $attr83,$attr84;
				return onFilter(sndr, (($attr83=($attr84=self)['_filterPredicate']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
							$p['getattr']($attr84, '_filterPredicate'):
							self['_filterPredicate']));
			};
			$lambda9.__name__ = '$lambda9';

			$lambda9.__bind_type__ = 0;
			$lambda9.__args__ = [null,null,['sndr']];
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blogbtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda9}, 'Blogs'])) : $p['setattr'](self, 'blogbtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda9}, 'Blogs']));
			self['content']['add']((($attr85=($attr86=self)['blogbtn']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
						$p['getattr']($attr86, 'blogbtn'):
						self['blogbtn']));
			var 			$lambda10 = function(sndr) {
				var $attr88,$attr87;
				return onFilter(sndr, (($attr87=($attr88=self)['_filterPredicate']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
							$p['getattr']($attr88, '_filterPredicate'):
							self['_filterPredicate']));
			};
			$lambda10.__name__ = '$lambda10';

			$lambda10.__bind_type__ = 0;
			$lambda10.__args__ = [null,null,['sndr']];
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pubbtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda10}, 'Published'])) : $p['setattr'](self, 'pubbtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda10}, 'Published']));
			self['content']['add']((($attr89=($attr90=self)['pubbtn']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'pubbtn'):
						self['pubbtn']));
			var 			$lambda11 = function(sndr) {
				var $attr91,$attr92;
				return onFilter(sndr, (($attr91=($attr92=self)['_filterPredicate']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
							$p['getattr']($attr92, '_filterPredicate'):
							self['_filterPredicate']));
			};
			$lambda11.__name__ = '$lambda11';

			$lambda11.__bind_type__ = 0;
			$lambda11.__args__ = [null,null,['sndr']];
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dislikebtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda11}, 'Disliked'])) : $p['setattr'](self, 'dislikebtn', $pyjs_kwargs_call(null, $m['ToggleButton'], null, tbstyle, [{handler:$lambda11}, 'Disliked']));
			self['content']['add']((($attr93=($attr94=self)['dislikebtn']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
						$p['getattr']($attr94, 'dislikebtn'):
						self['dislikebtn']));
			self['add']((($attr95=($attr96=self)['content']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
						$p['getattr']($attr96, 'content'):
						self['content']));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['onFilter', null],['align', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_filterPredicate', function(contentitemcell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				contentitemcell = arguments[1];
			}
			var $attr97,$attr99,$attr98,ispublished,$attr102,istwi,$attr100,$attr101,isblog,disliked,result;
			result = true;
			if ($p['bool'](self['twitbtn']['isDown']())) {
				istwi = (($attr97=($attr98=contentitemcell)['contentitem']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
							$p['getattr']($attr98, 'contentitem'):
							contentitemcell['contentitem']).__getitem__('url').__contains__('twitter.com');
				result &= !$p['bool'](istwi);
			}
			if ($p['bool'](self['blogbtn']['isDown']())) {
				isblog = true;
				result &= !$p['bool'](isblog);
			}
			if ($p['bool'](self['pubbtn']['isDown']())) {
				ispublished = (($attr99=($attr100=contentitemcell)['contentitem']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
							$p['getattr']($attr100, 'contentitem'):
							contentitemcell['contentitem']).__getitem__('metadata').__getitem__('is_published');
				result &= !$p['bool'](ispublished);
			}
			if ($p['bool'](self['dislikebtn']['isDown']())) {
				disliked = ($p['cmp']((($attr101=($attr102=contentitemcell)['contentitem']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
							$p['getattr']($attr102, 'contentitem'):
							contentitemcell['contentitem']).__getitem__('metadata').__getitem__('likes'), 0) == -1);
				result &= !$p['bool'](disliked);
			}
			return result;
		}
	, 1, [null,null,['self'],['contentitemcell']]);
		$cls_definition['_filterPredicate'] = $method;
		var $bases = new Array($m['AlignedPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FilterFeedPanel', $p['tuple']($bases), $data);
	})();
	$m['HorizontalToolbar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(onRequestMore, onCollapseAll, onExpandAll, onSort) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				onRequestMore = arguments[1];
				onCollapseAll = arguments[2];
				onExpandAll = arguments[3];
				onSort = arguments[4];
			}
			if (typeof onRequestMore == 'undefined') onRequestMore=arguments.callee.__args__[3][1];
			if (typeof onCollapseAll == 'undefined') onCollapseAll=arguments.callee.__args__[4][1];
			if (typeof onExpandAll == 'undefined') onExpandAll=arguments.callee.__args__[5][1];
			if (typeof onSort == 'undefined') onSort=arguments.callee.__args__[6][1];
			var $attr120,$attr121,$attr122,$attr106,$attr107,$attr104,$attr105,$attr103,$attr108,$attr109,$attr118,$attr119,$attr111,$attr110,$attr113,$attr112,$attr115,$attr114,$attr117,$attr116;
			$pyjs_kwargs_call($p['$$super']($m['HorizontalToolbar'], self), '__init__', null, null, [{StyleName:(($attr103=($attr104=$m['Styles'])['TOOLBAR_HORIZONTAL']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
						$p['getattr']($attr104, 'TOOLBAR_HORIZONTAL'):
						$m['Styles']['TOOLBAR_HORIZONTAL'])}]);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', $m['HorizontalPanel']()) : $p['setattr'](self, 'content', $m['HorizontalPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('requestMoreButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:(($attr105=($attr106=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
						$p['getattr']($attr106, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'More', onRequestMore])) : $p['setattr'](self, 'requestMoreButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:(($attr105=($attr106=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
						$p['getattr']($attr106, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'More', onRequestMore]));
			self['content']['add']((($attr107=($attr108=self)['requestMoreButton']) == null || (($attr108.__is_instance__) && typeof $attr107 == 'function') || (typeof $attr107['__get__'] == 'function')?
						$p['getattr']($attr108, 'requestMoreButton'):
						self['requestMoreButton']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('itemsShowingLabel', $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:(($attr109=($attr110=$m['Styles'])['TOOLBAR_TEXT']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'TOOLBAR_TEXT'):
						$m['Styles']['TOOLBAR_TEXT'])}])) : $p['setattr'](self, 'itemsShowingLabel', $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:(($attr109=($attr110=$m['Styles'])['TOOLBAR_TEXT']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'TOOLBAR_TEXT'):
						$m['Styles']['TOOLBAR_TEXT'])}]));
			self['content']['add']((($attr111=($attr112=self)['itemsShowingLabel']) == null || (($attr112.__is_instance__) && typeof $attr111 == 'function') || (typeof $attr111['__get__'] == 'function')?
						$p['getattr']($attr112, 'itemsShowingLabel'):
						self['itemsShowingLabel']));
			self['setNumberOfItemsShowingText'](0, 0);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('collapseAllButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:(($attr113=($attr114=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr114.__is_instance__) && typeof $attr113 == 'function') || (typeof $attr113['__get__'] == 'function')?
						$p['getattr']($attr114, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Collapse All', onCollapseAll])) : $p['setattr'](self, 'collapseAllButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:(($attr113=($attr114=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr114.__is_instance__) && typeof $attr113 == 'function') || (typeof $attr113['__get__'] == 'function')?
						$p['getattr']($attr114, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Collapse All', onCollapseAll]));
			self['content']['add']((($attr115=($attr116=self)['collapseAllButton']) == null || (($attr116.__is_instance__) && typeof $attr115 == 'function') || (typeof $attr115['__get__'] == 'function')?
						$p['getattr']($attr116, 'collapseAllButton'):
						self['collapseAllButton']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('expandAllButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:(($attr117=($attr118=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr118.__is_instance__) && typeof $attr117 == 'function') || (typeof $attr117['__get__'] == 'function')?
						$p['getattr']($attr118, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Expand All', onExpandAll])) : $p['setattr'](self, 'expandAllButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:(($attr117=($attr118=$m['Styles'])['TOOLBAR_BUTTON']) == null || (($attr118.__is_instance__) && typeof $attr117 == 'function') || (typeof $attr117['__get__'] == 'function')?
						$p['getattr']($attr118, 'TOOLBAR_BUTTON'):
						$m['Styles']['TOOLBAR_BUTTON'])}, 'Expand All', onExpandAll]));
			self['content']['add']((($attr119=($attr120=self)['expandAllButton']) == null || (($attr120.__is_instance__) && typeof $attr119 == 'function') || (typeof $attr119['__get__'] == 'function')?
						$p['getattr']($attr120, 'expandAllButton'):
						self['expandAllButton']));
			if ($p['bool'](onSort)) {
				self['content']['add']($m['SortPanel'](onSort));
			}
			self['setWidget']((($attr121=($attr122=self)['content']) == null || (($attr122.__is_instance__) && typeof $attr121 == 'function') || (typeof $attr121['__get__'] == 'function')?
						$p['getattr']($attr122, 'content'):
						self['content']));
			return null;
		}
	, 1, [null,null,['self'],['onRequestMore', null],['onCollapseAll', null],['onExpandAll', null],['onSort', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setNumberOfItemsShowingText', function(number, total) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				number = arguments[1];
				total = arguments[2];
			}

			self['itemsShowingLabel']['setText']($p['sprintf']('Showing %s of %s total items.', $p['tuple']([number, total])));
			return null;
		}
	, 1, [null,null,['self'],['number'],['total']]);
		$cls_definition['setNumberOfItemsShowingText'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HorizontalToolbar', $p['tuple']($bases), $data);
	})();
	$m['SideVerticalToolbar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(onSort, onFilter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				onSort = arguments[1];
				onFilter = arguments[2];
			}
			if (typeof onSort == 'undefined') onSort=arguments.callee.__args__[3][1];
			if (typeof onFilter == 'undefined') onFilter=arguments.callee.__args__[4][1];
			var $attr123,$attr124;
			$pyjs_kwargs_call($p['$$super']($m['SideVerticalToolbar'], self), '__init__', null, null, [{StyleName:(($attr123=($attr124=$m['Styles'])['TOOLBAR_VERTICAL']) == null || (($attr124.__is_instance__) && typeof $attr123 == 'function') || (typeof $attr123['__get__'] == 'function')?
						$p['getattr']($attr124, 'TOOLBAR_VERTICAL'):
						$m['Styles']['TOOLBAR_VERTICAL'])}]);
			if ($p['bool'](onSort)) {
				self['add']($m['SortPanel'](onSort));
			}
			if ($p['bool'](onFilter)) {
				self['add']($m['FilterFeedPanel'](onFilter));
			}
			return null;
		}
	, 1, [null,null,['self'],['onSort', null],['onFilter', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SideVerticalToolbar', $p['tuple']($bases), $data);
	})();
	$m['ContentPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function(onItemPublish, onItemLike, onItemDislike, onSort, onFilter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				onItemPublish = arguments[1];
				onItemLike = arguments[2];
				onItemDislike = arguments[3];
				onSort = arguments[4];
				onFilter = arguments[5];
			}
			if (typeof onSort == 'undefined') onSort=arguments.callee.__args__[6][1];
			if (typeof onFilter == 'undefined') onFilter=arguments.callee.__args__[7][1];
			var $attr129,$attr132,text,$attr131,$attr130,$attr125,$attr126,$attr127,$attr128;
			$p['$$super']($m['ContentPanel'], self)['__init__']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('newItemArgs', $p['dict']([['onPublish', onItemPublish], ['onLike', onItemLike], ['onDislike', onItemDislike]])) : $p['setattr'](self, 'newItemArgs', $p['dict']([['onPublish', onItemPublish], ['onLike', onItemLike], ['onDislike', onItemDislike]]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sidebar', $pyjs_kwargs_call(null, $m['SideVerticalToolbar'], null, null, [{onSort:onSort, onFilter:onFilter}])) : $p['setattr'](self, 'sidebar', $pyjs_kwargs_call(null, $m['SideVerticalToolbar'], null, null, [{onSort:onSort, onFilter:onFilter}]));
			text = '\x3Cbr\x3E'['join']($p['list']('More Tools'));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sidebarEdge', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr125=($attr126=self)['onSidebarEdgeClick']) == null || (($attr126.__is_instance__) && typeof $attr125 == 'function') || (typeof $attr125['__get__'] == 'function')?
						$p['getattr']($attr126, 'onSidebarEdgeClick'):
						self['onSidebarEdgeClick']), StyleName:(($attr127=($attr128=$m['Styles'])['TOOLBAR_VERTICALEDGE']) == null || (($attr128.__is_instance__) && typeof $attr127 == 'function') || (typeof $attr127['__get__'] == 'function')?
						$p['getattr']($attr128, 'TOOLBAR_VERTICALEDGE'):
						$m['Styles']['TOOLBAR_VERTICALEDGE'])}, text])) : $p['setattr'](self, 'sidebarEdge', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr125=($attr126=self)['onSidebarEdgeClick']) == null || (($attr126.__is_instance__) && typeof $attr125 == 'function') || (typeof $attr125['__get__'] == 'function')?
						$p['getattr']($attr126, 'onSidebarEdgeClick'):
						self['onSidebarEdgeClick']), StyleName:(($attr127=($attr128=$m['Styles'])['TOOLBAR_VERTICALEDGE']) == null || (($attr128.__is_instance__) && typeof $attr127 == 'function') || (typeof $attr127['__get__'] == 'function')?
						$p['getattr']($attr128, 'TOOLBAR_VERTICALEDGE'):
						$m['Styles']['TOOLBAR_VERTICALEDGE'])}, text]));
			self['add']((($attr129=($attr130=self)['sidebarEdge']) == null || (($attr130.__is_instance__) && typeof $attr129 == 'function') || (typeof $attr129['__get__'] == 'function')?
						$p['getattr']($attr130, 'sidebarEdge'):
						self['sidebarEdge']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contentpanel', $m['VerticalPanel']()) : $p['setattr'](self, 'contentpanel', $m['VerticalPanel']());
			self['add']((($attr131=($attr132=self)['contentpanel']) == null || (($attr132.__is_instance__) && typeof $attr131 == 'function') || (typeof $attr131['__get__'] == 'function')?
						$p['getattr']($attr132, 'contentpanel'):
						self['contentpanel']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('allContentCells', $p['list']([])) : $p['setattr'](self, 'allContentCells', $p['list']([]));
			return null;
		}
	, 1, [null,null,['self'],['onItemPublish'],['onItemLike'],['onItemDislike'],['onSort', null],['onFilter', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getAllContentItemCells', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var widg,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,$iter2_idx,$iter2_nextval,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration'];
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && e === $p['StopIteration']) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration'];
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit'];
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter2_iter = self['contentpanel']['getChildren']();
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							widg = $iter2_nextval.$nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']($p['isinstance'](widg, $m['ContentItemCell']))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$yield_value = widg;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAllContentItemCells'] = $method;
		$method = $pyjs__bind_method2('addItems', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}
			var $iter3_idx,$attr134,$iter3_type,$attr133,item,widg,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = items;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				item = $iter3_nextval.$nextval;
				widg = $pyjs_kwargs_call(null, $m['ContentItemCell'], null, (($attr133=($attr134=self)['newItemArgs']) == null || (($attr134.__is_instance__) && typeof $attr133 == 'function') || (typeof $attr133['__get__'] == 'function')?
							$p['getattr']($attr134, 'newItemArgs'):
							self['newItemArgs']), [{}, item]);
				self['contentpanel']['add'](widg);
				self['allContentCells']['append'](widg);
			}
			return null;
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['addItems'] = $method;
		$method = $pyjs__bind_method2('itemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr136,$attr135;
			return $p['len']((($attr135=($attr136=self)['allContentCells']) == null || (($attr136.__is_instance__) && typeof $attr135 == 'function') || (typeof $attr135['__get__'] == 'function')?
						$p['getattr']($attr136, 'allContentCells'):
						self['allContentCells']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['itemCount'] = $method;
		$method = $pyjs__bind_method2('onSidebarEdgeClick', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr140,$attr138,$attr137,$attr139;
			if ($p['bool']((($attr137=($attr138=self['sidebar'])['parent']) == null || (($attr138.__is_instance__) && typeof $attr137 == 'function') || (typeof $attr137['__get__'] == 'function')?
						$p['getattr']($attr138, 'parent'):
						self['sidebar']['parent']))) {
				self['sidebar']['removeFromParent']();
			}
			else {
				self['insert']((($attr139=($attr140=self)['sidebar']) == null || (($attr140.__is_instance__) && typeof $attr139 == 'function') || (typeof $attr139['__get__'] == 'function')?
							$p['getattr']($attr140, 'sidebar'):
							self['sidebar']), 0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onSidebarEdgeClick'] = $method;
		$method = $pyjs__bind_method2('setItemsOpenState', function(state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}
			var cell,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = self['_getAllContentItemCells']();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				cell = $iter4_nextval.$nextval;
				cell['setOpen'](state);
			}
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setItemsOpenState'] = $method;
		$method = $pyjs__bind_method2('sortItems', function(keyselector, ascending) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				keyselector = arguments[1];
				ascending = arguments[2];
			}
			var $iter5_nextval,$iter5_idx,sall,$iter5_array,child,allchildren,$iter5_iter,$iter5_type;
			allchildren = $p['list'](self['contentpanel']['getChildren']());
			self['contentpanel']['clear']();
			sall = $pyjs_kwargs_call(null, $p['sorted'], null, null, [{key:keyselector}, allchildren]);
			if ($p['bool'](!$p['bool'](ascending))) {
				sall = $p['reversed'](sall);
			}
			$iter5_iter = sall;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				child = $iter5_nextval.$nextval;
				self['contentpanel']['add'](child);
			}
			return null;
		}
	, 1, [null,null,['self'],['keyselector'],['ascending']]);
		$cls_definition['sortItems'] = $method;
		$method = $pyjs__bind_method2('filterItems', function(predicate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				predicate = arguments[1];
			}
			var $iter7_nextval,$iter7_iter,$iter7_array,cellsToShow,cell,$iter7_idx,$iter7_type;
			self['contentpanel']['clear']();
			cellsToShow = function(){
				var cell,$iter6_idx,$iter6_type,$listcomp1,$iter6_array,$iter6_iter,$iter6_nextval;
	$listcomp1 = $p['list']();
			$iter6_iter = self['allContentCells'];
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				cell = $iter6_nextval.$nextval;
				if ($p['bool'](predicate(cell))) {
					$listcomp1['append'](cell);
				}
			}

	return $listcomp1;}();
			$iter7_iter = cellsToShow;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				cell = $iter7_nextval.$nextval;
				self['contentpanel']['add'](cell);
			}
			return null;
		}
	, 1, [null,null,['self'],['predicate']]);
		$cls_definition['filterItems'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ContentPanel', $p['tuple']($bases), $data);
	})();
	$m['PublisherPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda13,$attr151,$attr147,$attr153,$attr152,$attr149,$attr154,createToolbar,$lambda12,botbar,$lambda14,topbar,$attr148,$attr150;
			$m['VerticalPanel']['__init__'](self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('remoteproxy', (typeof JsonTaoggregatorService == "undefined"?$m.JsonTaoggregatorService:JsonTaoggregatorService)()) : $p['setattr'](self, 'remoteproxy', (typeof JsonTaoggregatorService == "undefined"?$m.JsonTaoggregatorService:JsonTaoggregatorService)());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('totalitemcount', 0) : $p['setattr'](self, 'totalitemcount', 0);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('idToCallbackMap', $p['dict']([])) : $p['setattr'](self, 'idToCallbackMap', $p['dict']([]));
			var 			$lambda12 = function() {
				var $attr142,$attr143,$attr141,$attr146,$attr144,$attr145;
				return $m['HorizontalToolbar']((($attr141=($attr142=self)['onRequestMore']) == null || (($attr142.__is_instance__) && typeof $attr141 == 'function') || (typeof $attr141['__get__'] == 'function')?
							$p['getattr']($attr142, 'onRequestMore'):
							self['onRequestMore']), (($attr143=($attr144=self)['onCollapseAll']) == null || (($attr144.__is_instance__) && typeof $attr143 == 'function') || (typeof $attr143['__get__'] == 'function')?
							$p['getattr']($attr144, 'onCollapseAll'):
							self['onCollapseAll']), (($attr145=($attr146=self)['onExpandAll']) == null || (($attr146.__is_instance__) && typeof $attr145 == 'function') || (typeof $attr145['__get__'] == 'function')?
							$p['getattr']($attr146, 'onExpandAll'):
							self['onExpandAll']));
			};
			$lambda12.__name__ = '$lambda12';

			$lambda12.__bind_type__ = 0;
			$lambda12.__args__ = [null,null];
			createToolbar = $lambda12;
			topbar = createToolbar();
			self['add'](topbar);
			var 			$lambda13 = function(sen, ci) {

				return self['onCIAdjustLike'](sen, ci, 1);
			};
			$lambda13.__name__ = '$lambda13';

			$lambda13.__bind_type__ = 0;
			$lambda13.__args__ = [null,null,['sen'],['ci']];
			var 			$lambda14 = function(sen, ci) {

				return self['onCIAdjustLike'](sen, ci, (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
			};
			$lambda14.__name__ = '$lambda14';

			$lambda14.__bind_type__ = 0;
			$lambda14.__args__ = [null,null,['sen'],['ci']];
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contentpanel', $m['ContentPanel']((($attr147=($attr148=self)['onCIPublish']) == null || (($attr148.__is_instance__) && typeof $attr147 == 'function') || (typeof $attr147['__get__'] == 'function')?
						$p['getattr']($attr148, 'onCIPublish'):
						self['onCIPublish']), $lambda13, $lambda14, (($attr149=($attr150=self)['onSort']) == null || (($attr150.__is_instance__) && typeof $attr149 == 'function') || (typeof $attr149['__get__'] == 'function')?
						$p['getattr']($attr150, 'onSort'):
						self['onSort']), (($attr151=($attr152=self)['onFilter']) == null || (($attr152.__is_instance__) && typeof $attr151 == 'function') || (typeof $attr151['__get__'] == 'function')?
						$p['getattr']($attr152, 'onFilter'):
						self['onFilter']))) : $p['setattr'](self, 'contentpanel', $m['ContentPanel']((($attr147=($attr148=self)['onCIPublish']) == null || (($attr148.__is_instance__) && typeof $attr147 == 'function') || (typeof $attr147['__get__'] == 'function')?
						$p['getattr']($attr148, 'onCIPublish'):
						self['onCIPublish']), $lambda13, $lambda14, (($attr149=($attr150=self)['onSort']) == null || (($attr150.__is_instance__) && typeof $attr149 == 'function') || (typeof $attr149['__get__'] == 'function')?
						$p['getattr']($attr150, 'onSort'):
						self['onSort']), (($attr151=($attr152=self)['onFilter']) == null || (($attr152.__is_instance__) && typeof $attr151 == 'function') || (typeof $attr151['__get__'] == 'function')?
						$p['getattr']($attr152, 'onFilter'):
						self['onFilter'])));
			self['add']((($attr153=($attr154=self)['contentpanel']) == null || (($attr154.__is_instance__) && typeof $attr153 == 'function') || (typeof $attr153['__get__'] == 'function')?
						$p['getattr']($attr154, 'contentpanel'):
						self['contentpanel']));
			botbar = createToolbar();
			self['add'](botbar);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horiztoolbars', $p['list']([topbar, botbar])) : $p['setattr'](self, 'horiztoolbars', $p['list']([topbar, botbar]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastOnSortArgs', null) : $p['setattr'](self, 'lastOnSortArgs', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastOnFilterArgs', null) : $p['setattr'](self, 'lastOnFilterArgs', null);
			self['requestDownloadedContentCount']();
			self['onRequestMore'](null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onRequestMore', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var number,startind;
			$m['logpanel']['log']('More items being requested.');
			startind = $p['float_int'](self['contentpanel']['itemCount']());
			number = 15;
			$m['logpanel']['log']($p['sprintf']('Requesting item slice, starting at %s with length of %s.', $p['tuple']([startind, number])));
			self['remoteproxy']['request_content_slice'](self, startind, number);
			$m['logpanel']['log']('Request sent.');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onRequestMore'] = $method;
		$method = $pyjs__bind_method2('onExpandAll', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$m['logpanel']['log']('Expanding all items.');
			self['contentpanel']['setItemsOpenState'](true);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onExpandAll'] = $method;
		$method = $pyjs__bind_method2('onCollapseAll', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$m['logpanel']['log']('Collapsing all items.');
			self['contentpanel']['setItemsOpenState'](false);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onCollapseAll'] = $method;
		$method = $pyjs__bind_method2('onSort', function(sender, keyselector, ascending) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyselector = arguments[2];
				ascending = arguments[3];
			}

			$m['logpanel']['log']($p['sprintf']('Sorting %s by %s', $p['tuple']([($p['bool'](ascending)? ('asc') : ('dsc')), keyselector])));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastOnSortArgs', $p['tuple']([sender, keyselector, ascending])) : $p['setattr'](self, 'lastOnSortArgs', $p['tuple']([sender, keyselector, ascending]));
			self['contentpanel']['sortItems'](keyselector, ascending);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyselector'],['ascending']]);
		$cls_definition['onSort'] = $method;
		$method = $pyjs__bind_method2('onFilter', function(sender, predicate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				predicate = arguments[2];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastFilterPredicate', predicate) : $p['setattr'](self, 'lastFilterPredicate', predicate);
			self['filterUsingFilterArgs']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['predicate']]);
		$cls_definition['onFilter'] = $method;
		$method = $pyjs__bind_method2('filterUsingFilterArgs', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr155,$attr156,$attr157,$attr158;
			$m['logpanel']['log']($p['sprintf']('Filtering by %s', (($attr155=($attr156=self)['lastFilterPredicate']) == null || (($attr156.__is_instance__) && typeof $attr155 == 'function') || (typeof $attr155['__get__'] == 'function')?
						$p['getattr']($attr156, 'lastFilterPredicate'):
						self['lastFilterPredicate'])));
			self['contentpanel']['filterItems']((($attr157=($attr158=self)['lastFilterPredicate']) == null || (($attr158.__is_instance__) && typeof $attr157 == 'function') || (typeof $attr157['__get__'] == 'function')?
						$p['getattr']($attr158, 'lastFilterPredicate'):
						self['lastFilterPredicate']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['filterUsingFilterArgs'] = $method;
		$method = $pyjs__bind_method2('onCIPublish', function(sender, contentitem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				contentitem = arguments[2];
			}
			var $attr159,$attr160,id;
			$m['logpanel']['log']($p['sprintf']('Publish requested: %s', contentitem));
			id = self['remoteproxy']['publish_content'](self, contentitem);
			(($attr159=($attr160=self)['idToCallbackMap']) == null || (($attr160.__is_instance__) && typeof $attr159 == 'function') || (typeof $attr159['__get__'] == 'function')?
						$p['getattr']($attr160, 'idToCallbackMap'):
						self['idToCallbackMap']).__setitem__(id, sender);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['contentitem']]);
		$cls_definition['onCIPublish'] = $method;
		$method = $pyjs__bind_method2('onCIAdjustLike', function(sender, contentitem, amount) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				contentitem = arguments[2];
				amount = arguments[3];
			}
			var $attr161,$attr162,id;
			$m['logpanel']['log']($p['sprintf']('Promote requested: %s', contentitem));
			id = self['remoteproxy']['adjust_likes'](self, contentitem, amount);
			(($attr161=($attr162=self)['idToCallbackMap']) == null || (($attr162.__is_instance__) && typeof $attr161 == 'function') || (typeof $attr161['__get__'] == 'function')?
						$p['getattr']($attr162, 'idToCallbackMap'):
						self['idToCallbackMap']).__setitem__(id, sender);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['contentitem'],['amount']]);
		$cls_definition['onCIAdjustLike'] = $method;
		$method = $pyjs__bind_method2('requestDownloadedContentCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['logpanel']['log']('Requesting downloaded content count.');
			self['remoteproxy']['downloadedcontent_count'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['requestDownloadedContentCount'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr196,$iter8_array,$iter8_iter,$iter9_array,$attr168,$attr169,$iter9_iter,$attr164,$attr165,$attr166,$attr167,$iter9_nextval,$iter9_idx,$attr163,$iter9_type,decoded,$iter8_idx,$attr188,$attr189,$attr186,$attr187,$iter8_type,$attr185,$attr182,$attr183,$attr180,$attr181,$attr184,$iter8_nextval,toolbar,$attr179,$attr178,$attr177,$attr176,$attr174,$attr173,$attr172,$attr171,$attr170,cellsender,$attr175;
			$m['logpanel']['log']('Remote response received.');
			$m['logpanel']['log']($p['sprintf']('RequestInfo: id: %s, method: %s, handler: %s', $p['tuple']([(($attr163=($attr164=request_info)['id']) == null || (($attr164.__is_instance__) && typeof $attr163 == 'function') || (typeof $attr163['__get__'] == 'function')?
						$p['getattr']($attr164, 'id'):
						request_info['id']), (($attr165=($attr166=request_info)['method']) == null || (($attr166.__is_instance__) && typeof $attr165 == 'function') || (typeof $attr165['__get__'] == 'function')?
						$p['getattr']($attr166, 'method'):
						request_info['method']), (($attr167=($attr168=request_info)['handler']) == null || (($attr168.__is_instance__) && typeof $attr167 == 'function') || (typeof $attr167['__get__'] == 'function')?
						$p['getattr']($attr168, 'handler'):
						request_info['handler'])])));
			if ($p['bool'](response)) {
				$m['logpanel']['log']($p['sprintf']('Response: len=%s, str=%s', $p['tuple']([$p['len']($p['str'](response)), $p['str'](response)])));
			}
			else {
				$m['logpanel']['log']('Response: Empty/None');
			}
			decoded = $m['jsonparser']['decode'](response);
			$m['logpanel']['log']($p['sprintf']('Decoded into: %s', $p['str'](decoded)));
			if ($p['bool']($p['tuple'](['request_content_slice']).__contains__((($attr169=($attr170=request_info)['method']) == null || (($attr170.__is_instance__) && typeof $attr169 == 'function') || (typeof $attr169['__get__'] == 'function')?
						$p['getattr']($attr170, 'method'):
						request_info['method'])))) {
				$m['logpanel']['log']('Adding items to contentpanel.');
				self['contentpanel']['addItems'](decoded);
				if ($p['bool']((($attr171=($attr172=self)['lastOnFilterArgs']) == null || (($attr172.__is_instance__) && typeof $attr171 == 'function') || (typeof $attr171['__get__'] == 'function')?
							$p['getattr']($attr172, 'lastOnFilterArgs'):
							self['lastOnFilterArgs']))) {
					$pyjs_kwargs_call(self, 'onFilter', (($attr173=($attr174=self)['lastOnFilterArgs']) == null || (($attr174.__is_instance__) && typeof $attr173 == 'function') || (typeof $attr173['__get__'] == 'function')?
								$p['getattr']($attr174, 'lastOnFilterArgs'):
								self['lastOnFilterArgs']), null, [{}]);
				}
				if ($p['bool']((($attr175=($attr176=self)['lastOnSortArgs']) == null || (($attr176.__is_instance__) && typeof $attr175 == 'function') || (typeof $attr175['__get__'] == 'function')?
							$p['getattr']($attr176, 'lastOnSortArgs'):
							self['lastOnSortArgs']))) {
					$pyjs_kwargs_call(self, 'onSort', (($attr177=($attr178=self)['lastOnSortArgs']) == null || (($attr178.__is_instance__) && typeof $attr177 == 'function') || (typeof $attr177['__get__'] == 'function')?
								$p['getattr']($attr178, 'lastOnSortArgs'):
								self['lastOnSortArgs']), null, [{}]);
				}
				$iter8_iter = self['horiztoolbars'];
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
					toolbar = $iter8_nextval.$nextval;
					toolbar['setNumberOfItemsShowingText'](self['contentpanel']['itemCount'](), (($attr179=($attr180=self)['totalitemcount']) == null || (($attr180.__is_instance__) && typeof $attr179 == 'function') || (typeof $attr179['__get__'] == 'function')?
								$p['getattr']($attr180, 'totalitemcount'):
								self['totalitemcount']));
				}
			}
			else if ($p['bool']($p['op_eq']((($attr181=($attr182=request_info)['method']) == null || (($attr182.__is_instance__) && typeof $attr181 == 'function') || (typeof $attr181['__get__'] == 'function')?
						$p['getattr']($attr182, 'method'):
						request_info['method']), 'downloadedcontent_count'))) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('totalitemcount', decoded) : $p['setattr'](self, 'totalitemcount', decoded);
				$iter9_iter = self['horiztoolbars'];
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
					toolbar = $iter9_nextval.$nextval;
					toolbar['setNumberOfItemsShowingText'](self['contentpanel']['itemCount'](), (($attr183=($attr184=self)['totalitemcount']) == null || (($attr184.__is_instance__) && typeof $attr183 == 'function') || (typeof $attr183['__get__'] == 'function')?
								$p['getattr']($attr184, 'totalitemcount'):
								self['totalitemcount']));
				}
			}
			else if ($p['bool']($p['tuple'](['adjust_likes', 'publish_content']).__contains__((($attr185=($attr186=request_info)['method']) == null || (($attr186.__is_instance__) && typeof $attr185 == 'function') || (typeof $attr185['__get__'] == 'function')?
						$p['getattr']($attr186, 'method'):
						request_info['method'])))) {
				cellsender = self['idToCallbackMap']['pop']((($attr187=($attr188=request_info)['id']) == null || (($attr188.__is_instance__) && typeof $attr187 == 'function') || (typeof $attr187['__get__'] == 'function')?
							$p['getattr']($attr188, 'id'):
							request_info['id']));
				if ($p['bool']($p['op_eq']((($attr189=($attr190=request_info)['method']) == null || (($attr190.__is_instance__) && typeof $attr189 == 'function') || (typeof $attr189['__get__'] == 'function')?
							$p['getattr']($attr190, 'method'):
							request_info['method']), 'adjust_likes'))) {
					(($attr191=($attr192=cellsender)['contentitem']) == null || (($attr192.__is_instance__) && typeof $attr191 == 'function') || (typeof $attr191['__get__'] == 'function')?
								$p['getattr']($attr192, 'contentitem'):
								cellsender['contentitem']).__getitem__('metadata').__setitem__('likes', decoded);
				}
				else if ($p['bool']($p['op_eq']((($attr193=($attr194=request_info)['method']) == null || (($attr194.__is_instance__) && typeof $attr193 == 'function') || (typeof $attr193['__get__'] == 'function')?
							$p['getattr']($attr194, 'method'):
							request_info['method']), 'publish_content'))) {
					(($attr195=($attr196=cellsender)['contentitem']) == null || (($attr196.__is_instance__) && typeof $attr195 == 'function') || (typeof $attr195['__get__'] == 'function')?
								$p['getattr']($attr196, 'contentitem'):
								cellsender['contentitem']).__getitem__('metadata').__setitem__('is_published', decoded);
				}
				cellsender['updateMetadata']();
				self['filterUsingFilterArgs']();
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, errobj, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				errobj = arguments[2];
				request_info = arguments[3];
			}
			var message;
			message = errobj.__getitem__('message');
			if ($p['bool'](!$p['op_eq'](code, 0))) {
				$m['logpanel']['log']($p['sprintf']('HTTP error %d: %s', $p['tuple']([code, message])));
			}
			else {
				code = errobj.__getitem__('code');
				$m['logpanel']['log']($p['sprintf']('JSONRPC Error %s: %s', $p['tuple']([code, message])));
			}
			return null;
		}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PublisherPanel', $p['tuple']($bases), $data);
	})();
	$m['EXPORTED_METHODS'] = $p['tuple'](['request_content_by_date', 'request_content_slice', 'downloadedcontent_count', 'publish_content', 'adjust_likes', 'is_authenticated']);
	$m['JsonTaoggregatorService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'services/JSONRPCRerouterService.py', $m['EXPORTED_METHODS']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JsonTaoggregatorService', $p['tuple']($bases), $data);
	})();
	$m['AuthPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'feedpublisherwebui';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr199,$attr200;
			$m['commoncontrols']['AuthPanel']['__init__'](self, (($attr199=($attr200=self)['beginVerifyAuth']) == null || (($attr200.__is_instance__) && typeof $attr199 == 'function') || (typeof $attr199['__get__'] == 'function')?
						$p['getattr']($attr200, 'beginVerifyAuth'):
						self['beginVerifyAuth']), (typeof onAuthClose == "undefined"?$m.onAuthClose:onAuthClose), 'authdlgbox');
			self['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'authdlgbox-label'}, 'To test: username \x22tao\x22, password \x22tao1\x22']));
			self['usernameTB']['setText']('tao');
			self['passTB']['setText']('tao1');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('proxy', $m['JsonTaoggregatorService']()) : $p['setattr'](self, 'proxy', $m['JsonTaoggregatorService']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('authReqs', $p['dict']([])) : $p['setattr'](self, 'authReqs', $p['dict']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('beginVerifyAuth', function(user, password) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				user = arguments[1];
				password = arguments[2];
			}
			var $attr201,id,$attr202;
			$m['logpanel']['log']($p['sprintf']('Verifying user %s and password %s', $p['tuple']([user, password])));
			id = self['proxy']['is_authenticated'](self, user, password);
			(($attr201=($attr202=self)['authReqs']) == null || (($attr202.__is_instance__) && typeof $attr201 == 'function') || (typeof $attr201['__get__'] == 'function')?
						$p['getattr']($attr202, 'authReqs'):
						self['authReqs']).__setitem__(id, $p['tuple']([user, password]));
			return null;
		}
	, 1, [null,null,['self'],['user'],['password']]);
		$cls_definition['beginVerifyAuth'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var decoded,password,$attr208,$attr205,$attr204,$attr207,$attr206,$attr203,user;
			$m['logpanel']['log']($p['sprintf']('Response ID%s: Received %s', $p['tuple']([(($attr203=($attr204=request_info)['id']) == null || (($attr204.__is_instance__) && typeof $attr203 == 'function') || (typeof $attr203['__get__'] == 'function')?
						$p['getattr']($attr204, 'id'):
						request_info['id']), response])));
			decoded = $m['jsonparser']['decode'](response);
			var $tupleassign1 = (($attr205=($attr206=self)['authReqs']) == null || (($attr206.__is_instance__) && typeof $attr205 == 'function') || (typeof $attr205['__get__'] == 'function')?
						$p['getattr']($attr206, 'authReqs'):
						self['authReqs']).__getitem__((($attr207=($attr208=request_info)['id']) == null || (($attr208.__is_instance__) && typeof $attr207 == 'function') || (typeof $attr207['__get__'] == 'function')?
						$p['getattr']($attr208, 'id'):
						request_info['id']));
			user = $tupleassign1.__getitem__(0);
			password = $tupleassign1.__getitem__(1);
			self['endVerifyAuth'](decoded, user, password);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		var $bases = new Array((($attr197=($attr198=$m['commoncontrols'])['AuthPanel']) == null || (($attr198.__is_instance__) && typeof $attr197 == 'function') || (typeof $attr197['__get__'] == 'function')?
				$p['getattr']($attr198, 'AuthPanel'):
				$m['commoncontrols']['AuthPanel']));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AuthPanel', $p['tuple']($bases), $data);
	})();
	$m['onAuthClose'] = function(sender, result, username, password) {
		var $attr209,$attr210;
		$m['logpanel']['log']($p['sprintf']('Auth result: %s', result));
		sender['removeFromParent']();
		if ($p['bool'](result)) {
			(typeof addPublisherPanel == "undefined"?$m.addPublisherPanel:addPublisherPanel)();
		}
		else {
			$m['RootPanel']()['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:(($attr209=($attr210=$m['Styles'])['TOOLBAR_TEXT']) == null || (($attr210.__is_instance__) && typeof $attr209 == 'function') || (typeof $attr209['__get__'] == 'function')?
						$p['getattr']($attr210, 'TOOLBAR_TEXT'):
						$m['Styles']['TOOLBAR_TEXT'])}, 'AUTHORIZATION DENIED']));
		}
		return null;
	};
	$m['onAuthClose'].__name__ = 'onAuthClose';

	$m['onAuthClose'].__bind_type__ = 0;
	$m['onAuthClose'].__args__ = [null,null,['sender'],['result'],['username'],['password']];
	$m['addPublisherPanel'] = function() {
		var app;
		app = $m['PublisherPanel']();
		$m['RootPanel']()['add'](app);
		return null;
	};
	$m['addPublisherPanel'].__name__ = 'addPublisherPanel';

	$m['addPublisherPanel'].__bind_type__ = 0;
	$m['addPublisherPanel'].__args__ = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['logpanel'] = $pyjs_kwargs_call($m['commoncontrols'], 'LoggerPanel', null, null, [{headerStyleName:(($attr211=($attr212=$m['Styles'])['LOGGER_HEADER']) == null || (($attr212.__is_instance__) && typeof $attr211 == 'function') || (typeof $attr211['__get__'] == 'function')?
					$p['getattr']($attr212, 'LOGGER_HEADER'):
					$m['Styles']['LOGGER_HEADER']), panelStyleName:(($attr213=($attr214=$m['Styles'])['LOGGER_CONTENT']) == null || (($attr214.__is_instance__) && typeof $attr213 == 'function') || (typeof $attr213['__get__'] == 'function')?
					$p['getattr']($attr214, 'LOGGER_CONTENT'):
					$m['Styles']['LOGGER_CONTENT']), buttonStyleName:(($attr215=($attr216=$m['Styles'])['LOGGER_BUTTON']) == null || (($attr216.__is_instance__) && typeof $attr215 == 'function') || (typeof $attr215['__get__'] == 'function')?
					$p['getattr']($attr216, 'LOGGER_BUTTON'):
					$m['Styles']['LOGGER_BUTTON']), labelStyleName:(($attr217=($attr218=$m['Styles'])['LOGGER_LINES']) == null || (($attr218.__is_instance__) && typeof $attr217 == 'function') || (typeof $attr217['__get__'] == 'function')?
					$p['getattr']($attr218, 'LOGGER_LINES'):
					$m['Styles']['LOGGER_LINES'])}]);
		$m['RootPanel']()['add']($m['logpanel']);
		$m['addPublisherPanel']();
	}
	return this;
}; /* end feedpublisherwebui */


/* end module: feedpublisherwebui */


/*
PYJS_DEPS: ['pyjamas.ui.HasAlignment', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.ToggleButton.ToggleButton', 'pyjamas.ui.ToggleButton', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'commoncontrols', 'pyjamas.JSONParser']
*/
