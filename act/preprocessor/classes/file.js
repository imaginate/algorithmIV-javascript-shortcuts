/**
 * ---------------------------------------------------------------------------
 * FILE CLASS
 * ---------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

'use strict';

/// #{{{ @func loadHelper
/**
 * @private
 * @param {string} name
 * @return {(!Object|!Function)}
 */
var loadHelper = require('./load-helper.js');
/// #}}} @func loadHelper

/// #{{{ @group OBJECT-CONTROL
//////////////////////////////////////////////////////////////////////////////
// OBJECT-CONTROL
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func capObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
 */
var capObject = loadHelper('cap-object');
/// #}}} @func capObject

/// #{{{ @func createObject
/**
 * @private
 * @param {?Object} proto
 * @return {!Object}
 */
var createObject = loadHelper('create-object');
/// #}}} @func createObject

/// #{{{ @func defineProp
/**
 * @private
 * @param {!Object} src
 * @param {string} key
 * @param {!Object} descriptor
 * @return {!Object}
 */
var defineProp = loadHelper('define-property');
/// #}}} @func defineProp

/// #{{{ @func freezeObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
 */
var freezeObject = loadHelper('freeze-object');
/// #}}} @func freezeObject

/// #{{{ @func sealObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
 */
var sealObject = loadHelper('seal-object');
/// #}}} @func sealObject

/// #}}} @group OBJECT-CONTROL

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const DEST_EXT
/**
 * @private
 * @const {!RegExp}
 */
var DEST_EXT = /\.js$/;
/// #}}} @const DEST_EXT

/// #{{{ @const FILE_TYPE_ID
/**
 * @private
 * @const {!Object}
 */
var FILE_TYPE_ID = loadHelper('type-ids').file;
/// #}}} @const FILE_TYPE_ID

/// #{{{ @const IS
/**
 * @private
 * @const {!Object<string, !function>}
 */
var IS = loadHelper('is');
/// #}}} @const IS

/// #}}} @group CONSTANTS

/// #{{{ @group HELPERS
//////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func cleanDirpath
/**
 * @private
 * @param {string} dirpath
 * @return {string}
 */
var cleanDirpath = loadHelper('clean-dirpath');
/// #}}} @func cleanDirpath

/// #{{{ @func cleanPath
/**
 * @private
 * @param {string} path
 * @return {string}
 */
var cleanPath = loadHelper('clean-path');
/// #}}} @func cleanPath

/// #{{{ @func getDirpaths
/**
 * @private
 * @param {string} dirpath
 * @param {?Object|boolean=} opts
 *   If the #opts is a `boolean`, the #opts.deep option is set to its value.
 * @param {?boolean=} opts.deep = `false`
 *   Make a recursive search for valid directory paths.
 * @param {?boolean=} opts.full = `false`
 *   Return absolute directory paths instead of relative directory paths.
 * @param {?boolean=} opts.extend = `false`
 *   When supplying a valid or invalid pattern to check paths against, the
 *   #opts.extend option allows you to supplement instead of overwrite the
 *   default valid or invalid test. If the default value is `null`, this
 *   option does not have any side effects.
 * @param {?RegExp=} opts.valid
 *   An alias for `opts.validDirs`.
 * @param {?RegExp=} opts.invalid
 *   An alias for `opts.invalidDirs`.
 * @param {?RegExp=} opts.validDirs = `null`
 *   A pattern for matching valid directory paths. If #opts.validDirs is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.validDirs pattern. Otherwise (i.e.
 *   if it does not have a forward slash), the path name is tested against the
 *   #opts.validDirs pattern.
 * @param {?RegExp=} opts.invalidDirs = `/^(?:\.git|\.bak|node_modules|vendor|\.?te?mp|\.?logs?|.*~)$/i`
 *   A pattern for matching invalid directory paths. If #opts.invalidDirs is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.invalidDirs pattern. Otherwise
 *   (i.e. if it does not have a forward slash), the path name is tested
 *   against the #opts.invalidDirs pattern.
 * @return {!Array<string>}
 */
var getDirpaths = loadHelper('get-dirpaths');
/// #}}} @func getDirpaths

/// #{{{ @func getFileContent
/**
 * @private
 * @param {string} filepath
 * @param {boolean=} buffer = `false`
 * @return {(!Buffer|string)}
 */
var getFileContent = loadHelper('get-file-content');
/// #}}} @func getFileContent

/// #{{{ @func getFilepaths
/**
 * @private
 * @param {string} dirpath
 * @param {?Object|boolean=} opts
 *   If the #opts is a `boolean`, the #opts.deep option is set to its value.
 * @param {?boolean=} opts.deep = `false`
 *   Make a recursive search for valid files.
 * @param {?boolean=} opts.full = `false`
 *   Return absolute file paths instead of relative file paths.
 * @param {?boolean=} opts.extend = `false`
 *   When supplying a valid or invalid pattern to check paths against, the
 *   #opts.extend option allows you to supplement instead of overwrite the
 *   default valid or invalid test. If the default value is `null`, this
 *   option does not have any side effects.
 * @param {?RegExp=} opts.valid = `null`
 *   A pattern for matching valid file or directory paths. If #opts.valid is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.valid pattern. Otherwise (i.e. if
 *   it does not have a forward slash), the path name is tested against the
 *   #opts.valid pattern.
 * @param {?RegExp=} opts.invalid = `null`
 *   A pattern for matching invalid file or directory paths. If #opts.invalid
 *   is `null`, no check is performed. If it is a `RegExp`, the source
 *   property is checked for a forward slash, `"/"`. If it has a forward
 *   slash, the path tree is tested against the #opts.invalid pattern.
 *   Otherwise (i.e. if it does not have a forward slash), the path name is
 *   tested against the #opts.invalid pattern.
 * @param {?RegExp=} opts.validDirs = `null`
 *   Only used when #opts.deep is `true`. A pattern for matching valid
 *   directory paths. If #opts.validDirs is `null`, no check is performed. If
 *   it is a `RegExp`, the source property is checked for a forward slash,
 *   `"/"`. If it has a forward slash, the path tree is tested against the
 *   #opts.validDirs pattern. Otherwise (i.e. if it does not have a forward
 *   slash), the path name is tested against the #opts.validDirs pattern.
 * @param {?RegExp=} opts.invalidDirs = `/^(?:\.git|\.bak|node_modules|vendor|\.?te?mp|\.?logs?|.*~)$/i`
 *   Only used when #opts.deep is `true`. A pattern for matching invalid
 *   directory paths. If #opts.invalidDirs is `null`, no check is performed.
 *   If it is a `RegExp`, the source property is checked for a forward slash,
 *   `"/"`. If it has a forward slash, the path tree is tested against the
 *   #opts.invalidDirs pattern. Otherwise (i.e. if it does not have a forward
 *   slash), the path name is tested against the #opts.invalidDirs pattern.
 * @param {?RegExp=} opts.validFiles = `null`
 *   A pattern for matching valid file paths. If #opts.validFiles is `null`,
 *   no check is performed. If it is a `RegExp`, the source property is
 *   checked for a forward slash, `"/"`. If it has a forward slash, the path
 *   tree is tested against the #opts.validFiles pattern. Otherwise (i.e. if
 *   it does not have a forward slash), the path name is tested against the
 *   #opts.validFiles pattern.
 * @param {?RegExp=} opts.invalidFiles = `null`
 *   A pattern for matching invalid file paths. If #opts.invalidFiles is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.invalidFiles pattern. Otherwise
 *   (i.e. if it does not have a forward slash), the path name is tested
 *   against the #opts.invalidFiles pattern.
 * @return {!Array<string>}
 */
var getFilepaths = loadHelper('get-filepaths');
/// #}}} @func getFilepaths

/// #{{{ @func getPathName
/**
 * @private
 * @param {string} path
 * @return {string}
 */
var getPathName = loadHelper('get-pathname');
/// #}}} @func getPathName

/// #{{{ @func getPathNode
/**
 * @private
 * @param {(!Dir|!File)} src
 * @param {string} path
 * @return {(?Dir|?File)}
 */
var getPathNode = loadHelper('get-path-node');
/// #}}} @func getPathNode

/// #{{{ @func hasCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasCmd = loadHelper('has-command');
/// #}}} @func hasCmd

/// #{{{ @func hasDirectory
/**
 * @private
 * @param {string} src
 *   The file path to check in.
 * @param {string} path
 *   The directory path to check for.
 * @return {boolean}
 */
var hasDirectory = loadHelper('has-directory');
/// #}}} @func hasDirectory

/// #{{{ @func hasBlkCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasBlkCmd = loadHelper('has-block-command');
/// #}}} @func hasBlkCmd

/// #{{{ @func hasCloseCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasCloseCmd = loadHelper('has-close-command');
/// #}}} @func hasCloseCmd

/// #{{{ @func hasCondCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasCondCmd = loadHelper('has-conditional-command');
/// #}}} @func hasCondCmd

/// #{{{ @func hasDefCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasDefCmd = loadHelper('has-define-command');
/// #}}} @func hasDefCmd

/// #{{{ @func hasInclCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasInclCmd = loadHelper('has-include-command');
/// #}}} @func hasInclCmd

/// #{{{ @func hasInsCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasInsCmd = loadHelper('has-insert-command');
/// #}}} @func hasInsCmd

/// #{{{ @func hasOpenCmd
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasOpenCmd = loadHelper('has-open-command');
/// #}}} @func hasOpenCmd

/// #{{{ @func hasOwnProp
/**
 * @private
 * @param {!Object} src
 * @param {string} prop
 * @return {boolean}
 */
var hasOwnProp = loadHelper('has-own-property');
/// #}}} @func hasOwnProp

/// #{{{ @func isBoolean
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isBoolean = IS.boolean;
/// #}}} @func isBoolean

/// #{{{ @func isBooleanMap
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isBooleanMap = IS.booleanHashMap;
/// #}}} @func isBooleanMap

/// #{{{ @func isDirectory
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
var isDirectory = IS.directory;
/// #}}} @func isDirectory

/// #{{{ @func isDirNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isDirNode = loadHelper('is-directory-node');
/// #}}} @func isDirNode

/// #{{{ @func isFile
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
var isFile = IS.file;
/// #}}} @func isFile

/// #{{{ @func isFileNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFileNode = loadHelper('is-file-node');
/// #}}} @func isFileNode

/// #{{{ @func isFunction
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFunction = IS.func;
/// #}}} @func isFunction

/// #{{{ @func isNull
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNull = IS.nil;
/// #}}} @func isNull

/// #{{{ @func isObject
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isObject = IS.object;
/// #}}} @func isObject

/// #{{{ @func isString
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isString = IS.string;
/// #}}} @func isString

/// #{{{ @func isUndefined
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isUndefined = IS.undefined;
/// #}}} @func isUndefined

/// #{{{ @func ownsCmd
/**
 * @private
 * @param {(!File|!Blk|!Cond)} src
 * @param {(string|!Blk|!Cond|!Incl)} node
 * @return {boolean}
 */
var ownsCmd = loadHelper('owns-command');
/// #}}} @func ownsCmd

/// #{{{ @func resolvePath
/**
 * @private
 * @param {(!Array<string>|...string)=} path
 * @return {string}
 */
var resolvePath = loadHelper('resolve-path');
/// #}}} @func resolvePath

/// #{{{ @func toFile
/**
 * @private
 * @param {(!Buffer|string)} content
 * @param {string} filepath
 * @return {(!Buffer|string)}
 */
