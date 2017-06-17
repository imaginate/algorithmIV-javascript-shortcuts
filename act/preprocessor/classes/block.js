/**
 * ---------------------------------------------------------------------------
 * BLOCK CLASS
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

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const BLK_TYPE_ID
/**
 * @private
 * @const {!Object}
 */
var BLK_TYPE_ID = loadHelper('type-ids').block;
/// #}}} @const BLK_TYPE_ID

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

/// #{{{ @func getIdComponent
/**
 * @private
 * @param {(string|!Line)} text
 * @return {string}
 */
var getIdComponent = loadHelper('get-id-component');
/// #}}} @func getIdComponent

/// #{{{ @func getOwnedCommand
/**
 * @private
 * @param {(!File|!Blk|!Cond)} src
 * @param {(string|!Blk|!Cond|!Incl)} node
 * @return {(?Blk|?Cond|?Incl)}
 */
var getOwnedCommand = loadHelper('get-owned-command');
/// #}}} @func getOwnedCommand

/// #{{{ @func getTagComponent
/**
 * @private
 * @param {(string|!Line)} text
 * @return {string}
 */
var getTagComponent = loadHelper('get-tag-component');
/// #}}} @func getTagComponent

/// #{{{ @func hasBlock
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasBlock = loadHelper('has-block-command');
/// #}}} @func hasBlock

/// #{{{ @func hasClose
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasClose = loadHelper('has-close-command');
/// #}}} @func hasClose

/// #{{{ @func hasCommand
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasCommand = loadHelper('has-command');
/// #}}} @func hasCommand

/// #{{{ @func hasConditional
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasConditional = loadHelper('has-conditional-command');
/// #}}} @func hasConditional

/// #{{{ @func hasInclude
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasInclude = loadHelper('has-include-command');
/// #}}} @func hasInclude

/// #{{{ @func hasOpen
/**
 * @private
 * @param {string} val
 * @return {boolean}
 */
var hasOpen = loadHelper('has-open-command');
/// #}}} @func hasOpen

/// #{{{ @func hasOwnProperty
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasOwnProperty = loadHelper('has-own-property');
/// #}}} @func hasOwnProperty

/// #{{{ @func hasValidBlock
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasValidBlock = loadHelper('has-valid-block');
/// #}}} @func hasValidBlock

/// #{{{ @func isBlkNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isBlkNode = loadHelper('is-block-node');
/// #}}} @func isBlkNode

/// #{{{ @func isCondNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isCondNode = loadHelper('is-conditional-node');
/// #}}} @func isCondNode

/// #{{{ @func isFileNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFileNode = loadHelper('is-file-node');
/// #}}} @func isFileNode

/// #{{{ @func isInclNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isInclNode = loadHelper('is-include-node');
/// #}}} @func isInclNode

/// #{{{ @func isLineNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isLineNode = loadHelper('is-line-node');
/// #}}} @func isLineNode

/// #{{{ @func isNull
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNull = IS.nil;
/// #}}} @func isNull

/// #{{{ @func isNumber
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNumber = IS.number;
/// #}}} @func isNumber

/// #{{{ @func isUndefined
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isUndefined = IS.undefined;
/// #}}} @func isUndefined

/// #{{{ @func isWholeNumber
/**
 * @private
 * @param {number} val
 * @return {boolean}
 */
var isWholeNumber = IS.wholeNumber;
/// #}}} @func isWholeNumber

/// #{{{ @func ownsCommand
/**
 * @private
 * @param {(!File|!Blk|!Cond)} src
 * @param {(string|!Blk|!Cond|!Incl)} node
 * @return {boolean}
 */
var ownsCommand = loadHelper('owns-command');
/// #}}} @func ownsCommand

/// #{{{ @func sealObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
 */
var sealObject = loadHelper('seal-object');
/// #}}} @func sealObject

/// #{{{ @func setError
/**
 * @private
 * @param {(!Error|!RangeError|!ReferenceError|!SyntaxError|!TypeError)} err
 * @param {string} msg
 * @return {(!Error|!RangeError|!ReferenceError|!SyntaxError|!TypeError)}
 */
var setError = loadHelper('set-error');
/// #}}} @func setError

/// #{{{ @func setCmdError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setCmdError = setError.cmd;
/// #}}} @func setCmdError

/// #{{{ @func setEmptyError
/**
 * @private
 * @param {!Error} err
 * @param {string} param
 * @return {!Error}
 */
var setEmptyError = setError.empty;
/// #}}} @func setEmptyError

/// #{{{ @func setIdError
/**
 * @private
 */
var setIdError = setError.id;
/// #}}} @func setIdError

/// #{{{ @func setIndexError
/**
 * @private
 * @param {!RangeError} err
 * @param {string} param
 * @param {number} index
 * @param {number=} min = `0`
 * @return {!RangeError}
 */
var setIndexError = setError.index;
/// #}}} @func setIndexError

/// #{{{ @func setNoCloseError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setNoCloseError = setError.noClose;
/// #}}} @func setNoCloseError

/// #{{{ @func setOwnCmdError
/**
 * @private
 * @param {!ReferenceError} err
 * @param {(!Line|!Blk|!Cond|!Incl)} node1
 * @param {(!Line|!Blk|!Cond|!Incl)} node2
 * @param {(?Blk|?Cond)=} scope = `null`
 * @return {!ReferenceError}
 */
var setOwnCmdError = setError.ownCmd;
/// #}}} @func setOwnCmdError

/// #{{{ @func setTagError
/**
 * @private
 */
var setTagError = setError.tag;
/// #}}} @func setTagError

/// #{{{ @func setTypeError
/**
 * @private
 * @param {!TypeError} err
 * @param {string} param
 * @param {string} types
 * @return {!TypeError}
 */
var setTypeError = setError.type;
/// #}}} @func setTypeError

/// #{{{ @func setWholeError
/**
 * @private
 * @param {!RangeError} err
 * @param {string} param
 * @param {number} value
 * @return {!RangeError}
 */
var setWholeError = setError.whole;
/// #}}} @func setWholeError

/// #}}} @group HELPERS

/// #{{{ @group CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////
// CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func Blk
/**
 * @public
 * @param {!Line} open
 * @param {!File} file
 * @param {(?Blk|?Cond)=} parent
 * @constructor
 * @struct
 */
function Blk(open, file, parent) {

  /// #{{{ @group Verify-Parameters

  if ( !isLineNode(open) )
    throw setTypeError(new TypeError, 'open', '!Line');
  if ( !isFileNode(file) )
    throw setTypeError(new TypeError, 'file', '!File');
  if (!isUndefined(parent)
      && !isNull(parent)
      && !isBlkNode(parent)
      && !isCondNode(parent) )
    throw setTypeError(new TypeError, 'parent', '(?Blk|?Cond)=');

  /// #}}} @group Verify-Parameters

  /// #{{{ @group Set-Constants

  /// #{{{ @const PARENT
  /**
   * @private
   * @const {(?Blk|?Cond)}
   */
  var PARENT = !!parent
    ? parent
    : null;
  /// #}}} @const PARENT

  /// #{{{ @const OPEN
  /**
   * @private
   * @const {!Line}
   */
  var OPEN = open;
  /// #}}} @const OPEN

  /// #{{{ @const FILE
  /**
   * @private
   * @const {!File}
   */
  var FILE = file;
  /// #}}} @const FILE

  /// #{{{ @const TEXT
  /**
   * @private
   * @const {string}
   */
  var TEXT = OPEN.text;
  /// #}}} @const TEXT

  /// #{{{ @const TAG
  /**
   * @private
   * @const {string}
   */
  var TAG = getTagComponent(TEXT);
  /// #}}} @const TAG

  /// #{{{ @const ID
  /**
   * @private
   * @const {string}
   */
  var ID = getIdComponent(TEXT);
  /// #}}} @const ID

  /// #{{{ @const KEY
  /**
   * @private
   * @const {string}
   */
  var KEY = TAG + ':' + ID;
  /// #}}} @const KEY

  /// #}}} @group Set-Constants

  /// #{{{ @group Verify-Syntax

  if (!TAG)
    throw setTagError(new SyntaxError, OPEN);
  if (!ID)
    throw setIdError(new SyntaxError, OPEN);
  if ( !hasValidBlock(TEXT) )
    throw setCmdError(new SyntaxError, OPEN);

  /// #}}} @group Verify-Syntax

  /// #{{{ @group Block-Members

  /// #{{{ @member type
  /**
   * @public
   * @const {!Object}
   */
  defineProp(this, 'type', {
    'value': BLK_TYPE_ID,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member type

  /// #{{{ @member tag
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'tag', {
    'value': TAG,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member tag

  /// #{{{ @member id
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'id', {
    'value': ID,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member id

  /// #{{{ @member key
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'key', {
    'value': KEY,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member key

  /// #{{{ @member file
  /**
   * @public
   * @const {!File}
   */
  defineProp(this, 'file', {
    'value': FILE,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member file

  /// #{{{ @member open
  /**
   * @public
   * @const {!Line}
   */
  defineProp(this, 'open', {
    'value': OPEN,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member open

  /// #{{{ @member close
  /**
   * @public
   * @type {?Line}
   */
  defineProp(this, 'close', {
    'value': null,
    'writable': true,
    'enumerable': true,
    'configurable': true
  });
  /// #}}} @member close

  /// #{{{ @member parent
  /**
   * @public
   * @const {(?Blk|?Cond)}
   */
  defineProp(this, 'parent', {
    'value': PARENT,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member parent

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

  /// #}}} @group Block-Members

  capObject(this);
  sealObject(this);
}
/// #}}} @func Blk

/// #}}} @group CONSTRUCTORS

/// #{{{ @group PROTOTYPE
//////////////////////////////////////////////////////////////////////////////
// PROTOTYPE
//////////////////////////////////////////////////////////////////////////////

Blk.prototype = createObject(null);
Blk.prototype.constructor = Blk;

/// #{{{ @func Blk.prototype.parse
/**
 * @param {!Array<!Line>} lines
 * @param {number} i
 * @param {!File} file
 * @return {number}
 */
Blk.prototype.parse = function parse(lines, i, file) {

  /** @type {!Array<(!Line|!Blk|!Cond|!Incl)>} */
  var content;
  /** @type {!Object<string, !Incl>} */
  var incls;
  /** @type {!Object<string, !Cond>} */
  var conds;
  /** @type {!Object<string, !Blk>} */
  var blks;
  /** @type {!Line} */
  var line;
  /** @type {string} */
  var text;
  /** @type {(!Blk|!Cond|!Incl)} */
  var cmd;
  /** @type {(?Line|?Blk|?Cond|?Incl)} */
  var own;
  /** @type {number} */
  var len;

  content = this.content;
  incls = this.incls;
  conds = this.conds;
  blks = this.blks;

  len = lines.length;
  while (++i < len) {
    line = lines[i];
    text = line.text;
    if ( !hasCommand(text) )
      content.push(line);
    else if ( hasInclude(text) ) {
      cmd = new Incl(line, file, this);
      own = getOwnedCommand(this, cmd.key);

      if (own)
        throw setOwnCmdError(new ReferenceError, own, line, this);

      incls[cmd.key] = cmd;
      content.push(cmd);
    }
    else if ( hasOpen(text) ) {
      if ( hasConditional(text) ) {
        cmd = new Cond(line, file, this);
        own = getOwnedCommand(this, cmd.key);

        if (own)
          throw setOwnCmdError(new ReferenceError, own, line, this);

        conds[cmd.key] = cmd;
      }
      else {
        cmd = new Blk(line, file, this);
        own = getOwnedCommand(this, cmd.key);

        if (own)
          throw setOwnCmdError(new ReferenceError, own, line, this);

        blks[cmd.key] = cmd;
      }
      content.push(cmd);
      i = cmd.parse(lines, i, file);
    }
    else if ( !hasClose(text) )
      throw setCmdError(new SyntaxError, line);
    else {
      this.setClose(line);
      break;
    }
  }

  if (!this.close)
    throw setNoCloseError(new SyntaxError, this.open);

  freezeObject(blks);
  freezeObject(conds);
  freezeObject(incls);
  freezeObject(content);

  return i;
};
/// #}}} @func Blk.prototype.parse

/// #{{{ @func Blk.prototype.run
/**
 * @param {!Object<string, boolean>} state
 * @param {!Object<string, ?Incl>} inclFiles
 * @param {!Object<string, !Incl>} inclNodes
 * @return {string}
 */
Blk.prototype.run = function run(state, inclFiles, inclNodes) {

  /** @type {!Array<(!Line|!Blk|!Cond|!Incl)>} */
  var content;
  /** @type {string} */
  var result;
  /** @type {(!Line|!Blk|!Cond|!Incl)} */
  var node;
  /** @type {string} */
  var key;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  if ( !isObject(state) || !isBooleanMap(state) )
    throw setTypeError(new TypeError, 'state', '!Object<string, boolean>');
  if ( !isObject(inclFiles) )
    throw setTypeError(new TypeError, 'inclFiles', '!Object<string, ?Incl>');
  if ( !isObject(inclNodes) )
    throw setTypeError(new TypeError, 'inclNodes', '!Object<string, !Incl>');

  content = this.content;
  result = '';
  len = content.length;
  i = -1;
  while (++i < len) {
    node = content[i];
    if ( isLineNode(node) )
      result += node.text + '\n';
    else if ( isInclNode(node) ) {
      key = node.file.tree + '|' + node.key;

      if ( hasOwnProperty(inclNodes, key) )
        throw new Error('duplicate `include` command\n' +
          '    linenum: `' + inclNodes[key].line.linenum + '`\n' +
          '    file: `' + inclNodes[key].line.file.path + '`\n' +
          '    text: `' + inclNodes[key].line.text + '`\n' +
          '    linenum: `' + node.line.linenum + '`\n' +
          '    file: `' + node.line.file.path + '`\n' +
          '    text: `' + node.line.text + '`');
      if ( hasOwnProperty(inclFiles, node.cmd.file.tree) )
        throw new Error('invalid `include` call to parent file\n' +
          '    src-file: `' + node.file.path + '`\n' +
          '    linenum: `' + node.line.linenum + '`\n' +
          '    file: `' + node.line.file.path + '`\n' +
          '    text: `' + node.line.text + '`');

      defineProp(inclNodes, key, {
        'value': node,
        'writable': false,
        'enumerable': true,
        'configurable': false
      });
    }
    else if ( isCondNode(node) ) {

      if ( !hasOwnProperty(state, node.key) )
        throw new Error('undefined `conditional` in `state`\n' +
          '    missing-key: `"' + key + '"`');

      if (state[node.key]) {
        if (node.action)
          result += node.run(state, inclFiles, inclNodes);
      }
      else if (!node.action)
        result += node.run(state, inclFiles, inclNodes);
    }
    else {
      result += node.run(state, inclFiles, inclNodes);
    }
  }

  return result;
};
/// #}}} @func Blk.prototype.run

/// #{{{ @func Blk.prototype.setClose
/**
 * @param {!Line} close
 * @return {void}
 */
Blk.prototype.setClose = function setClose(close) {

  /** @type {!Array<(!Line|!Blk|!Cond|!Incl)>} */
  var content;
  /** @type {string} */
  var result;
  /** @type {(!Line|!Blk|!Cond|!Incl)} */
  var node;
  /** @type {string} */
  var key;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  if ( !isLineNode(close) )
    throw setTypeError(new TypeError, 'close', '!Line');

};
/// #}}} @func Blk.prototype.setClose

/// #}}} @group PROTOTYPE

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

module.exports = Blk;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
