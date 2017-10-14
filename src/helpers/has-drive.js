/**
 * ---------------------------------------------------------------------------
 * $HAS-DRIVE HELPER
 * ---------------------------------------------------------------------------
 * @version 5.0.0
 * @see [vitals](https://github.com/imaginate/vitals)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

/// #{{{ @helper $hasDrive
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
function $hasDrive(path) {
  return $hasWinDrive(path) || $hasUncDrive(path);
}
/// #}}} @helper $hasDrive

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
