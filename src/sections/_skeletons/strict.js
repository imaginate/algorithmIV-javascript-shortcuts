/**
 * -----------------------------------------------------------------------------
 * VITALS JS - NODE VERSION - STRICT METHODS
 * -----------------------------------------------------------------------------
 * @file A JavaScript library of utility methods designed for elegance,
 *   performance, and reliability.
 * @version 2.2.1
 * @see [vitals]{@link https://github.com/imaginate/vitals}
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2015 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Supporting Libraries:
 * @see [are]{@link https://github.com/imaginate/are}
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

var is = require('node-are').is;


// *****************************************************************************
// PRIVATE HELPERS
// *****************************************************************************

// INSERT methods/_helpers/cloneObj.js
// INSERT methods/_helpers/errorAid.js
// INSERT methods/_helpers/inStr.js
// INSERT methods/_helpers/match.js
// INSERT methods/_helpers/merge.js
// INSERT methods/_helpers/own.js
// INSERT methods/_helpers/sliceArr.js
// INSERT methods/_helpers/splitKeys.js


// *****************************************************************************
// SECTION: STRICT METHODS
// *****************************************************************************

// INSERT methods/amend.js
// INSERT methods/create.js
// INSERT methods/freeze.js
// INSERT methods/seal.js


// *****************************************************************************
// SECTION: END
// *****************************************************************************

module.exports = {
  amend:  amend,
  create: create,
  freeze: freeze,
  seal:   seal
};
