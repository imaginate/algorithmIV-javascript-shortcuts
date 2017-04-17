/**
 * -----------------------------------------------------------------------------
 * VITALS HELPER: escape
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
// VITALS HELPER: escape
////////////////////////////////////////////////////////////////////////////////

var escape = (function escapePrivateScope() {

  /**
   * @private
   * @type {!RegExp}
   * @const
   */
  var CHARS = /[\\^$.*+?|(){}[\]]/g;

  /**
   * @param {string} source
   * @return {string}
   */
  function escape(source) {
    return source.replace(CHARS, '\\$&');
  }

  ////////////////////////////////////////////////////
  // PRIVATE SCOPE END: escape
  return escape;
})();


module.exports = escape;
