/**
 * ---------------------------------------------------------------------------
 * VITALS.CUT
 * ---------------------------------------------------------------------------
 * @section base
 * @version 5.0.0
 * @see [vitals.cut](https://github.com/imaginate/vitals/wiki/vitals.cut)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

;(function(/** (?Object|?Function|undefined) */ __THIS,
           /** undefined */ __VOID) {

/**
 * @const {string}
 */
var VERSION = '5.0.0';
/**
 * @private
 * @const {!Object}
 * @struct
 */
var ENV = (function ENV_PrivateScope() {


  /**
   * @const {boolean}
   */
  var HAS_EXPORTS = _isObjFun(typeof exports) && _isValidNode(exports);

  /**
   * @const {boolean}
   */
  var HAS_MODULE = _isObjFun(typeof module) && _isValidNode(module);

  /**
   * @const {boolean}
   */
  var HAS_GLOBAL = HAS_EXPORTS
    && HAS_MODULE
    && _isObj(typeof global)
    && _isValidRoot(global);

  /**
   * @const {boolean}
   */
  var HAS_WINDOW = _isObjFun(typeof window) && _isValidRoot(window);

  /**
   * @const {boolean}
   */
  var HAS_DEFINE = _isFun(typeof define)
    && 'amd' in define
    && _isObj(typeof define['amd']);

  /**
   * @const {boolean}
   */
  var HAS_SELF = _isObjFun(typeof self) && _isValidRoot(self);

  /**
   * @const {boolean}
   */
  var HAS_THIS = _isObjFun(typeof __THIS) && _isValidRoot(__THIS);


  /**
   * @const {(!Object|!Function)}
   * @dict
   */
  var ROOT = HAS_GLOBAL
    ? global
    : HAS_WINDOW && window !== (__THIS && __THIS['window'])
      ? window
      : HAS_SELF
        ? self
        : HAS_THIS
          ? __THIS
          : Function('return this')();


  /**
   * @private
   * @param {string} typeOf
   * @return {boolean}
   */
  function _isObj(typeOf) {
    return typeOf === 'object';
  }

  /**
   * @private
   * @param {string} typeOf
   * @return {boolean}
   */
  function _isFun(typeOf) {
    return typeOf === 'function';
  }

  /**
   * @private
   * @param {string} typeOf
   * @return {boolean}
   */
  function _isObjFun(typeOf) {
    switch (typeOf) {
      case 'object':
      case 'function':
        return true;
    }
    return false;
  }

  /**
   * @private
   * @param {(?Object|?Function)} root
   * @return {boolean}
   */
  function _isValidRoot(root) {
    return !!root && root['Object'] === Object;
  }

  /**
   * @private
   * @param {(?Object|?Function)} node
   * @return {boolean}
   */
  function _isValidNode(node) {
    return !!node && (!('nodeType' in node) || !node['nodeType']);
  }


  /**
   * @const {!Object}
   * @struct
   */
  var ENV = {
    HAS_EXPORTS: HAS_EXPORTS,
    HAS_MODULE: HAS_MODULE,
    HAS_GLOBAL: HAS_GLOBAL,
    HAS_WINDOW: HAS_WINDOW,
    HAS_DEFINE: HAS_DEFINE,
    HAS_SELF: HAS_SELF,
    HAS_THIS: HAS_THIS,
    ROOT: ROOT
  };

  return ENV;
})();
/**
 * @private
 * @const {(!Object|!Function)}
 * @dict
 */
var ROOT = ENV.ROOT;
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var ARR = ROOT['Array'];
/**
 * @private
 * @const {!Object}
 * @dict
 */
var ARR_PROTO = ARR['prototype'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var ERR = ROOT['Error'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var FUN = ROOT['Function'];
/**
 * @private
 * @const {!Object}
 * @dict
 */
var FUN_PROTO = FUN['prototype'];
/**
 * @private
 * @const {null}
 */
var NIL = null;
/**
 * @private
 * @const {boolean}
 */
var NO = false;
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var NUM = ROOT['Number'];
/**
 * @private
 * @const {!Object}
 * @dict
 */
var NUM_PROTO = NUM['prototype'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var OBJ = ROOT['Object'];
/**
 * @private
 * @const {!Object}
 * @dict
 */
var OBJ_PROTO = OBJ['prototype'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var RANGE_ERR = ROOT['RangeError'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var REGX = ROOT['RegExp'];
/**
 * @private
 * @const {!Object}
 * @dict
 */
var REGX_PROTO = REGX['prototype'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var STR = ROOT['String'];
/**
 * @private
 * @const {!Object}
 * @dict
 */
var STR_PROTO = STR['prototype'];
/**
 * @private
 * @const {!Function}
 * @constructor
 */
var TYPE_ERR = ROOT['TypeError'];
/**
 * @private
 * @const {undefined}
 */
var VOID = __VOID;
/**
 * @private
 * @const {boolean}
 */
var YES = true;
/**
 * @private
 * @param {!Object} source
 * @return {string}
 */
var $objStr = (function $objStrPrivateScope() {

  /**
   * @param {!Object} source
   * @return {string}
   */
  function $objStr(source) {
    return _objToStr['call'](source);
  }

  /**
   * @private
   * @this {!Object}
   * @return {string}
   */
  var _objToStr = OBJ_PROTO['toString'];

  return $objStr;
})();
/**
 * @private
 * @param {(!Object|!Function)} source
 * @param {*} key
 * @return {boolean}
 */
var $own = (function $ownPrivateScope() {

  /// @docref [own]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

  /**
   * @description
   *   A safe way to call [Object.prototype.hasOwnProperty][own].
   * @param {(!Object|!Function)} source
   * @param {*} key
   * @return {boolean}
   */
  function $own(source, key) {
    return _hasOwnProp['call'](source, key);
  }

  /**
   * @private
   * @param {*} key
   * @return {boolean}
   */
  var _hasOwnProp = OBJ_PROTO['hasOwnProperty'];

  return $own;
})();
/**
 * @private
 * @const {!Object<string, !function>}
 * @struct
 */
var $is = (function $isPrivateScope() {


  /**
   * @param {*} val
   * @return {boolean}
   */
  function isNull(val) {
    return val === NIL;
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isUndefined(val) {
    return val === VOID;
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isBoolean(val) {
    return typeof val === 'boolean';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isString(val) {
    return typeof val === 'string';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isNonEmptyString(val) {
    return !!val && typeof val === 'string';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isNumber(val) {
    return typeof val === 'number' && val === val && isFinite(val);
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isNonZeroNumber(val) {
    return !!val && typeof val === 'number' && val === val && isFinite(val);
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isNan(val) {
    return val !== val;
  }



  /**
   * @param {*} val
   * @return {boolean}
   */
  function isObject(val) {
    return !!val && typeof val === 'object';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isObjectOrFunction(val) {

    if (!val)
      return false;

    switch (typeof val) {
      case 'object':
      case 'function':
        return true;
      default:
        return false;
     }
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isFunction(val) {
    return !!val && typeof val === 'function';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isArray(val) {
    return isObject(val) && $objStr(val) === '[object Array]';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isRegExp(val) {
    return isObject(val) && $objStr(val) === '[object RegExp]';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isDate(val) {
    return isObject(val) && $objStr(val) === '[object Date]';
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isError(val) {
    return isObject(val) && $objStr(val) === '[object Error]';
  }

  /**
   * @private
   * @const {!Object<string, boolean>}
   * @struct
   */
  var _HAS_ARGS = (function _HAS_ARGS_PrivateScope() {

    /**
     * @description
     *   Verify the platform's ability to use the primary `Arguments` test.
     * @const {boolean}
     */
    var PRIMARY = (function _HAS_ARGS_PRIMARY_PrivateScope() {
      return $objStr(arguments) === '[object Arguments]';
    })();

    /**
     * @description
     *   Verify the platform's ability to use a check for the `callee`
     *   property to test for `Arguments`.
     * @const {boolean}
     */
    var POLYFILL = (function _HAS_ARGS_POLYFILL_PrivateScope() {
      try {
        'callee' in {};
      }
      catch (e) {
        return false;
      }
      return 'callee' in arguments;
    })();

    /**
     * @const {!Object<string, boolean>}
     * @struct
     */
    var HAS_ARGS = {
      PRIMARY: PRIMARY,
      POLYFILL: POLYFILL
    };

    return HAS_ARGS;
  })();

  /**
   * @param {*} val
   * @return {boolean}
   */
  var isArguments = _HAS_ARGS.PRIMARY
    ? function isArguments(val) {
        return isObject(val) && $objStr(val) === '[object Arguments]';
      }
    : _HAS_ARGS.POLYFILL
      ? function isArguments(val) {
          return isObject(val) && 'callee' in val;
        }
      : function isArguments(val) {
          return false;
        };

  /**
   * @param {*} val
   * @return {boolean}
   */
  var isArrayOrArguments = _HAS_ARGS.PRIMARY
    ? function isArrayOrArguments(val) {

        if ( !isObject(val) )
          return false;

        switch ( $objStr(val) ) {
          case '[object Array]':
          case '[object Arguments]':
            return true;
          default:
            return false;
        }
      }
    : _HAS_ARGS.POLYFILL
      ? function isArrayOrArguments(val) {
          return isObject(val)
            && ( $objStr(val) === '[object Array]' || 'callee' in val );
        }
      : function isArrayOrArguments(val) {
          return isObject(val) && $objStr(val) === '[object Array]';
        };





  /**
   * @param {*} val
   * @return {boolean}
   */
  function isDomDocument(val) {
    return isObject(val) && 'nodeType' in val && val['nodeType'] === 9;
  }

  /**
   * @param {*} val
   * @return {boolean}
   */
  function isDomElement(val) {
    return isObject(val) && 'nodeType' in val && val['nodeType'] === 1;
  }



  /**
   * @param {(!Array|!Arguments|!Object|!Function)} val
   * @return {boolean}
   */
  function isArrayLike(val) {

    /** @type {number} */
    var len;

    if ( isArray(val) )
      return true;

    len = val['length'];
    return isNumber(len) && isWholeNumber(len) && len >= 0;
  }

  /**
   * @description
   *   Checks if a value is considered empty. The definition of empty is
   *   defined as follows in order of priority (per the #val data type):
   *   - *`null`*!$
   *     `null` is considered empty.
   *   - *`undefined`*!$
   *     `undefined` is considered empty.
   *   - *`number`*!$
   *     Only `0` and `NaN` are considered empty.
   *   - *`string`*!$
   *     Only `""` is considered empty.
   *   - *`boolean`*!$
   *     Only `false` is considered empty.
   *   - *`function`*!$
   *     The [length property][func-length] must be `0` to be considered
   *     empty.
   *   - *`!Array`*!$
   *     The [length property][arr-length] must be `0` to be considered empty.
   *   - *`!Object`*!$
   *     The `object` must **not** [own][own] any properties to be considered
   *     empty.
   *   - *`*`*!$
   *     All other data types are **not** considered empty.
   * @param {*} val
   * @return {boolean}
   */
  function isEmpty(val) {

    /** @type {string} */
    var key;

    // empty primitives - 0, "", null, undefined, false, NaN
    if (!val)
      return YES;

    // functions
    if (typeof val === 'function')
      return val['length'] === 0;

    // remaining primitives
    if (typeof val !== 'object')
      return NO;

    // arrays
    if ($objStr(val) === '[object Array]')
      return val['length'] === 0;

    // remaining objects
    for (key in val) {
      if ( $own(val, key) )
        return NO;
    }
    return YES;
  }

  /**
   * @private
   * @const {!RegExp}
   */
  var _EOL = /^(?:cr|lf|crlf)$/i;

  /**
   * @param {string} val
   * @return {boolean}
   */
  function isEndOfLine(val) {
    return _EOL['test'](val);
  }

  /**
   * @private
   * @const {!RegExp}
   */
  var _FLAGS = (function _FLAGS_PrivateScope() {

    /** @type {string} */
    var flags;

    flags = 'img';

    if ('sticky' in REGX_PROTO)
      flags += 'y';
    if ('unicode' in REGX_PROTO)
      flags += 'u';

    flags = '[\\+\\-][' + flags + '\\+\\-]*|[' + flags + ']*';
    return new REGX('^(?:' + flags + ')$');
  })();

  /**
   * @param {string} val
   * @return {boolean}
   */
  function isRegExpFlags(val) {
    return _FLAGS['test'](val);
  }



  /**
   * @param {(!Object|!Function)} src
   * @return {boolean}
   */
  var isExtensible = (function $isExtensiblePolyfillPrivateScope() {

    /** @type {!function(!Object): boolean} */
    var objectIsExtensible;

    if ( !('isExtensible' in OBJ) || !isFunction(OBJ['isExtensible']) )
      return function isExtensible(src) {
        return false;
      };

    objectIsExtensible = OBJ['isExtensible'];

    try {
      objectIsExtensible(function(){});
      return objectIsExtensible;
    }
    catch (e) {
      return function isExtensible(src) {
        return typeof src === 'object' && objectIsExtensible(src);
      };
    }
  })();

  /**
   * @param {(!Object|!Function)} src
   * @return {boolean}
   */
  var isFrozen = (function $isFrozenPolyfillPrivateScope() {

    /** @type {!function(!Object): boolean} */
    var objectIsFrozen;

    if ( !('isFrozen' in OBJ) || !isFunction(OBJ['isFrozen']) )
      return function isFrozen(src) {
        return false;
      };

    objectIsFrozen = OBJ['isFrozen'];

    try {
      objectIsFrozen(function(){});
      return objectIsFrozen;
    }
    catch (e) {
      return function isFrozen(src) {
        return typeof src === 'object' && objectIsFrozen(src);
      };
    }
  })();

  /**
   * @param {(!Object|!Function)} src
   * @return {boolean}
   */
  var isSealed = (function $isSealedPolyfillPrivateScope() {

    /** @type {!function(!Object): boolean} */
    var objectIsSealed;

    if ( !('isSealed' in OBJ) || !isFunction(OBJ['isSealed']) )
      return function isSealed(src) {
        return false;
      };

    objectIsSealed = OBJ['isSealed'];

    try {
      objectIsSealed(function(){});
      return objectIsSealed;
    }
    catch (e) {
      return function isSealed(src) {
        return typeof src === 'object' && objectIsSealed(src);
      };
    }
  })();



  /**
   * @param {number} val
   * @return {boolean}
   */
  function isWholeNumber(val) {
    return !(val % 1);
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  function isOddNumber(val) {
    return !!(val % 2);
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  function isEvenNumber(val) {
    return !(val % 2);
  }



  /**
   * @const {!Object<string, !function>}
   * @struct
   */
  var $is = {

    nil:  isNull,
    void: isUndefined,
    bool: isBoolean,
    str:  isString,
    _str: isNonEmptyString,
    num:  isNumber,
    _num: isNonZeroNumber,
    nan:  isNan,

    obj:  isObject,
    _obj: isObjectOrFunction,
    fun:  isFunction,
    arr:  isArray,
    _arr: isArrayOrArguments,
    args: isArguments,
    regx: isRegExp,
    date: isDate,
    err:  isError,

    doc:  isDomDocument,
    elem: isDomElement,

    arrish: isArrayLike,
    empty:  isEmpty,
    eol:    isEndOfLine,
    flags:  isRegExpFlags,

    extend: isExtensible,
    frozen: isFrozen,
    sealed: isSealed,

    // number states
    whole: isWholeNumber,
    odd:   isOddNumber,
    even:  isEvenNumber

  };

  return $is;
})();
/**
 * @private
 * @param {*} val
 * @return {string}
 */
function $mkStr(val) {
  return $is.str(val)
    ? val
    : $is.regx(val)
      ? val['toString']()
      : STR(val);
}
/**
 * @private
 * @param {*} val
 * @param {number=} depth
 * @return {string}
 */
var $print = (function $printPrivateScope() {

  /**
   * @param {*} val
   * @param {number=} depth
   * @return {string}
   */
  function _toStr(val, depth) {
    depth = depth || 0;
    return $is._obj(val)
      ? $is.regx(val)
        ? val['toString']();
        : _mapToStr(val, depth)
      : _primToStr(val);
  }


  /**
   * @private
   * @const {string}
   */
  var _INDENT = '    ';

  /**
   * @private
   * @const {!RegExp}
   */
  var _MAP_TYPE = /^\[object ([a-zA-Z0-9_\$]+)\]$/;

  /**
   * @private
   * @const {!RegExp}
   */
  var _LAST_SEP = /,\n$/;



  /**
   * @private
   * @param {(!Object|!Function)} val
   * @return {boolean}
   */
  function _emptyHashMap(val) {

    /** @type {string} */
    var key;

    for (key in val) {
      if ( $own(val, key) )
        return false;
    }
    return true;
  }

  /**
   * @private
   * @param {string} val
   * @return {string}
   */
  function _escStr(val) {
    val = val['replace'](/\\/g, '\\\\');
    val = val['replace'](/\n/g, '\\n');
    val = val['replace'](/\r/g, '\\r');
    val = val['replace'](/\t/g, '\\t');
    val = val['replace'](/\v/g, '\\v');
    val = val['replace'](/\0/g, '\\0');
    val = val['replace'](/\b/g, '\\b');
    val = val['replace'](/\f/g, '\\f');
    return val;
  }

  /**
   * @private
   * @param {*} val
   * @return {string}
   */
  function _getMapType(val) {

    /** @type {string} */
    var type;

    if ( $is.fun(val) ) {
      type = 'Function';
      if (val['name'])
        type += '(' + val['name'] + ')';
      return type;
    }

    type = $objStr(val);
    return _MAP_TYPE['test'](type)
      ? type['replace'](_MAP_TYPE, '$1')
      : 'UnknownObjectType';
  }

  /**
   * @private
   * @param {number} depth
   * @return {string}
   */
  function _mkIndent(depth) {

    /** @type {string} */
    var indent;

    if (indent < 1)
      return '';

    indent = '';
    while (depth--)
      indent += _INDENT;
    return indent;
  }



  /**
   * @private
   * @param {*} val
   * @return {string}
   */
  function _primToStr(val) {

    if ( $is.bool(val) )
      return val
        ? 'true'
        : 'false';

    if ( $is.nil(val) )
      return 'null';

    if ( $is.void(val) )
      return 'undefined';

    if ( $is.nan(val) )
      return 'NaN';

    if ( $is.str(val) )
      return '"' + _escStr(val) + '"';

    return $mkStr(val);
  }



  /**
   * @private
   * @param {(!Array|!Arguments)} val
   * @param {number} depth
   * @return {string}
   */
  function _arrToStr(val, depth) {

    /** @type {string} */
    var result;
    /** @type {string} */
    var indent;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = val['length'];

    if (len < 1)
      return '[]';

    indent = _mkIndent(depth);
    depth += 1;

    result = '[\n';
    i = -1;
    while (++i < len) {
      result += indent + i + ': ';
      result += $print(val[i], depth) + ',\n';
    }
    result = result['replace'](_LAST_SEP, '\n');
    return result + ']';
  }

  /**
   * @private
   * @param {*} key
   * @return {string}
   */
  function _keyToStr(key) {
    return "'" + $mkStr(key) + "'";
  }

  /**
   * @private
   * @param {(!Object|!Function)} val
   * @param {number} depth
   * @return {string}
   */
  function _mapToStr(val, depth) {

    /** @type {string} */
    var result;

    result = _getMapType(val) + ': ';
    result += $is._arr(val)
      ? _arrToStr(val, depth)
      : _ownToStr(val, depth);
    return result;
  }

  /**
   * @private
   * @param {(!Object|!Function)} val
   * @param {number} depth
   * @return {string}
   */
  function _ownToStr(val, depth) {

    /** @type {string} */
    var result;
    /** @type {string} */
    var indent;
    /** @type {string} */
    var key;

    if ( _emptyHashMap(val) )
      return '{}';

    indent = _mkIndent(depth);
    depth += 1;

    result = '{\n';
    for (key in val) {
      if ( $own(val, key) ) {
        result += indent;
        result += _keyToStr(key) + ': ';
        result += $print(val[key], depth) + ',\n';
      }
    }
    result = result['replace'](_LAST_SEP, '\n');
    return result + '}';
  }


  return $print;
})();
/**
 * @private
 * @param {?Object} proto
 * @return {!Object}
 */
var $mkObj = (function $mkObjPrivateScope() {

  /// @docref [create]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

  /**
   * @description
   *   Polyfills [Object.create][create] if it does not exist.
   * @private
   * @param {?Object} proto
   * @return {!Object}
   */
  var _create = (function _createPrivateScope() {

    if ( 'create' in OBJ && $is.fun(OBJ['create']) )
      return OBJ['create'];

    /**
     * @private
     * @constructor
     */
    function _Obj(){}

    /**
     * @param {?Object} proto
     * @return {!Object}
     */
    function create(proto) {

      /** @type {!Object} */
      var obj;

      _Obj['prototype'] = proto;
      obj = new _Obj();
      _Obj['prototype'] = NIL;
      return obj;
    }

    return create;
  })();

  /**
   * @description
   *   Cross browser [Object.create][create] implementation.
   * @param {?Object} proto
   * @return {!Object}
   */
  function $mkObj(proto) {
    return _create(proto);
  }

  return $mkObj;
})();
/**
 * @private
 * @param {string=} superMethod
 * @return {!Object<string, !function>}
 */
var $mkErrs = (function $mkErrsPrivateScope() {


  /**
   * @private
   * @const {!RegExp}
   */
  var _OPEN_HASH = /^#/;

  /**
   * @private
   * @const {!RegExp}
   */
  var _OPEN_VITALS = /^vitals\./;

  /**
   * @private
   * @const {!RegExp}
   */
  var _STRICT = /^\!/;



  /**
   * @private
   * @param {!Array} opts
   * @return {string}
   */
  function _mkOptions(opts) {

    /** @type {string} */
    var result;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    result = '';

    len = opts['length'];
    i = -1;
    while (++i < len)
      result += '\n- `' + $print(opts[i]) + '`';
    return result;
  }

  /**
   * @private
   * @param {(string|undefined)} name
   * @return {string}
   */
  function _prepSuper(name) {
    
    if ( $is.void(name) )
      return 'newVitals';

    name = name['replace'](_OPEN_VITALS, '');
    return 'vitals.' + name;
  }

  /**
   * @private
   * @param {string} name
   * @return {string}
   */
  function _prepParam(name) {

    if (!name)
      return '';

    if ( _STRICT['test'](name) )
      return name['replace'](_STRICT, '');

    name = name['replace'](_OPEN_HASH, '');
    return '#' + name;
  }

  /**
   * @private
   * @param {!Error} err
   * @param {string} name
   * @param {string} msg
   * @param {*=} val
   * @return {!Error}
   */
  function _setErrorProps(err, name, msg, val) {
    err['__vitals'] = true;
    err['vitals'] = true;
    err['name'] = name;
    switch (name) {
      case 'TypeError':
        err['__type'] = true;
        err['type'] = true;
        break;
      case 'RangeError':
        err['__range'] = true;
        err['range'] = true;
        break;
    }
    err['message'] = msg;
    err['msg'] = msg;
    if (arguments['length'] > 3) {
      err['value'] = val;
      err['val'] = val;
    }
    return err;
  }


  /**
   * @param {string=} superMethod
   * @return {!Object<string, !function>}
   */
  function $mkErrs(superMethod) {

    /**
     * @const {!Object<string, !function>}
     * @struct
     */
    var MK_ERR = {
      error: error,
      typeError: typeError,
      rangeError: rangeError
    };

    /**
     * @private
     * @const {string}
     */
    var _SUPER = _prepSuper(superMethod);

    /**
     * @private
     * @param {(string|undefined)} method
     * @return {string} 
     */
    function _prepMethod(method) {
      method = method
        ? _SUPER
        : _SUPER + '.' + method;
      return '`' + method + '`';
    }

    /**
     * @param {!Error} err
     * @param {string} msg
     * @param {string=} method
     * @return {!Error} 
     */
    function error(err, msg, method) {
      method = _prepMethod(method);
      msg += ' for ' + method + ' call';
      return _setErrorProps(err, 'Error', msg);
    }

    /**
     * @param {!TypeError} err
     * @param {string} paramName
     * @param {*} paramVal
     * @param {string} validTypes
     * @param {string=} methodName
     * @return {!TypeError} 
     */
    function typeError(err, paramName, paramVal, validTypes, methodName) {

      /** @type {string} */
      var method;
      /** @type {string} */
      var param;
      /** @type {string} */
      var msg;
      /** @type {string} */
      var val;

      method = _prepMethod(methodName);
      param = _prepParam(paramName);
      val = $print(paramVal);
      msg = 'invalid ' + param + ' data type for ' + method + ' call\n';
      msg += 'valid data types: `' + validTypes + '`\n';
      msg += 'actual ' + param + ' value: `' + val + '`';
      return _setErrorProps(err, 'TypeError', msg, paramVal);
    }

    /**
     * @param {!RangeError} err
     * @param {string} paramName
     * @param {(!Array<*>|string|undefined)=} validRange
     *   An `array` of actual valid options or a `string` stating the valid
     *   range. If `undefined` this option is skipped.
     * @param {string=} methodName
     * @return {!RangeError} 
     */
    function rangeError(err, paramName, validRange, methodName) {

      /** @type {string} */
      var method;
      /** @type {string} */
      var param;
      /** @type {string} */
      var msg;

      method = _prepMethod(methodName);
      param = _prepParam(paramName);
      msg = 'out-of-range ' + param + ' for ' + method + ' call';
      if ( $is.str(validRange) )
        msg += '\nvalid range: `' + validRange + '`';
      else if ( $is.arr(validRange) )
        msg += '\nvalid options:' + _mkOptions(validRange);
      return _setErrorProps(err, 'RangeError', msg);
    }

    return MK_ERR;
  }

  return $mkErrs;
})();
/**
 * @private
 * @param {string} src
 * @param {*} val
 * @return {boolean}
 */
var $strIncl = (function $strInclPrivateScope() {

  /// @docref [includes]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

  /**
   * @description
   *   Polyfills [String.prototype.includes][includes] if it does not exist.
   * @param {string} src
   * @param {string} val
   * @return {boolean}
   */
  var $strIncl = 'includes' in STR_PROTO && $is.fun(STR_PROTO['includes'])
    ? function $strIncl(src, val) {
        return src['includes'](val);
      }
    : function $strIncl(src, val) {
        return src['indexOf'](val) !== -1;
      };

  return $strIncl;
})();
/**
 * @private
 * @param {(!Array|!Arguments|!Object|!Function)} src
 * @return {!Array}
 */
function $cloneArr(src) {

  /** @type {!Array} */
  var clone;
  /** @type {string} */
  var key;

  clone = new ARR(src['length']);
  for (key in src) {
    if ( $own(src, key) )
      clone[key] = src[key];
  }
  return clone;
}
/**
 * @private
 * @param {!Function} func
 * @return {!Function}
 */
function $cloneFun(func) {

  /** @type {!Function} */
  function funcCopy() {
    return func['apply'](NIL, arguments);
  }
  /** @type {string} */
  var key;

  for (key in func) {
    if ( $own(func, key) )
      funcCopy[key] = func[key];
  }
  return funcCopy;
}
/**
 * @private
 * @param {!Object} obj
 * @return {!Object}
 */
function $cloneObj(obj) {

  /** @type {!Object} */
  var clone;
  /** @type {string} */
  var key;

  clone = {};
  for (key in obj) {
    if ( $own(obj, key) )
      clone[key] = obj[key];
  }
  return clone;
}
/**
 * @private
 * @param {string} source
 * @return {string}
 */
function $escRegx(source) {
  return source['replace'](/[\\^$.*+?|(){}[\]]/g, '\\$&');
}
/**
 * @description
 *   A cross-platform shortcut for `String.prototype.includes` and
 *   `RegExp.prototype.test`.
 * @private
 * @param {string} src
 * @param {*} patt
 * @return {boolean}
 */
function $match(src, patt) {

  if ( $is.regx(patt) )
    return patt['test'](src);

  patt = $mkStr(patt);
  return !src
    ? !patt
    : !patt
      ? YES
      : $strIncl(src, patt);
}
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {number=} start = `0`
 * @param {number=} end = `src.length`
 * @return {!Array}
 */
function $sliceArr(src, start, end) {

  /** @type {!Array} */
  var result;
  /** @type {number} */
  var len;
  /** @type {number} */
  var ii;
  /** @type {number} */
  var i;

  len = src['length'];

  if ( $is.void(start) )
    start = 0;
  if ( $is.void(end) )
    end = len;

  if (start < 0)
    start += len;
  if (start < 0)
    start = 0;

  if (end > len)
    end = len;
  else if (end < 0)
    end += len;

  if (start >= end)
    return [];

  result = new ARR(end - start);
  ii = start - 1;
  i = 0;
  while (++ii < end)
    result[i++] = src[ii];
  return result;
}
/**
 * @public
 * @const {!Function<string, !Function>}
 * @dict
 */
var is = (function isPrivateScope() {



  /// @section base
  /// @method vitals.is
  /**
   * @description
   *   Checks if a value or many values are a specific data type or types. See
   *   @is-types for a complete list of the available data types. Note that
   *   all `object` types are nullable by default (i.e. `is("object", null)`
   *   will return  `true`).
   * @public
   * @param {string} types
   *   The valid data types. See @is-types for a complete list of the
   *   available data types.
   * @param {...*} val
   *   The value to evaluate. If more than one #val is provided, every #val
   *   must pass the type check to return `true`.
   * @return {boolean}
   *   The evaluation result.
   */
  function is(types, val) {

    /** @type {string} */
    var nullable;
    /** @type {?Array<!function>} */
    var checks;
    /** @type {boolean} */
    var vals;

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #types defined');
      case 1:
        throw _mkErr(new ERR, 'no #val defined');
      case 2:
        vals = NO;
        break;
      default:
        vals = YES;
        break;
    }

    if ( !$is.str(types) )
      throw _mkTypeErr(new TYPE_ERR, 'types', types, 'string');
    if ( !types )
      throw _mkErr(new ERR, 'invalid empty #types `string`');

    if ( _hasSpecial('*', types) )
      return YES;

    checks = _getChecks(types);

    if (!checks)
      throw _mkRangeErr(new RANGE_ERR, 'types',
        'https://github.com/imaginate/vitals/wiki/vitals.is-types');

    nullable = _getNullable(types);
    return vals
      ? _checkVals(checks, arguments, nullable)
      : _checkVal(checks, val, nullable);
  }






  /**
   * @private
   * @param {!Array<!function>} checks
   * @param {*} val
   * @param {boolean=} nullable
   * @return {boolean}
   */
  function _checkVal(checks, val, nullable) {

    /** @type {number} */
    var i;

    i = checks['length'];
    while (i--) {
      if ( checks[i](val, nullable) )
        return YES;
    }
    return NO;
  }

  /**
   * @private
   * @param {!Array<!function>} checks
   * @param {!Arguments} vals
   * @param {boolean=} nullable
   * @return {boolean}
   */
  function _checkVals(checks, vals, nullable) {

    /** @type {number} */
    var i;

    i = vals['length'];
    while (--i) {
      if ( !_checkVal(checks, vals[i], nullable) )
        return NO;
    }
    return YES;
  }



  /**
   * @private
   * @const {!Object<string, !function(*, boolean=): boolean>}
   * @dict
   */
  var _TYPES = (function _TYPES_PrivateScope() {

    /**
     * @type {!Object<string, !function(*, boolean=): boolean>}
     * @dict
     */
    var $types = {};

    /**
     * @description
     *   Adds types to the *$types* hash map with a check method that
     *   evaluates nullable properties and invokes their type section's
     *   method.
     * @private
     * @param {string} section
     *   The category for the types.
     * @param {!Object<string, !function(*): boolean>} types
     *   Each property should use a type's name for its key and method for its
     *   value.
     * @param {boolean=} nullableDefault = `true`
     *   The default nullable value for each type in #types.
     * @return {void}
     */
    function _addTypes(section, types, nullableDefault) {

      /** @type {string} */
      var type;

      for (type in types) {
        if( $own(types, type) )
          _addType(section, type, types[type], nullableDefault);
      }
    }

    /**
     * @description
     *   Adds a type to the *$types* hash map with a check method that
     *   evaluates nullable properties and invokes its type section's method.
     * @private
     * @param {string} section
     *   The type's category.
     * @param {string} type
     *   The type's name.
     * @param {!function(*): boolean} check
     *   The type's check method.
     * @param {boolean=} nullableDefault = `true`
     *   The type's default nullable value.
     * @return {void}
     */
    function _addType(section, type, check, nullableDefault) {

      if ( $own(_addType, section) )
        check = _addType[section](check);

      nullableDefault = nullableDefault !== NO;

      /**
       * @param {*} val
       * @param {boolean=} nullable = `nullableDefault`
       * @return {boolean}
       */
      function typeCheck(val, nullable) {

        if ( !$is.bool(nullable) )
          nullable = nullableDefault;

        return $is.nil(val)
          ? nullable
          : check(val);
      }

      $types['_' + type] = typeCheck;
    }

    /**
     * @description
     *   Adds the type shortcuts to the *$types* hash map.
     * @private
     * @param {!Object<string, string>} shortcuts
     * @return {void}
     */
    function _addShortcuts(shortcuts) {

      /** @type {string} */
      var shortcut;
      /** @type {string} */
      var type;

      for (shortcut in shortcuts) {
        if( $own(shortcuts, shortcut) ) {
          type = '_' + shortcuts[shortcut];
          shortcut = '_' + shortcut;
          $types[shortcut] = $types[type];
        }
      }
    }

    /**
     * @private
     * @param {!function(*): boolean} eachCheck
     *   The check method for each of an array's property values.
     * @return {!function(*): boolean}
     *   The check method for the `array` type.
     */
    function _addArrayType(eachCheck) {

      /**
       * @param {*} val
       * @return {boolean}
       */
      function check(val) {

        /** @type {number} */
        var i;

        if ( !$is.arr(val) )
          return NO;

        i = val['length'];
        while (i--) {
          if ( !eachCheck(val[i]) )
            return NO;
        }
        return YES;
      }

      return check;
    }
    _addType['arrays'] = _addArrayType;

    /**
     * @private
     * @param {!function(*): boolean} eachCheck
     *   The check method for each of an hash map's property values.
     * @return {!function(*): boolean}
     *   The check method for the `object` or `function` hash map type.
     */
    function _addMapType(eachCheck) {

      /**
       * @param {*} val
       * @return {boolean}
       */
      function check(val) {

        /** @type {string} */
        var key;

        if ( !$is.obj(val) )
          return NO;

        for (key in val) {
          if( $own(val, key) && !eachCheck(val[key]) )
            return NO;
        }
        return YES;
      }

      return check;
    }
    _addType['maps'] = _addMapType;


    _addTypes('primitives', {
      'undefined': $is.void,
      'boolean':   $is.bool,
      'string':    $is.str,
      'number':    $is.num,
      'nan':       $is.nan
    }, NO);
    _addType('primitives', 'null', $is.nil);

    _addTypes('js_objects', {
      'object': $is.obj,
      'regexp': $is.regx,
      'array':  $is.arr,
      'error':  $is.err,
      'date':   $is.date
    });
    _addType('js_objects', 'arguments', $is.args);
    _addType('js_objects', 'function', $is.fun, NO);

    _addTypes('dom_objects', {
      'element':  $is.elem,
      'document': $is.doc
    });

    _addType('others', 'empty', $is.empty);

    _addTypes('arrays', {
      'undefineds': $is.void,
      'nulls':      $is.nil,
      'booleans':   $is.bool,
      'strings':    $is.str,
      'numbers':    $is.num,
      'nans':       $is.nan,
      'objects':    $is.obj,
      'functions':  $is.fun,
      'regexps':    $is.regx,
      'arrays':     $is.arr,
      'dates':      $is.date,
      'errors':     $is.err,
      'elements':   $is.elem,
      'documents':  $is.doc
    });

    _addTypes('maps', {
      'undefinedmap': $is.void,
      'nullmap':      $is.nil,
      'booleanmap':   $is.bool,
      'stringmap':    $is.str,
      'numbermap':    $is.num,
      'nanmap':       $is.nan,
      'objectmap':    $is.obj,
      'functionmap':  $is.func,
      'regexpmap':    $is.regex,
      'arraymap':     $is.arr,
      'datemap':      $is.date,
      'errormap':     $is.err,
      'elementmap':   $is.elem,
      'documentmap':  $is.doc
    });


    _addShortcuts({

      'nil':  'null',
      'bool': 'boolean',
      'str':  'string',
      'num':  'number',
      'void': 'undefined',

      'obj':   'object',
      'func':  'function',
      'fun':   'function',
      'fn':    'function',
      'regex': 'regexp',
      'regx':  'regexp',
      're':    'regexp',
      'arr':   'array',
      'err':   'error',
      'args':  'arguments',

      'elem': 'element',
      'doc':  'document',

      'undefinedes': 'undefineds',
      'voids':   'undefineds',
      'nils':    'nulls',
      'strs':    'strings',
      'nums':    'numbers',
      'bools':   'booleans',
      'objs':    'objects',
      'funcs':   'functions',
      'funs':    'functions',
      'fns':     'functions',
      'regexes': 'regexps',
      'regexs':  'regexps',
      'res':     'regexps',
      'arrs':    'arrays',
      'errs':    'errors',
      'elems':   'elements',
      'docs':    'documents',

      'voidmap':  'undefinedmap',
      'nilmap':   'nullmap',
      'strmap':   'stringmap',
      'nummap':   'numbermap',
      'boolmap':  'booleanmap',
      'objmap':   'objectmap',
      'funcmap':  'functionmap',
      'funmap':   'functionmap',
      'fnmap':    'functionmap',
      'regexmap': 'regexpmap',
      'regxmap':  'regexpmap',
      'remap':    'regexpmap',
      'arrmap':   'arraymap',
      'errmap':   'errormap',
      'elemmap':  'elementmap',
      'docmap':   'documentmap'

    });

    return $types;
  })();



  /**
   * @private
   * @type {!RegExp}
   */
  var _ALL_SPECIALS = /[^a-z\|]/g;

  /**
   * @private
   * @const {!Object<string, !function(string): boolean>}
   * @dict
   */
  var _SPECIALS = (function _SPECIALS_PrivateScope() {

    /**
     * @private
     * @const {!RegExp}
     */
    var _PIPE = /\|/;

    /**
     * @private
     * @const {!RegExp}
     */
    var _EXCLAMATION_POINT = /\!/;

    /**
     * @private
     * @const {!RegExp}
     */
    var _QUESTION_MARK = /\?/;

    /**
     * @private
     * @const {!RegExp}
     */
    var _EQUAL_SIGN = /\=/;

    /**
     * @private
     * @const {!RegExp}
     */
    var _ANY = /\*|any/;

    /**
     * @param {string} val
     * @return {boolean}
     */
    function hasPipe(val) {
      return _PIPE['test'](val);
    }

    /**
     * @param {string} val
     * @return {boolean}
     */
    function hasExPoint(val) {
      return _EXCLAMATION_POINT['test'](val);
    }

    /**
     * @param {string} val
     * @return {boolean}
     */
    function hasQuestMark(val) {
      return _QUESTION_MARK['test'](val);
    }

    /**
     * @param {string} val
     * @return {boolean}
     */
    function hasEqSign(val) {
      return _EQUAL_SIGN['test'](val);
    }

    /**
     * @param {string} val
     * @return {boolean}
     */
    function hasAnyGlob(val) {
      return _ANY['test'](val);
    }

    /**
     * @const {!Object<string, !function(string): boolean>}
     * @dict
     */
    var SPECIALS = {
      '|': hasPipe,
      '!': hasExPoint,
      '?': hasQuestMark,
      '=': hasEqSign,
      '*': hasAnyGlob
    };

    return SPECIALS;
  })();

  /**
   * @private
   * @param {string} special
   * @param {string} types
   * @return {boolean}
   */
  function _hasSpecial(special, types) {
    return _SPECIALS[special](types);
  }

  /**
   * @private
   * @param {string} types
   * @return {?Array<!function>}
   */
  function _getChecks(types) {

    /** @type {?Array<!function>} */
    var checks;
    /** @type {string} */
    var type;
    /** @type {number} */
    var i;

    if ( _hasSpecial('=', types) )
      types += '|undefined';

    types = types['toLowerCase']();
    types = types['replace'](_ALL_SPECIALS, '');
    checks = types['split']('|');

    i = checks['length'];
    while (i--) {
      type = '_' + checks[i];
      if ( !$own(_TYPES, type) )
        return NIL;
      checks[i] = _TYPES[type];
    }

    return checks['length']
      ? checks
      : NIL;
  }

  /**
   * @description
   *   Method checks whether `"!"` or `"?"` exists in the #types `string`.
   * @private
   * @param {string} types
   * @return {(undefined|boolean)}
   *   If `undefined` no override exists.
   */
  function _getNullable(types) {

    /** @type {boolean} */
    var override;
    /** @type {boolean} */
    var ensure;
    /** @type {boolean} */
    var negate;

    ensure = _hasSpecial('?', types);
    negate = _hasSpecial('!', types);
    override = ensure && negate
      ? NO
      : ensure || negate;
    return override
      ? !negate && ensure
      : VOID;
  }



  /**
   * @private
   * @const {!Object<string, !function>}
   * @struct
   */
  var _MK_ERR = $mkErrs('is');

  /**
   * @private
   * @param {!Error} err
   * @param {string} msg
   * @param {string=} method
   * @return {!Error} 
   */
  var _mkErr = _MK_ERR.error;

  /**
   * @private
   * @param {!TypeError} err
   * @param {string} paramName
   * @param {*} paramVal
   * @param {string} validTypes
   * @param {string=} methodName
   * @return {!TypeError} 
   */
  var _mkTypeErr = _MK_ERR.typeError;

  /**
   * @private
   * @param {!RangeError} err
   * @param {string} paramName
   * @param {(!Array<*>|string|undefined)=} validRange
   *   An `array` of actual valid options or a `string` stating the valid
   *   range. If `undefined` this option is skipped.
   * @param {string=} methodName
   * @return {!RangeError} 
   */
  var _mkRangeErr = _MK_ERR.rangeError;



  return is;
})();

/**
 * @public
 * @type {!Function<string, !Function>}
 * @dict
 */
var cut = (function cutPrivateScope() {


  /// @section base
  /// @method vitals.cut
  /**
   * @description
   *   Removes properties from an `object`, `array`, or `function` or
   *   characters from a `string` and returns the amended #source.
   * @public
   * @param {(!Object|!Function|!Array|!Arguments|string)} source
   *   If the #source is an `arguments` instance, it is [sliced][slice] into
   *   an `array` before any values are removed.
   * @param {...*} val
   *   If only one `array` #val is provided, it is considered an `array` of
   *   values. All other details are as follows (per #source type):
   *   - *`!Object|!Function`*!$
   *     - **The leading #val is a `RegExp`**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a key that matches (via a @has#pattern test) any
   *       #val.
   *     - **The leading #val is a `string`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a [strict equality][equal] test) any #val.
   *     - **The leading #val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the [owned][own] property is [deleted][delete]). It has the
   *       following optional parameters:
   *       - **value** *`*`*
   *       - **key** *`string`*
   *       - **source** *`!Object|!Function`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `object` within the filter make sure you define the
   *       filter's third parameter so you can safely assume all references to
   *       the #source are its original values).
   *     - **All other situations**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a value that matches (via a
   *       [strict equality][equal] test) any #val.
   *   - *`!Array|!Arguments`*!$
   *     - **Every #val is a whole `number`**!$
   *       This method will [splice][splice] from the #source each property
   *       with an index that matches (via a [strict equality][equal] test)
   *       any #val. If a #val is a negative `number`, it is added to the
   *       #source [length][arr-length] before checking for a matching
   *       property.
   *     - **The leading #val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the indexed property is [spliced][splice] from the
   *       #source). It has the following optional parameters:
   *       - **value** *`*`*
   *       - **index** *`number`*
   *       - **source** *`!Array`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `array` within the filter make sure you define the filter's
   *       third parameter so you can safely assume all references to the
   *       #source are its original values).
   *     - **All other situations**!$
   *       This method will [splice][splice] from the #source all indexed
   *       properties with a value that matches (via a
   *       [strict equality][equal] test) any #val.
   *   - *`string`*!$
   *     Each `substring` of characters that matches any #val is removed from
   *     the #source. Each #val that is not a `RegExp` or `string` is
   *     converted to a `string` before checking the #source for any matches.
   * @param {?Object=} thisArg
   *   Only applicable when a filter `function` is defined for #val (i.e. the
   *   #source must be an `object`, `function`, or `array`, and the leading
   *   #val must be a `function`). If #thisArg is defined, the filter
   *   `function` is bound to its value. Note that the native
   *   [Function.prototype.bind][bind] is not used to bind the filter
   *   `function`. Instead the filter `function` is wrapped with a regular new
   *   [Function][func] that uses [Function.prototype.call][call] to call the
   *   filter `function` with #thisArg. The new wrapper `function` has the
   *   same [length property][func-length] value as the filter `function`
   *   (unless more than three parameters were defined for the filter
   *   `function` as the wrapper has a max value of `3`) and the
   *   [name property][func-name] value of `"filter"` (unless you are using a
   *   [minified][minify] version of `vitals`).
   * @return {(!Object|!Function|!Array|string)}
   *   The amended #source.
   */
  function cut(source, val, thisArg) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined');

      case 1:
        throw _mkErr(new ERR, 'no #val defined');

      case 2:
        if ( $is.str(source) )
          return $is.arr(val)
            ? _cutPatterns(source, val)
            : _cutPattern(source, val);

        if ( !$is._obj(source) )
          throw _mkTypeErr(new TYPE_ERR, 'source', source,
            '!Object|!Function|!Array|!Arguments|string');

        if ( $is.args(source) )
          source = $sliceArr(source);

        return $is.fun(val)
          ? $is.arr(source)
            ? _filterArr(source, val, VOID)
            : _filterObj(source, val, VOID)
          : $is.arr(val)
            ? _cutProps(source, val)
            : _cutProp(source, val);

      default:
        if ( $is.str(source) ) {
          val = $sliceArr(arguments, 1);
          return _cutPatterns(source, val);
        }

        if ( !$is._obj(source) )
          throw _mkTypeErr(new TYPE_ERR, 'source', source,
            '!Object|!Function|!Array|!Arguments|string');

        if ( $is.args(source) )
          source = $sliceArr(source);

        if ( $is.fun(val) ) {
          if ( !$is.nil(thisArg) && !$is.void(thisArg) && !$is.obj(thisArg) )
            throw _mkTypeErr(new TYPE_ERR, 'thisArg', thisArg, '?Object=');

          return $is.arr(source)
            ? _filterArr(source, val, thisArg)
            : _filterObj(source, val, thisArg);
        }

        val = $sliceArr(arguments, 1);
        return _cutProps(source, val);
    }
  }

  /// @section base
  /// @method vitals.cut.property
  /// @alias vitals.cut.prop
  /**
   * @description
   *   Removes a property from an `object`, `array`, or `function` and returns
   *   the amended #source.
   * @public
   * @param {(!Object|!Function|!Array|!Arguments)} source
   *   If the #source is an `arguments` instance, it is [sliced][slice] into
   *   an `array` before any values are removed.
   * @param {*} val
   *   All details are as follows (per #source type):
   *   - *`!Object|!Function`*!$
   *     - **#val is a `RegExp`**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a key that matches (via a @has#pattern test) the
   *       #val.
   *     - **#val is a `string`**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a key that matches (via a [strict equality][equal]
   *       test) the #val.
   *     - **#val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the [owned][own] property is [deleted][delete]). It has the
   *       following optional parameters:
   *       - **value** *`*`*
   *       - **key** *`string`*
   *       - **source** *`!Object|!Function`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `object` within the filter make sure you define the
   *       filter's third parameter so you can safely assume all references to
   *       the #source are its original values).
   *     - **All other situations**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a value that matches (via a
   *       [strict equality][equal] test) the #val.
   *   - *`!Array|!Arguments`*!$
   *     - **#val is a whole `number`**!$
   *       This method will [splice][splice] from the #source the property
   *       with an index that matches (via a [strict equality][equal] test)
   *       the #val. If the #val is a negative `number`, it is added to the
   *       #source [length][arr-length] before checking for a matching
   *       property.
   *     - **#val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the property is [spliced][splice] from the #source). It has
   *       the following optional parameters:
   *       - **value** *`*`*
   *       - **index** *`number`*
   *       - **source** *`!Array`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `array` within the filter make sure you define the filter's
   *       third parameter so you can safely assume all references to the
   *       #source are its original values).
   *     - **All other situations**!$
   *       This method will [splice][splice] from the #source all properties
   *       with a value that matches (via a [strict equality][equal] test)
   *       the #val.
   * @param {?Object=} thisArg
   *   Only applicable when a filter `function` is defined for #val. If
   *   #thisArg is defined, the filter `function` is bound to its value. Note
   *   that the native [Function.prototype.bind][bind] is not used to bind the
   *   filter `function`. Instead the filter `function` is wrapped with a
   *   regular new [Function][func] that uses [Function.prototype.call][call]
   *   to call the filter `function` with #thisArg. The new wrapper `function`
   *   has the same [length property][func-length] value as the filter
   *   `function` (unless more than three parameters were defined for the
   *   filter `function` as the wrapper has a max value of `3`) and the
   *   [name property][func-name] value of `"filter"` (unless you are using a
   *   [minified][minify] version of `vitals`).
   * @return {(!Object|!Function|!Array)}
   *   The amended #source.
   */
  function cutProperty(source, val, thisArg) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'property');

      case 1:
        throw _mkErr(new ERR, 'no #val defined', 'property');

      case 2:
        if ( !$is._obj(source) )
          throw _mkTypeErr(new TYPE_ERR, 'source', source,
            '!Object|!Function|!Array|!Arguments', 'property');

        if ( $is.args(source) )
          source = $sliceArr(source);

        return $is.fun(val)
          ? $is.arr(source)
            ? _filterArr(source, val, VOID)
            : _filterObj(source, val, VOID)
          : _cutProp(source, val);

      default:
        if ( !$is._obj(source) )
          throw _mkTypeErr(new TYPE_ERR, 'source', source,
            '!Object|!Function|!Array|!Arguments', 'property');

        if ( $is.args(source) )
          source = $sliceArr(source);

        if ( $is.fun(val) ) {
          if ( !$is.nil(thisArg) && !$is.void(thisArg) && !$is.obj(thisArg) )
            throw _mkTypeErr(new TYPE_ERR, 'thisArg', thisArg, '?Object=',
              'property');

          return $is.arr(source)
            ? _filterArr(source, val, thisArg)
            : _filterObj(source, val, thisArg);
        }

        return _cutProp(source, val);
    }
  }
  cut['property'] = cutProperty;
  cut['prop'] = cutProperty;

  /// @section base
  /// @method vitals.cut.key
  /**
   * @description
   *   Removes a property by key name from an `object` or `function` and
   *   returns the amended #source.
   * @public
   * @param {(!Object|!Function)} source
   * @param {*} key
   *   If a property with the #key value for its key name is [owned][own] by
   *   the #source, it is [deleted][delete].
   * @return {(!Object|!Function)}
   *   The amended #source.
   */
  function cutKey(source, key) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'key');
      case 1:
        throw _mkErr(new ERR, 'no #key defined', 'key');
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source, '!Object|!Function',
        'key');

    return _cutKey(source, key);
  }
  cut['key'] = cutKey;

  /// @section base
  /// @method vitals.cut.index
  /// @alias vitals.cut.i
  /**
   * @description
   *   Removes properties by index from an `array` or array-like `object` and
   *   returns the amended #source. If an array-like `object` is supplied, it
   *   is copied via [slice][slice] (i.e. converted to an `array`) before
   *   removing any properties.
   * @public
   * @param {(!Array|!Arguments|!Object|!Function)} source
   *   If the #source is **not** an `array`, it must be an array-like `object`
   *   or `function`. The #source is considered array-like when it [owns][own]
   *   a property with the `"length"` key name (e.g. `source.length` like the
   *   `array` [length property][arr-length]) whose value is a whole `number`
   *   that is greater than or equal to zero (e.g.
   *   `isWholeNumber(source.length) && source.length >= 0`). If an array-like
   *   #source is provided, it is [sliced][slice] into an `array` before any
   *   values are removed.
   * @param {number} index
   *   The #index must be a whole `number`. The following rules apply in order
   *   of priority (per #toIndex data type):
   *   - *`undefined`*!$
   *     The #index value sets the one matching property (if a property with
   *     an index value of the #index exists in the #source) to
   *     [splice][splice] from the #source. If the #index is negative, it is
   *     added to the #source [length][arr-length] before a matching property
   *     is searched for.
   *   - *`number`*!$
   *     The #index value sets the start of a range of indexes that are
   *     [spliced][splice] from the #source. If the #index is negative, it is
   *     added to the #source [length][arr-length]. The property with a
   *     matching index value of the #index is included (as well as starts the
   *     range of indexes) in the [spliced][splice] properties if it exists.
   * @param {(number|undefined)=} toIndex = `undefined`
   *   If the #toIndex is defined, it must be a whole `number`. The #toIndex
   *   `number` causes all property indexes from the #index to the #toIndex
   *   (not including the #toIndex) to be [spliced][splice] from #source. If
   *   the #toIndex is a negative `number`, it is added to the #source
   *   [length][arr-length] before being used.
   * @return {!Array}
   *   The amended #source or when an array-like `object` is defined for the
   *   #source, an amended copy (via [slice][slice]) of #source.
   */
  function cutIndex(source, index, toIndex) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'index');

      case 1:
        throw _mkErr(new ERR, 'no #index defined', 'index');

      case 2:
        if ( !$is._obj(source) )
          throw _mkTypeErr(new TYPE_ERR, 'source', source,
            '!Array|!Arguments|!Object|!Function', 'index');
        if ( !$is.arrish(source) )
          throw _mkErr(new ERR, '#source failed `array-like` test (#source.' +
            'length must be a whole `number` that is `0` or more)', 'index');
        if ( !$is.num(index) )
          throw _mkTypeErr(new TYPE_ERR, 'index', index, 'number', 'index');
        if ( !$is.whole(index) )
          throw _mkErr(new ERR, 'invalid #index `number` (' +
            'must be a whole `number`)', 'index');

        if ( !$is.arr(source) )
          source = $sliceArr(source);

        return _cutIndex(source, index, VOID);

      default:
        if ( !$is._obj(source) )
          throw _mkTypeErr(new TYPE_ERR, 'source', source,
            '!Array|!Arguments|!Object|!Function', 'index');
        if ( !$is.arrish(source) )
          throw _mkErr(new ERR, '#source failed `array-like` test (#source.' +
            'length must be a whole `number` that is `0` or more)', 'index');
        if ( !$is.num(index) )
          throw _mkTypeErr(new TYPE_ERR, 'index', index, 'number', 'index');
        if ( !$is.whole(index) )
          throw _mkErr(new ERR, 'invalid #index `number` (' +
            'must be a whole `number`)', 'index');

        if ( !$is.void(toIndex) ) {
          if ( !$is.num(toIndex) )
            throw _mkTypeErr(new TYPE_ERR, 'toIndex', toIndex, 'number',
              'index');
          if ( !$is.whole(index) )
            throw _mkErr(new ERR, 'invalid #toIndex `number` (' +
              'must be a whole `number`)', 'index');
        }

        if ( !$is.arr(source) )
          source = $sliceArr(source);

        return _cutIndex(source, index, toIndex);
    }
  }
  cut['index'] = cutIndex;
  cut['i'] = cutIndex;

  /// @section base
  /// @method vitals.cut.type
  /**
   * @description
   *   Removes properties by their value's [data type][type] from an `object`,
   *   `function`, or `array` and returns the amended #source. @is#main is
   *   used to complete the type checks. See @is-types for all available data
   *   type options.
   * @public
   * @param {(!Object|!Function|!Array|!Arguments)} source
   *   If the #source is an `arguments` instance, it is [sliced][slice] into
   *   an `array` before any values are removed.
   * @param {string} type
   *   See @is-types for all valid #type options. The remaining details are as
   *   follows (per #source type):
   *   - *`!Object|!Function`*!$
   *     This method will [delete][delete] from the #source all [owned][own]
   *     properties with a value that matches (via a @is#main test) the #type.
   *   - *`!Array|!Arguments`*!$
   *     This method will [splice][splice] from the #source all indexed
   *     properties with a value that matches (via a @is#main test) the #type.
   * @return {(!Object|!Function|!Array)}
   *   The amended #source.
   */
  function cutType(source, type) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'type');
      case 1:
        throw _mkErr(new ERR, 'no #type defined', 'type');
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source,
        '!Object|!Function|!Array|!Arguments', 'type');
    if ( !$is.str(type) )
      throw _mkTypeErr(new TYPE_ERR, 'type', type, 'string', 'type');

    if ( $is.args(source) )
      source = $sliceArr(source);

    if ( $is.empty(source) ) {
      is(type, ''); // run once to catch any invalid types in #type
      return source;
    }

    return _cutType(source, type);
  }
  cut['type'] = cutType;

  /// @section base
  /// @method vitals.cut.value
  /// @alias vitals.cut.val
  /**
   * @description
   *   Removes properties by value from an `object`, `function`, or `array`
   *   and returns the amended #source.
   * @public
   * @param {(!Object|!Function|!Array|!Arguments)} source
   *   If the #source is an `arguments` instance, it is [sliced][slice] into
   *   an `array` before any values are removed.
   * @param {*} val
   *   All details are as follows (per #source type):
   *   - *`!Object|!Function`*!$
   *     This method will [delete][delete] from the #source all [owned][own]
   *     properties with a value that matches (via a [strict equality][equal]
   *     test) the #val.
   *   - *`!Array|!Arguments`*!$
   *     This method will [splice][splice] from the #source all indexed
   *     properties with a value that matches (via a [strict equality][equal]
   *     test) the #val.
   * @return {(!Object|!Function|!Array)}
   *   The amended #source.
   */
  function cutValue(source, val) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'value');
      case 1:
        throw _mkErr(new ERR, 'no #val defined', 'value');
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source,
        '!Object|!Function|!Array|!Arguments', 'value');

    if ( $is.args(source) )
      source = $sliceArr(source);

    return _cutVal(source, val);
  }
  cut['value'] = cutValue;
  cut['val'] = cutValue;

  /// @section base
  /// @method vitals.cut.pattern
  /// @alias vitals.cut.patt
  /**
   * @description
   *   Removes a pattern from a `string` and returns the amended #source.
   * @public
   * @param {string} source
   * @param {*} pattern
   *   Each `substring` of characters that matches #pattern is removed from
   *   the #source. If the #pattern is not a `RegExp` or `string`, it is
   *   converted into a `string` before checking the #source for any matches.
   * @return {string}
   *   The amended #source.
   */
  function cutPattern(source, pattern) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'pattern');
      case 1:
        throw _mkErr(new ERR, 'no #pattern defined', 'pattern');
    }

    if ( !$is.str(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source, 'string', 'pattern');

    return _cutPattern(source, pattern);
  }
  cut['pattern'] = cutPattern;
  cut['patt'] = cutPattern;

  /// @section base
  /// @method vitals.cut.properties
  /// @alias vitals.cut.props
  /**
   * @description
   *   Removes properties from an `object`, `array`, or `function` and returns
   *   the amended #source.
   * @public
   * @param {(!Object|!Function|!Array|!Arguments)} source
   *   If the #source is an `arguments` instance, it is [sliced][slice] into
   *   an `array` before any values are removed.
   * @param {...*} val
   *   If only one `array` #val is provided, it is considered an `array` of
   *   values. All other details are as follows (per #source type):
   *   - *`!Object|!Function`*!$
   *     - **The leading #val is a `RegExp`**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a key that matches (via a @has#pattern test) any
   *       #val.
   *     - **The leading #val is a `string`**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a key that matches (via a [strict equality][equal]
   *       test) any #val.
   *     - **All other situations**!$
   *       This method will [delete][delete] from the #source all [owned][own]
   *       properties with a value that matches (via a
   *       [strict equality][equal] test) any #val.
   *   - *`!Array|!Arguments`*!$
   *     - **Every #val is a whole `number`**!$
   *       This method will [splice][splice] from the #source each property
   *       with an index that matches (via a [strict equality][equal] test)
   *       any #val. If a #val is a negative `number`, it is added to the
   *       #source [length][arr-length] before checking for a matching
   *       property.
   *     - **All other situations**!$
   *       This method will [splice][splice] from the #source all indexed
   *       properties with a value that matches (via a
   *       [strict equality][equal] test) any #val.
   * @return {(!Object|!Function|!Array)}
   *   The amended #source.
   */
  function cutProperties(source, val) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'properties');
      case 1:
        throw _mkErr(new ERR, 'no #val defined', 'properties');
      case 2:
        break;
      default:
        val = $sliceArr(arguments, 1);
        break;
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source,
        '!Object|!Function|!Array|!Arguments', 'properties');

    if ( $is.args(source) )
      source = $sliceArr(source);

    return $is.arr(val)
      ? _cutProps(source, val)
      : _cutProp(source, val);
  }
  cut['properties'] = cutProperties;
  cut['props'] = cutProperties;

  /// @section base
  /// @method vitals.cut.keys
  /**
   * @description
   *   Removes properties by key name from an `object` or `function` and
   *   returns the amended #source.
   * @public
   * @param {(!Object|!Function)} source
   * @param {...*} key
   *   If only one `array` #key is provided, it is considered an `array` of
   *   keys. For each #key value, if the #source [owns][own] a property with a
   *   matching key name, it is [deleted][delete].
   * @return {(!Object|!Function)}
   *   The amended #source.
   */
  function cutKeys(source, key) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'keys');
      case 1:
        throw _mkErr(new ERR, 'no #key defined', 'keys');
      case 2:
        break;
      default:
        key = $sliceArr(arguments, 1);
        break;
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source, '!Object|!Function',
        'keys');

    return $is.arr(key)
      ? _cutKeys(source, key)
      : _cutKey(source, key);
  }
  cut['keys'] = cutKeys;

  /// @section base
  /// @method vitals.cut.indexes
  /// @alias vitals.cut.ii
  /**
   * @description
   *   Removes properties by index from an `array` or array-like `object` and
   *   returns the amended #source. If an array-like `object` is supplied, it
   *   is copied via [slice][slice] (i.e. converted to an `array`) before
   *   removing any properties.
   * @public
   * @param {(!Array|!Arguments|!Object|!Function)} source
   *   If the #source is **not** an `array`, it must be an array-like `object`
   *   or `function`. The #source is considered array-like when it [owns][own]
   *   a property with the `"length"` key name (e.g. `source.length` like the
   *   `array` [length property][arr-length]) whose value is a whole `number`
   *   that is greater than or equal to zero (e.g.
   *   `isWholeNumber(source.length) && source.length >= 0`). If an array-like
   *   #source is provided, it is [sliced][slice] into an `array` before any
   *   values are removed.
   * @param {(!Array<number>|...number)} index
   *   Each #index `number` must be a whole `number`. If only one `array`
   *   #index is provided, it is considered an `array` of indexes. If a
   *   property with any #index exists in #source, it is [spliced][splice]
   *   from the #source. If an #index is a negative `number`, it is added to
   *   the #source [length][arr-length] before checking for a matching
   *   property.
   * @return {!Array}
   *   The amended #source or when an array-like `object` is defined for the
   *   #source, an amended copy (via [slice][slice]) of #source.
   */
  function cutIndexes(source, index) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'indexes');
      case 1:
        throw _mkErr(new ERR, 'no #index defined', 'indexes');
      case 2:
        break;
      default:
        index = $sliceArr(arguments, 1);
        break;
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source,
        '!Array|!Arguments|!Object|!Function', 'indexes');
    if ( !$is.arrish(source) )
      throw _mkErr(new ERR, '#source failed `array-like` test (#source.' +
        'length must be a whole `number` that is `0` or more)', 'indexes');

    if ( !$is.arr(source) )
      source = $sliceArr(source);

    if ( !$is.arr(index) ) {
      if ( !$is.num(index) )
        throw _mkTypeErr(new TYPE_ERR, 'index', index,
          '(!Array<number>|...number)', 'indexes');
      if ( !$is.whole(index) )
        throw _mkErr(new ERR, 'invalid #index `number` (' +
          'must be a whole `number`)', 'indexes');

      return _cutIndex(source, index);
    }

    if ( !_isNumArr(index) )
      throw _mkTypeErr(new TYPE_ERR, 'index', index,
        '(!Array<number>|...number)', 'indexes');
    if ( !_isWholeNumArr(index) )
      throw _mkErr(new ERR, 'an invalid #index `number` (' +
        'every #index must be a whole `number`)', 'indexes');

    return _cutIndexes(source, index);
  }
  cut['indexes'] = cutIndexes;
  cut['ii'] = cutIndexes;

  /// @section base
  /// @method vitals.cut.values
  /// @alias vitals.cut.vals
  /**
   * @description
   *   Removes properties by value from an `object`, `function`, or `array`
   *   and returns the amended #source.
   * @public
   * @param {(!Object|!Function|!Array|!Arguments)} source
   *   If the #source is an `arguments` instance, it is [sliced][slice] into
   *   an `array` before any values are removed.
   * @param {...*} val
   *   If only one `array` #val is provided, it is considered an `array` of
   *   values. All other details are as follows (per #source type):
   *   - *`!Object|!Function`*!$
   *     This method will [delete][delete] from the #source all of the
   *     [owned][own] properties with a value that matches (via a
   *     [strict equality][equal] test) any #val.
   *   - *`!Array|!Arguments`*!$
   *     This method will [splice][splice] from the #source all of the indexed
   *     properties with a value that matches (via a [strict equality][equal]
   *     test) any #val.
   * @return {(!Object|!Function|!Array)}
   *   The amended #source.
   */
  function cutValues(source, val) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'values');
      case 1:
        throw _mkErr(new ERR, 'no #val defined', 'values');
      case 2:
        break;
      default:
        val = $sliceArr(arguments, 1);
        break;
    }

    if ( !$is._obj(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source,
        '!Object|!Function|!Array|!Arguments', 'values');

    if ( $is.args(source) )
      source = $sliceArr(source);

    return $is.arr(val)
      ? _cutVals(source, val)
      : _cutVal(source, val);
  }
  cut['values'] = cutValues;
  cut['vals'] = cutValues;

  /// @section base
  /// @method vitals.cut.patterns
  /// @alias vitals.cut.patts
  /**
   * @description
   *   Removes patterns from a `string` and returns the amended #source.
   * @public
   * @param {string} source
   * @param {...*} pattern
   *   If only one `array` #pattern is provided, it is considered an `array`
   *   of patterns. Each `substring` of characters that matches any #pattern
   *   is removed from the #source. If a #pattern is not a `RegExp` or
   *   `string`, it is converted into a `string` before checking the #source
   *   for any matches.
   * @return {string}
   *   The amended #source.
   */
  function cutPatterns(source, pattern) {

    switch (arguments['length']) {
      case 0:
        throw _mkErr(new ERR, 'no #source defined', 'patterns');
      case 1:
        throw _mkErr(new ERR, 'no #pattern defined', 'patterns');
      case 2:
        break;
      default:
        pattern = $sliceArr(arguments, 1);
        break;
    }

    if ( !$is.str(source) )
      throw _mkTypeErr(new TYPE_ERR, 'source', source, 'string', 'patterns');

    return $is.arr(pattern)
      ? _cutPatterns(source, pattern)
      : _cutPattern(source, pattern);
  }
  cut['patterns'] = cutPatterns;
  cut['patts'] = cutPatterns;



  /**
   * @private
   * @param {(!Object|!Function|!Array)} source
   * @param {*} val
   * @return {(!Object|!Function|!Array)}
   */
  function _cutProp(source, val) {
    return $is.arr(source)
      ? $is.num(val) && $is.whole(val)
        ? _spliceKey(source, val)
        : _spliceVal(source, val)
      : $is.str(val) || $is.regx(val)
        ? _deleteKey(source, val)
        : _deleteVal(source, val);
  }

  /**
   * @private
   * @param {(!Object|!Function|!Array)} source
   * @param {!Array<*>} vals
   * @return {(!Object|!Function|!Array)}
   */
  function _cutProps(source, vals) {
    return $is.arr(source)
      ? _isIntArr(vals)
        ? _spliceKeys(source, vals)
        : _spliceVals(source, vals)
      : $is.str(vals[0]) || $is.regx(vals[0])
        ? _deleteKeys(source, vals)
        : _deleteVals(source, vals);
  }

  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {*} key
   * @return {(!Object|!Function)}
   */
  function _cutKey(source, key) {

    if ( $own(source, key) )
      delete source[key];

    return source;
  }

  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {!Array} keys
   * @return {(!Object|!Function)}
   */
  function _cutKeys(source, keys) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = keys['length'];
    i = -1;
    while (++i < len)
      source = _cutKey(source, keys[i]);
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {number} key
   * @param {number=} toKey
   * @return {!Array}
   */
  function _cutIndex(source, key, toKey) {

    /** @type {number} */
    var len;

    len = source['length'];

    if (key < 0)
      key += len;

    if (key >= len)
      return source;

    if ( $is.void(toKey) ) {
      if (key < 0)
        return source;
      source['splice'](key, 1);
      return source;
    }

    if (key < 0)
      key = 0;

    if (toKey > len)
      toKey = len;
    else if (toKey < 0)
      toKey += len;

    if (key >= toKey)
      return source;

    source['splice'](key, toKey - key);
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {!Array<number>} keys
   * @return {!Array}
   */
  function _cutIndexes(source, keys) {
    return _spliceKeys(source, keys);
  }

  /**
   * @private
   * @param {(!Object|!Function|!Array)} source
   * @param {string} type
   * @return {(!Object|!Function|!Array)}
   */
  function _cutType(source, type) {
    return $is.arr(source)
      ? _spliceValByType(source, type)
      : _deleteValByType(source, type);
  }

  /**
   * @private
   * @param {(!Object|!Function|!Array)} source
   * @param {*} val
   * @return {(!Object|!Function|!Array)}
   */
  function _cutVal(source, val) {
    return $is.arr(source)
      ? _spliceVal(source, val)
      : _deleteVal(source, val);
  }

  /**
   * @private
   * @param {(!Object|!Function|!Array)} source
   * @param {!Array<*>} vals
   * @return {(!Object|!Function|!Array)}
   */
  function _cutVals(source, vals) {
    return $is.arr(source)
      ? _spliceVals(source, vals)
      : _deleteVals(source, vals);
  }

  /**
   * @private
   * @param {string} source
   * @param {*} pattern
   * @return {string}
   */
  function _cutPattern(source, pattern) {
    if ( !$is.regx(pattern) ) {
      pattern = $mkStr(pattern);
      pattern = $escRegx(pattern);
      pattern = new REGX(pattern, 'g');
    }
    return source['replace'](pattern, '');
  }

  /**
   * @private
   * @param {string} source
   * @param {!Array} patterns
   * @return {string}
   */
  function _cutPatterns(source, patterns) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = patterns['length'];
    i = -1;
    while (++i < len)
      source = _cutPattern(source, patterns[i]);
    return source;
  }



  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {*} key
   * @param {boolean=} useMatch
   * @return {(!Object|!Function)}
   */
  function _deleteKey(source, key, useMatch) {

    /** @type {!RegExp} */
    var pattern;

    if ( $is.void(useMatch) )
      useMatch = $is.regx(key);

    if (!useMatch) {
      if ( $own(source, key) )
        delete source[key];
      return source;
    }

    pattern = key;
    for (key in source) {
      if ( $own(source, key) && $match(key, pattern) )
        delete source[key];
    }
    return source;
  }

  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {!Array} keys
   * @return {(!Object|!Function)}
   */
  function _deleteKeys(source, keys) {

    /** @type {boolean} */
    var useMatch;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    useMatch = $is.regx(keys[0]);
    len = keys['length'];
    i = -1;
    while (++i < len)
      source = _deleteKey(source, keys[i], useMatch);
    return source;
  }

  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {*} val
   * @return {(!Object|!Function)}
   */
  function _deleteVal(source, val) {

    /** @type {string} */
    var key;

    for (key in source) {
      if ( $own(source, key) && source[key] === val )
        delete source[key];
    }
    return source;
  }

  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {string} type
   * @return {(!Object|!Function)}
   */
  function _deleteValByType(source, type) {

    /** @type {string} */
    var key;

    for (key in source) {
      if ( $own(source, key) && is(type, source[key]) )
        delete source[key];
    }
    return source;
  }

  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {!Array} vals
   * @return {(!Object|!Function)}
   */
  function _deleteVals(source, vals) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = vals['length'];
    i = -1;
    while (++i < len)
      source = _deleteVal(source, vals[i]);
    return source;
  }



  /**
   * @private
   * @param {!Array} source
   * @param {number} key
   * @return {!Array}
   */
  function _spliceKey(source, key) {

    /** @type {number} */
    var len;

    len = source['length'];

    if (key < 0)
      key += len;

    if (key < 0 || key >= len)
      return source;

    source['splice'](key, 1);
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {!Array<number>} keys
   * @return {!Array}
   */
  function _spliceKeys(source, keys) {

    /** @type {number} */
    var first;
    /** @type {number} */
    var count;
    /** @type {number} */
    var i;

    if (!source['length'] || !keys['length'])
      return source;

    if (keys['length'] === 1)
      return _spliceKey(source, keys[0]);

    /**
     * @const {!Object<string, !Array<number>>}
     * @struct
     */
    var sorted = _sortIndexes(keys, source['length']);

    i = sorted.first['length'];
    while (i--) {
      first = sorted.first[i];
      count = sorted.last[i] - first + 1;
      source['splice'](first, count);
    }
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {*} val
   * @return {!Array}
   */
  function _spliceVal(source, val) {

    /** @type {number} */
    var i;

    i = source['length'];
    while (i--) {
      if (source[i] === val)
        source['splice'](i, 1);
    }
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {string} type
   * @return {!Array}
   */
  function _spliceValByType(source, type) {

    /** @type {number} */
    var i;

    i = source['length'];
    while (i--) {
      if ( is(type, source[i]) )
        source['splice'](i, 1);
    }
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {!Array} vals
   * @return {!Array}
   */
  function _spliceVals(source, vals) {

    /** @type {*} */
    var val;
    /** @type {number} */
    var len;
    /** @type {number} */
    var ii;
    /** @type {number} */
    var i;

    len = vals['length'];
    i = source['length'];
    while (i--) {
      val = source[i];
      ii = len;
      while (ii--) {
        if (vals[ii] === val) {
          source['splice'](i, 1);
          break;
        }
      }
    }
    return source;
  }



  /**
   * @private
   * @param {(!Object|!Function)} source
   * @param {!function(*=, string=, (!Object|!Function)=): *} filter
   * @param {?Object=} thisArg
   * @return {(!Object|!Function)}
   */
  function _filterObj(source, filter, thisArg) {

    /** @type {(!Object|!Function)} */
    var src;
    /** @type {string} */
    var key;

    if ( !$is.void(thisArg) )
      filter = _bind(filter, thisArg);

    src = filter['length'] > 2
      ? $is.fun(source)
        ? $cloneFun(source)
        : $cloneObj(source)
      : source;

    switch (filter['length']) {
      case 0:
        for (key in src) {
          if ( $own(src, key) && !filter() )
            delete source[key];
        }
        break;
      case 1:
        for (key in src) {
          if ( $own(src, key) && !filter(src[key]) )
            delete source[key];
        }
        break;
      case 2:
        for (key in src) {
          if ( $own(src, key) && !filter(src[key], key) )
            delete source[key];
        }
        break;
      default:
        for (key in src) {
          if ( $own(src, key) && !filter(src[key], key, src) )
            delete source[key];
        }
        break;
    }
    return source;
  }

  /**
   * @private
   * @param {!Array} source
   * @param {!function(*=, number=, !Array=): *} filter
   * @param {?Object=} thisArg
   * @return {!Array}
   */
  function _filterArr(source, filter, thisArg) {

    /** @type {!Array} */
    var src;
    /** @type {number} */
    var i;

    if ( !$is.void(thisArg) )
      filter = _bind(filter, thisArg);

    src = filter['length'] > 2
      ? $cloneArr(source)
      : source;
    i = src['length'];

    switch (filter['length']) {
      case 0:
        while (i--) {
          if ( !filter() )
            source['splice'](i, 1);
        }
        break;
      case 1:
        while (i--) {
          if ( !filter(src[i]) )
            source['splice'](i, 1);
        }
        break;
      case 2:
        while (i--) {
          if ( !filter(src[i], i) )
            source['splice'](i, 1);
        }
        break;
      default:
        while (i--) {
          if ( !filter(src[i], i, src) )
            source['splice'](i, 1);
        }
        break;
    }
    return source;
  }



  /**
   * @private
   * @param {!Array<number>} indexes
   * @param {number} sourceLen
   * @return {!Object<string, !Array<number>>}
   */
  var _sortIndexes = (function() {

    /**
     * @param {!Array<number>} indexes
     * @param {number} sourceLen
     * @return {!Object<string, !Array<number>>}
     */
    function sortIndexes(indexes, sourceLen) {
      setup();
      run(indexes, sourceLen);
      return result();
    }


    /**
     * @type {!Array<number>}
     */
    var $first;

    /**
     * @type {!Array<number>}
     */
    var $last;



    /**
     * @private
     * @return {void}
     */
    function setup() {
      $first = [];
      $last = [];
    }

    /**
     * @private
     * @param {!Array<number>} indexes
     * @param {number} sourceLen
     * @return {void}
     */
    function run(indexes, sourceLen) {

      /** @type {number} */
      var index;
      /** @type {number} */
      var len;
      /** @type {number} */
      var i;

      len = indexes['length'];
      i = 0;

      // push 1st index
      index = parse(indexes[i], sourceLen);
      while (index === -1 && ++i < len)
        index = parse(indexes[i], sourceLen);
      push(index);

      // push remaining indexes
      while (++i < len) {
        index = parse(indexes[i], sourceLen);
        if (index !== -1)
          sort(index, 0, $last['length']);
      }
    }

    /**
     * @private
     * @return {!Object<string, !Array<number>>}
     */
    function result() {

      /**
       * @const {!Object<string, !Array<number>>}
       * @struct
       */
      var SORTED_INDEXES = {
        first: $first,
        last: $last
      };

      return SORTED_INDEXES;
    }

    /**
     * @private
     * @param {number} index
     * @param {number} len
     * @return {number}
     *   If invalid #index is given `-1` is returned.
     */
    function parse(index, len) {

      if (index < 0)
        index += len;

      return index < 0 || index >= len
        ? -1
        : index;
    }

    /**
     * @private
     * @param {number} index
     * @return {void}
     */
    function push(index) {
      $first['push'](index);
      $last['push'](index);
    }

    /**
     * @private
     * @param {number} index
     * @return {void}
     */
    function unshift(index) {
      $first['unshift'](index);
      $last['unshift'](index);
    }

    /**
     * @private
     * @param {number} index
     * @param {number} pos
     * @return {void}
     */
    function insert(index, pos) {
      $first['splice'](pos, 0, index);
      $last['splice'](pos, 0, index);
    }

    /**
     * @private
     * @param {number} index
     * @param {number} pos
     * @return {void}
     */
    function remove(pos) {
      $first['splice'](pos, 1);
      $last['splice'](pos, 1);
    }

    /**
     * @private
     * @param {number} index
     * @param {number} left
     * @param {number} right
     * @return {void}
     */
    function sort(index, left, right) {

      /** @type {number} */
      var mid;
      /** @type {number} */
      var min;

      mid = (left + right) >>> 1;
      min = $first[mid];
      if (index < min)
        comparePrev(index, left, mid);
      else if (index > $last[mid])
        compareNext(index, mid, right);
    }

    /**
     * @private
     * @param {number} index
     * @param {number} left
     * @param {number} mid
     * @return {void}
     */
    function comparePrev(index, left, mid) {

      /** @type {number} */
      var prev;
      /** @type {number} */
      var min;
      /** @type {number} */
      var max;

      min = $first[mid];
      if (!mid) {
        if (index === --min)
          $first[mid] = index;
        else
          unshift(index);
        return;
      }
      prev = mid - 1;
      max = $last[prev];
      if (index === --min) {
        if (index === ++max) {
          $last[prev] = $last[mid];
          remove(mid);
        }
        else
          $first[mid] = index;
      }
      else if (index > max) {
        if (index === ++max)
          $last[prev] = index;
        else
          insert(index, mid);
      }
      else
        sort(index, left, prev);
    }

    /**
     * @private
     * @param {number} index
     * @param {number} mid
     * @param {number} right
     * @return {void}
     */
    function compareNext(index, mid, right) {

      /** @type {number} */
      var next;
      /** @type {number} */
      var min;
      /** @type {number} */
      var max;

      next = mid + 1;
      max = $last[mid];
      if (next === $last['length']) {
        if (index === ++max)
          $last[mid] = index;
        else
          push(index);
        return;
      }
      min = $first[next];
      if (index === ++max) {
        if (index === --min) {
          $last[mid] = $last[next];
          remove(next);
        }
        else
          $last[mid] = index;
      }
      else if (index < min) {
        if (index === --min)
          $first[next] = index;
        else
          insert(index, next);
      }
      else
        sort(index, next, right);
    }


    return sortIndexes;
  })();



  /**
   * @private
   * @param {!function} func
   * @param {?Object} thisArg
   * @return {!function} 
   */
  function _bind(func, thisArg) {
    switch (func['length']) {
      case 0:
        return function filter() {
          return func['call'](thisArg);
        };
      case 1:
        return function filter(val) {
          return func['call'](thisArg, val);
        };
      case 2:
        return function filter(val, key) {
          return func['call'](thisArg, val, key);
        };
    }
    return function filter(val, key, obj) {
      return func['call'](thisArg, val, key, obj);
    };
  }



  /**
   * @private
   * @param {!Array<*>} vals
   * @return {boolean} 
   */
  function _isIntArr(vals) {

    /** @type {*} */
    var propVal;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = vals['length'];
    i = -1;
    while (++i < len) {
      propVal = vals[i];
      if ( !$is.num(propVal) || !$is.whole(propVal) )
        return NO;
    }
    return YES;
  }

  /**
   * @private
   * @param {*} val
   * @return {boolean} 
   */
  function _isNumArr(val) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    if ( !$is.arr(val) )
      return NO;

    len = val['length'];
    i = -1;
    while (++i < len) {
      if ( !$is.num(val[i]) )
        return NO;
    }
    return YES;
  }

  /**
   * @private
   * @param {!Array<number>} nums
   * @return {boolean} 
   */
  function _isWholeNumArr(nums) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = nums['length'];
    i = -1;
    while (++i < len) {
      if ( !$is.whole(nums[i]) )
        return NO;
    }
    return YES;
  }



  /**
   * @private
   * @const {!Object<string, !function>}
   * @struct
   */
  var _MK_ERR = $mkErrs('cut');

  /**
   * @private
   * @param {!Error} err
   * @param {string} msg
   * @param {string=} method
   * @return {!Error} 
   */
  var _mkErr = _MK_ERR.error;

  /**
   * @private
   * @param {!TypeError} err
   * @param {string} paramName
   * @param {*} paramVal
   * @param {string} validTypes
   * @param {string=} methodName
   * @return {!TypeError} 
   */
  var _mkTypeErr = _MK_ERR.typeError;

  /**
   * @private
   * @param {!RangeError} err
   * @param {string} paramName
   * @param {(!Array<*>|string|undefined)=} validRange
   *   An `array` of actual valid options or a `string` stating the valid
   *   range. If `undefined` this option is skipped.
   * @param {string=} methodName
   * @return {!RangeError} 
   */
  var _mkRangeErr = _MK_ERR.rangeError;



  return cut;
})();

var vitals = cut;
vitals['cut'] = cut;
  vitals['VERSION'] = VERSION;
  (function __exportVitals() {

    if (ENV.HAS_WINDOW)
      _appendVitals(window);
    if (ENV.HAS_SELF)
      _appendVitals(self);

    _appendVitals(ROOT);

    if (ENV.HAS_EXPORTS && ENV.HAS_MODULE) {
      if (module.exports === exports)
        module.exports = vitals;
      else
        _appendVitals(exports);
    }

    if (ENV.HAS_DEFINE)
      define(function() {
        return vitals;
      });

    /**
     * @private
     * @param {(!Object|!Function)} obj
     * @return {void}
     */
    function _appendVitals(obj) {
      obj['vitals'] = vitals;
      obj['Vitals'] = vitals;
      obj['VITALS'] = vitals;
    }
  })();
})(this);

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol

