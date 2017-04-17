/**
 * -----------------------------------------------------------------------------
 * VITALS HELPER: own
 * -----------------------------------------------------------------------------
 * @version 4.1.3
 * @see [vitals](https://github.com/imaginate/vitals)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 *
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

'use strict';


////////////////////////////////////////////////////////////////////////////////
// VITALS HELPER: own
////////////////////////////////////////////////////////////////////////////////

var own = (function ownPrivateScope() {

  /**
   * @private
   * @param {*} key
   * @return {boolean}
   */
  var hasOwn = Object.prototype.hasOwnProperty;

  /**
   * @param {(Object|?function)} source
   * @param {*} key
   * @return {boolean}
   */
  function own(source, key) {
    return !!source && hasOwn.call(source, key);
  }

  ////////////////////////////////////////////////////
  // PRIVATE SCOPE END: own
  return own;
})();


module.exports = own;
