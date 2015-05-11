  /**
   * ---------------------------------------------------
   * Public Method (utilsModuleAPI.addElemText)
   * ---------------------------------------------------
   * @desc A shortcut that adds to the native DOM property - Element.textContent
   *   or Element.innerText.
   * @param {!Element} elem - The DOM element.
   * @param {string} text - The text to add to the DOM element's textContent or
   *   innerText.
   * @return {!Element} The updated DOM element.
   */
  utilsModuleAPI.addElemText = function(elem, text) {

    /** @type {string} */
    var errorMsg;

    if (!elem || typeof elem !== 'object' || !(elem instanceof Element)) {
      errorMsg = 'An aIV.utils.addElemText call received an invalid elem ';
      errorMsg += 'parameter (should be a DOM Element).';
      throw new TypeError(errorMsg);
      return;
    }

    if (!text || typeof text !== 'string') {
      errorMsg = 'An aIV.utils.addElemText call received an invalid text ';
      errorMsg += 'parameter (should be a string).';
      throw new TypeError(errorMsg);
      return;
    }

    if (!!elem.textContent) {
      elem.textContent += text;
    }
    else {
      elem.innerText += text;
    }

    return elem;
  };
