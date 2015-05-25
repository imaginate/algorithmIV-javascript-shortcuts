  /**
   * ---------------------------------------------------
   * Public Method (utilsModuleAPI.getElemByClass)
   * ---------------------------------------------------
   * @desc A shortcut for the native DOM method -
   *   [DOM Node].getElementsByClassName[ [index] ].
   * @param {string} classname - The class name of the element to select.
   * @param {number=} index - The index of the array of found elements to
   *   select. The default is 0.
   * @param {!(Document|Element)=} root - Limit the selections to this element's
   *   children. The default is document or the element set with
   *   aIV.utils.set({ getElemByClassRoot: [DOM Node] }).
   * @return {!HTMLElement} The selected DOM element.
   */
  utilsModuleAPI.getElemByClass = function(classname, index, root) {

    /** @type {string} */
    var errorMsg;
    /** @type {!Array<HTMLElement>} */
    var elems;
    /** @type {HTMLElement} */
    var elem;

    if (!classname || typeof classname !== 'string') {
      errorMsg = 'An aIV.utils.getElemByClass call received an invalid class ';
      errorMsg += 'name parameter.';
      throw new TypeError(errorMsg);
    }

    if (typeof index !== 'number' || index < -1) {
      index = 0;
    }
    else {
      index = Math.floor(index);
    }

    if (!root || typeof root !== 'object' ||
        (!(root instanceof Element) && !(root instanceof Document))) {
      root = defaults.getElemByClassRoot;
    }

    elems = ( (!!root.getElementsByClassName) ?
      root.getElementsByClassName(classname)
      : DomHelpers.getElementsByClassNameAlt(classname, root)
    );

    if (index < 0 || index >= elems.length) {
      index = elems.length - 1;
    }

    elem = elems[ index ];

    if (!elem) {
      errorMsg = 'An aIV.utils.getElemByClass call ';
      errorMsg += 'received an invalid class name parameter ';
      errorMsg += '(i.e. no element with the class name was found).';
      throw new RangeError(errorMsg);
    }

    return elem;
  };
