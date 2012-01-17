/* start module: commoncontrols */
$pyjs.loaded_modules['commoncontrols'] = function (__mod_name__) {
	if($pyjs.loaded_modules['commoncontrols'].__was_initialized__) return $pyjs.loaded_modules['commoncontrols'];
	var $m = $pyjs.loaded_modules["commoncontrols"];
	$m.__repr__ = function() { return "<module: commoncontrols>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'commoncontrols';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['DateField'] = $p['___import___']('pyjamas.ui.Calendar.DateField', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['PasswordTextBox'] = $p['___import___']('pyjamas.ui.PasswordTextBox.PasswordTextBox', null, null, false);
	$m['fireAll'] = function(listeners) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			if (typeof kwargs != 'undefined') args.__array.push(kwargs);
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof listeners != 'undefined') {
				if (listeners !== null && typeof listeners['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = listeners;
					listeners = arguments[1];
				}
			} else {
			}
		}
		var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,li,$iter1_idx;
		$iter1_iter = listeners;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			li = $iter1_nextval.$nextval;
			$pyjs_kwargs_call(null, li, args, kwargs, [{}]);
		}
		return null;
	};
	$m['fireAll'].__name__ = 'fireAll';

	$m['fireAll'].__bind_type__ = 0;
	$m['fireAll'].__args__ = ['args',['kwargs'],['listeners']];
	$m['Spinner'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'commoncontrols';
		$cls_definition['CHAR_WIDTH'] = 15;
		$method = $pyjs__bind_method2('__init__', function(minvalue, maxvalue, startvalue, interval, buttonStyleName, decrText, incrText) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 8 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				minvalue = arguments[1];
				maxvalue = arguments[2];
				startvalue = arguments[3];
				interval = arguments[4];
				buttonStyleName = arguments[5];
				decrText = arguments[6];
				incrText = arguments[7];
				var kwargs = arguments.length >= 9 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof incrText != 'undefined') {
					if (incrText !== null && typeof incrText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = incrText;
						incrText = arguments[8];
					}
				} else 				if (typeof decrText != 'undefined') {
					if (decrText !== null && typeof decrText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = decrText;
						decrText = arguments[8];
					}
				} else 				if (typeof buttonStyleName != 'undefined') {
					if (buttonStyleName !== null && typeof buttonStyleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = buttonStyleName;
						buttonStyleName = arguments[8];
					}
				} else 				if (typeof interval != 'undefined') {
					if (interval !== null && typeof interval['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = interval;
						interval = arguments[8];
					}
				} else 				if (typeof startvalue != 'undefined') {
					if (startvalue !== null && typeof startvalue['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = startvalue;
						startvalue = arguments[8];
					}
				} else 				if (typeof maxvalue != 'undefined') {
					if (maxvalue !== null && typeof maxvalue['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = maxvalue;
						maxvalue = arguments[8];
					}
				} else 				if (typeof minvalue != 'undefined') {
					if (minvalue !== null && typeof minvalue['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = minvalue;
						minvalue = arguments[8];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[8];
					}
				} else {
				}
			}
			if (typeof minvalue == 'undefined') minvalue=arguments.callee.__args__[3][1];
			if (typeof maxvalue == 'undefined') maxvalue=arguments.callee.__args__[4][1];
			if (typeof startvalue == 'undefined') startvalue=arguments.callee.__args__[5][1];
			if (typeof interval == 'undefined') interval=arguments.callee.__args__[6][1];
			if (typeof buttonStyleName == 'undefined') buttonStyleName=arguments.callee.__args__[7][1];
			if (typeof decrText == 'undefined') decrText=arguments.callee.__args__[8][1];
			if (typeof incrText == 'undefined') incrText=arguments.callee.__args__[9][1];
			var $attr9,$attr8,$attr2,$attr1,$attr3,$attr5,$attr4,$attr7,$attr6,$attr11,$attr10,$attr12,$add2,$add1;
			$pyjs_kwargs_call($m['HorizontalPanel'], '__init__', null, kwargs, [{}, self]);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('minvalue', minvalue) : $p['setattr'](self, 'minvalue', minvalue);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('maxvalue', maxvalue) : $p['setattr'](self, 'maxvalue', maxvalue);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('interval', interval) : $p['setattr'](self, 'interval', interval);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('changeListeners', $p['list']([])) : $p['setattr'](self, 'changeListeners', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lessButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr1=($attr2=self)['_onArrowClick']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '_onArrowClick'):
						self['_onArrowClick']), StyleName:buttonStyleName}, decrText])) : $p['setattr'](self, 'lessButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr1=($attr2=self)['_onArrowClick']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '_onArrowClick'):
						self['_onArrowClick']), StyleName:buttonStyleName}, decrText]));
			self['add']((($attr3=($attr4=self)['lessButton']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'lessButton'):
						self['lessButton']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('textbox', $m['TextBox']()) : $p['setattr'](self, 'textbox', $m['TextBox']());
			self['textbox']['addInputListener']((($attr5=($attr6=self)['_onTextboxInput']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, '_onTextboxInput'):
						self['_onTextboxInput']));
			self['add']((($attr7=($attr8=self)['textbox']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'textbox'):
						self['textbox']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('moreButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr9=($attr10=self)['_onArrowClick']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, '_onArrowClick'):
						self['_onArrowClick']), StyleName:buttonStyleName}, incrText])) : $p['setattr'](self, 'moreButton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr9=($attr10=self)['_onArrowClick']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, '_onArrowClick'):
						self['_onArrowClick']), StyleName:buttonStyleName}, incrText]));
			self['add']((($attr11=($attr12=self)['moreButton']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'moreButton'):
						self['moreButton']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('value', $p['__op_add']($add1=startvalue,$add2=1)) : $p['setattr'](self, 'value', $p['__op_add']($add1=startvalue,$add2=1));
			self['setValue'](startvalue);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['minvalue', 0],['maxvalue', 100],['startvalue', 10],['interval', 1],['buttonStyleName', null],['decrText', '\x3C'],['incrText', '\x3E']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_resizeTextbox', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var width,$attr13,$attr14,$mul2,$mul1;
			width = (typeof ($mul1=$p['max'](2, $p['len'](self['textbox']['getText']())))==typeof ($mul2=(($attr13=($attr14=self)['CHAR_WIDTH']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'CHAR_WIDTH'):
						self['CHAR_WIDTH'])) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			if ($p['bool'](!$p['op_eq'](self['textbox']['getWidth'](), width))) {
				self['textbox']['setWidth'](width);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_resizeTextbox'] = $method;
		$method = $pyjs__bind_method2('_onArrowClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var incr,$mul4,val,$add3,$attr20,$attr21,$attr22,$attr19,$attr18,$add4,$attr15,$attr17,$attr16,$mul3;
			if ($p['bool']($p['op_eq'](sender, (($attr15=($attr16=self)['lessButton']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'lessButton'):
						self['lessButton'])))) {
				incr = (typeof ($mul3=(typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))==typeof ($mul4=(($attr17=($attr18=self)['interval']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
							$p['getattr']($attr18, 'interval'):
							self['interval'])) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
			}
			else if ($p['bool']($p['op_eq'](sender, (($attr19=($attr20=self)['moreButton']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'moreButton'):
						self['moreButton'])))) {
				incr = (($attr21=($attr22=self)['interval']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'interval'):
							self['interval']);
			}
			else {
				throw ($p['NotImplementedError']());
			}
			val = $p['__op_add']($add3=self['getValue'](),$add4=incr);
			self['setValue'](val);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['_onArrowClick'] = $method;
		$method = $pyjs__bind_method2('_onTextboxInput', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var text,$pyjs_try_err,val;
			text = sender['getText']();
			try {
				val = $p['float_int'](text);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					return null;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			self['setValue'](val);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['_onTextboxInput'] = $method;
		$method = $pyjs__bind_method2('addOnChangeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['changeListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addOnChangeListener'] = $method;
		$method = $pyjs__bind_method2('removeOnChangeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['changeListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeOnChangeListener'] = $method;
		$method = $pyjs__bind_method2('getValue', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24;
			return (($attr23=($attr24=self)['value']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'value'):
						self['value']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getValue'] = $method;
		$method = $pyjs__bind_method2('setValue', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var fixedval,$attr32,$attr31,$attr30,$attr25,$attr26,$attr27,$attr28,$attr29;
			fixedval = $p['min']((($attr25=($attr26=self)['maxvalue']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'maxvalue'):
						self['maxvalue']), value);
			fixedval = $p['max']((($attr27=($attr28=self)['minvalue']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'minvalue'):
						self['minvalue']), fixedval);
			if ($p['bool']($p['op_eq'](fixedval, (($attr29=($attr30=self)['value']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'value'):
						self['value'])))) {
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('value', fixedval) : $p['setattr'](self, 'value', fixedval);
			self['textbox']['setText']($p['str']((($attr31=($attr32=self)['value']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'value'):
						self['value'])));
			self['_resizeTextbox']();
			self['raiseOnChanged']();
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setValue'] = $method;
		$method = $pyjs__bind_method2('raiseOnChanged', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$iter2_nextval,$iter2_type,$iter2_iter,$attr33,$iter2_idx,$attr34,$iter2_array;
			$iter2_iter = self['changeListeners'];
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				c = $iter2_nextval.$nextval;
				c((($attr33=($attr34=self)['value']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
							$p['getattr']($attr34, 'value'):
							self['value']));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['raiseOnChanged'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Spinner', $p['tuple']($bases), $data);
	})();
	$m['DateFieldExt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'commoncontrols';
		$method = $pyjs__bind_method2('__init__', function(format, remove_todaylink, StyleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
				remove_todaylink = arguments[2];
				StyleName = arguments[3];
			}
			if (typeof format == 'undefined') format=arguments.callee.__args__[3][1];
			if (typeof remove_todaylink == 'undefined') remove_todaylink=arguments.callee.__args__[4][1];
			if (typeof StyleName == 'undefined') StyleName=arguments.callee.__args__[5][1];

			$m['DateField']['__init__'](self, format);
			if ($p['bool'](remove_todaylink)) {
				self['todayLink']['removeFromParent']();
			}
			if ($p['bool'](StyleName)) {
				self['setStyleName'](StyleName);
			}
			return null;
		}
	, 1, [null,null,['self'],['format', '%Y/%m/%d'],['remove_todaylink', false],['StyleName', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getDate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr37,$attr36,$attr35,$attr39,$attr38;
			return $p['tuple']([(($attr35=($attr36=self['calendar'])['currentYear']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'currentYear'):
						self['calendar']['currentYear']), (($attr37=($attr38=self['calendar'])['currentMonth']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'currentMonth'):
						self['calendar']['currentMonth']), (($attr39=($attr40=self['calendar'])['currentDay']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'currentDay'):
						self['calendar']['currentDay'])]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDate'] = $method;
		$method = $pyjs__bind_method2('setDate', function(year, month, day) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
			}

			self['calendar']['onDate'](null, year, month, day);
			return null;
		}
	, 1, [null,null,['self'],['year'],['month'],['day']]);
		$cls_definition['setDate'] = $method;
		var $bases = new Array($m['DateField']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DateFieldExt', $p['tuple']($bases), $data);
	})();
	$m['LoggerPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'commoncontrols';
		$method = $pyjs__bind_method2('__init__', function(maxhistory, maxloglinelength, headerStyleName, panelStyleName, buttonStyleName, labelStyleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				maxhistory = arguments[1];
				maxloglinelength = arguments[2];
				headerStyleName = arguments[3];
				panelStyleName = arguments[4];
				buttonStyleName = arguments[5];
				labelStyleName = arguments[6];
			}
			if (typeof maxhistory == 'undefined') maxhistory=arguments.callee.__args__[3][1];
			if (typeof maxloglinelength == 'undefined') maxloglinelength=arguments.callee.__args__[4][1];
			if (typeof headerStyleName == 'undefined') headerStyleName=arguments.callee.__args__[5][1];
			if (typeof panelStyleName == 'undefined') panelStyleName=arguments.callee.__args__[6][1];
			if (typeof buttonStyleName == 'undefined') buttonStyleName=arguments.callee.__args__[7][1];
			if (typeof labelStyleName == 'undefined') labelStyleName=arguments.callee.__args__[8][1];
			var $attr46,$attr44,$attr45,$attr42,$attr43,$attr41;
			$pyjs_kwargs_call($p['$$super']($m['LoggerPanel'], self), '__init__', null, null, [{header:'BLAH', isOpen:false}, self]);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('labelStyleName', labelStyleName) : $p['setattr'](self, 'labelStyleName', labelStyleName);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('maxhistory', maxhistory) : $p['setattr'](self, 'maxhistory', maxhistory);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('maxloglinelength', maxloglinelength) : $p['setattr'](self, 'maxloglinelength', maxloglinelength);
			self['getHeader']()['setStyleName'](headerStyleName);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('logpanel', $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:panelStyleName}])) : $p['setattr'](self, 'logpanel', $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:panelStyleName}]));
			self['setContent']((($attr41=($attr42=self)['logpanel']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'logpanel'):
						self['logpanel']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clearbutton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr43=($attr44=self)['clear']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'clear'):
						self['clear']), StyleName:buttonStyleName}, 'Clear'])) : $p['setattr'](self, 'clearbutton', $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:(($attr43=($attr44=self)['clear']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'clear'):
						self['clear']), StyleName:buttonStyleName}, 'Clear']));
			self['logpanel']['add']((($attr45=($attr46=self)['clearbutton']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'clearbutton'):
						self['clearbutton']));
			self['updateHeaderText']();
			return null;
		}
	, 1, [null,null,['self'],['maxhistory', 100],['maxloglinelength', 200],['headerStyleName', null],['panelStyleName', null],['buttonStyleName', null],['labelStyleName', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('log', function(string) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
			}
			var $iter3_idx,$iter3_type,$attr51,$attr50,$attr52,$attr54,$sub1,$attr47,$iter3_array,$iter3_iter,widgcnt,$sub2,$attr53,i,$iter3_nextval,$attr48,$attr49;
			self['logpanel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:(($attr49=($attr50=self)['labelStyleName']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'labelStyleName'):
						self['labelStyleName'])}, $p['slice'](string, 0, (($attr47=($attr48=self)['maxloglinelength']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'maxloglinelength'):
						self['maxloglinelength']))]));
			widgcnt = self['logpanel']['getWidgetCount']();
			if ($p['bool'](($p['cmp'](widgcnt, (($attr51=($attr52=self)['maxhistory']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'maxhistory'):
						self['maxhistory'])) == 1))) {
				$iter3_iter = $p['range'](0, $p['__op_sub']($sub1=widgcnt,$sub2=(($attr53=($attr54=self)['maxhistory']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
							$p['getattr']($attr54, 'maxhistory'):
							self['maxhistory'])));
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					i = $iter3_nextval.$nextval;
					self['logpanel']['remove'](self['logpanel']['getWidget'](i));
				}
			}
			self['updateHeaderText']();
			return null;
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['log'] = $method;
		$method = $pyjs__bind_method2('__call__', function(string) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
			}

			self['log'](string);
			return null;
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['__call__'] = $method;
		$method = $pyjs__bind_method2('updateHeaderText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub4;
			self['getHeader']()['setText']($p['sprintf']('Logging: %s items', $p['__op_sub']($sub3=self['logpanel']['getWidgetCount'](),$sub4=1)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateHeaderText'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr55,$attr56;
			self['logpanel']['clear']();
			self['logpanel']['add']((($attr55=($attr56=self)['clearbutton']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'clearbutton'):
						self['clearbutton']));
			self['updateHeaderText']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		var $bases = new Array($m['DisclosurePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LoggerPanel', $p['tuple']($bases), $data);
	})();
	$m['AuthPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'commoncontrols';
		$method = $pyjs__bind_method2('__init__', function(beginVerifyAuth, onClose, baseStyleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				beginVerifyAuth = arguments[1];
				onClose = arguments[2];
				baseStyleName = arguments[3];
			}
			if (typeof baseStyleName == 'undefined') baseStyleName=arguments.callee.__args__[5][1];

			$pyjs_kwargs_call($m['VerticalPanel'], '__init__', null, null, [{StyleName:baseStyleName}, self]);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('onClose', onClose) : $p['setattr'](self, 'onClose', onClose);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('wasAuthorized', false) : $p['setattr'](self, 'wasAuthorized', false);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_beginVerifyAuth', beginVerifyAuth) : $p['setattr'](self, '_beginVerifyAuth', beginVerifyAuth);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('baseStyleName', baseStyleName) : $p['setattr'](self, 'baseStyleName', baseStyleName);
			self['_createContent']();
			return null;
		}
	, 1, [null,null,['self'],['beginVerifyAuth'],['onClose'],['baseStyleName', 'gwt-authdlgbox']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_createContent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$attr57;
			self['add'](self['_createUsernamePanel']());
			self['add'](self['_createPasswordPanel']());
			self['add'](self['_createButtonPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('warningLabel', $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'-warninglabel'}, ''])) : $p['setattr'](self, 'warningLabel', $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'-warninglabel'}, '']));
			self['add']((($attr57=($attr58=self)['warningLabel']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'warningLabel'):
						self['warningLabel']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_createContent'] = $method;
		$method = $pyjs__bind_method2('_createUsernamePanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr64,$attr60,$attr61,$attr62,$attr63,$add6,$add7,$add5,$add8,hp;
			hp = $m['HorizontalPanel']();
			hp['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:$p['__op_add']($add5=(($attr59=($attr60=self)['baseStyleName']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'baseStyleName'):
						self['baseStyleName']),$add6='-label')}, 'Username: ']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('usernameTB', $pyjs_kwargs_call(null, $m['TextBox'], null, null, [{StyleName:$p['__op_add']($add7=(($attr61=($attr62=self)['baseStyleName']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, 'baseStyleName'):
						self['baseStyleName']),$add8='-textbox')}])) : $p['setattr'](self, 'usernameTB', $pyjs_kwargs_call(null, $m['TextBox'], null, null, [{StyleName:$p['__op_add']($add7=(($attr61=($attr62=self)['baseStyleName']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
						$p['getattr']($attr62, 'baseStyleName'):
						self['baseStyleName']),$add8='-textbox')}]));
			hp['add']((($attr63=($attr64=self)['usernameTB']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
						$p['getattr']($attr64, 'usernameTB'):
						self['usernameTB']));
			return hp;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_createUsernamePanel'] = $method;
		$method = $pyjs__bind_method2('_createPasswordPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr68,$attr69,$attr65,$attr67,$attr70,$add10,$add11,$add12,$attr66,$add9,hp;
			hp = $m['HorizontalPanel']();
			hp['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:$p['__op_add']($add9=(($attr65=($attr66=self)['baseStyleName']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'baseStyleName'):
						self['baseStyleName']),$add10='-label')}, 'Password: ']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('passTB', $pyjs_kwargs_call(null, $m['PasswordTextBox'], null, null, [{StyleName:$p['__op_add']($add11=(($attr67=($attr68=self)['baseStyleName']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'baseStyleName'):
						self['baseStyleName']),$add12='-textbox')}])) : $p['setattr'](self, 'passTB', $pyjs_kwargs_call(null, $m['PasswordTextBox'], null, null, [{StyleName:$p['__op_add']($add11=(($attr67=($attr68=self)['baseStyleName']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'baseStyleName'):
						self['baseStyleName']),$add12='-textbox')}]));
			hp['add']((($attr69=($attr70=self)['passTB']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'passTB'):
						self['passTB']));
			return hp;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_createPasswordPanel'] = $method;
		$method = $pyjs__bind_method2('_createButtonPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr82,$attr80,$attr81,$attr75,$attr79,$attr78,$attr77,$attr76,$attr74,$attr73,$attr72,$attr71,$add14,$add15,$add16,$add13,hp;
			hp = $m['HorizontalPanel']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('okBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:$p['__op_add']($add13=(($attr73=($attr74=self)['baseStyleName']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
						$p['getattr']($attr74, 'baseStyleName'):
						self['baseStyleName']),$add14='-button')}, 'OK', (($attr71=($attr72=self)['onOk']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'onOk'):
						self['onOk'])])) : $p['setattr'](self, 'okBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:$p['__op_add']($add13=(($attr73=($attr74=self)['baseStyleName']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
						$p['getattr']($attr74, 'baseStyleName'):
						self['baseStyleName']),$add14='-button')}, 'OK', (($attr71=($attr72=self)['onOk']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'onOk'):
						self['onOk'])]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cancelBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:$p['__op_add']($add15=(($attr77=($attr78=self)['baseStyleName']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'baseStyleName'):
						self['baseStyleName']),$add16='-button')}, 'Cancel', (($attr75=($attr76=self)['onCancel']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'onCancel'):
						self['onCancel'])])) : $p['setattr'](self, 'cancelBtn', $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:$p['__op_add']($add15=(($attr77=($attr78=self)['baseStyleName']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'baseStyleName'):
						self['baseStyleName']),$add16='-button')}, 'Cancel', (($attr75=($attr76=self)['onCancel']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'onCancel'):
						self['onCancel'])]));
			hp['add']((($attr79=($attr80=self)['okBtn']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
						$p['getattr']($attr80, 'okBtn'):
						self['okBtn']));
			hp['add']((($attr81=($attr82=self)['cancelBtn']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'cancelBtn'):
						self['cancelBtn']));
			return hp;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_createButtonPanel'] = $method;
		$method = $pyjs__bind_method2('getUserAndPass', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple']([self['usernameTB']['getText'](), self['passTB']['getText']()]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUserAndPass'] = $method;
		$method = $pyjs__bind_method2('onOk', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$pyjs_kwargs_call(self, '_beginVerifyAuth', self['getUserAndPass'](), null, [{}]);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onOk'] = $method;
		$method = $pyjs__bind_method2('onCancel', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['onClose'](self, false, null, null);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onCancel'] = $method;
		$method = $pyjs__bind_method2('endVerifyAuth', function(result, username, password, msg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				result = arguments[1];
				username = arguments[2];
				password = arguments[3];
				msg = arguments[4];
			}
			if (typeof msg == 'undefined') msg=arguments.callee.__args__[6][1];

			if ($p['bool'](result)) {
				self['onClose'](self, true, username, password);
			}
			else {
				self['warningLabel']['setText'](msg);
			}
			return null;
		}
	, 1, [null,null,['self'],['result'],['username'],['password'],['msg', 'Username/password invalid.']]);
		$cls_definition['endVerifyAuth'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AuthPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end commoncontrols */


/* end module: commoncontrols */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Calendar.DateField', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Calendar', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.PasswordTextBox.PasswordTextBox', 'pyjamas.ui.PasswordTextBox']
*/
