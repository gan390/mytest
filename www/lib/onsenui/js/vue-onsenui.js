/*! vue-onsenui v2.0.0-beta.7 - Wed May 24 2017 01:10:52 GMT+0900 (JST) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("onsenui"));
	else if(typeof define === 'function' && define.amd)
		define("VueOnsen", ["onsenui"], factory);
	else if(typeof exports === 'object')
		exports["VueOnsen"] = factory(require("onsenui"));
	else
		root["VueOnsen"] = factory(root["ons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _components = __webpack_require__(36);
	
	var components = _interopRequireWildcard(_components);
	
	var _directives = __webpack_require__(125);
	
	var directives = _interopRequireWildcard(_directives);
	
	var _util = __webpack_require__(53);
	
	var _onsenui = __webpack_require__(55);
	
	var _onsenui2 = _interopRequireDefault(_onsenui);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var register = function register(Vue, type, items) {
	  (0, _keys2.default)(items).forEach(function (key) {
	    var value = items[key];
	    key = (0, _util.hyphenate)(key);
	    Vue[type](key, value);
	  });
	};
	
	var install = function install(Vue) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  register(Vue, 'component', components);
	
	  register(Vue, 'directive', directives);
	
	  if (!Vue.config.silent) {
	    Vue.mixin({
	      beforeCreate: function beforeCreate() {
	        if (this.$options.template) {
	          var match = this.$options.template.match(/<(ons-[\w-]+)/im);
	
	          if (match) {
	            var location = this.$options._componentTag ? ' in component <' + this.$options._componentTag + '>' : '';
	            _onsenui2.default._util.warn('[vue-onsenui] Vue templates must not contain <ons-*> elements directly.\n' + ('<' + match[1] + '> element found near index ' + match.index + location + '. Please use <v-' + match[1] + '> instead:\n              ' + this.$options.template));
	          }
	        }
	      }
	    });
	  }
	
	  Vue.prototype.$ons = (0, _keys2.default)(_onsenui2.default).filter(function (k) {
	    return [/^disable/, /^enable/, /^open/, /^set/, /animit/, /Element$/, /fastClick/, /GestureDetector/, /notification/, /orientation/, /platform/, /ready/].some(function (t) {
	      return k.match(t);
	    });
	  }).reduce(function (r, k) {
	    r[k] = _onsenui2.default[k];
	    return r;
	  }, { _ons: _onsenui2.default });
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use({ install: install });
	}
	
	exports.default = install;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);
	
	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VOnsToast = exports.VOnsModal = exports.VOnsActionSheet = exports.VOnsDialog = exports.VOnsPage = exports.VOnsFab = exports.VOnsSplitter = exports.VOnsPullHook = exports.VOnsSplitterContent = exports.VOnsSplitterMask = exports.VOnsCarouselItem = exports.VOnsProgressCircular = exports.VOnsProgressBar = exports.VOnsCol = exports.VOnsRow = exports.VOnsRipple = exports.VOnsActionSheetButton = exports.VOnsListHeader = exports.VOnsListTitle = exports.VOnsListItem = exports.VOnsList = exports.VOnsSpeedDialItem = exports.VOnsBottomToolbar = exports.VOnsCard = exports.VOnsSelect = exports.VOnsRange = exports.VOnsInput = exports.VOnsSwitch = exports.VOnsIcon = exports.VOnsButton = exports.VOnsToolbarButton = exports.VOnsToolbar = exports.VOnsLazyRepeat = exports.VOnsSplitterSide = exports.VOnsNavigator = exports.VOnsBackButton = exports.VOnsTabbar = exports.VOnsTab = exports.VOnsCarousel = exports.VOnsSpeedDial = exports.VOnsAlertDialog = exports.VOnsPopover = undefined;
	
	var _VOnsPopover = __webpack_require__(37);
	
	Object.defineProperty(exports, 'VOnsPopover', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsPopover).default;
	  }
	});
	
	var _VOnsAlertDialog = __webpack_require__(57);
	
	Object.defineProperty(exports, 'VOnsAlertDialog', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsAlertDialog).default;
	  }
	});
	
	var _VOnsSpeedDial = __webpack_require__(60);
	
	Object.defineProperty(exports, 'VOnsSpeedDial', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSpeedDial).default;
	  }
	});
	
	var _VOnsCarousel = __webpack_require__(63);
	
	Object.defineProperty(exports, 'VOnsCarousel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsCarousel).default;
	  }
	});
	
	var _VOnsTab = __webpack_require__(66);
	
	Object.defineProperty(exports, 'VOnsTab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTab).default;
	  }
	});
	
	var _VOnsTabbar = __webpack_require__(69);
	
	Object.defineProperty(exports, 'VOnsTabbar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTabbar).default;
	  }
	});
	
	var _VOnsBackButton = __webpack_require__(76);
	
	Object.defineProperty(exports, 'VOnsBackButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsBackButton).default;
	  }
	});
	
	var _VOnsNavigator = __webpack_require__(79);
	
	Object.defineProperty(exports, 'VOnsNavigator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsNavigator).default;
	  }
	});
	
	var _VOnsSplitterSide = __webpack_require__(116);
	
	Object.defineProperty(exports, 'VOnsSplitterSide', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSplitterSide).default;
	  }
	});
	
	var _VOnsLazyRepeat = __webpack_require__(119);
	
	Object.defineProperty(exports, 'VOnsLazyRepeat', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsLazyRepeat).default;
	  }
	});
	
	var _VGeneric = __webpack_require__(122);
	
	var _VGeneric2 = _interopRequireDefault(_VGeneric);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var extend = function extend(component) {
	  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  return { name: 'v-ons-' + component, mixins: mixins, extends: _VGeneric2.default };
	};
	
	var VOnsToolbar = exports.VOnsToolbar = extend('toolbar');
	var VOnsToolbarButton = exports.VOnsToolbarButton = extend('toolbar-button');
	var VOnsButton = exports.VOnsButton = extend('button');
	var VOnsIcon = exports.VOnsIcon = extend('icon');
	var VOnsSwitch = exports.VOnsSwitch = extend('switch');
	var VOnsInput = exports.VOnsInput = extend('input');
	var VOnsRange = exports.VOnsRange = extend('range');
	var VOnsSelect = exports.VOnsSelect = extend('select');
	var VOnsCard = exports.VOnsCard = extend('card');
	var VOnsBottomToolbar = exports.VOnsBottomToolbar = extend('bottom-toolbar');
	var VOnsSpeedDialItem = exports.VOnsSpeedDialItem = extend('speed-dial-item');
	var VOnsList = exports.VOnsList = extend('list');
	var VOnsListItem = exports.VOnsListItem = extend('list-item');
	var VOnsListTitle = exports.VOnsListTitle = extend('list-title');
	var VOnsListHeader = exports.VOnsListHeader = extend('list-header');
	var VOnsActionSheetButton = exports.VOnsActionSheetButton = extend('action-sheet-button');
	var VOnsRipple = exports.VOnsRipple = extend('ripple');
	var VOnsRow = exports.VOnsRow = extend('row');
	var VOnsCol = exports.VOnsCol = extend('col');
	var VOnsProgressBar = exports.VOnsProgressBar = extend('progress-bar');
	var VOnsProgressCircular = exports.VOnsProgressCircular = extend('progress-circular');
	var VOnsCarouselItem = exports.VOnsCarouselItem = extend('carousel-item');
	var VOnsSplitterMask = exports.VOnsSplitterMask = extend('splitter-mask');
	var VOnsSplitterContent = exports.VOnsSplitterContent = extend('splitter-content');
	var VOnsPullHook = exports.VOnsPullHook = extend('pull-hook', [(0, _mixins.deriveHandler)('onAction')]);
	var VOnsSplitter = exports.VOnsSplitter = extend('splitter', [_mixins.selfProvider, _mixins.deriveDBB]);
	var VOnsFab = exports.VOnsFab = extend('fab', [_mixins.hidable]);
	var VOnsPage = exports.VOnsPage = extend('page', [_mixins.deriveDBB, (0, _mixins.deriveHandler)('onInfiniteScroll')]);
	var VOnsDialog = exports.VOnsDialog = extend('dialog', [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.deriveDBB, _mixins.portal]);
	var VOnsActionSheet = exports.VOnsActionSheet = extend('action-sheet', [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.deriveDBB, _mixins.portal]);
	var VOnsModal = exports.VOnsModal = extend('modal', [_mixins.hidable, _mixins.hasOptions, _mixins.deriveDBB, _mixins.portal]);
	var VOnsToast = exports.VOnsToast = extend('toast', [_mixins.hidable, _mixins.hasOptions, _mixins.deriveDBB, _mixins.portal]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(39),
	  /* template */
	  __webpack_require__(56),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */
	
	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle
	
	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context = context || (this.$vnode && this.$vnode.ssrContext)
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }
	
	  if (hook) {
	    // inject component registration as beforeCreate hook
	    var existing = options.beforeCreate
	    options.beforeCreate = existing
	      ? [].concat(existing, hook)
	      : [hook]
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.modifier, _mixins.deriveEvents, _mixins.deriveDBB, _mixins.portal],
	
	  props: {
	    target: {
	      validator: function validator(value) {
	        return value._isVue || typeof value === 'string' || value instanceof Event || value instanceof HTMLElement;
	      }
	    }
	  },
	
	  computed: {
	    normalizedTarget: function normalizedTarget() {
	      if (this.target && this.target._isVue) {
	        return this.target.$el;
	      }
	      return this.target;
	    },
	    normalizedOptions: function normalizedOptions() {
	      if (this.target) {
	        return (0, _extends3.default)({
	          target: this.normalizedTarget
	        }, this.options);
	      }
	      return this.options;
	    }
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(41);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(44)});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(45)
	  , pIE      = __webpack_require__(46)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	Object.defineProperty(exports, 'deriveDBB', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveDBB;
	  }
	});
	Object.defineProperty(exports, 'deriveHandler', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveHandler;
	  }
	});
	Object.defineProperty(exports, 'deriveEvents', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveEvents;
	  }
	});
	
	var _common = __webpack_require__(54);
	
	Object.defineProperty(exports, 'hidable', {
	  enumerable: true,
	  get: function get() {
	    return _common.hidable;
	  }
	});
	Object.defineProperty(exports, 'hasOptions', {
	  enumerable: true,
	  get: function get() {
	    return _common.hasOptions;
	  }
	});
	Object.defineProperty(exports, 'modifier', {
	  enumerable: true,
	  get: function get() {
	    return _common.modifier;
	  }
	});
	Object.defineProperty(exports, 'selfProvider', {
	  enumerable: true,
	  get: function get() {
	    return _common.selfProvider;
	  }
	});
	Object.defineProperty(exports, 'dialogCancel', {
	  enumerable: true,
	  get: function get() {
	    return _common.dialogCancel;
	  }
	});
	Object.defineProperty(exports, 'portal', {
	  enumerable: true,
	  get: function get() {
	    return _common.portal;
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deriveEvents = exports.deriveHandler = exports.deriveDBB = undefined;
	
	var _defineProperty2 = __webpack_require__(49);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _util = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _setupDBB = function _setupDBB(component) {
	  var dbb = 'onDeviceBackButton';
	
	  var handler = component[dbb] || component.$el[dbb] && component.$el[dbb]._callback || function (e) {
	    return e.callParentHandler();
	  };
	
	  component.$el[dbb] = function (event) {
	    var runDefault = true;
	
	    component.$emit((0, _util.handlerToProp)(dbb), (0, _extends3.default)({}, event, {
	      preventDefault: function preventDefault() {
	        return runDefault = false;
	      }
	    }));
	
	    runDefault && handler(event);
	  };
	
	  component._isDBBSetup = true;
	};
	
	var deriveDBB = {
	  mounted: function mounted() {
	    _setupDBB(this);
	  },
	  activated: function activated() {
	    this._isDBBSetup === false && _setupDBB(this);
	  },
	  deactivated: function deactivated() {
	    this._isDBBSetup === true && (this._isDBBSetup = false);
	  },
	  destroyed: function destroyed() {
	    this.$el.onDeviceBackButton && this.$el.onDeviceBackButton.destroy();
	  }
	};
	
	var deriveHandler = function deriveHandler(handlerName) {
	  var propName = (0, _util.handlerToProp)(handlerName);
	
	  return {
	    props: (0, _defineProperty3.default)({}, propName, {
	      type: Function,
	      default: null
	    }),
	
	    watch: (0, _defineProperty3.default)({}, propName, function () {
	      this.$el[handlerName] = this[propName];
	    }),
	
	    mounted: function mounted() {
	      this[propName] && (this.$el[handlerName] = this[propName]);
	    }
	  };
	};
	
	var deriveEvents = {
	  mounted: function mounted() {
	    var _this = this;
	
	    this._handlers = {};
	    this._boundEvents = this.$el.constructor.events || [];
	
	    this._boundEvents.forEach(function (key) {
	      _this._handlers[(0, _util.eventToHandler)(key)] = function (event) {
	        if (event.target === _this.$el || !/^ons-/i.test(event.target.tagName)) {
	          _this.$emit(key, event);
	        }
	      };
	      _this.$el.addEventListener(key, _this._handlers[(0, _util.eventToHandler)(key)]);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    this._boundEvents.forEach(function (key) {
	      _this2.$el.removeEventListener(key, _this2._handlers[(0, _util.eventToHandler)(key)]);
	    });
	    this._handlers = this._boundEvents = null;
	  }
	};
	
	exports.deriveDBB = deriveDBB;
	exports.deriveHandler = deriveHandler;
	exports.deriveEvents = deriveEvents;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(50);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var $Object = __webpack_require__(23).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(22);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(31), 'Object', {defineProperty: __webpack_require__(27).f});

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var hyphenate = exports.hyphenate = function hyphenate(string) {
	  return string.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	
	var camelize = exports.camelize = function camelize(string) {
	  return string.toLowerCase().replace(/-([a-z])/g, function (m, l) {
	    return l.toUpperCase();
	  });
	};
	
	var eventToHandler = exports.eventToHandler = function eventToHandler(name) {
	  return '_on' + name.charAt(0).toUpperCase() + name.slice(1);
	};
	
	var handlerToProp = exports.handlerToProp = function handlerToProp(name) {
	  return name.slice(2).charAt(0).toLowerCase() + name.slice(2).slice(1);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.portal = exports.dialogCancel = exports.selfProvider = exports.modifier = exports.hasOptions = exports.hidable = undefined;
	
	var _defineProperty2 = __webpack_require__(49);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _onsenui = __webpack_require__(55);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _toggleVisibility = function _toggleVisibility() {
	  if (typeof this.visible === 'boolean' && this.visible !== this.$el.visible) {
	    this.$el[this.visible ? 'show' : 'hide'].call(this.$el, this.normalizedOptions || this.options);
	  }
	};
	var _teleport = function _teleport() {
	  if (!this._isDestroyed && (!this.$el.parentNode || this.$el.parentNode !== document.body)) {
	    document.body.appendChild(this.$el);
	  }
	};
	var _unmount = function _unmount() {
	  var _this = this;
	
	  if (this.$el.visible === true) {
	    this.$el.hide().then(function () {
	      return _this.$el.remove();
	    });
	  } else {
	    this.$el.remove();
	  }
	};
	
	var hidable = {
	  props: {
	    visible: {
	      type: Boolean,
	      default: undefined }
	  },
	
	  watch: {
	    visible: function visible() {
	      _toggleVisibility.call(this);
	    }
	  },
	
	  mounted: function mounted() {
	    var _this2 = this;
	
	    this.$nextTick(function () {
	      return _toggleVisibility.call(_this2);
	    });
	  },
	  activated: function activated() {
	    var _this3 = this;
	
	    this.$nextTick(function () {
	      return _toggleVisibility.call(_this3);
	    });
	  }
	};
	
	var hasOptions = {
	  props: {
	    options: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  }
	};
	
	var modifier = {
	  props: {
	    modifier: {
	      type: String,
	      default: ''
	    }
	  },
	
	  methods: {
	    _updateModifier: function _updateModifier() {
	      var _this4 = this;
	
	      var preset = this._md ? ['material'] : [];
	
	      (this._previousModifier || '').split(/\s+/).concat(preset).forEach(function (m) {
	        return _onsenui._util.removeModifier(_this4.$el, m, { autoStyle: true });
	      });
	
	      this.modifier.trim().split(/\s+/).concat(preset).forEach(function (m) {
	        return m && _onsenui._util.addModifier(_this4.$el, m, { autoStyle: true });
	      });
	
	      this._previousModifier = this.modifier;
	    }
	  },
	
	  watch: {
	    modifier: function modifier() {
	      this._updateModifier();
	    }
	  },
	
	  mounted: function mounted() {
	    this._md = /^material$/.test(this.$el.getAttribute('modifier'));
	    this._updateModifier();
	  }
	};
	
	var selfProvider = {
	  provide: function provide() {
	    return (0, _defineProperty3.default)({}, this.$options._componentTag.slice(6), this);
	  }
	};
	
	var dialogCancel = {
	  mounted: function mounted() {
	    var _this5 = this;
	
	    this.$on('dialog-cancel', function () {
	      return _this5.$emit('update:visible', false);
	    });
	  }
	};
	
	var portal = {
	  mounted: function mounted() {
	    _teleport.call(this);
	  },
	  updated: function updated() {
	    _teleport.call(this);
	  },
	  activated: function activated() {
	    _teleport.call(this);
	  },
	  deactivated: function deactivated() {
	    _unmount.call(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    _unmount.call(this);
	  }
	};
	
	exports.hidable = hidable;
	exports.hasOptions = hasOptions;
	exports.modifier = modifier;
	exports.selfProvider = selfProvider;
	exports.dialogCancel = dialogCancel;
	exports.portal = portal;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-popover', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(59),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.modifier, _mixins.deriveEvents, _mixins.deriveDBB, _mixins.portal],
	
	  props: {
	    title: {
	      type: String
	    },
	    footer: {
	      type: Object,
	      validator: function validator(value) {
	        return (0, _keys2.default)(value).every(function (key) {
	          return value[key] instanceof Function;
	        });
	      }
	    }
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-alert-dialog', [_c('div', {
	    staticClass: "alert-dialog-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-footer"
	  }, [_vm._t("footer", _vm._l((_vm.footer), function(handler, key) {
	    return _c('button', {
	      key: key,
	      staticClass: "alert-dialog-button",
	      on: {
	        "click": handler
	      }
	    }, [_vm._v(_vm._s(key))])
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(62),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.deriveEvents, _mixins.hidable],
	
	  props: {
	    open: {
	      type: Boolean,
	      default: undefined
	    }
	  },
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.$el.toggleItems();
	      }
	    },
	    _shouldUpdate: function _shouldUpdate() {
	      return this.open !== undefined && this.open !== this.$el.isOpen();
	    },
	    _updateToggle: function _updateToggle() {
	      this._shouldUpdate() && this.$el[this.open ? 'showItems' : 'hideItems'].call(this.$el);
	    }
	  },
	
	  watch: {
	    open: function open() {
	      this._updateToggle();
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$on(['open', 'close'], function () {
	      return _this._shouldUpdate() && _this.$emit('update:open', _this.$el.isOpen());
	    });
	
	    this._updateToggle();
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-speed-dial', {
	    domProps: {
	      "onClick": _vm.action
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(64),
	  /* template */
	  __webpack_require__(65),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.deriveEvents],
	
	  props: {
	    index: {
	      type: Number
	    }
	  },
	
	  watch: {
	    index: function index() {
	      if (this.index !== this.$el.getActiveIndex()) {
	        this.$el.setActiveIndex(this.index, this.options);
	      }
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-carousel', {
	    attrs: {
	      "initial-index": _vm.index
	    },
	    on: {
	      "postchange": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.$emit('update:index', $event.activeIndex)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(67),
	  /* template */
	  __webpack_require__(68),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['tabbar'],
	
	  props: {
	    page: {},
	    active: {
	      type: Boolean
	    }
	  },
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.tabbar.$el.setActiveTab(this.$el._findTabIndex(), this.tabbar.options);
	      }
	    }
	  },
	
	  watch: {
	    active: function active() {
	      this.active ? this.$el.setActive() : this.$el.setInactive();
	    }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tab', {
	    attrs: {
	      "active": _vm.active
	    },
	    domProps: {
	      "onClick": _vm.action
	    }
	  })
	},staticRenderFns: []}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(70),
	  /* template */
	  __webpack_require__(75),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getOwnPropertyDescriptor = __webpack_require__(71);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.deriveEvents, _mixins.hasOptions, _mixins.hidable, _mixins.selfProvider],
	
	  props: {
	    index: {
	      type: Number
	    },
	    tabs: {
	      type: Array,
	      validator: function validator(value) {
	        return value.every(function (tab) {
	          return ['icon', 'label', 'page'].some(function (prop) {
	            return !!(0, _getOwnPropertyDescriptor2.default)(tab, prop);
	          });
	        });
	      }
	    }
	  },
	
	  watch: {
	    index: function index() {
	      if (this.index !== this.$el.getActiveTabIndex()) {
	        this.$el.setActiveTab(this.index, this.options);
	      }
	    }
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var $Object = __webpack_require__(23).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(9)
	  , $getOwnPropertyDescriptor = __webpack_require__(74).f;
	
	__webpack_require__(21)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(35)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(31) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tabbar', {
	    attrs: {
	      "activeIndex": _vm.index
	    },
	    on: {
	      "postchange": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.$emit('update:index', $event.index)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "tabbar__content"
	  }, [_vm._t("pages", _vm._l((_vm.tabs), function(tab) {
	    return _c(tab.page, {
	      key: (tab.key || tab.page),
	      tag: "component"
	    })
	  }))], 2), _vm._v(" "), _c('div', {
	    staticClass: "tabbar"
	  }, [_vm._t("default", _vm._l((_vm.tabs), function(tab) {
	    return _c('v-ons-tab', _vm._b({
	      key: (tab.key || tab)
	    }, 'v-ons-tab', tab))
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(77),
	  /* template */
	  __webpack_require__(78),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['navigator'],
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault && this.navigator.pageStack.length > 1) {
	        this.navigator.popPage();
	      }
	    }
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-back-button', {
	    domProps: {
	      "onClick": _vm.action
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(80),
	  /* template */
	  __webpack_require__(115),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _promise = __webpack_require__(81);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.selfProvider, _mixins.deriveEvents, _mixins.deriveDBB],
	
	  props: {
	    pageStack: {
	      type: Array,
	      required: true
	    },
	    popPage: {
	      type: Function,
	      default: function _default() {
	        this.pageStack.pop();
	      }
	    }
	  },
	
	  methods: {
	    isReady: function isReady() {
	      if (this.hasOwnProperty('_ready') && this._ready instanceof _promise2.default) {
	        return this._ready;
	      }
	      return _promise2.default.resolve();
	    },
	    onDeviceBackButton: function onDeviceBackButton(event) {
	      if (this.pageStack.length > 1) {
	        this.popPage();
	      } else {
	        event.callParentHandler();
	      }
	    },
	    _setPagesVisibility: function _setPagesVisibility(start, end, visibility) {
	      for (var i = start; i < end - 1; i++) {
	        this.$children[i].$el.style.visibility = visibility;
	      }
	    },
	    _reattachPage: function _reattachPage(pageElement) {
	      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	      this.$el.insertBefore(pageElement, position);
	      pageElement._isShown = true;
	    },
	    _redetachPage: function _redetachPage(pageElement) {
	      pageElement._destroy();
	      return _promise2.default.resolve();
	    },
	    _animate: function _animate(_ref) {
	      var _this = this;
	
	      var lastLength = _ref.lastLength,
	          currentLength = _ref.currentLength,
	          lastTopPage = _ref.lastTopPage,
	          currentTopPage = _ref.currentTopPage;
	
	      if (currentLength > lastLength) {
	        var isReattached = false;
	        if (lastTopPage.parentElement !== this.$el) {
	          this._reattachPage(lastTopPage, this.$el.children[lastLength - 1]);
	          isReattached = true;
	          lastLength--;
	        }
	        this._setPagesVisibility(lastLength, currentLength, 'hidden');
	
	        return this.$el._pushPage((0, _extends3.default)({}, this.options, { leavePage: lastTopPage })).then(function () {
	          _this._setPagesVisibility(lastLength, currentLength, '');
	          if (isReattached) {
	            _this._redetachPage(lastTopPage);
	          }
	        });
	      }
	
	      if (currentLength < lastLength) {
	        this._reattachPage(lastTopPage, null);
	        return this.$el._popPage((0, _extends3.default)({}, this.options), function () {
	          return _this._redetachPage(lastTopPage);
	        });
	      }
	
	      this._reattachPage(lastTopPage, currentTopPage);
	      return this.$el._pushPage((0, _extends3.default)({}, this.options)).then(function () {
	        _this._redetachPage(lastTopPage);
	      });
	    }
	  },
	
	  watch: {
	    pageStack: function pageStack(after, before) {
	      var _this2 = this;
	
	      var propWasMutated = after === before;
	
	      var lastLength = propWasMutated ? this.$children.length : before.length;
	      var lastTopPage = this.$children[this.$children.length - 1].$el;
	
	      this.$nextTick(function () {
	        var currentLength = propWasMutated ? _this2.$children.length : after.length;
	        var currentTopPage = _this2.$children[_this2.$children.length - 1].$el;
	
	        if (currentTopPage !== lastTopPage) {
	          _this2._ready = _this2._animate({ lastLength: lastLength, currentLength: currentLength, lastTopPage: lastTopPage, currentTopPage: currentTopPage });
	        } else if (currentLength !== lastLength) {
	          currentTopPage.updateBackButton(currentLength > 1);
	        }
	
	        lastTopPage = currentTopPage = null;
	      });
	    }
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(97);
	__webpack_require__(101);
	module.exports = __webpack_require__(23).Promise;

/***/ },
/* 83 */
/***/ function(module, exports) {



/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(85)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(86)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(87)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(88)
	  , hide           = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(89)
	  , $iterCreate    = __webpack_require__(90)
	  , setToStringTag = __webpack_require__(94)
	  , getPrototypeOf = __webpack_require__(96)
	  , ITERATOR       = __webpack_require__(95)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(91)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(94)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(26)(IteratorPrototype, __webpack_require__(95)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(92)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(33)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(93).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(27)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(6);
	
	module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(27).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(95)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(17)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(26)
	  , Iterators     = __webpack_require__(89)
	  , TO_STRING_TAG = __webpack_require__(95)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(99)
	  , step             = __webpack_require__(100)
	  , Iterators        = __webpack_require__(89)
	  , toIObject        = __webpack_require__(9);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(86)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(87)
	  , global             = __webpack_require__(18)
	  , ctx                = __webpack_require__(24)
	  , classof            = __webpack_require__(102)
	  , $export            = __webpack_require__(22)
	  , isObject           = __webpack_require__(29)
	  , aFunction          = __webpack_require__(25)
	  , anInstance         = __webpack_require__(103)
	  , forOf              = __webpack_require__(104)
	  , speciesConstructor = __webpack_require__(108)
	  , task               = __webpack_require__(109).set
	  , microtask          = __webpack_require__(111)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(95)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(112)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(94)($Promise, PROMISE);
	__webpack_require__(113)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(114)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(95)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(24)
	  , call        = __webpack_require__(105)
	  , isArrayIter = __webpack_require__(106)
	  , anObject    = __webpack_require__(28)
	  , toLength    = __webpack_require__(13)
	  , getIterFn   = __webpack_require__(107)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(28);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(89)
	  , ITERATOR   = __webpack_require__(95)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(102)
	  , ITERATOR  = __webpack_require__(95)('iterator')
	  , Iterators = __webpack_require__(89);
	module.exports = __webpack_require__(23).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(28)
	  , aFunction = __webpack_require__(25)
	  , SPECIES   = __webpack_require__(95)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(24)
	  , invoke             = __webpack_require__(110)
	  , html               = __webpack_require__(93)
	  , cel                = __webpack_require__(33)
	  , global             = __webpack_require__(18)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(11)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , macrotask = __webpack_require__(109).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(11)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(26);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(18)
	  , core        = __webpack_require__(23)
	  , dP          = __webpack_require__(27)
	  , DESCRIPTORS = __webpack_require__(31)
	  , SPECIES     = __webpack_require__(95)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(95)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-navigator', [_vm._t("default", _vm._l((_vm.pageStack), function(page) {
	    return _c(page, {
	      key: page,
	      tag: "component"
	    })
	  }))], 2)
	},staticRenderFns: []}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(117),
	  /* template */
	  __webpack_require__(118),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.deriveEvents],
	
	  props: {
	    open: {
	      type: Boolean,
	      default: undefined
	    }
	  },
	
	  methods: {
	    action: function action() {
	      this._shouldUpdate() && this.$el[this.open ? 'open' : 'close'].call(this.$el, this.options).catch(function () {});
	    },
	    _shouldUpdate: function _shouldUpdate() {
	      return this.open !== undefined && this.open !== this.$el.isOpen;
	    }
	  },
	
	  watch: {
	    open: function open() {
	      this.action();
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$on(['postopen', 'postclose'], function () {
	      return _this._shouldUpdate() && _this.$emit('update:open', _this.$el.isOpen);
	    });
	
	    this.action();
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-splitter-side', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(120),
	  /* template */
	  __webpack_require__(121),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    renderItem: {
	      type: Function,
	      required: true,
	      validator: function validator(value) {
	        var component = value(0);
	        if (component._isVue && !component._isMounted) {
	          component.$destroy();
	          return true;
	        }
	        return false;
	      }
	    },
	    length: {
	      type: Number,
	      required: true
	    },
	    calculateItemHeight: {
	      type: Function,
	      default: undefined
	    }
	  },
	
	  data: function data() {
	    return {
	      provider: null
	    };
	  },
	
	
	  methods: {
	    _setup: function _setup() {
	      var _this = this;
	
	      this.provider && this.provider.destroy();
	
	      var delegate = new this.$ons._ons._internal.LazyRepeatDelegate({
	        calculateItemHeight: this.calculateItemHeight,
	        createItemContent: function createItemContent(i) {
	          return _this.renderItem(i).$mount().$el;
	        },
	        destroyItem: function destroyItem(i, _ref) {
	          var element = _ref.element;
	          return element.__vue__.$destroy();
	        },
	        countItems: function countItems() {
	          return _this.length;
	        }
	      }, null);
	
	      this.provider = new this.$ons._ons._internal.LazyRepeatProvider(this.$parent.$el, delegate);
	    },
	    refresh: function refresh() {
	      return this.provider.refresh();
	    }
	  },
	
	  watch: {
	    renderItem: function renderItem() {
	      this._setup();
	    },
	    length: function length() {
	      this._setup();
	    },
	    calculateItemHeight: function calculateItemHeight() {
	      this._setup();
	    }
	  },
	
	  mounted: function mounted() {
	    this._setup();
	    this.$vnode.context.$on('refresh', this.refresh);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$vnode.context.$off('refresh', this.refresh);
	
	    this.$el._lazyRepeatProvider = this.provider;
	    this.provider = null;
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-lazy-repeat')
	},staticRenderFns: []}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(123),
	  /* template */
	  __webpack_require__(124),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.modifier, _mixins.deriveEvents]
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c(_vm.$options._componentTag.slice(2), {
	    tag: "component",
	    on: {
	      "click": function($event) {
	        _vm.$emit('click', $event)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VOnsModel = __webpack_require__(126);
	
	Object.defineProperty(exports, 'OnsModel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsModel).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isLiteral = function _isLiteral(e) {
	  return e.trim().charAt(0) === '{';
	};
	var _validateLiteral = function _validateLiteral(o) {
	  if (!Object.hasOwnProperty.call(o, 'container') || !Object.hasOwnProperty.call(o, 'key')) {
	    throw Error('Object literals in VOnsModel must include \'key\' and \'container\' properties.');
	  }
	};
	
	var _getModel = function _getModel(binding, context, newValue) {
	  var expression = (binding.expression || '').trim();
	
	  if (_isLiteral(expression)) {
	    _validateLiteral(binding.value);
	
	    if (newValue !== undefined && binding.value.container[binding.value.key] !== newValue) {
	      context.$set(binding.value.container, binding.value.key, newValue);
	    }
	
	    return binding.value.container[binding.value.key];
	  }
	
	  var path = expression.split('.');
	  var lastKey = path.pop();
	
	  var key = void 0,
	      model = context;
	  while (key = path.shift()) {
	    model = model[key];
	  }
	
	  if (newValue !== undefined && model[lastKey] !== newValue) {
	    model[lastKey] = newValue;
	  }
	
	  return model[lastKey] || binding.value;
	};
	
	var _setModel = _getModel;
	
	var _formatOutput = function _formatOutput() {
	  var modifiers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var output = arguments[1];
	
	  if (Object.hasOwnProperty.call(modifiers, 'number')) {
	    return Number(output);
	  }
	  if (Object.hasOwnProperty.call(modifiers, 'trim')) {
	    return output.trim();
	  }
	  return output;
	};
	
	var _bindOn = function _bindOn(eventName, binding, vnode, handler) {
	  var expression = (binding.expression || '').trim();
	  if (_isLiteral(expression) || vnode.context.hasOwnProperty(expression.split('.')[0])) {
	    vnode.child.$on(eventName, handler);
	  }
	};
	
	var _bindSimpleInputOn = function _bindSimpleInputOn(eventName, binding, vnode, propName) {
	  _bindOn(eventName, binding, vnode, function (event) {
	    _setModel(binding, vnode.context, event.target[propName]);
	  });
	};
	
	var _bindModifierInputOn = function _bindModifierInputOn(eventName, binding, vnode) {
	  _bindOn(eventName, binding, vnode, function (event) {
	    _setModel(binding, vnode.context, _formatOutput(binding.modifiers, event.target.value));
	  });
	};
	
	var _bindArrayInputOn = function _bindArrayInputOn(eventName, binding, vnode) {
	  _bindOn(eventName, binding, vnode, function (event) {
	    var modelValue = _getModel(binding, vnode.context);
	    if (modelValue.indexOf(event.target.value) >= 0) {
	      !event.target.checked && modelValue.splice(modelValue.indexOf(event.target.value), 1);
	    } else {
	      event.target.checked && modelValue.push(event.target.value);
	    }
	  });
	};
	
	var _bindCheckbox = function _bindCheckbox(el, binding, vnode) {
	  var value = _getModel(binding, vnode.context);
	  if (value instanceof Array) {
	    el.checked = value.indexOf(el.value) >= 0;
	    _bindArrayInputOn('change', binding, vnode);
	  } else {
	    el.checked = !!value;
	    _bindSimpleInputOn('change', binding, vnode, 'checked');
	  }
	};
	
	var _updateCheckbox = function _updateCheckbox(el, binding, vnode) {
	  var value = _getModel(binding, vnode.context);
	  if (value instanceof Array) {
	    el.checked = value.indexOf(el.value) >= 0;
	  } else {
	    el.checked = !!value;
	  }
	};
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var tag = el.tagName.toLowerCase();
	    var value = _getModel(binding, vnode.context);
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelector('option[value=' + value + ']').setAttribute('selected', '');
	        _bindSimpleInputOn('change', binding, vnode, 'value');
	        break;
	
	      case 'ons-switch':
	        _bindCheckbox(el, binding, vnode);
	        break;
	
	      case 'ons-range':
	        el.value = value;
	        _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', binding, vnode);
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = el.value === value;
	            _bindSimpleInputOn('change', binding, vnode, 'value');
	            break;
	
	          case 'checkbox':
	            _bindCheckbox(el, binding, vnode);
	            break;
	
	          default:
	            el.value = value;
	            _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', binding, vnode);
	        }
	        break;
	
	      default:
	        throw new Error('"v-ons-model" directive cannot be used with "' + tag + '" element.');
	    }
	  },
	  update: function update(el, binding, vnode) {
	    var tag = el.tagName.toLowerCase();
	    var value = _getModel(binding, vnode.context);
	
	    switch (tag) {
	      case 'ons-select':
	        el.value = value;
	        break;
	
	      case 'ons-switch':
	        _updateCheckbox(el, binding, vnode);
	        break;
	
	      case 'ons-range':
	        el.value = value;
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = value === el.value;
	            break;
	
	          case 'checkbox':
	            _updateCheckbox(el, binding, vnode);
	            break;
	
	          default:
	            el.value !== value && (el.value = value);
	        }
	        break;
	    }
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MGRjZjJlZjVmZWM4ZjI3ZTc0MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9WT25zUG9wb3Zlci52dWUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2Rlcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJuYWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlPzYzYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zQWxlcnREaWFsb2cudnVlP2E2NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1NwZWVkRGlhbC52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNTcGVlZERpYWwudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlP2QzMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zQ2Fyb3VzZWwudnVlPzQ5ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYi52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlP2QzN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWJiYXIudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWJiYXIudnVlPzkwMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlIiwid2VicGFjazovLy9WT25zQmFja0J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlP2FmNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc05hdmlnYXRvci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNOYXZpZ2F0b3IudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlP2M5MzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1NwbGl0dGVyU2lkZS52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNTcGxpdHRlclNpZGUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGxpdHRlclNpZGUudnVlP2FmNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlIiwid2VicGFjazovLy9WT25zTGF6eVJlcGVhdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlP2ZkYTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlIiwid2VicGFjazovLy9WR2VuZXJpYy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlP2RhNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvVk9uc01vZGVsLmpzIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJkaXJlY3RpdmVzIiwicmVnaXN0ZXIiLCJWdWUiLCJ0eXBlIiwiaXRlbXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJpbnN0YWxsIiwicGFyYW1zIiwiY29uZmlnIiwic2lsZW50IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCIkb3B0aW9ucyIsInRlbXBsYXRlIiwibWF0Y2giLCJsb2NhdGlvbiIsIl9jb21wb25lbnRUYWciLCJfdXRpbCIsIndhcm4iLCJpbmRleCIsInByb3RvdHlwZSIsIiRvbnMiLCJmaWx0ZXIiLCJzb21lIiwiayIsInQiLCJyZWR1Y2UiLCJyIiwiX29ucyIsIndpbmRvdyIsInVzZSIsImRlZmF1bHQiLCJleHRlbmQiLCJjb21wb25lbnQiLCJtaXhpbnMiLCJuYW1lIiwiZXh0ZW5kcyIsIlZPbnNUb29sYmFyIiwiVk9uc1Rvb2xiYXJCdXR0b24iLCJWT25zQnV0dG9uIiwiVk9uc0ljb24iLCJWT25zU3dpdGNoIiwiVk9uc0lucHV0IiwiVk9uc1JhbmdlIiwiVk9uc1NlbGVjdCIsIlZPbnNDYXJkIiwiVk9uc0JvdHRvbVRvb2xiYXIiLCJWT25zU3BlZWREaWFsSXRlbSIsIlZPbnNMaXN0IiwiVk9uc0xpc3RJdGVtIiwiVk9uc0xpc3RUaXRsZSIsIlZPbnNMaXN0SGVhZGVyIiwiVk9uc0FjdGlvblNoZWV0QnV0dG9uIiwiVk9uc1JpcHBsZSIsIlZPbnNSb3ciLCJWT25zQ29sIiwiVk9uc1Byb2dyZXNzQmFyIiwiVk9uc1Byb2dyZXNzQ2lyY3VsYXIiLCJWT25zQ2Fyb3VzZWxJdGVtIiwiVk9uc1NwbGl0dGVyTWFzayIsIlZPbnNTcGxpdHRlckNvbnRlbnQiLCJWT25zUHVsbEhvb2siLCJWT25zU3BsaXR0ZXIiLCJWT25zRmFiIiwiVk9uc1BhZ2UiLCJWT25zRGlhbG9nIiwiVk9uc0FjdGlvblNoZWV0IiwiVk9uc01vZGFsIiwiVk9uc1RvYXN0IiwiZGVyaXZlREJCIiwiZGVyaXZlSGFuZGxlciIsImRlcml2ZUV2ZW50cyIsImhpZGFibGUiLCJoYXNPcHRpb25zIiwibW9kaWZpZXIiLCJzZWxmUHJvdmlkZXIiLCJkaWFsb2dDYW5jZWwiLCJwb3J0YWwiLCJfc2V0dXBEQkIiLCJkYmIiLCJoYW5kbGVyIiwiJGVsIiwiX2NhbGxiYWNrIiwiZSIsImNhbGxQYXJlbnRIYW5kbGVyIiwicnVuRGVmYXVsdCIsIiRlbWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9pc0RCQlNldHVwIiwibW91bnRlZCIsImFjdGl2YXRlZCIsImRlYWN0aXZhdGVkIiwiZGVzdHJveWVkIiwib25EZXZpY2VCYWNrQnV0dG9uIiwiZGVzdHJveSIsInByb3BOYW1lIiwiaGFuZGxlck5hbWUiLCJwcm9wcyIsIkZ1bmN0aW9uIiwid2F0Y2giLCJfaGFuZGxlcnMiLCJfYm91bmRFdmVudHMiLCJjb25zdHJ1Y3RvciIsImV2ZW50cyIsInRhcmdldCIsInRlc3QiLCJ0YWdOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaHlwaGVuYXRlIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJtIiwibCIsInRvVXBwZXJDYXNlIiwiZXZlbnRUb0hhbmRsZXIiLCJjaGFyQXQiLCJzbGljZSIsImhhbmRsZXJUb1Byb3AiLCJfdG9nZ2xlVmlzaWJpbGl0eSIsInZpc2libGUiLCJjYWxsIiwibm9ybWFsaXplZE9wdGlvbnMiLCJvcHRpb25zIiwiX3RlbGVwb3J0IiwiX2lzRGVzdHJveWVkIiwicGFyZW50Tm9kZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiX3VubW91bnQiLCJoaWRlIiwidGhlbiIsInJlbW92ZSIsIkJvb2xlYW4iLCJ1bmRlZmluZWQiLCIkbmV4dFRpY2siLCJPYmplY3QiLCJTdHJpbmciLCJtZXRob2RzIiwiX3VwZGF0ZU1vZGlmaWVyIiwicHJlc2V0IiwiX21kIiwiX3ByZXZpb3VzTW9kaWZpZXIiLCJzcGxpdCIsImNvbmNhdCIsInJlbW92ZU1vZGlmaWVyIiwiYXV0b1N0eWxlIiwidHJpbSIsImFkZE1vZGlmaWVyIiwiZ2V0QXR0cmlidXRlIiwicHJvdmlkZSIsIiRvbiIsInVwZGF0ZWQiLCJfaXNMaXRlcmFsIiwiX3ZhbGlkYXRlTGl0ZXJhbCIsImhhc093blByb3BlcnR5IiwibyIsIkVycm9yIiwiX2dldE1vZGVsIiwiYmluZGluZyIsImNvbnRleHQiLCJuZXdWYWx1ZSIsImV4cHJlc3Npb24iLCJjb250YWluZXIiLCIkc2V0IiwicGF0aCIsImxhc3RLZXkiLCJwb3AiLCJtb2RlbCIsInNoaWZ0IiwiX3NldE1vZGVsIiwiX2Zvcm1hdE91dHB1dCIsIm1vZGlmaWVycyIsIm91dHB1dCIsIk51bWJlciIsIl9iaW5kT24iLCJldmVudE5hbWUiLCJ2bm9kZSIsImNoaWxkIiwiX2JpbmRTaW1wbGVJbnB1dE9uIiwiX2JpbmRNb2RpZmllcklucHV0T24iLCJfYmluZEFycmF5SW5wdXRPbiIsIm1vZGVsVmFsdWUiLCJpbmRleE9mIiwiY2hlY2tlZCIsInNwbGljZSIsInB1c2giLCJfYmluZENoZWNrYm94IiwiZWwiLCJBcnJheSIsIl91cGRhdGVDaGVja2JveCIsImJpbmQiLCJ0YWciLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7S0FBWUEsVTs7QUFDWjs7S0FBWUMsVTs7QUFDWjs7QUFFQTs7Ozs7Ozs7QUFFQSxLQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEtBQVosRUFBc0I7QUFDckMsdUJBQVlBLEtBQVosRUFBbUJDLE9BQW5CLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNsQyxTQUFNQyxRQUFRSCxNQUFNRSxHQUFOLENBQWQ7QUFDQUEsV0FBTSxxQkFBVUEsR0FBVixDQUFOO0FBQ0FKLFNBQUlDLElBQUosRUFBVUcsR0FBVixFQUFlQyxLQUFmO0FBQ0QsSUFKRDtBQUtELEVBTkQ7O0FBUUEsS0FBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNOLEdBQUQsRUFBc0I7QUFBQSxPQUFoQk8sTUFBZ0IsdUVBQVAsRUFBTzs7QUFJcENSLFlBQVNDLEdBQVQsRUFBYyxXQUFkLEVBQTJCSCxVQUEzQjs7QUFLQUUsWUFBU0MsR0FBVCxFQUFjLFdBQWQsRUFBMkJGLFVBQTNCOztBQVNBLE9BQUksQ0FBQ0UsSUFBSVEsTUFBSixDQUFXQyxNQUFoQixFQUF3QjtBQUN0QlQsU0FBSVUsS0FBSixDQUFVO0FBQ1JDLG1CQURRLDBCQUNPO0FBQ2IsYUFBSSxLQUFLQyxRQUFMLENBQWNDLFFB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QUNBO0FBQ0EsSUFBRywyQ0FBMkMsZ0NBQWdDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qjs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtB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QVUsa0RBQWtEbUMsR0FBbEQsR0FBd0QsWUFBbEUsQ0FBTjtBQWpDSjtBQW1DRCxJQXhDWTtBQW1EYkcsU0FuRGEsa0JBbUROUCxFQW5ETSxFQW1ERjdCLE9BbkRFLEVBbURPa0IsS0FuRFAsRUFtRGM7QUFDekIsU0FBTWUsTUFBTUosR0FBR3RGLE9BQUgsQ0FBV08sV0FBWCxFQUFaO0FBQ0EsU0FBTTdHLFFBQVE4SixVQUFVQyxPQUFWLEVBQW1Ca0IsTUFBTWpCLE9BQXpCLENBQWQ7O0FBRUEsYUFBUWdDLEdBQVI7QUFDRSxZQUFLLFlBQUw7QUFDRUosWUFBRzVMLEtBQUgsR0FBV0EsS0FBWDtBQUNBOztBQUVGLFlBQUssWUFBTDtBQUNFOEwseUJBQWdCRixFQUFoQixFQUFvQjdCLE9BQXBCLEVBQTZCa0IsS0FBN0I7QUFDQTs7QUFFRixZQUFLLFdBQUw7QUFDRVcsWUFBRzVMLEtBQUgsR0FBV0EsS0FBWDtBQUNBOztBQUVGLFlBQUssV0FBTDtBQUNFLGlCQUFRNEwsR0FBR2hNLElBQVg7QUFDRSxnQkFBSyxPQUFMO0FBQ0VnTSxnQkFBR0osT0FBSCxHQUFheEwsVUFBVTRMLEdBQUc1TCxLQUExQjtBQUNBOztBQUVGLGdCQUFLLFVBQUw7QUFDRThMLDZCQUFnQkYsRUFBaEIsRUFBb0I3QixPQUFwQixFQUE2QmtCLEtBQTdCO0FBQ0E7O0FBRUY7QUFDRVcsZ0JBQUc1TCxLQUFILEtBQWFBLEtBQWIsS0FBdUI0TCxHQUFHNUwsS0FBSCxHQUFXQSxLQUFsQztBQVZKO0FBWUE7QUExQko7QUE0QkQ7QUFuRlksRSIsImZpbGUiOiJ2dWUtb25zZW51aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm9uc2VudWlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJWdWVPbnNlblwiLCBbXCJvbnNlbnVpXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZU9uc2VuXCJdID0gZmFjdG9yeShyZXF1aXJlKFwib25zZW51aVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlT25zZW5cIl0gPSBmYWN0b3J5KHJvb3RbXCJvbnNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkwZGNmMmVmNWZlYzhmMjdlNzQzIiwiaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgZGlyZWN0aXZlcyBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgaHlwaGVuYXRlIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsJztcblxuaW1wb3J0IG9ucyBmcm9tICdvbnNlbnVpJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoVnVlLCB0eXBlLCBpdGVtcykgPT4ge1xuICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpdGVtc1trZXldO1xuICAgIGtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgIFZ1ZVt0eXBlXShrZXksIHZhbHVlKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbnN0YWxsID0gKFZ1ZSwgcGFyYW1zID0ge30pID0+IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGNvbXBvbmVudHMgb2YgdnVlLW9uc2VudWkuXG4gICAqL1xuICByZWdpc3RlcihWdWUsICdjb21wb25lbnQnLCBjb21wb25lbnRzKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgZGlyZWN0aXZlcyBvZiB2dWUtb25zZW51aS5cbiAgICovXG4gIHJlZ2lzdGVyKFZ1ZSwgJ2RpcmVjdGl2ZScsIGRpcmVjdGl2ZXMpO1xuXG4gIC8qKlxuICAgKiBBcHBseSBhIG1peGluIGdsb2JhbGx5IHRvIHByZXZlbnQgb25zLSogZWxlbWVudHNcbiAgICogZnJvbSBiZWluZyBpbmNsdWRlZCBkaXJlY3RseSBpbiBWdWUgaW5zdGFuY2UgdGVtcGxhdGVzLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGFmZmVjdHMgZXZlcnkgVnVlIGluc3RhbmNlIG9ubHkgd2hlbiB3YXJuc1xuICAgKiBhcmUgYWxsb3dlZCBieSBWdWUuXG4gICAqL1xuICBpZiAoIVZ1ZS5jb25maWcuc2lsZW50KSB7XG4gICAgVnVlLm1peGluKHtcbiAgICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMuJG9wdGlvbnMudGVtcGxhdGUubWF0Y2goLzwob25zLVtcXHctXSspL2ltKTtcblxuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLiRvcHRpb25zLl9jb21wb25lbnRUYWcgPyBgIGluIGNvbXBvbmVudCA8JHt0aGlzLiRvcHRpb25zLl9jb21wb25lbnRUYWd9PmAgOiAnJztcbiAgICAgICAgICAgIG9ucy5fdXRpbC53YXJuKCdbdnVlLW9uc2VudWldIFZ1ZSB0ZW1wbGF0ZXMgbXVzdCBub3QgY29udGFpbiA8b25zLSo+IGVsZW1lbnRzIGRpcmVjdGx5LlxcbicgK1xuICAgICAgICAgICAgICBgPCR7bWF0Y2hbMV19PiBlbGVtZW50IGZvdW5kIG5lYXIgaW5kZXggJHttYXRjaC5pbmRleH0ke2xvY2F0aW9ufS4gUGxlYXNlIHVzZSA8di0ke21hdGNoWzFdfT4gaW5zdGVhZDpcbiAgICAgICAgICAgICAgJHt0aGlzLiRvcHRpb25zLnRlbXBsYXRlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3NlIG9ucyBvYmplY3QuXG4gICAqL1xuICBWdWUucHJvdG90eXBlLiRvbnMgPSBPYmplY3Qua2V5cyhvbnMpXG4gICAgLmZpbHRlcihrID0+IFtcbiAgICAgIC9eZGlzYWJsZS8sXG4gICAgICAvXmVuYWJsZS8sXG4gICAgICAvXm9wZW4vLFxuICAgICAgL15zZXQvLFxuICAgICAgL2FuaW1pdC8sXG4gICAgICAvRWxlbWVudCQvLFxuICAgICAgL2Zhc3RDbGljay8sXG4gICAgICAvR2VzdHVyZURldGVjdG9yLyxcbiAgICAgIC9ub3RpZmljYXRpb24vLFxuICAgICAgL29yaWVudGF0aW9uLyxcbiAgICAgIC9wbGF0Zm9ybS8sXG4gICAgICAvcmVhZHkvLFxuICAgIF0uc29tZSh0ID0+IGsubWF0Y2godCkpKVxuICAgIC5yZWR1Y2UoKHIsIGspID0+IHtcbiAgICAgIHJba10gPSBvbnNba107XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCB7IF9vbnM6IG9ucyB9KTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKHtpbnN0YWxsfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zUG9wb3ZlciB9IGZyb20gJy4vVk9uc1BvcG92ZXIudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc0FsZXJ0RGlhbG9nIH0gZnJvbSAnLi9WT25zQWxlcnREaWFsb2cudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1NwZWVkRGlhbCB9IGZyb20gJy4vVk9uc1NwZWVkRGlhbC52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zQ2Fyb3VzZWwgfSBmcm9tICcuL1ZPbnNDYXJvdXNlbC52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zVGFiIH0gZnJvbSAnLi9WT25zVGFiLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNUYWJiYXIgfSBmcm9tICcuL1ZPbnNUYWJiYXIudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc0JhY2tCdXR0b24gfSBmcm9tICcuL1ZPbnNCYWNrQnV0dG9uLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNOYXZpZ2F0b3IgfSBmcm9tICcuL1ZPbnNOYXZpZ2F0b3IudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1NwbGl0dGVyU2lkZSB9IGZyb20gJy4vVk9uc1NwbGl0dGVyU2lkZS52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zTGF6eVJlcGVhdCB9IGZyb20gJy4vVk9uc0xhenlSZXBlYXQudnVlJztcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG5pbXBvcnQgVkdlbmVyaWMgZnJvbSAnLi9WR2VuZXJpYy52dWUnO1xuaW1wb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBkZXJpdmVEQkIsIGRlcml2ZUhhbmRsZXIsIHNlbGZQcm92aWRlciwgcG9ydGFsIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuY29uc3QgZXh0ZW5kID0gKGNvbXBvbmVudCwgbWl4aW5zID0gW10pID0+ICh7IG5hbWU6ICd2LW9ucy0nICsgY29tcG9uZW50LCBtaXhpbnMsIGV4dGVuZHM6IFZHZW5lcmljIH0pO1xuXG5leHBvcnQgY29uc3QgVk9uc1Rvb2xiYXIgPSBleHRlbmQoJ3Rvb2xiYXInKTtcbmV4cG9ydCBjb25zdCBWT25zVG9vbGJhckJ1dHRvbiA9IGV4dGVuZCgndG9vbGJhci1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBWT25zQnV0dG9uID0gZXh0ZW5kKCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBWT25zSWNvbiA9IGV4dGVuZCgnaWNvbicpO1xuZXhwb3J0IGNvbnN0IFZPbnNTd2l0Y2ggPSBleHRlbmQoJ3N3aXRjaCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNJbnB1dCA9IGV4dGVuZCgnaW5wdXQnKTtcbmV4cG9ydCBjb25zdCBWT25zUmFuZ2UgPSBleHRlbmQoJ3JhbmdlJyk7XG5leHBvcnQgY29uc3QgVk9uc1NlbGVjdCA9IGV4dGVuZCgnc2VsZWN0Jyk7XG5leHBvcnQgY29uc3QgVk9uc0NhcmQgPSBleHRlbmQoJ2NhcmQnKTtcbmV4cG9ydCBjb25zdCBWT25zQm90dG9tVG9vbGJhciA9IGV4dGVuZCgnYm90dG9tLXRvb2xiYXInKTtcbmV4cG9ydCBjb25zdCBWT25zU3BlZWREaWFsSXRlbSA9IGV4dGVuZCgnc3BlZWQtZGlhbC1pdGVtJyk7XG5leHBvcnQgY29uc3QgVk9uc0xpc3QgPSBleHRlbmQoJ2xpc3QnKTtcbmV4cG9ydCBjb25zdCBWT25zTGlzdEl0ZW0gPSBleHRlbmQoJ2xpc3QtaXRlbScpO1xuZXhwb3J0IGNvbnN0IFZPbnNMaXN0VGl0bGUgPSBleHRlbmQoJ2xpc3QtdGl0bGUnKTtcbmV4cG9ydCBjb25zdCBWT25zTGlzdEhlYWRlciA9IGV4dGVuZCgnbGlzdC1oZWFkZXInKTtcbmV4cG9ydCBjb25zdCBWT25zQWN0aW9uU2hlZXRCdXR0b24gPSBleHRlbmQoJ2FjdGlvbi1zaGVldC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBWT25zUmlwcGxlID0gZXh0ZW5kKCdyaXBwbGUnKTtcbmV4cG9ydCBjb25zdCBWT25zUm93ID0gZXh0ZW5kKCdyb3cnKTtcbmV4cG9ydCBjb25zdCBWT25zQ29sID0gZXh0ZW5kKCdjb2wnKTtcbmV4cG9ydCBjb25zdCBWT25zUHJvZ3Jlc3NCYXIgPSBleHRlbmQoJ3Byb2dyZXNzLWJhcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNQcm9ncmVzc0NpcmN1bGFyID0gZXh0ZW5kKCdwcm9ncmVzcy1jaXJjdWxhcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNDYXJvdXNlbEl0ZW0gPSBleHRlbmQoJ2Nhcm91c2VsLWl0ZW0nKTtcbmV4cG9ydCBjb25zdCBWT25zU3BsaXR0ZXJNYXNrID0gZXh0ZW5kKCdzcGxpdHRlci1tYXNrJyk7XG5leHBvcnQgY29uc3QgVk9uc1NwbGl0dGVyQ29udGVudCA9IGV4dGVuZCgnc3BsaXR0ZXItY29udGVudCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNQdWxsSG9vayA9IGV4dGVuZCgncHVsbC1ob29rJywgW2Rlcml2ZUhhbmRsZXIoJ29uQWN0aW9uJyldKTtcbmV4cG9ydCBjb25zdCBWT25zU3BsaXR0ZXIgPSBleHRlbmQoJ3NwbGl0dGVyJywgW3NlbGZQcm92aWRlciwgZGVyaXZlREJCXSk7XG5leHBvcnQgY29uc3QgVk9uc0ZhYiA9IGV4dGVuZCgnZmFiJywgW2hpZGFibGVdKTtcbmV4cG9ydCBjb25zdCBWT25zUGFnZSA9IGV4dGVuZCgncGFnZScsIFtkZXJpdmVEQkIsIGRlcml2ZUhhbmRsZXIoJ29uSW5maW5pdGVTY3JvbGwnKV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNEaWFsb2cgPSBleHRlbmQoJ2RpYWxvZycsIFtoaWRhYmxlLCBoYXNPcHRpb25zLCBkaWFsb2dDYW5jZWwsIGRlcml2ZURCQiwgcG9ydGFsXSk7XG5leHBvcnQgY29uc3QgVk9uc0FjdGlvblNoZWV0ID0gZXh0ZW5kKCdhY3Rpb24tc2hlZXQnLCBbaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBkZXJpdmVEQkIsIHBvcnRhbF0pO1xuZXhwb3J0IGNvbnN0IFZPbnNNb2RhbCA9IGV4dGVuZCgnbW9kYWwnLCBbaGlkYWJsZSwgaGFzT3B0aW9ucywgZGVyaXZlREJCLCBwb3J0YWxdKTtcbmV4cG9ydCBjb25zdCBWT25zVG9hc3QgPSBleHRlbmQoJ3RvYXN0JywgW2hpZGFibGUsIGhhc09wdGlvbnMsIGRlcml2ZURCQiwgcG9ydGFsXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNQb3BvdmVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGM5NTYwNjBcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc1BvcG92ZXIudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIHRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dClcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgIDogW2hvb2tdXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtcG9wb3Zlcj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLXBvcG92ZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoaWRhYmxlLCBoYXNPcHRpb25zLCBkaWFsb2dDYW5jZWwsIG1vZGlmaWVyLCBkZXJpdmVFdmVudHMsIGRlcml2ZURCQiwgcG9ydGFsIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBtb2RpZmllciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkIsIHBvcnRhbF0sXG5cbiAgICBwcm9wczoge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5faXNWdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG5vcm1hbGl6ZWRUYXJnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5faXNWdWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuJGVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgICAgIH0sXG4gICAgICBub3JtYWxpemVkT3B0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5ub3JtYWxpemVkVGFyZ2V0LFxuICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNQb3BvdmVyLnZ1ZT82ZmJjMmZjZCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVyaXZlREJCLCBkZXJpdmVIYW5kbGVyLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuL2Rlcml2ZSc7XG5leHBvcnQgeyBoaWRhYmxlLCBoYXNPcHRpb25zLCBtb2RpZmllciwgc2VsZlByb3ZpZGVyLCBkaWFsb2dDYW5jZWwsIHBvcnRhbCB9IGZyb20gJy4vY29tbW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvaW5kZXguanMiLCJpbXBvcnQgeyBldmVudFRvSGFuZGxlciwgaGFuZGxlclRvUHJvcCB9IGZyb20gJy4uL2ludGVybmFsL3V0aWwnO1xuXG4vKiBQcml2YXRlICovXG5jb25zdCBfc2V0dXBEQkIgPSBjb21wb25lbnQgPT4ge1xuICBjb25zdCBkYmIgPSAnb25EZXZpY2VCYWNrQnV0dG9uJztcbiAgLy8gQ2FsbCBvcmlnaW5hbCBoYW5kbGVyIG9yIHBhcmVudCBoYW5kbGVyIGJ5IGRlZmF1bHRcbiAgY29uc3QgaGFuZGxlciA9IGNvbXBvbmVudFtkYmJdIHx8IChjb21wb25lbnQuJGVsW2RiYl0gJiYgY29tcG9uZW50LiRlbFtkYmJdLl9jYWxsYmFjaykgfHwgKGUgPT4gZS5jYWxsUGFyZW50SGFuZGxlcigpKTtcblxuICBjb21wb25lbnQuJGVsW2RiYl0gPSBldmVudCA9PiB7XG4gICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuXG4gICAgY29tcG9uZW50LiRlbWl0KGhhbmRsZXJUb1Byb3AoZGJiKSwge1xuICAgICAgLi4uZXZlbnQsXG4gICAgICBwcmV2ZW50RGVmYXVsdDogKCkgPT4gcnVuRGVmYXVsdCA9IGZhbHNlXG4gICAgfSk7XG5cbiAgICBydW5EZWZhdWx0ICYmIGhhbmRsZXIoZXZlbnQpO1xuICB9O1xuXG4gIGNvbXBvbmVudC5faXNEQkJTZXR1cCA9IHRydWU7XG59O1xuXG4vKiBQdWJsaWMgKi9cbi8vIERldmljZSBCYWNrIEJ1dHRvbiBIYW5kbGVyXG5jb25zdCBkZXJpdmVEQkIgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgX3NldHVwREJCKHRoaXMpO1xuICB9LFxuXG4gIC8vIENvcmUgZGVzdHJveXMgZGV2aWNlQmFja0J1dHRvbiBoYW5kbGVycyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAgLy8gVGhpcyBmaXhlcyB0aGUgYmVoYXZpb3IgZm9yIDxrZWVwLWFsaXZlPiBjb21wb25lbnQuXG4gIGFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLl9pc0RCQlNldHVwID09PSBmYWxzZSAmJiBfc2V0dXBEQkIodGhpcyk7XG4gIH0sXG5cbiAgZGVhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy5faXNEQkJTZXR1cCA9PT0gdHJ1ZSAmJiAodGhpcy5faXNEQkJTZXR1cCA9IGZhbHNlKTtcbiAgfSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgdGhpcy4kZWwub25EZXZpY2VCYWNrQnV0dG9uICYmIHRoaXMuJGVsLm9uRGV2aWNlQmFja0J1dHRvbi5kZXN0cm95KCk7XG4gIH1cbn07XG5cbi8vIFRoZXNlIGhhbmRsZXJzIGNhbm5vdCB0aHJvdyBldmVudHMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG5jb25zdCBkZXJpdmVIYW5kbGVyID0gaGFuZGxlck5hbWUgPT4ge1xuICBjb25zdCBwcm9wTmFtZSA9IGhhbmRsZXJUb1Byb3AoaGFuZGxlck5hbWUpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIFtwcm9wTmFtZV06IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIFtwcm9wTmFtZV0oKSB7XG4gICAgICAgIHRoaXMuJGVsW2hhbmRsZXJOYW1lXSA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpc1twcm9wTmFtZV0gJiYgKHRoaXMuJGVsW2hhbmRsZXJOYW1lXSA9IHRoaXNbcHJvcE5hbWVdKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBkZXJpdmVFdmVudHMgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICB0aGlzLl9ib3VuZEV2ZW50cyA9IHRoaXMuJGVsLmNvbnN0cnVjdG9yLmV2ZW50cyB8fCBbXTtcblxuICAgIHRoaXMuX2JvdW5kRXZlbnRzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50VG9IYW5kbGVyKGtleSldID0gZXZlbnQgPT4ge1xuICAgICAgICAvLyBGaWx0ZXIgZXZlbnRzIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuJGVsIHx8ICEvXm9ucy0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICAgIHRoaXMuJGVtaXQoa2V5LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKGtleSwgdGhpcy5faGFuZGxlcnNbZXZlbnRUb0hhbmRsZXIoa2V5KV0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fYm91bmRFdmVudHMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMuX2hhbmRsZXJzW2V2ZW50VG9IYW5kbGVyKGtleSldKTtcbiAgICB9KTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHRoaXMuX2JvdW5kRXZlbnRzID0gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGVyaXZlREJCLCBkZXJpdmVIYW5kbGVyLCBkZXJpdmVFdmVudHMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvZGVyaXZlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IHN0cmluZyA9PiBzdHJpbmcucmVwbGFjZSgvKFthLXpBLVpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyaW5nID0+IHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oW2Etel0pL2csIChtLCBsKSA9PiBsLnRvVXBwZXJDYXNlKCkpO1xuXG5leHBvcnQgY29uc3QgZXZlbnRUb0hhbmRsZXIgPSBuYW1lID0+ICdfb24nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyVG9Qcm9wID0gbmFtZSA9PiBuYW1lLnNsaWNlKDIpLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgyKS5zbGljZSgxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC91dGlsLmpzIiwiaW1wb3J0IHsgX3V0aWwgYXMgdXRpbCB9IGZyb20gJ29uc2VudWknO1xuXG4vKiBQcml2YXRlICovXG5jb25zdCBfdG9nZ2xlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodHlwZW9mIHRoaXMudmlzaWJsZSA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMudmlzaWJsZSAhPT0gdGhpcy4kZWwudmlzaWJsZSkge1xuICAgIHRoaXMuJGVsW3RoaXMudmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJ10uY2FsbCh0aGlzLiRlbCwgdGhpcy5ub3JtYWxpemVkT3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMpO1xuICB9XG59O1xuY29uc3QgX3RlbGVwb3J0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5faXNEZXN0cm95ZWQgJiYgKCF0aGlzLiRlbC5wYXJlbnROb2RlIHx8IHRoaXMuJGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRlbCk7XG4gIH1cbn07XG5jb25zdCBfdW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy4kZWwudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgIHRoaXMuJGVsLmhpZGUoKS50aGVuKCgpID0+IHRoaXMuJGVsLnJlbW92ZSgpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLiRlbC5yZW1vdmUoKTtcbiAgfVxufTtcblxuLyogUHVibGljICovXG4vLyBDb21wb25lbnRzIHRoYXQgY2FuIGJlIHNob3duIG9yIGhpZGRlblxuY29uc3QgaGlkYWJsZSA9IHtcbiAgcHJvcHM6IHtcbiAgICB2aXNpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkIC8vIEF2b2lkIGNhc3RpbmcgdG8gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2aXNpYmxlKCkge1xuICAgICAgX3RvZ2dsZVZpc2liaWxpdHkuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiBfdG9nZ2xlVmlzaWJpbGl0eS5jYWxsKHRoaXMpKTtcbiAgfSxcblxuICBhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gX3RvZ2dsZVZpc2liaWxpdHkuY2FsbCh0aGlzKSk7XG4gIH1cbn07XG5cbi8vIENvbXBvbmVudHMgd2l0aCAnb3B0aW9ucycgcHJvcGVydHlcbmNvbnN0IGhhc09wdGlvbnMgPSB7XG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gQ29tcG9uZW50cyB3aXRoICdtb2RpZmllcicgYXR0cmlidXRlXG5jb25zdCBtb2RpZmllciA9IHtcbiAgcHJvcHM6IHtcbiAgICBtb2RpZmllcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIF91cGRhdGVNb2RpZmllcigpIHtcbiAgICAgIGNvbnN0IHByZXNldCA9IHRoaXMuX21kID8gWydtYXRlcmlhbCddIDogW107XG5cbiAgICAgIC8vIFJlbW92ZVxuICAgICAgKHRoaXMuX3ByZXZpb3VzTW9kaWZpZXIgfHwgJycpLnNwbGl0KC9cXHMrLykuY29uY2F0KHByZXNldClcbiAgICAgICAgLmZvckVhY2gobSA9PiB1dGlsLnJlbW92ZU1vZGlmaWVyKHRoaXMuJGVsLCBtLCB7IGF1dG9TdHlsZTogdHJ1ZSB9KSk7XG5cbiAgICAgIC8vIEFkZFxuICAgICAgdGhpcy5tb2RpZmllci50cmltKCkuc3BsaXQoL1xccysvKS5jb25jYXQocHJlc2V0KVxuICAgICAgICAuZm9yRWFjaChtID0+IG0gJiYgdXRpbC5hZGRNb2RpZmllcih0aGlzLiRlbCwgbSwgeyBhdXRvU3R5bGU6IHRydWUgfSkpO1xuXG4gICAgICB0aGlzLl9wcmV2aW91c01vZGlmaWVyID0gdGhpcy5tb2RpZmllcjtcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBtb2RpZmllcigpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1vZGlmaWVyKCk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5fbWQgPSAvXm1hdGVyaWFsJC8udGVzdCh0aGlzLiRlbC5nZXRBdHRyaWJ1dGUoJ21vZGlmaWVyJykpO1xuICAgIHRoaXMuX3VwZGF0ZU1vZGlmaWVyKCk7XG4gIH1cbn07XG5cbi8vIFByb3ZpZGVzIGl0c2VsZiB0byBpdHMgZGVzY2VuZGFudHNcbmNvbnN0IHNlbGZQcm92aWRlciA9IHtcbiAgcHJvdmlkZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMuJG9wdGlvbnMuX2NvbXBvbmVudFRhZy5zbGljZSg2KV06IHRoaXNcbiAgICB9XG4gIH1cbn07XG5cbi8vIENvbW1vbiBldmVudCBmb3IgRGlhbG9nc1xuY29uc3QgZGlhbG9nQ2FuY2VsID0ge1xuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJG9uKCdkaWFsb2ctY2FuY2VsJywgKCkgPT4gdGhpcy4kZW1pdCgndXBkYXRlOnZpc2libGUnLCBmYWxzZSkpO1xuICB9XG59O1xuXG4vLyBNb3ZlcyB0aGUgZWxlbWVudCB0byBhIGdsb2JhbCBwb3NpdGlvblxuY29uc3QgcG9ydGFsID0ge1xuICBtb3VudGVkKCkge1xuICAgIF90ZWxlcG9ydC5jYWxsKHRoaXMpO1xuICB9LFxuICB1cGRhdGVkKCkge1xuICAgIF90ZWxlcG9ydC5jYWxsKHRoaXMpO1xuICB9LFxuICBhY3RpdmF0ZWQoKSB7XG4gICAgX3RlbGVwb3J0LmNhbGwodGhpcyk7XG4gIH0sXG4gIGRlYWN0aXZhdGVkKCkge1xuICAgIF91bm1vdW50LmNhbGwodGhpcyk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgX3VubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgbW9kaWZpZXIsIHNlbGZQcm92aWRlciwgZGlhbG9nQ2FuY2VsLCBwb3J0YWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvY29tbW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn1cbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtcG9wb3ZlcicsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04Yzk1NjA2MFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zQWxlcnREaWFsb2cudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWRhZjQyMlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQWxlcnREaWFsb2cudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1hbGVydC1kaWFsb2c+XG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPlxuICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+e3t0aXRsZX19PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctY29udGVudFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctZm9vdGVyXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gdi1mb3I9XCIoaGFuZGxlciwga2V5KSBpbiBmb290ZXJcIiA6a2V5PVwia2V5XCIgY2xhc3M9XCJhbGVydC1kaWFsb2ctYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlclwiPnt7a2V5fX08L2J1dHRvbj5cbiAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC9vbnMtYWxlcnQtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBtb2RpZmllciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkIsIHBvcnRhbCB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2hpZGFibGUsIGhhc09wdGlvbnMsIGRpYWxvZ0NhbmNlbCwgbW9kaWZpZXIsIGRlcml2ZUV2ZW50cywgZGVyaXZlREJCLCBwb3J0YWxdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkuZXZlcnkoa2V5ID0+IHZhbHVlW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zQWxlcnREaWFsb2cudnVlPzhmMDhiMDQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy1hbGVydC1kaWFsb2cnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctdGl0bGVcIlxuICB9LCBbX3ZtLl90KFwidGl0bGVcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0LWRpYWxvZy1jb250ZW50XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctZm9vdGVyXCJcbiAgfSwgW192bS5fdChcImZvb3RlclwiLCBfdm0uX2woKF92bS5mb290ZXIpLCBmdW5jdGlvbihoYW5kbGVyLCBrZXkpIHtcbiAgICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQtZGlhbG9nLWJ1dHRvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBoYW5kbGVyXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Moa2V5KSldKVxuICB9KSldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzlkYWY0MjJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNTcGVlZERpYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hNGQ2NTg3Y1xcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zU3BlZWREaWFsLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zU3BlZWREaWFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLXNwZWVkLWRpYWwgOm9uLWNsaWNrLnByb3A9XCJhY3Rpb25cIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLXNwZWVkLWRpYWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoaWRhYmxlLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkZXJpdmVFdmVudHMsIGhpZGFibGVdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIG9wZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHJ1bkRlZmF1bHQgPSBmYWxzZSB9KTtcblxuICAgICAgICBpZiAocnVuRGVmYXVsdCkge1xuICAgICAgICAgIHRoaXMuJGVsLnRvZ2dsZUl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfc2hvdWxkVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcGVuICE9PSB0aGlzLiRlbC5pc09wZW4oKTtcbiAgICAgIH0sXG4gICAgICBfdXBkYXRlVG9nZ2xlKCkge1xuICAgICAgICB0aGlzLl9zaG91bGRVcGRhdGUoKSAmJiB0aGlzLiRlbFt0aGlzLm9wZW4gPyAnc2hvd0l0ZW1zJyA6ICdoaWRlSXRlbXMnXS5jYWxsKHRoaXMuJGVsKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy4kb24oWydvcGVuJywgJ2Nsb3NlJ10sICgpID0+IHRoaXMuX3Nob3VsZFVwZGF0ZSgpICYmIHRoaXMuJGVtaXQoJ3VwZGF0ZTpvcGVuJywgdGhpcy4kZWwuaXNPcGVuKCkpKTtcblxuICAgICAgdGhpcy5fdXBkYXRlVG9nZ2xlKCk7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1NwZWVkRGlhbC52dWU/ODc3OGUyNzYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXNwZWVkLWRpYWwnLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwib25DbGlja1wiOiBfdm0uYWN0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYTRkNjU4N2NcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zQ2Fyb3VzZWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NmQwNmQ0NVxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQ2Fyb3VzZWwudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNDYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1jYXJvdXNlbCA6aW5pdGlhbC1pbmRleD1cImluZGV4XCIgQHBvc3RjaGFuZ2Uuc2VsZj1cIiRlbWl0KCd1cGRhdGU6aW5kZXgnLCAkZXZlbnQuYWN0aXZlSW5kZXgpXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L29ucy1jYXJvdXNlbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGhhc09wdGlvbnMsIGRlcml2ZUV2ZW50cyB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2hhc09wdGlvbnMsIGRlcml2ZUV2ZW50c10sXG5cbiAgICBwcm9wczoge1xuICAgICAgaW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICBpbmRleCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggIT09IHRoaXMuJGVsLmdldEFjdGl2ZUluZGV4KCkpIHtcbiAgICAgICAgICB0aGlzLiRlbC5zZXRBY3RpdmVJbmRleCh0aGlzLmluZGV4LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc0Nhcm91c2VsLnZ1ZT85NzU1OTdhYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtY2Fyb3VzZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5pdGlhbC1pbmRleFwiOiBfdm0uaW5kZXhcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInBvc3RjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uJGVtaXQoJ3VwZGF0ZTppbmRleCcsICRldmVudC5hY3RpdmVJbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NmQwNmQ0NVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1RhYi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWM5ZmY4YjgwXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNUYWIudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtdGFiIDphY3RpdmU9XCJhY3RpdmVcIiA6b24tY2xpY2sucHJvcD1cImFjdGlvblwiPlxuICA8L29ucy10YWI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5qZWN0OiBbJ3RhYmJhciddLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIHBhZ2U6IHsgfSxcbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHJ1bkRlZmF1bHQgPSBmYWxzZSB9KTtcblxuICAgICAgICBpZiAocnVuRGVmYXVsdCkge1xuICAgICAgICAgIHRoaXMudGFiYmFyLiRlbC5zZXRBY3RpdmVUYWIodGhpcy4kZWwuX2ZpbmRUYWJJbmRleCgpLCB0aGlzLnRhYmJhci5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgYWN0aXZlKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA/IHRoaXMuJGVsLnNldEFjdGl2ZSgpIDogdGhpcy4kZWwuc2V0SW5hY3RpdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zVGFiLnZ1ZT8zMWRlZWRkZiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGl2ZVwiOiBfdm0uYWN0aXZlXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJvbkNsaWNrXCI6IF92bS5hY3Rpb25cbiAgICB9XG4gIH0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYzlmZjhiODBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zVGFiYmFyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2EyNzY0ODNcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc1RhYmJhci52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy10YWJiYXIgOmFjdGl2ZUluZGV4PVwiaW5kZXhcIiBAcG9zdGNoYW5nZS5zZWxmPVwiJGVtaXQoJ3VwZGF0ZTppbmRleCcsICRldmVudC5pbmRleClcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiYmFyX19jb250ZW50XCI+XG4gICAgICA8c2xvdCBuYW1lPVwicGFnZXNcIj5cbiAgICAgICAgPGNvbXBvbmVudCB2LWZvcj1cInRhYiBpbiB0YWJzXCIgOmlzPVwidGFiLnBhZ2VcIiA6a2V5PVwiKHRhYi5rZXkgfHwgdGFiLnBhZ2UpXCI+PC9jb21wb25lbnQ+XG4gICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYmJhclwiPlxuICAgICAgPHNsb3Q+XG4gICAgICAgIDx2LW9ucy10YWIgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIHYtYmluZD1cInRhYlwiIDprZXk9XCIodGFiLmtleSB8fCB0YWIpXCI+PC92LW9ucy10YWI+XG4gICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvb25zLXRhYmJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlcml2ZUV2ZW50cywgaGFzT3B0aW9ucywgaGlkYWJsZSwgc2VsZlByb3ZpZGVyIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbZGVyaXZlRXZlbnRzLCBoYXNPcHRpb25zLCBoaWRhYmxlLCBzZWxmUHJvdmlkZXJdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIGluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5ldmVyeSh0YWIgPT4gWydpY29uJywgJ2xhYmVsJywgJ3BhZ2UnXS5zb21lKHByb3AgPT4gISFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhYiwgcHJvcCkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgaW5kZXgoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLiRlbC5nZXRBY3RpdmVUYWJJbmRleCgpKSB7XG4gICAgICAgICAgdGhpcy4kZWwuc2V0QWN0aXZlVGFiKHRoaXMuaW5kZXgsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zVGFiYmFyLnZ1ZT82MGUyMmRlMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXRhYmJhcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3RpdmVJbmRleFwiOiBfdm0uaW5kZXhcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInBvc3RjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uJGVtaXQoJ3VwZGF0ZTppbmRleCcsICRldmVudC5pbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYmJhcl9fY29udGVudFwiXG4gIH0sIFtfdm0uX3QoXCJwYWdlc1wiLCBfdm0uX2woKF92bS50YWJzKSwgZnVuY3Rpb24odGFiKSB7XG4gICAgcmV0dXJuIF9jKHRhYi5wYWdlLCB7XG4gICAgICBrZXk6ICh0YWIua2V5IHx8IHRhYi5wYWdlKSxcbiAgICAgIHRhZzogXCJjb21wb25lbnRcIlxuICAgIH0pXG4gIH0pKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYmJhclwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIsIF92bS5fbCgoX3ZtLnRhYnMpLCBmdW5jdGlvbih0YWIpIHtcbiAgICByZXR1cm4gX2MoJ3Ytb25zLXRhYicsIF92bS5fYih7XG4gICAgICBrZXk6ICh0YWIua2V5IHx8IHRhYilcbiAgICB9LCAndi1vbnMtdGFiJywgdGFiKSlcbiAgfSkpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNhMjc2NDgzXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zVGFiYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc0JhY2tCdXR0b24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NTkzZjFjNFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQmFja0J1dHRvbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtYmFjay1idXR0b24gOm9uLWNsaWNrLnByb3A9XCJhY3Rpb25cIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLWJhY2stYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGluamVjdDogWyduYXZpZ2F0b3InXSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHJ1bkRlZmF1bHQgPSBmYWxzZSB9KTtcblxuICAgICAgICBpZiAocnVuRGVmYXVsdCAmJiB0aGlzLm5hdmlnYXRvci5wYWdlU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdG9yLnBvcFBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNCYWNrQnV0dG9uLnZ1ZT8yMzQ1YzUxNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtYmFjay1idXR0b24nLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwib25DbGlja1wiOiBfdm0uYWN0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTU5M2YxYzRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNCYWNrQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc05hdmlnYXRvci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWVmOWMyXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNOYXZpZ2F0b3IudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtbmF2aWdhdG9yPlxuICAgIDxzbG90PlxuICAgICAgPGNvbXBvbmVudCB2LWZvcj1cInBhZ2UgaW4gcGFnZVN0YWNrXCIgOmtleT1cInBhZ2VcIiA6aXM9XCJwYWdlXCI+PC9jb21wb25lbnQ+XG4gICAgPC9zbG90PlxuICA8L29ucy1uYXZpZ2F0b3I+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoYXNPcHRpb25zLCBzZWxmUHJvdmlkZXIsIGRlcml2ZUV2ZW50cywgZGVyaXZlREJCIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbaGFzT3B0aW9ucywgc2VsZlByb3ZpZGVyLCBkZXJpdmVFdmVudHMsIGRlcml2ZURCQl0sXG5cbiAgICBwcm9wczoge1xuICAgICAgcGFnZVN0YWNrOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHBvcFBhZ2U6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgdGhpcy5wYWdlU3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgaXNSZWFkeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ19yZWFkeScpICYmIHRoaXMuX3JlYWR5IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9LFxuICAgICAgb25EZXZpY2VCYWNrQnV0dG9uKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTdGFjay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5wb3BQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnQuY2FsbFBhcmVudEhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9zZXRQYWdlc1Zpc2liaWxpdHkoc3RhcnQsIGVuZCwgdmlzaWJpbGl0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgLSAxOyBpKyspIHtcbiAgICAgICAgICB0aGlzLiRjaGlsZHJlbltpXS4kZWwuc3R5bGUudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfcmVhdHRhY2hQYWdlKHBhZ2VFbGVtZW50LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy4kZWwuaW5zZXJ0QmVmb3JlKHBhZ2VFbGVtZW50LCBwb3NpdGlvbik7XG4gICAgICAgIHBhZ2VFbGVtZW50Ll9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBfcmVkZXRhY2hQYWdlKHBhZ2VFbGVtZW50KSB7XG4gICAgICAgIHBhZ2VFbGVtZW50Ll9kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sXG4gICAgICBfYW5pbWF0ZSh7IGxhc3RMZW5ndGgsIGN1cnJlbnRMZW5ndGgsIGxhc3RUb3BQYWdlLCBjdXJyZW50VG9wUGFnZX0pIHtcblxuICAgICAgICAvLyBQdXNoXG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoID4gbGFzdExlbmd0aCkge1xuICAgICAgICAgIGxldCBpc1JlYXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAobGFzdFRvcFBhZ2UucGFyZW50RWxlbWVudCAhPT0gdGhpcy4kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYXR0YWNoUGFnZShsYXN0VG9wUGFnZSwgdGhpcy4kZWwuY2hpbGRyZW5bbGFzdExlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGlzUmVhdHRhY2hlZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0TGVuZ3RoLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NldFBhZ2VzVmlzaWJpbGl0eShsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWwuX3B1c2hQYWdlKHsgLi4udGhpcy5vcHRpb25zLCBsZWF2ZVBhZ2U6IGxhc3RUb3BQYWdlIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3NldFBhZ2VzVmlzaWJpbGl0eShsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCAnJyk7XG4gICAgICAgICAgICAgIGlmIChpc1JlYXR0YWNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWRldGFjaFBhZ2UobGFzdFRvcFBhZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvcFxuICAgICAgICBpZiAoY3VycmVudExlbmd0aCA8IGxhc3RMZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9yZWF0dGFjaFBhZ2UobGFzdFRvcFBhZ2UsIG51bGwpO1xuICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5fcG9wUGFnZSh7IC4uLnRoaXMub3B0aW9ucyB9LCAoKSA9PiB0aGlzLl9yZWRldGFjaFBhZ2UobGFzdFRvcFBhZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgcGFnZVxuICAgICAgICB0aGlzLl9yZWF0dGFjaFBhZ2UobGFzdFRvcFBhZ2UsIGN1cnJlbnRUb3BQYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLl9wdXNoUGFnZSh7IC4uLnRoaXMub3B0aW9ucyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZWRldGFjaFBhZ2UobGFzdFRvcFBhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIHBhZ2VTdGFjayhhZnRlciwgYmVmb3JlKSB7XG4gICAgICAgIGNvbnN0IHByb3BXYXNNdXRhdGVkID0gYWZ0ZXIgPT09IGJlZm9yZTsgLy8gQ2FuIGJlIG11dGF0ZWQgb3IgcmVwbGFjZWRcblxuICAgICAgICBjb25zdCBsYXN0TGVuZ3RoID0gcHJvcFdhc011dGF0ZWQgPyB0aGlzLiRjaGlsZHJlbi5sZW5ndGggOiBiZWZvcmUubGVuZ3RoO1xuICAgICAgICBsZXQgbGFzdFRvcFBhZ2UgPSB0aGlzLiRjaGlsZHJlblt0aGlzLiRjaGlsZHJlbi5sZW5ndGggLSAxXS4kZWw7XG5cbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSBwcm9wV2FzTXV0YXRlZCA/IHRoaXMuJGNoaWxkcmVuLmxlbmd0aCA6IGFmdGVyLmxlbmd0aDtcbiAgICAgICAgICBsZXQgY3VycmVudFRvcFBhZ2UgPSB0aGlzLiRjaGlsZHJlblt0aGlzLiRjaGlsZHJlbi5sZW5ndGggLSAxXS4kZWw7XG5cbiAgICAgICAgICBpZiAoY3VycmVudFRvcFBhZ2UgIT09IGxhc3RUb3BQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWFkeSA9IHRoaXMuX2FuaW1hdGUoeyBsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCBsYXN0VG9wUGFnZSwgY3VycmVudFRvcFBhZ2V9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRMZW5ndGggIT09IGxhc3RMZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUb3BQYWdlLnVwZGF0ZUJhY2tCdXR0b24oY3VycmVudExlbmd0aCA+IDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxhc3RUb3BQYWdlID0gY3VycmVudFRvcFBhZ2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zTmF2aWdhdG9yLnZ1ZT8zZDYzYjdkMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLW5hdmlnYXRvcicsIFtfdm0uX3QoXCJkZWZhdWx0XCIsIF92bS5fbCgoX3ZtLnBhZ2VTdGFjayksIGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICByZXR1cm4gX2MocGFnZSwge1xuICAgICAga2V5OiBwYWdlLFxuICAgICAgdGFnOiBcImNvbXBvbmVudFwiXG4gICAgfSlcbiAgfSkpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNTVlZjljMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc05hdmlnYXRvci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zU3BsaXR0ZXJTaWRlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWIwZWViMjNcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc1NwbGl0dGVyU2lkZS52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc1NwbGl0dGVyU2lkZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtc3BsaXR0ZXItc2lkZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLXNwbGl0dGVyLXNpZGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoYXNPcHRpb25zLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtoYXNPcHRpb25zLCBkZXJpdmVFdmVudHNdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIG9wZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc2hvdWxkVXBkYXRlKCkgJiYgdGhpcy4kZWxbdGhpcy5vcGVuID8gJ29wZW4nIDogJ2Nsb3NlJ10uY2FsbCh0aGlzLiRlbCwgdGhpcy5vcHRpb25zKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICB9LFxuICAgICAgX3Nob3VsZFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3BlbiAhPT0gdGhpcy4kZWwuaXNPcGVuO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuJG9uKFsncG9zdG9wZW4nLCAncG9zdGNsb3NlJ10sICgpID0+IHRoaXMuX3Nob3VsZFVwZGF0ZSgpICYmIHRoaXMuJGVtaXQoJ3VwZGF0ZTpvcGVuJywgdGhpcy4kZWwuaXNPcGVuKSk7XG5cbiAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1NwbGl0dGVyU2lkZS52dWU/OTRhYjE2YTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXNwbGl0dGVyLXNpZGUnLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWIwZWViMjNcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNTcGxpdHRlclNpZGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc0xhenlSZXBlYXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hNWQzOTk1OFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zTGF6eVJlcGVhdC52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8IS0tIFRoaXMgZWxlbWVudCBpcyB1c2VsZXNzIGV4Y2VwdCBmb3IgdGhlIGRlc3Ryb3kgcGFydCAtLT5cbiAgPG9ucy1sYXp5LXJlcGVhdD48L29ucy1sYXp5LXJlcGVhdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcmVuZGVySXRlbToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB2YWx1ZSgwKTtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5faXNWdWUgJiYgIWNvbXBvbmVudC5faXNNb3VudGVkKSB7XG4gICAgICAgICAgY29tcG9uZW50LiRkZXN0cm95KCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGVuZ3RoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2FsY3VsYXRlSXRlbUhlaWdodDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXI6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfc2V0dXAoKSB7XG4gICAgICB0aGlzLnByb3ZpZGVyICYmIHRoaXMucHJvdmlkZXIuZGVzdHJveSgpO1xuXG4gICAgICBjb25zdCBkZWxlZ2F0ZSA9IG5ldyB0aGlzLiRvbnMuX29ucy5faW50ZXJuYWwuTGF6eVJlcGVhdERlbGVnYXRlKHtcbiAgICAgICAgY2FsY3VsYXRlSXRlbUhlaWdodDogdGhpcy5jYWxjdWxhdGVJdGVtSGVpZ2h0LFxuICAgICAgICBjcmVhdGVJdGVtQ29udGVudDogaSA9PiB0aGlzLnJlbmRlckl0ZW0oaSkuJG1vdW50KCkuJGVsLFxuICAgICAgICBkZXN0cm95SXRlbTogKGksIHsgZWxlbWVudCB9KSA9PiBlbGVtZW50Ll9fdnVlX18uJGRlc3Ryb3koKSxcbiAgICAgICAgY291bnRJdGVtczogKCkgPT4gdGhpcy5sZW5ndGhcbiAgICAgIH0sIG51bGwpO1xuXG4gICAgICB0aGlzLnByb3ZpZGVyID0gbmV3IHRoaXMuJG9ucy5fb25zLl9pbnRlcm5hbC5MYXp5UmVwZWF0UHJvdmlkZXIodGhpcy4kcGFyZW50LiRlbCwgZGVsZWdhdGUpO1xuICAgIH0sXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLnJlZnJlc2goKTtcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICByZW5kZXJJdGVtKCkge1xuICAgICAgdGhpcy5fc2V0dXAoKTtcbiAgICB9LFxuICAgIGxlbmd0aCgpIHtcbiAgICAgIHRoaXMuX3NldHVwKCk7XG4gICAgfSxcbiAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0KCkge1xuICAgICAgdGhpcy5fc2V0dXAoKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLl9zZXR1cCgpO1xuICAgIHRoaXMuJHZub2RlLmNvbnRleHQuJG9uKCdyZWZyZXNoJywgdGhpcy5yZWZyZXNoKTtcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuJHZub2RlLmNvbnRleHQuJG9mZigncmVmcmVzaCcsIHRoaXMucmVmcmVzaCk7XG5cbiAgICAvLyBUaGlzIHdpbGwgZGVzdHJveSB0aGUgcHJvdmlkZXIgb25jZSB0aGUgcmVuZGVyZWQgZWxlbWVudFxuICAgIC8vIGlzIGRldGFjaGVkIChkZXRhY2hlZENhbGxiYWNrKS4gVGhlcmVmb3JlLCBhbmltYXRpb25zXG4gICAgLy8gaGF2ZSB0aW1lIHRvIGZpbmlzaCBiZWZvcmUgZWxlbWVudHMgc3RhcnQgdG8gZGlzYXBwZWFyLlxuICAgIC8vIEl0IGNhbm5vdCBiZSBzZXQgZWFybGllciBpbiBvcmRlciB0byBwcmV2ZW50IGFjY2lkZW50YWxcbiAgICAvLyBkZXN0cm95cyBpZiB0aGlzIGVsZW1lbnQgaXMgcmV0YWNoZWQgYnkgc29tZXRoaW5nIGVsc2UuXG4gICAgdGhpcy4kZWwuX2xhenlSZXBlYXRQcm92aWRlciA9IHRoaXMucHJvdmlkZXI7XG4gICAgdGhpcy5wcm92aWRlciA9IG51bGw7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zTGF6eVJlcGVhdC52dWU/MDFlYWZmYzIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLWxhenktcmVwZWF0Jylcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hNWQzOTk1OFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVkdlbmVyaWMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xOWYwNTIyOFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WR2VuZXJpYy52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50IDppcz1cIiRvcHRpb25zLl9jb21wb25lbnRUYWcuc2xpY2UoMilcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkZXZlbnQpXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IG1vZGlmaWVyLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbbW9kaWZpZXIsIGRlcml2ZUV2ZW50c11cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZHZW5lcmljLnZ1ZT8zMmYwZWRiYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKF92bS4kb3B0aW9ucy5fY29tcG9uZW50VGFnLnNsaWNlKDIpLCB7XG4gICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGVtaXQoJ2NsaWNrJywgJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE5ZjA1MjI4XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WR2VuZXJpYy52dWVcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIE9uc01vZGVsIH0gZnJvbSAnLi9WT25zTW9kZWwnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCIvKiBQcml2YXRlICovXG5jb25zdCBfaXNMaXRlcmFsID0gZSA9PiBlLnRyaW0oKS5jaGFyQXQoMCkgPT09ICd7JztcbmNvbnN0IF92YWxpZGF0ZUxpdGVyYWwgPSBvID0+IHtcbiAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvLCAnY29udGFpbmVyJylcbiAgIHx8ICFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvLCAna2V5JylcbiAgKSB7XG4gICAgdGhyb3cgRXJyb3IoYE9iamVjdCBsaXRlcmFscyBpbiBWT25zTW9kZWwgbXVzdCBpbmNsdWRlICdrZXknIGFuZCAnY29udGFpbmVyJyBwcm9wZXJ0aWVzLmApO1xuICB9XG59XG5cbmNvbnN0IF9nZXRNb2RlbCA9IChiaW5kaW5nLCBjb250ZXh0LCBuZXdWYWx1ZSkgPT4ge1xuICBjb25zdCBleHByZXNzaW9uID0gKGJpbmRpbmcuZXhwcmVzc2lvbiB8fCAnJykudHJpbSgpO1xuXG4gIC8vIE9iamVjdCBsaXRlcmFsXG4gIGlmIChfaXNMaXRlcmFsKGV4cHJlc3Npb24pKSB7XG4gICAgX3ZhbGlkYXRlTGl0ZXJhbChiaW5kaW5nLnZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGJpbmRpbmcudmFsdWUuY29udGFpbmVyW2JpbmRpbmcudmFsdWUua2V5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGNvbnRleHQuJHNldChiaW5kaW5nLnZhbHVlLmNvbnRhaW5lciwgYmluZGluZy52YWx1ZS5rZXksIG5ld1ZhbHVlKTsgLy8gU2V0dGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbmRpbmcudmFsdWUuY29udGFpbmVyW2JpbmRpbmcudmFsdWUua2V5XTsgLy8gR2V0dGVyXG4gIH1cblxuICBjb25zdCBwYXRoID0gZXhwcmVzc2lvbi5zcGxpdCgnLicpO1xuICBjb25zdCBsYXN0S2V5ID0gcGF0aC5wb3AoKTtcblxuICBsZXQga2V5LCBtb2RlbCA9IGNvbnRleHQ7XG4gIHdoaWxlIChrZXkgPSBwYXRoLnNoaWZ0KCkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgIG1vZGVsID0gbW9kZWxba2V5XTtcbiAgfVxuXG4gIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1vZGVsW2xhc3RLZXldICE9PSBuZXdWYWx1ZSkge1xuICAgIG1vZGVsW2xhc3RLZXldID0gbmV3VmFsdWU7IC8vIFNldHRlclxuICB9XG5cbiAgcmV0dXJuIG1vZGVsW2xhc3RLZXldIHx8IGJpbmRpbmcudmFsdWU7IC8vIEdldHRlclxufTtcblxuY29uc3QgX3NldE1vZGVsID0gX2dldE1vZGVsO1xuXG5jb25zdCBfZm9ybWF0T3V0cHV0ID0gKG1vZGlmaWVycyA9IHt9LCBvdXRwdXQpID0+IHtcbiAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZGlmaWVycywgJ251bWJlcicpKSB7XG4gICAgcmV0dXJuIE51bWJlcihvdXRwdXQpO1xuICB9XG4gIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2RpZmllcnMsICd0cmltJykpIHtcbiAgICByZXR1cm4gb3V0cHV0LnRyaW0oKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcblxuY29uc3QgX2JpbmRPbiA9IChldmVudE5hbWUsIGJpbmRpbmcsIHZub2RlLCBoYW5kbGVyKSA9PiB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSAoYmluZGluZy5leHByZXNzaW9uIHx8ICcnKS50cmltKCk7XG4gIGlmIChfaXNMaXRlcmFsKGV4cHJlc3Npb24pIHx8IHZub2RlLmNvbnRleHQuaGFzT3duUHJvcGVydHkoZXhwcmVzc2lvbi5zcGxpdCgnLicpWzBdKSkge1xuICAgIHZub2RlLmNoaWxkLiRvbihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG59O1xuXG5jb25zdCBfYmluZFNpbXBsZUlucHV0T24gPSAoZXZlbnROYW1lLCBiaW5kaW5nLCB2bm9kZSwgcHJvcE5hbWUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIGJpbmRpbmcsIHZub2RlLCBldmVudCA9PiB7XG4gICAgX3NldE1vZGVsKGJpbmRpbmcsIHZub2RlLmNvbnRleHQsIGV2ZW50LnRhcmdldFtwcm9wTmFtZV0pO1xuICB9KTtcbn07XG5cbmNvbnN0IF9iaW5kTW9kaWZpZXJJbnB1dE9uID0gKGV2ZW50TmFtZSwgYmluZGluZywgdm5vZGUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIGJpbmRpbmcsIHZub2RlLCBldmVudCA9PiB7XG4gICAgX3NldE1vZGVsKGJpbmRpbmcsIHZub2RlLmNvbnRleHQsIF9mb3JtYXRPdXRwdXQoYmluZGluZy5tb2RpZmllcnMsIGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9KTtcbn07XG5cbmNvbnN0IF9iaW5kQXJyYXlJbnB1dE9uID0gKGV2ZW50TmFtZSwgYmluZGluZywgdm5vZGUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIGJpbmRpbmcsIHZub2RlLCBldmVudCA9PiB7XG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IF9nZXRNb2RlbChiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICBpZiAobW9kZWxWYWx1ZS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSkgPj0gMCkge1xuICAgICAgIWV2ZW50LnRhcmdldC5jaGVja2VkICYmIG1vZGVsVmFsdWUuc3BsaWNlKG1vZGVsVmFsdWUuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgbW9kZWxWYWx1ZS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IF9iaW5kQ2hlY2tib3ggPSAoZWwsIGJpbmRpbmcsIHZub2RlKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gX2dldE1vZGVsKGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGVsLmNoZWNrZWQgPSB2YWx1ZS5pbmRleE9mKGVsLnZhbHVlKSA+PSAwO1xuICAgIF9iaW5kQXJyYXlJbnB1dE9uKCdjaGFuZ2UnLCBiaW5kaW5nLCB2bm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgX2JpbmRTaW1wbGVJbnB1dE9uKCdjaGFuZ2UnLCBiaW5kaW5nLCB2bm9kZSwgJ2NoZWNrZWQnKTtcbiAgfVxufTtcblxuY29uc3QgX3VwZGF0ZUNoZWNrYm94ID0gKGVsLCBiaW5kaW5nLCB2bm9kZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IF9nZXRNb2RlbChiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBlbC5jaGVja2VkID0gdmFsdWUuaW5kZXhPZihlbC52YWx1ZSkgPj0gMDtcbiAgfSBlbHNlIHtcbiAgICBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgfVxufTtcblxuXG4vKiBQdWJsaWMgKi9cblxuLy8gVk9uc01vZGVsIGRpcmVjdGl2ZVxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB2YWx1ZSA9IF9nZXRNb2RlbChiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcblxuICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICBjYXNlICdvbnMtc2VsZWN0JzpcbiAgICAgICAgZWwucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPScgKyB2YWx1ZSArICddJykuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgX2JpbmRTaW1wbGVJbnB1dE9uKCdjaGFuZ2UnLCBiaW5kaW5nLCB2bm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvbnMtc3dpdGNoJzpcbiAgICAgICAgX2JpbmRDaGVja2JveChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXJhbmdlJzpcbiAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgX2JpbmRNb2RpZmllcklucHV0T24oT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYmluZGluZy5tb2RpZmllcnMsICdsYXp5JykgPyAnY2hhbmdlJyA6ICdpbnB1dCcsIGJpbmRpbmcsIHZub2RlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29ucy1pbnB1dCc6XG4gICAgICAgIHN3aXRjaCAoZWwudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGVsLmNoZWNrZWQgPSBlbC52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgICAgICBfYmluZFNpbXBsZUlucHV0T24oJ2NoYW5nZScsIGJpbmRpbmcsIHZub2RlLCAndmFsdWUnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgX2JpbmRDaGVja2JveChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIF9iaW5kTW9kaWZpZXJJbnB1dE9uKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGJpbmRpbmcubW9kaWZpZXJzLCAnbGF6eScpID8gJ2NoYW5nZScgOiAnaW5wdXQnLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJ2LW9ucy1tb2RlbFwiIGRpcmVjdGl2ZSBjYW5ub3QgYmUgdXNlZCB3aXRoIFwiJyArIHRhZyArICdcIiBlbGVtZW50LicpO1xuICAgIH1cbiAgfSxcblxuICAvKlxuICAgKiBDYXV0aW9uOlxuICAgKiBUaGlzIGhvb2sgaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHZpZXcgY2hhbmdlcyBzaW5jZVxuICAgKiB0aGUgZGlyZWN0aXZlJ3MgdmFsdWUgaXMgdXBkYXRlZCBpbiB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAqXG4gICAqIEFsc28sIG9ubHkgMSBpbnN0YW5jZSBvZiB0aGlzIGRpcmVjdGl2ZSBleGlzdHMuIFRoZXJlZm9yZSxcbiAgICogaXQgaXMgY2FsbGVkIGZvciBldmVyeSBjb21wb25lbnQgd2hlbmV2ZXIgMSBzaW5nbGVcbiAgICogY29tcG9uZW50IHVzaW5nIHRoaXMgZGlyZWN0aXZlIGlzIHVwZGF0ZWQuXG4gICAqL1xuICB1cGRhdGUoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHZhbHVlID0gX2dldE1vZGVsKGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuXG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgJ29ucy1zZWxlY3QnOlxuICAgICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXN3aXRjaCc6XG4gICAgICAgIF91cGRhdGVDaGVja2JveChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXJhbmdlJzpcbiAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29ucy1pbnB1dCc6XG4gICAgICAgIHN3aXRjaCAoZWwudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZSA9PT0gZWwudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIF91cGRhdGVDaGVja2JveChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgIT09IHZhbHVlICYmIChlbC52YWx1ZSA9IHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9WT25zTW9kZWwuanMiXSwic291cmNlUm9vdCI6IiJ9