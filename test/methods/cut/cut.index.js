/**
 * -----------------------------------------------------------------------------
 * TEST - VITALS - JS METHOD - CUT.INDEX
 * -----------------------------------------------------------------------------
 * @see [vitals.cut]{@link https://github.com/imaginate/vitals/wiki/vitals.cut}
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2016 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Supporting Libraries:
 * @see [are]{@link https://github.com/imaginate/are}
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

describe('vitals.cut.index (section:base)', function() {
  var title;

  title = titleStr('basic', 'should splice array indexes from index to toIndex');
  describe(title, function() {

    // newArr()= [ "a", "b", "c", 1, 2, 3, "a1", "b2", "c3" ]

    title = callStr('<array>', 1);
    it(title, function() {
      var arr = vitals.cut.i(newArr(), 1);
      var be = [ 'a', 'c', 1, 2, 3, 'a1', 'b2', 'c3' ];
      each(be, function(val, i) {
        assert(arr[i] === val);
      });
    });

    title = callStr('<array>', -1);
    it(title, function() {
      var arr = vitals.cut.i(newArr(), -1);
      var be = [ 'a', 'b', 'c', 1, 2, 3, 'a1', 'b2' ];
      each(be, function(val, i) {
        assert(arr[i] === val);
      });
    });

    title = callStr('<array>', 1, 3);
    it(title, function() {
      var arr = vitals.cut.i(newArr(), 1, 3);
      var be = [ 'a', 1, 2, 3, 'a1', 'b2', 'c3' ];
      each(be, function(val, i) {
        assert(arr[i] === val);
      });
    });

    title = callStr('<array>', 1, -3);
    it(title, function() {
      var arr = vitals.cut.i(newArr(), 1, -3);
      var be = [ 'a', 'a1', 'b2', 'c3' ];
      each(be, function(val, i) {
        assert(arr[i] === val);
      });
    });

    title = callStr('<array>', -1, -3);
    it(title, function() {
      var arr = vitals.cut.i(newArr(), -1, -3);
      var be = [ 'a', 'b', 'c', 1, 2, 3, 'a1', 'b2', 'c3' ];
      each(be, function(val, i) {
        assert(arr[i] === val);
      });
    });

    title = callStr('<array>', -3, -1);
    it(title, function() {
      var arr = vitals.cut.i(newArr(), -3, -1);
      var be = [ 'a', 'b', 'c', 1, 2, 3, 'c3' ];
      each(be, function(val, i) {
        assert(arr[i] === val);
      });
    });

  });


  title = titleStr('error', 'should throw an error');
  describe(title, function() {

    title = callStr([]);
    it(title, function() {
      assert.throws(function() {
        vitals.cut.i([]);
      });
    });

    title = callStr([], 'a');
    it(title, function() {
      assert.throws(function() {
        vitals.cut.i([], 'a');
      });
    });

    title = callStr({}, 1);
    it(title, function() {
      assert.throws(function() {
        vitals.cut.i({}, 1);
      });
    });

    title = callStr(null, 1);
    it(title, function() {
      assert.throws(function() {
        vitals.cut.i(null, 1);
      });
    });

  });

});

////////////////////////////////////////////////////////////////////////////////
// PRIVATE HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @param {string} section
 * @param {string} shouldMsg
 * @return {string}
 */
function titleStr(section, shouldMsg) {
  return testTitle(section, shouldMsg, 1);
}

/**
 * @private
 * @param {...*} args
 * @return {string}
 */
function callStr() {
  return testCall('cut.i', arguments, 3);
}

/**
 * @private
 * @return {!Array}
 */
function newArr() {
  return [ 'a', 'b', 'c', 1, 2, 3, 'a1', 'b2', 'c3' ];
}
