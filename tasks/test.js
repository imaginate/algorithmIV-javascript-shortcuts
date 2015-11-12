/**
 * -----------------------------------------------------------------------------
 * MAKE TASK: test
 * -----------------------------------------------------------------------------
 * @file Use `$ node make test` to access this file.
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2015 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';


////////////////////////////////////////////////////////////////////////////////
// DEFINE & EXPORT THE TASK
////////////////////////////////////////////////////////////////////////////////

/** @type {!Task} */
module.exports = newTask('test', 'base', {

  /**
   * @param {string=} options
   */
  base: function base(options) {

    /** @type {string} */
    var tests;

    options = getOptions(options) + '--require ./test/setups/base.js ';

    configLog();

    each(SECTIONS, function(title, section) {
      tests = './test/' + section + '-methods';
      logStart(title);
      runTests(options, tests);
      logFinish(title);
    });

    resetLog();
  },

  /**
   * @param {string} methodName
   */
  method: function method(methodName) {

    /** @type {string} */
    var section;
    /** @type {string} */
    var options;
    /** @type {string} */
    var tests;
    /** @type {string} */
    var title;

    section = getMethodSection(methodName);

    if ( !section ) log.error(
      'Invalid `test.method` Task Call',
      'invalid `methodName` was provided',
      { argMap: true, methodName: methodName }
    );

    options = getOptions() + '--require ./test/setups/base.js ';
    tests = './test/' + section + '/' + methodName;
    title = '`vitals.' + methodName + '`';

    configLog();

    logStart(title);
    runTests(options, tests);
    logFinish(title);

    resetLog();
  },

  /**
   * @param {string} sectionName
   */
  section: function section(sectionName) {

    /** @type {string} */
    var options;
    /** @type {string} */
    var tests;
    /** @type {string} */
    var title;

    sectionName = sectionName.toLowerCase();
    if ( !has(SECTIONS, sectionName) ) log.error(
      'Invalid `test.section` Task Call',
      'invalid `sectionName` was provided',
      { argMap: true, sectionName: sectionName }
    );

    options = getOptions() + '--require ./test/setups/base.js ';
    tests = './test/' + sectionName + '-methods';
    title = SECTIONS[sectionName];

    configLog();

    logStart(title);
    runTests(options, tests);
    logFinish(title);

    resetLog();
  },

  /**
   * @param {string=} options
   */
  full: function full(options) {

    /** @type {string} */
    var tests;

    options = options ? options + '+' : '';
    options += 'reporter=dot';
    options = getOptions(options);

    configLog();

    each(SETUPS, function(sections, name) {
      each(sections, function(section) {
        tests = './test/' + section + '-methods';
        logStart(name);
        runTests(options + '--require ./test/setups/'+ name +'.js ', tests);
        logFinish(name);
      });
    });

    resetLog();
  }
});


////////////////////////////////////////////////////////////////////////////////
// DEFINE PRIVATE HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @type {!Object}
 * @const
 */
var SECTIONS = {
  'js':   'JS Methods'
  //'node': 'Node Methods'
};

/**
 * @type {!Object}
 * @const
 */
var SETUPS = {
  'base': objKeys(SECTIONS),
  'node': objKeys(SECTIONS),
  'org':  [ 'js' ],
  'min':  [ 'js' ]
};

/**
 * @param {string=} options
 * @return {string}
 */
function getOptions(options) {

  /** @type {!Object} */
  var defaults;
  /** @type {string} */
  var result;

  options = is.str(options) ? options.split('+') : [];

  defaults = {
    reporter: 'spec',
    slow:     50,
    timeout:  5000
  };
  result = '--colors ';

  each(options, function(/** string */ option) {
    if ( has(option, '=') ) {
      defaults[ getName(option) ] = getVal(option);
    }
    else {
      result += option && '--' + hyphenate(option) + ' ';
    }
  });

  each(defaults, function(/** * */ val, /** string */ option) {
    result += '--' + hyphenate(option) + ' ' + val + ' ';
  });

  return result + '--globals * --recursive ';
}

/**
 * @param {string} options
 * @param {string} tests
 */
function runTests(options, tests) {
  options = options.replace(/([^ ])$/, '$1 ');
  exec('node ./node_modules/mocha/bin/mocha ' + options + tests);
}

/**
 * @param {string} title
 */
function logStart(title) {
  log.debug('Starting ' + title + ' Tests');
}

/**
 * @param {string} title
 */
function logFinish(title) {
  log.pass('Finished ' + title + ' Tests');
}

/** @type {function} */
function configLog() {
  log.setConfig('pass.spaceAfter', 2);
  log.setConfig('debug.spaceAfter', 0);
}

/** @type {function} */
function resetLog() {
  log.resetConfig();
}

/**
 * @param {string} str
 */
function getName(str) {
  return str && str.replace(/^([a-z]+)(?:[^a-z].*)?$/i, '$1');
}

/**
 * @param {string} str
 */
function getVal(str) {
  return str && str.replace(/^[a-z]+\=(.*)?$/i, '$1');
}

/**
 * @param {string} str
 * @return {string}
 */
function hyphenate(str) {
  return str && str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * @param {string} method
 * @return {?string}
 */
function getMethodSection(method) {

  /** @type {string} */
  var section;

  method += '.js';
  for (section in SECTIONS) {
    if ( has(SECTIONS, section) ) {
      section += '-methods';
      if ( is.file('src/' + section + '/' + method) ) return section;
    }
  }
  return null;
}
