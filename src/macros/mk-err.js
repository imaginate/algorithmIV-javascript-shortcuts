/**
 * ---------------------------------------------------------------------------
 * MK_ERR MACRO
 * ---------------------------------------------------------------------------
 * @version 5.0.0
 * @see [vitals](https://github.com/imaginate/vitals)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

/// #def{{{ @code MK_ERR
  /// #{{{ @func _mkErr
  /**
   * @private
   * @param {!Error} err
   * @param {string} msg
   * @param {string=} method
   * @return {!Error} 
   */
  var _mkErr = _MK_ERR.error;
  /// #}}} @func _mkErr
/// #def}}} @code MK_ERR

/// #def{{{ @code MK_TYPE_ERR
  /// #{{{ @func _mkTypeErr
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
  /// #}}} @func _mkTypeErr
/// #def}}} @code MK_TYPE_ERR

/// #def{{{ @code MK_RANGE_ERR
  /// #{{{ @func _mkRangeErr
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
  /// #}}} @func _mkRangeErr
/// #def}}} @code MK_RANGE_ERR

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
