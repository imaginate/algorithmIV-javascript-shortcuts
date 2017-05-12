/**
 * ---------------------------------------------------------------------------
 * VITALS HAS
 * ---------------------------------------------------------------------------
 * @section base
 * @version 4.1.3
 * @see [vitals.has](https://github.com/imaginate/vitals/wiki/vitals.has)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

'use strict';

var newErrorMaker = require('./helpers/new-error-maker.js');
var ownEnum = require('./helpers/own-enum.js');
var inObj = require('./helpers/in-obj.js');
var inArr = require('./helpers/in-arr.js');
var inStr = require('./helpers/in-str.js');
var match = require('./helpers/match.js');
var own = require('./helpers/own.js');
var _is = require('./helpers/is.js');

///////////////////////////////////////////////////////////////////////// {{{1
// VITALS HAS
//////////////////////////////////////////////////////////////////////////////

var has = (function hasPrivateScope() {

  //////////////////////////////////////////////////////////
  // PUBLIC METHODS
  // - has
  // - has.key
  // - has.value      (has.val)
  // - has.pattern
  // - has.substring  (has.substr)
  // - has.enumerable (has.enum)
  //
  // * Note that has.enum may fail in older browser
  //   environments.
  //////////////////////////////////////////////////////////

  /* {{{2 Has References
   * @ref [own]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
   * @ref [test]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
   * @ref [equal]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
   * @ref [error]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
   * @ref [string]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
   * @ref [isEnum]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
   * @ref [indexOf]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
   * @ref [includes]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
   */

  /// {{{2
  /// @method has
  /**
   * Checks if an `object` or `function` [owns][own] a property, if an `array`
   * or `arguments` instance contains a value, or a `string` matches a pattern
   * or contains a substring.
   *
   * @public
   * @param {(?Object|?function|?Array|?Arguments|?string)} source
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     This method automatically returns `false`.
   *   - *`!Object|function`*!$
   *     This method returns the result of a safe call to
   *     [Object.prototype.hasOwnProperty][own].
   *   - *`!Array|!Arguments`*!$
   *     This method checks each indexed property in the #source for one
   *     matching value.
   *   - *`string`*!$
   *     If the #val is a `RegExp`, this method returns the result of a call
   *     to [RegExp.prototype.test][test] on the #source. Otherwise it returns
   *     the result of a call to [String.prototype.includes][includes] or for
   *     older platforms a [strict equality][equal] test for a non-negative
   *     index result from [String.prototype.indexOf][indexOf] (i.e.
   *     `return source.indexOf(alteredVal) !== -1;`).
   * @param {*} val
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     The value of #val does not matter and is not used.
   *   - *`!Object|function`*!$
   *     The #val is passed **without** any conversions to
   *     [Object.prototype.hasOwnProperty][own].
   *   - *`!Array|!Arguments`*!$
   *     The #val is **not** altered. A [strict equality][equal] test against
   *     the #val is used to evaluate each indexed property value.
   *   - *`string`*!$
   *     If the #val is **not** a `RegExp`, it is converted into a `string`
   *     via [String()][string] before [String.prototype.includes][includes]
   *     or [String.prototype.indexOf][indexOf] is called.
   * @return {boolean}
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     This method returns `false`.
   *   - *`!Object|function`*!$
   *     This method returns the result of a safe call to
   *     [Object.prototype.hasOwnProperty][own].
   *   - *`!Array|!Arguments`*!$
   *     This method checks each indexed property in the #source for one
   *     matching value.
   *   - *`string`*!$
   *     If the #val is a `RegExp`, this method returns the result of a call
   *     to [RegExp.prototype.test][test] on the #source. Otherwise it returns
   *     the result of a call to [String.prototype.includes][includes] or for
   *     older platforms a [strict equality][equal] test for a non-negative
   *     index result from [String.prototype.indexOf][indexOf] (i.e.
   *     `return source.indexOf(alteredVal) !== -1;`).
   */
  function has(source, val) {

    if (arguments.length < 2)
      throw _error('No val defined');

    if ( _is.nil(source) )
      return false;

    if ( _is.str(source) )
      return match(source, val);

    if ( !_is._obj(source) )
      throw _error.type('source');

    return _is._arr(source)
      ? inArr(source, val)
      : own(source, val);
  }

  /// {{{2
  /// @method has.key
  /**
   * Checks if an `object` or `function` [owns][own] a property.
   *
   * @public
   * @param {(?Object|?function)} source
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     This method automatically returns `false`.
   *   - *`!Object|function`*!$
   *     This method returns the result of a safe call to
   *     [Object.prototype.hasOwnProperty][own].
   * @param {*} key
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     The value of #key does not matter and is not used.
   *   - *`!Object|function`*!$
   *     The #key is passed **without** any conversions to
   *     [Object.prototype.hasOwnProperty][own].
   * @return {boolean}
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     This method returns `false`.
   *   - *`!Object|function`*!$
   *     This method returns the result of a safe call to
   *     [Object.prototype.hasOwnProperty][own].
   */
  has.key = function hasKey(source, key) {

    if (arguments.length < 2)
      throw _error('No key defined', 'key');

    if ( _is.nil(source) )
      return false;

    if ( !_is._obj(source) )
      throw _error.type('source', 'key');

    return own(source, key);
  };

  /// {{{2
  /// @method has.value
  /// @alias has.val
  /**
   * Checks if an `object` or `function` [owned][own] property or an `array`
   * or `arguments` indexed property has a value.
   *
   * @public
   * @param {(?Object|?function|?Array|?Arguments)} source
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     This method automatically returns `false`.
   *   - *`!Object|function`*!$
   *     This method checks each [owned][own] property in the #source for one
   *     matching value.
   *   - *`!Array|!Arguments`*!$
   *     This method checks each indexed property in the #source for one
   *     matching value.
   * @param {*} val
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     The value of #val does not matter and is not used.
   *   - *`!Object|function`*!$
   *     The #val is **not** altered. A [strict equality][equal] test against
   *     the #val is used to evaluate each [owned][own] property value.
   *   - *`!Array|!Arguments`*!$
   *     The #val is **not** altered. A [strict equality][equal] test against
   *     the #val is used to evaluate each indexed property value.
   * @return {boolean}
   *   The following rules apply in order of priority (per #source type):
   *   - *`null`*!$
   *     This method returns `false`.
   *   - *`!Object|function`*!$
   *     This method checks each [owned][own] property in the #source for one
   *     matching value.
   *   - *`!Array|!Arguments`*!$
   *     This method checks each indexed property in the #source for one
   *     matching value.
   */
  has.value = function hasValue(source, val) {

    if (arguments.length < 2)
      throw _error('No val defined', 'value');

    if ( _is.nil(source) )
      return false;

    if ( !_is._obj(source) )
      throw _error.type('source', 'value');

    return _is._arr(source)
      ? inArr(source, val)
      : inObj(source, val);
  };
  // define shorthand
  has.val = has.value;

  /// {{{2
  /// @method has.pattern
  /**
   * Checks if a `string` matches a pattern or contains a substring.
   *
   * @public
   * @param {string} source
   *   If the #val is a `RegExp`, this method returns the result of a call to
   *   [RegExp.prototype.test][test] on the #source. Otherwise it returns the
   *   result of a call to [String.prototype.includes][includes] or for older
   *   platforms a [strict equality][equal] test for a non-negative index
   *   result from [String.prototype.indexOf][indexOf] (i.e.
   *   `return source.indexOf(alteredVal) !== -1;`).
   * @param {*} pattern
   *   If the #pattern is **not** a `RegExp`, it is converted into a `string`
   *   via [String()][string] before [String.prototype.includes][includes]
   *   or [String.prototype.indexOf][indexOf] is called.
   * @return {boolean}
   *   If the #val is a `RegExp`, this method returns the result of a call to
   *   [RegExp.prototype.test][test] on the #source. Otherwise it returns the
   *   result of a call to [String.prototype.includes][includes] or for older
   *   platforms a [strict equality][equal] test for a non-negative index
   *   result from [String.prototype.indexOf][indexOf] (i.e.
   *   `return source.indexOf(alteredVal) !== -1;`).
   */
  has.pattern = function hasPattern(source, pattern) {

    if ( !_is.str(source) )
      throw _error.type('source', 'pattern');
    if (arguments.length < 2)
      throw _error('No pattern defined', 'pattern');

    return match(source, pattern);
  };

  /// {{{2
  /**
   * Checks if a string has a substring.
   *
   * @public
   * @param {string} source
   * @param {*} val - The val is converted to a string, and the source string
   *   is checked for a matching substring via [String.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
   *   or [String.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).
   * @return {boolean}
   */
  has.substring = function hasSubstring(source, val) {

    if ( !_is.str(source) ) throw _error.type('source', 'substring');
    if (arguments.length < 2) throw _error('No val defined', 'substring');

    return inStr(source, val);
  };
  // define shorthand
  has.substr = has.substring;

  /// {{{2
  /**
   * Checks if an enumerable property exists in an object.
   *
   * @public
   * @param {(Object|?function)} source
   * @param {*} key - Details (per source type):
   *   - object: The key is converted to a string, and the object is checked for
   *     a matching key via [Object.prototype.propertyIsEnumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable).
   *   - null: Regardless of key `false` is returned.
   * @return {boolean}
   */
  has.enumerable = function hasEnumerable(source, key) {

    if (arguments.length < 2) throw _error('No key defined', 'enumerable');

    if ( _is.nil(source) ) return false;

    if ( !_is._obj(source) ) throw _error.type('source', 'enumerable');

    return ownEnum(source, key);
  };
  // define shorthand
  try {
    has.enum = has.enumerable;
  }
  catch (e) {}

  ///////////////////////////////////////////////////// {{{2
  // PRIVATE METHODS - GENERAL
  //////////////////////////////////////////////////////////

  /// {{{3
  /**
   * @private
   * @type {!ErrorAid}
   */
  var _error = newErrorMaker('has');

  /// }}}2
  // END OF PRIVATE SCOPE FOR HAS
  return has;
})();
/// }}}1

module.exports = has;

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
