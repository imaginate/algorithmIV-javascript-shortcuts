/**
 * ---------------------------------------------------------------------------
 * VITALS.AMEND UNIT TESTS
 * ---------------------------------------------------------------------------
 * @method vitals.amend
 * @submethod main
 * @super amend
 * @section strict
 * @section all
 * @build browser
 * @build node
 *
 * @see [vitals.amend](https://github.com/imaginate/vitals/wiki/vitals.amend)
 *
 * @author Adam Smith <adam@imaginate.life> (http://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

/// #{{{ @group HELPERS
//////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func loadHelper
/**
 * @private
 * @param {string} name
 * @return {(!Object|!Function)}
 */
var loadHelper = global.VITALS_TEST.loadHelper;
/// #}}} @func loadHelper

/// #{{{ @func assert
/**
 * @private
 * @param {boolean} result
 * @return {void}
 */
var assert = require('assert');
/// #}}} @func assert

/// #{{{ @func freeze
/**
 * @private
 * @param {(?Object|?Function)} src
 * @param {boolean=} deep = `false`
 * @return {?Object}
 */
var freeze = loadHelper('freeze-object');
/// #}}} @func freeze

/// #{{{ @func hasEnum
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasEnum = loadHelper('has-enum-property');
/// #}}} @func hasEnum

/// #{{{ @func hasOwn
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasOwn = loadHelper('has-own-property');
/// #}}} @func hasOwn

/// #{{{ @func hasOwnEnum
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasOwnEnum = loadHelper('has-own-enum-property');
/// #}}} @func hasOwnEnum

/// #{{{ @func hasOwnNoEnum
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
function hasOwnNoEnum(src, key) {
  return hasOwn(src, key) && !hasEnum(src, key);
}
/// #}}} @func hasOwnNoEnum

/// #{{{ @func incrementProps
/**
 * @private
 * @param {!Object} src
 * @param {number} amount
 * @return {!Object}
 */
function incrementProps(src, amount) {

  if ('a' in src) {
    src.a += amount;
  }
  if ('b' in src) {
    src.b += amount;
  }
  if ('c' in src) {
    src.c += amount;
  }

  return src;
}
/// #}}} @func incrementProps

/// #{{{ @const is
/**
 * @private
 * @const {!Object<string, !function>}
 */
var is = loadHelper('is');
/// #}}} @const is

/// #{{{ @func setter
/**
 * @private
 * @param {number} newVal
 * @param {number=} oldVal = `1`
 * @return {number}
 */
function setter(newVal, oldVal) {

  if ( is.void(oldVal) ) {
    oldVal = 1;
  }

  return newVal + oldVal;
}
/// #}}} @func setter

/// #{{{ @func throws
/**
 * @private
 * @param {!function} action
 * @return {void}
 */
var throws = loadHelper('throws-error');
/// #}}} @func throws

/// #{{{ @const vitals
/**
 * @private
 * @const {(!Object|!Function)}
 */
var vitals = global.VITALS_TEST.VITALS;
/// #}}} @const vitals

/// #}}} @group HELPERS