var toFile = loadHelper('to-file');
/// #}}} @func toFile

/// #{{{ @func trimPathName
/**
 * @private
 * @param {string} path
 * @return {string}
 */
var trimPathName = loadHelper('trim-pathname');
/// #}}} @func trimPathName

/// #}}} @group HELPERS

/// #{{{ @group METHODS
//////////////////////////////////////////////////////////////////////////////
// METHODS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func mkInsArgs
/**
 * @private
 * @param {!Ins} insert
 * @return {!Array}
 */
function mkInsArgs(insert) {

  /** @type {!Array<!Line>} */
  var lines;
  /** @type {!Array} */
  var args;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  args = [ insert.index, 1 ];
  lines = insert.def.lines;
  len = lines.length;
  i = -1;
  while (++i < len)
    args.push(lines[i]);
  return args;
}
/// #}}} @func mkInsArgs

/// #}}} @group METHODS

/// #{{{ @group CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////
// CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func Blk
/**
 * @private
 * @param {!Line} open
 * @param {!File} file
 * @param {(?Blk|?Cond)=} parent
 * @constructor
 * @struct
 */
var Blk = require('./block.js');
/// #}}} @func Blk

/// #{{{ @func Cond
/**
 * @private
 * @param {!Line} open
 * @param {!File} file
 * @param {(?Blk|?Cond)=} parent
 * @constructor
 * @struct
 */
var Cond = require('./conditional.js');
/// #}}} @func Cond

/// #{{{ @func Def
/**
 * @private
 * @param {!Line} open
 * @param {!File} file
 * @constructor
 * @struct
 */
var Def = require('./define.js');
/// #}}} @func Def

/// #{{{ @func Dir
/**
 * @private
 * @param {string} path
 * @param {?Dir=} parent
 * @constructor
 * @struct
 */
var Dir = require('./directory.js');
/// #}}} @func Dir

/// #{{{ @func File
/**
 * @public
 * @param {string} path
 * @param {!Dir} parent
 * @constructor
 * @struct
 */
