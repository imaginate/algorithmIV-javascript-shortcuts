/**
 * -----------------------------------------------------------------------------
 * VITALS TESTS - COPY.DIRECTORY
 * -----------------------------------------------------------------------------
 * @see [vitals.copy]{@link https://github.com/imaginate/vitals/blob/master/src/methods/fs/copy.js}
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

if (BROWSER_TESTS) return;

var fs = require('fs');

describe('vitals.copy.directory (section:fs)', function() {
  var title;
  var fakes = [ 'fake1.js', 'fake2.js', 'fake3.js' ];

  title = 'should copy files from dir to dir';
  title = titleStr('basic', title);
  describe(title, function() {

    before('setup dummy dirs and files', function() {
      mkDummy({ 'root': fakes, 'subdir1': null });
    });

    title = callStr('', 'subdir1');
    it(title, function() {
      var src = addBase('');
      var dest = addBase('subdir1');
      var files = vitals.copy.dir(src, dest);
      assert( is.arr(files) );
      assert( files.length === 3 );
      each(fakes, function(fake) {
        assert( has(files, fake) );
        fake = fuse(dest, '/', fake);
        assert( is.file(fake) );
        fake = fs.readFileSync(fake, 'utf8');
        assert( fake === DUMMY.content );
      });
    });

    title = callStr('', 'subdir2/');
    it(title, function() {
      var src = addBase('');
      var dest = addBase('subdir2/');
      var files = vitals.copy.dir(src, dest);
      assert( is.arr(files) );
      assert( files.length === 3 );
      each(fakes, function(fake) {
        assert( has(files, fake) );
        fake = fuse(dest, fake);
        assert( is.file(fake) );
        fake = fs.readFileSync(fake, 'utf8');
        assert( fake === DUMMY.content );
      });
    });

    title = callStr('', 'subdir3/', true);
    it(title, function() {
      var src = addBase('');
      var dest = addBase('subdir3/');
      var dirs = [ '', 'subdir1/', 'subdir2/' ];
      var files = vitals.copy.dir(src, dest, true);
      assert( is.arr(files) );
      assert( files.length === 9 );
      each(dirs, function(dir) {
        each(fakes, function(fake) {
          fake = fuse(dir, fake);
          assert( has(files, fake) );
          fake = fuse(dest, fake);
          assert( is.file(fake) );
          fake = fs.readFileSync(fake, 'utf8');
          assert( fake === DUMMY.content );
        });
      });
    });

    after('clean up dummy dirs and files', rmDummy);

  });

  title = titleStr('error', 'should throw an error');
  describe(title, function() {

    before('setup dummy dirs and files', function() {
      mkDummy({ 'root': fakes, 'subdir1': null });
    });

    title = callStr();
    it(title, function() {
      assert.throws(function() {
        vitals.copy.dir();
      });
    });

    title = callStr('');
    it(title, function() {
      assert.throws(function() {
        var src = addBase('');
        vitals.copy.dir(src);
      });
    });

    title = callStr('', 'invalid');
    it(title, function() {
      assert.throws(function() {
        var src = addBase('');
        var dest = addBase('invalid');
        vitals.copy.dir(src, dest);
      });
    });

    title = callStr('invalid', 'subdir1');
    it(title, function() {
      assert.throws(function() {
        var src = addBase('invalid');
        var dest = addBase('subdir1');
        vitals.copy.dir(src, dest);
      });
    });

    after('clean up dummy dirs and files', rmDummy);

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
function callStr(args) {
  args = remap(arguments, function(val, i) {
    return i < 2 ? addBase(val) : val;
  });
  return testCall('copy.dir', args, 3);
}

/**
 * @private
 * @param {string=} dir
 * @return {string}
 */
function addBase(dir) {

  /** @type {string} */
  var base;

  base = cut(DUMMY.base, /\/$/);
  return dir ? fuse(base, '/', dir) : base;
}