/// #{{{ @group TESTS
//////////////////////////////////////////////////////////////////////////////
// TESTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @suite amend
method('amend', function amendTests() {

  /// #{{{ @tests A
  should('A', 'should add new properties to an object', function amendTestsA() {

    /// #{{{ @test A1
    test('A1', [
      {},
      { 'a': 1, 'b': 2, 'c': 3 }
    ], function amendTestA1() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': 1,
        'b': 2,
        'c': 3
      });

      result = vitals.amend(obj, props);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);
      assert(result.c === 3);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);
      assert(result.c === 4);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );
      assert( hasOwnEnum(result, 'c') );
    });
    /// #}}} @test A1

    /// #{{{ @test A2
    test('A2', [
      {},
      [ 'a', 'b', 'c' ],
      5
    ], function amendTestA2() {

      /** @type {!Object} */
      var result;
      /** @type {!Array} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze([
        'a',
        'b',
        'c'
      ]);

      result = vitals.amend(obj, props, 5);

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);
      assert(result.c === 5);

      incrementProps(result, 1);

      assert(result.a === 6);
      assert(result.b === 6);
      assert(result.c === 6);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );
      assert( hasOwnEnum(result, 'c') );
    });
    /// #}}} @test A2

    /// #{{{ @test A3
    test('A3', [
      {},
      'a,b,c',
      5
    ], function amendTestA3() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var obj;

      obj = {};

      result = vitals.amend(obj, 'a,b,c', 5);

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);
      assert(result.c === 5);

      incrementProps(result, 1);

      assert(result.a === 6);
      assert(result.b === 6);
      assert(result.c === 6);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );
      assert( hasOwnEnum(result, 'c') );
    });
    /// #}}} @test A3

    /// #{{{ @test A4
    test('A4', [
      {},
      '<descriptors>'
    ], function amendTestA4() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': false
        },
        'b': {
          'value': 2,
          'enumerable': false
        }
      });

      result = vitals.amend(obj, props);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);

      assert( hasOwnNoEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
    });
    /// #}}} @test A4

  });
  /// #}}} @tests A

  /// #{{{ @tests B
  should('B', 'add new properties to an object with valid descriptors', function amendTestsB() {

    /// #{{{ @test B1
    test('B1', [
      {},
      { 'a': 1, 'b': 2, 'c': 3 },
      '<descriptor>'
    ], function amendTestB1() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': 1,
        'b': 2,
        'c': 3
      });
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, props, desc);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);
      assert(result.c === 3);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);
      assert(result.c === 4);

      assert( hasOwnNoEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
      assert( hasOwnNoEnum(result, 'c') );
    });
    /// #}}} @test B1

    /// #{{{ @test B2
    test('B2', [
      {},
      [ 'a', 'b' ],
      5,
      '<descriptor>'
    ], function amendTestB2() {

      /** @type {!Object} */
      var result;
      /** @type {!Array} */
      var props;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze([
        'a',
        'b'
      ]);
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, props, 5, desc);

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);

      incrementProps(result, 1);

      assert(result.a === 6);
      assert(result.b === 6);

      assert( hasOwnNoEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
    });
    /// #}}} @test B2

    /// #{{{ @test B3
    test('B3', [
      {},
      'a,b',
      5,
      '<descriptor>'
    ], function amendTestB3() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, 'a,b', 5, desc);

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);

      incrementProps(result, 1);

      assert(result.a === 6);
      assert(result.b === 6);

      assert( hasOwnNoEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
    });
    /// #}}} @test B3

    /// #{{{ @test B4
    test('B4', [
      {},
      '<varied props>',
      '<descriptor>'
    ], function amendTestB4() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': true
        },
        'b': 2
      });
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, props, desc);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
    });
    /// #}}} @test B4

  });
  /// #}}} @tests B

  /// #{{{ @tests C
  should('C', 'add new properties to an object with a strong type check', function amendTestsC() {

    /// #{{{ @test C1
    test('C1', [
      {},
      { 'a': 1, 'b': 2 },
      'number'
    ], function amendTestC1() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': 1,
        'b': 2
      });

      result = vitals.amend(obj, props, 'number');

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );

      throws.setter(function() {
        result.a = 'string';
      });
      throws.setter(function() {
        result.b = 'string';
      });

      assert(result.a === 2);
      assert(result.b === 3);
    });
    /// #}}} @test C1

    /// #{{{ @test C2
    test('C2', [
      {},
      [ 'a', 'b' ],
      5,
      'number'
    ], function amendTestC2() {

      /** @type {!Object} */
      var result;
      /** @type {!Array} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze([
        'a',
        'b'
      ]);

      result = vitals.amend(obj, props, 5, 'number');

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);

      incrementProps(result, 1);

      assert(result.a === 6);
      assert(result.b === 6);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );

      throws.setter(function() {
        result.a = 'string';
      });
      throws.setter(function() {
        result.b = 'string';
      });

      assert(result.a === 6);
      assert(result.b === 6);
    });
    /// #}}} @test C2

    /// #{{{ @test C3
    test('C3', [
      {},
      'a,b',
      5,
      'number'
    ], function amendTestC3() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var obj;

      obj = {};

      result = vitals.amend(obj, 'a,b', 5, 'number');

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);

      incrementProps(result, 1);

      assert(result.a === 6);
      assert(result.b === 6);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );

      throws.setter(function() {
        result.a = 'string';
      });
      throws.setter(function() {
        result.b = 'string';
      });

      assert(result.a === 6);
      assert(result.b === 6);
    });
    /// #}}} @test C3

    /// #{{{ @test C4
    test('C4', [
      {},
      '<descriptors>',
      'number'
    ], function amendTestC4() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': true
        },
        'b': {
          'value': 2,
          'enumerable': false
        }
      });

      result = vitals.amend(obj, props, 'number');

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );

      throws.setter(function() {
        result.a = 'string';
      });
      throws.setter(function() {
        result.b = 'string';
      });

      assert(result.a === 2);
      assert(result.b === 3);
    });
    /// #}}} @test C4

    /// #{{{ @test C5
    test('C5', [
      {},
      '<descriptors>',
      '<descriptor>',
      'number'
    ], function amendTestC5() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': true
        },
        'b': {
          'value': 2
        }
      });
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, props, desc, 'number');

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 2);
      assert(result.b === 3);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );

      throws.setter(function() {
        result.a = 'string';
      });
      throws.setter(function() {
        result.b = 'string';
      });

      assert(result.a === 2);
      assert(result.b === 3);
    });
    /// #}}} @test C5

  });
  /// #}}} @tests C

  /// #{{{ @tests D
  should('D', 'add new properties to an object with a valid setter', function amendTestsD() {

    /// #{{{ @test D1
    test('D1', [
      {},
      { 'a': 1, 'b': 2 },
      '<setter>'
    ], function amendTestD1() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': 1,
        'b': 2
      });

      result = vitals.amend(obj, props, setter);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 3);
      assert(result.b === 5);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );
    });
    /// #}}} @test D1

    /// #{{{ @test D2
    test('D2', [
      {},
      [ 'a', 'b' ],
      5,
      '<setter>'
    ], function amendTestD2() {

      /** @type {!Object} */
      var result;
      /** @type {!Array} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze([
        'a',
        'b'
      ]);

      result = vitals.amend(obj, props, 5, setter);

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);

      incrementProps(result, 1);

      assert(result.a === 11);
      assert(result.b === 11);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );
    });
    /// #}}} @test D2

    /// #{{{ @test D3
    test('D3', [
      {},
      'a,b',
      5,
      '<setter>'
    ], function amendTestD3() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var obj;

      obj = {};

      result = vitals.amend(obj, 'a,b', 5, setter);

      assert(result === obj);

      assert(result.a === 5);
      assert(result.b === 5);

      incrementProps(result, 1);

      assert(result.a === 11);
      assert(result.b === 11);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnEnum(result, 'b') );
    });
    /// #}}} @test D3

    /// #{{{ @test D4
    test('D4', [
      {},
      '<descriptors>',
      '<setter>'
    ], function amendTestD4() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': false
        },
        'b': {
          'value': 2,
          'enumerable': false
        }
      }, true);

      result = vitals.amend(obj, props, setter);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 3);
      assert(result.b === 5);

      assert( hasOwnNoEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
    });
    /// #}}} @test D4

    /// #{{{ @test D5
    test('D5', [
      {}, '<descriptors>', '<descriptor>', '<setter>'
    ], function amendTestD5() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': true
        },
        'b': {
          'value': 2,
          'enumerable': false
        }
      }, true);
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, props, desc, setter);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 3);
      assert(result.b === 5);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );
    });
    /// #}}} @test D5

    /// #{{{ @test D6
    test('D6', [
      {},
      '<descriptors>',
      '<descriptor>',
      'number',
      '<setter>'
    ], function amendTestD6() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var props;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {};
      props = freeze({
        'a': {
          'value': 1,
          'enumerable': true
        },
        'b': {
          'value': 2,
          'enumerable': false
        }
      }, true);
      desc = freeze({
        'enumerable': false
      });

      result = vitals.amend(obj, props, desc, 'number', setter);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);

      incrementProps(result, 1);

      assert(result.a === 3);
      assert(result.b === 5);

      assert( hasOwnEnum(result, 'a') );
      assert( hasOwnNoEnum(result, 'b') );

      throws.setter(function() {
        result.a = 'string';
      });
      throws.setter(function() {
        result.b = 'string';
      });

      assert(result.a === 3);
      assert(result.b === 5);
    });
    /// #}}} @test D6

  });
  /// #}}} @tests D

  /// #{{{ @tests E
  should('E', 'should throw a vitals error', function amendTestsE() {

    /// #{{{ @test E1
    test('E1', [], function amendTestE1() {

      throws(function() {
        vitals.amend();
      });

    });
    /// #}}} @test E1

    /// #{{{ @test E2
    test('E2', [
      'string',
      'a,b,c',
      5
    ], function amendTestE2() {

      throws.type(function() {
        vitals.amend('string', 'a,b,c', 5);
      });

    });
    /// #}}} @test E2

    /// #{{{ @test E3
    test('E3', [
      {},
      5,
      5
    ], function amendTestE3() {

      throws.type(function() {
        vitals.amend({}, 5, 5);
      });

    });
    /// #}}} @test E3

    /// #{{{ @test E4
    test('E4', [
      {},
      'a,b,c'
    ], function amendTestE4() {

      throws(function() {
        vitals.amend({}, 'a,b,c');
      });

    });
    /// #}}} @test E4

    /// #{{{ @test E5
    test('E5', [
      {},
      'a,b,c',
      5,
      'string'
    ], function amendTestE5() {

      throws(function() {
        vitals.amend({}, 'a,b,c', 5, 'string');
      });

    });
    /// #}}} @test E5

    /// #{{{ @test E6
    test('E6', [
      {},
      'a,b,c',
      5,
      'number',
      {}
    ], function amendTestE6() {

      throws.type(function() {
        vitals.amend({}, 'a,b,c', 5, 'number', {});
      });

    });
    /// #}}} @test E6

  });
  /// #}}} @tests E

});
/// #}}} @suite amend

/// #}}} @group TESTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