function File(path, parent) {

  if ( !isString(path) )
    throw new TypeError('invalid `path` data type\n' +
      '    valid-types: `string`');
  if (!path)
    throw new Error('invalid empty `string` for `path`');
  if ( !isFile(path) )
    throw new Error('invalid readable file path `string` for `path`\n' +
      '    path: `' + path + '`');
  if ( !isDirNode(parent) )
    throw new TypeError('invalid `parent` data type\n' +
      '    valid-types: `!Dir`');

  /// #{{{ @group File-Constants

  /// #{{{ @const PARENT
  /**
   * @private
   * @const {!Dir}
   */
  var PARENT = parent;
  /// #}}} @const PARENT

  /// #{{{ @const PATH
  /**
   * @private
   * @const {string}
   */
  var PATH = resolvePath(path);
  /// #}}} @const PATH

  /// #{{{ @const NAME
  /**
   * @private
   * @const {string}
   */
  var NAME = getPathName(PATH);
  /// #}}} @const NAME

  /// #{{{ @const TREE
  /**
   * @private
   * @const {string}
   */
  var TREE = PARENT.tree + name;
  /// #}}} @const TREE

  /// #}}} @group File-Constants

  /// #{{{ @group File-Members

  /// #{{{ @member type
  /**
   * @public
   * @const {!Object}
   */
  defineProp(this, 'type', {
    'value': FILE_TYPE_ID,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member type

  /// #{{{ @member name
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'name', {
    'value': NAME,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member name

  /// #{{{ @member tree
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'tree', {
    'value': TREE,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member tree

  /// #{{{ @member path
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'path', {
    'value': PATH,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member path

  /// #{{{ @member parent
  /**
   * @public
   * @const {!Dir}
   */
  defineProp(this, 'parent', {
    'value': PARENT,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member parent

  /// #{{{ @member lines
  /**
   * @public
   * @const {!Array<!Line>}
   */
  defineProp(this, 'lines', {
    'value': [],
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member lines

  /// #{{{ @member defs
  /**
   * @public
   * @const {!Object<string, !Def>}
   */
  defineProp(this, 'defs', {
    'value': {},
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member defs

  /// #{{{ @member blks
  /**
   * @public
   * @const {!Object<string, !Blk>}
   */
  defineProp(this, 'blks', {
    'value': {},
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member blks

  /// #{{{ @member conds
  /**
   * @public
   * @const {!Object<string, !Cond>}
   */
  defineProp(this, 'conds', {
    'value': {},
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member conds

  /// #{{{ @member incls
  /**
   * @public
   * @const {!Object<string, !Incl>}
   */
  defineProp(this, 'incls', {
    'value': {},
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member incls

  /// #{{{ @member inserts
  /**
   * @public
   * @const {!Array<!Ins>}
   */
  defineProp(this, 'inserts', {
    'value': [],
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member inserts

  /// #{{{ @member content
  /**
   * @public
   * @const {!Array<(!Line|!Blk|!Cond|!Incl)>}
   */
  defineProp(this, 'content', {
    'value': [],
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member content

  /// #}}} @group File-Members

  capObject(this);
  sealObject(this);
}
/// #}}} @func File

/// #{{{ @func Incl
/**
 * @private
 * @param {!Line} line
 * @param {!File} file
 * @param {(?Blk|?Cond)=} parent
 * @constructor
 * @struct
 */
var Incl = require('./include.js');
/// #}}} @func Incl

/// #{{{ @func Ins
/**
 * @private
 * @param {!Line} line
 * @param {number} index
 * @param {!File} file
 * @constructor
 * @struct
 */
var Ins = require('./insert.js');
/// #}}} @func Ins

/// #{{{ @func Line
/**
 * @private
 * @param {string} text
 * @param {number} linenum
 * @param {!File} file
 * @constructor
 * @struct
 */
var Line = require('./line.js');
/// #}}} @func Line

/// #}}} @group CONSTRUCTORS

/// #{{{ @group FILE-PROTOTYPE
//////////////////////////////////////////////////////////////////////////////
// FILE-PROTOTYPE
//////////////////////////////////////////////////////////////////////////////

File.prototype = createObject(null);
File.prototype.constructor = File;

/// #{{{ @func File.prototype.load
/**
 * @return {void}
 */
File.prototype.load = function load() {

  /** @type {boolean} */
  var passedCmd;
  /** @type {!Array<string>} */
  var textRows;
  /** @type {number} */
  var linenum;
  /** @type {!Array<!Line>} */
  var lines;
  /** @type {!Line} */
  var line;
  /** @type {string} */
  var text;
  /** @type {!Object<string, !Def>} */
  var defs;
  /** @type {?Def} */
  var def;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  passedCmd = false;
  textRows = getFileContent(this.path).split('\n');
  lines = this.lines;
  defs = this.defs;
  def = null;
  len = content.length;
  i = -1;
  while (++i < len) {
    linenum = i + 1;
    text = textRows[i];
    line = new Line(text, linenum, this);
    if (def) {
      if ( !hasCmd(text) )
        def.lines.push(line);
      else if ( hasDefCmd(text) ) {
        if ( !hasCloseCmd(text) )
          throw new Error('invalid `define` within `define`\n' +
            '    linenum: `' + linenum + '`\n' +
            '    file: `' + this.path + '`\n' +
            '    text: `' + text + '`');
        if ( !def.isClose(text) )
          throw new Error('invalid `close` command (must match the `open`)\n' +
            '    linenum: `' + linenum + '`\n' +
            '    file: `' + this.path + '`\n' +
            '    text: `' + text + '`');

        def.setClose(line);
        def = null;
      }
      else if ( hasInsCmd(text) )
        throw new Error('invalid `insert` within `define`\n' +
          '    linenum: `' + linenum + '`\n' +
          '    file: `' + this.path + '`\n' +
          '    text: `' + text + '`');
      else
        def.lines.push(line);
    }
    else if ( !hasCmd(text) )
      lines.push(line);
    else if ( hasDefCmd(text) ) {
      if ( passedCmd || !hasOpenCmd(text) )
        throw new Error('invalid `define` command order\n' +
          '    linenum: `' + linenum + '`\n' +
          '    file: `' + this.path + '`\n' +
          '    text: `' + text + '`');

      def = new Def(line, this);
      defs[def.tag + ':' + def.id] = def;
    }
    else {
      if (!passedCmd)
        passedCmd = true;
      lines.push(line);
    }
  }

  capObject(defs);
  sealObject(defs);
};
/// #}}} @func File.prototype.load

/// #{{{ @func File.prototype.preparse
/**
 * @return {void}
 */
File.prototype.preparse = function preparse() {

  /** @type {!Array<!Ins>} */
  var inserts;
  /** @type {!Ins} */
  var insert;
  /** @type {!Array<!Line>} */
  var lines;
  /** @type {!Line} */
  var line;
  /** @type {!Array} */
  var args;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  inserts = this.inserts;
  lines = this.lines;
  len = lines.length;
  i = -1;
  while (++i < len) {
    line = lines[i];
    if ( hasInsCmd(line.text) ) {
      insert = new Ins(line, i, this);
      inserts.push(insert);
    }
  }

  i = inserts.length;
  while (i--) {
    insert = inserts[i];
    args = mkInsArgs(insert);
    lines.splice.apply(lines, args);
  }

  capObject(lines);
  sealObject(lines);
  capObject(inserts);
  sealObject(inserts);
};
/// #}}} @func File.prototype.preparse

/// #{{{ @func File.prototype.parse
/**
 * @return {void}
 */
File.prototype.parse = function parse() {

  /** @type {!Array<(!Blk|!Cond)>} */
  var stack;
  /** @type {!Array<!Line>} */
  var lines;
  /** @type {!Line} */
  var line;
  /** @type {string} */
  var text;
  /** @type {(!Blk|!Cond)} */
  var last;
  /** @type {(!Blk|!Cond|!Incl)} */
  var cmd;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  stack = [];
  lines = this.lines;
  len = lines.length;
  i = -1;
  while (++i < len) {
    line = lines[i];
    text = line.text;
    if (stack.length) {
      if ( !hasCmd(text) )
        last.content.push(line);
      else if ( hasInclCmd(text) ) {
        cmd = new Incl(line, this, last);

        if ( ownsCmd(last, cmd) )
          throw new Error('duplicate `include` command\n' +
            '    src-linenum: `' + (++i) + '`\n' +
            '    src-file: `' + this.path + '`\n' +
            '    linenum: `' + line.linenum + '`\n' +
            '    file: `' + line.file.path + '`\n' +
            '    text: `' + text + '`');

        last.incls[cmd.tag + ':' + cmd.id] = cmd;
        last.content.push(cmd);
      }
      else if ( hasOpenCmd(text) ) {
        if ( hasCondCmd(text) ) {
          cmd = new Cond(line, this, last);

          if ( ownsCmd(last, cmd) )
            throw new Error('duplicate `conditional` command\n' +
              '    src-linenum: `' + (++i) + '`\n' +
              '    src-file: `' + this.path + '`\n' +
              '    linenum: `' + line.linenum + '`\n' +
              '    file: `' + line.file.path + '`\n' +
              '    text: `' + text + '`');

          last.conds[cmd.tag + ':' + cmd.id] = cmd;
        }
        else {
          cmd = new Blk(line, this, last);

          if ( ownsCmd(last, cmd) )
            throw new Error('duplicate `block` command\n' +
              '    src-linenum: `' + (++i) + '`\n' +
              '    src-file: `' + this.path + '`\n' +
              '    linenum: `' + line.linenum + '`\n' +
              '    file: `' + line.file.path + '`\n' +
              '    text: `' + text + '`');

          last.blks[cmd.tag + ':' + cmd.id] = cmd;
        }
        last.content.push(cmd);
        stack.push(cmd);
        last = cmd;
      }
      else if ( !hasCloseCmd(text) )
        throw new Error('invalid `command` syntax\n' +
          '    src-linenum: `' + (++i) + '`\n' +
          '    src-file: `' + this.path + '`\n' +
          '    linenum: `' + line.linenum + '`\n' +
          '    file: `' + line.file.path + '`\n' +
          '    text: `' + text + '`');
      else if ( !last.isClose(text) )
        throw new Error('invalid `close` command (must match the `open`)\n' +
          '    src-linenum: `' + (++i) + '`\n' +
          '    src-file: `' + this.path + '`\n' +
          '    linenum: `' + line.linenum + '`\n' +
          '    file: `' + line.file.path + '`\n' +
          '    text: `' + text + '`');
      else {
        last.setClose(line);
        stack.pop();
        if (stack.length)
          last = stack[stack.length - 1];
      }
    }
    if ( !hasCmd(text) )
      this.content.push(line);
    else if ( hasInclCmd(text) ) {
      cmd = new Incl(line, this);

      if ( ownsCmd(this, cmd) )
        throw new Error('duplicate `include` command\n' +
          '    src-linenum: `' + (++i) + '`\n' +
          '    src-file: `' + this.path + '`\n' +
          '    linenum: `' + line.linenum + '`\n' +
          '    file: `' + line.file.path + '`\n' +
          '    text: `' + text + '`');

      this.incls[cmd.tag + ':' + cmd.id] = cmd;
      this.content.push(cmd);
    }
    else if ( hasCloseCmd(text) )
      throw new Error('invalid `close` command (no `open` command)\n' +
        '    src-linenum: `' + (++i) + '`\n' +
        '    src-file: `' + this.path + '`\n' +
        '    linenum: `' + line.linenum + '`\n' +
        '    file: `' + line.file.path + '`\n' +
        '    text: `' + text + '`');
    else if ( !hasOpenCmd(text) )
      throw new Error('invalid `command` syntax\n' +
        '    src-linenum: `' + (++i) + '`\n' +
        '    src-file: `' + this.path + '`\n' +
        '    linenum: `' + line.linenum + '`\n' +
        '    file: `' + line.file.path + '`\n' +
        '    text: `' + text + '`');
    else {
      if ( hasCondCmd(text) ) {
        cmd = new Cond(line, this);

        if ( ownsCmd(this, cmd) )
          throw new Error('duplicate `conditional` command\n' +
            '    src-linenum: `' + (++i) + '`\n' +
            '    src-file: `' + this.path + '`\n' +
            '    linenum: `' + line.linenum + '`\n' +
            '    file: `' + line.file.path + '`\n' +
            '    text: `' + text + '`');

        this.conds[cmd.tag + ':' + cmd.id] = cmd;
      }
      else {
        cmd = new Blk(line, this);

        if ( ownsCmd(this, cmd) )
          throw new Error('duplicate `block` command\n' +
            '    src-linenum: `' + (++i) + '`\n' +
            '    src-file: `' + this.path + '`\n' +
            '    linenum: `' + line.linenum + '`\n' +
            '    file: `' + line.file.path + '`\n' +
            '    text: `' + text + '`');

        this.blks[cmd.tag + ':' + cmd.id] = cmd;
      }
      this.content.push(cmd);
      stack.push(cmd);
      last = cmd;
    }
  }

  if (stack.length) {
    if (stack.length === 1)
      throw new Error('unclosed `open` command\n' +
        '    src-file: `' + this.path + '`\n' +
        '    linenum: `' + stack[0].open.linenum + '`\n' +
        '    file: `' + stack[0].open.file.path + '`\n' +
        '    text: `' + stack[0].open.text + '`');

    text = 'unclosed `open` commands\n' +
      '    src-file: `' + this.path + '`';
    len = stack.length;
    i = -1;
    while (++i < len)
      text += '\n    command:\n' +
        '        linenum: `' + stack[i].open.linenum + '`\n' +
        '        file: `' + stack[0].open.file.path + '`\n' +
        '        text: `' + stack[0].open.text + '`';
    throw new Error(text);
  }

  capObject(this.blks);
  capObject(this.conds);
  capObject(this.incls);
  capObject(this.content);
  sealObject(this.blks);
  sealObject(this.conds);
  sealObject(this.incls);
  sealObject(this.content);
};
/// #}}} @func File.prototype.parse

/// #{{{ @func File.prototype.run
/**
 * @param {string} dest
 *   The file path to the destination you want to save the preprocessed
 *   result. The file path may be relative or absolute. If it is a relative
 *   path, it is relative to the `cwd`. The directory path up to the file name
 *   of the resolved #dest path must already exist. If a file exists at the
 *   resolved #dest path, it is overwritten.
 * @param {!Object<string, boolean>} state
 *   The enabled, `true`, or disabled, `false`, state for every conditional
 *   command defined within the `File` instance's *content* `array`. Each
 *   #state `object` key must be *hashed* (i.e. created) by combining each
 *   `Cond` instance's *tag* and *ID* with a colon, `":"`, separating them
 *   (e.g. `"tag:id"`). Every `Cond` instance within the `File` instance must
 *   be defined in the #state or an error will be thrown.
 * @param {(!function(string): string)=} alter
 *   The #alter `function` is optional. If it is defined, it allows you to
 *   provide custom alterations to the preprocessed result before it is saved
 *   to the #dest.
 * @return {string}
 */
File.prototype.run = function run(dest, state, alter) {

  /** @type {string} */
  var result;
  /** @type {string} */
  var pwd;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  if ( !isUndefined(alter) && !isFunction(alter) )
    throw new TypeError('invalid `alter` data type\n' +
      '    valid-types: `(!function(string): string)=`');
  if ( !isObject(state) || !isBooleanMap(state) )
    throw new TypeError('invalid `state` data type\n' +
      '    valid-types: `!Object<string, boolean>`');
  if ( !isString(dest) )
    throw new TypeError('invalid `dest` data type\n' +
      '    valid-types: `string`');

  if (!dest)
    throw new Error('invalid empty `string` for `dest`');
  if ( !DEST_EXT.test(dest) )
    throw new Error('invalid `dest` file extension\n' +
      '    should-match: `' + DEST_EXT.toString() + '`');

  pwd = this.parent.path;
  dest = resolvePath(dest);
  path = trimPathName(dest);

  if ( !isDirectory(path) )
    throw new Error('invalid readable directory path for `dest`\n' +
      '    dest-path: `' + dest + '`\n' +
      '    dir-path: `' + path + '`');
  if ( hasDirectory(dest, pwd) )
    throw new Error('invalid `dest` file path location (' +
      'must NOT be within parent `Dir`)\n' +
      '    dir-path: `' + pwd + '`\n' +
      '    dest-path: `' + dest + '`');

  ////////////////////////////////////////////////////////////////////////////
  // ADD COMPILE LOGIC HERE
  ////////////////////////////////////////////////////////////////////////////

  if ( isFunction(alter) ) {
    result = alter(result);

    if ( !isString(result) )
      throw new TypeError('invalid returned `alter` data type\n' +
        '    valid-types: `string`');
  }

  return toFile(result, dest);
};
/// #}}} @func File.prototype.run

/// #}}} @group FILE-PROTOTYPE

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

module.exports = File;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
