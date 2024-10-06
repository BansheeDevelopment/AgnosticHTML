/**
 * AgnosticHTML 0.4.0 by Banshee Development
 * MIT License
 *
 * A utility function that safely parses HTML strings into DOM nodes,
 * avoiding the use of innerHTML for security reasons.
 * Now with configurable debugging capabilities (log/warn) similar to AgnosticRun.
 */

let globalDebugLog = false;
let globalDebugWarn = false;

export function agnosticHTML({ debugLog = false, debugWarn = false } = {}) {
  globalDebugLog = debugLog;
  globalDebugWarn = debugWarn;

  return function (htmlString, targetSelector = "body") {
    if (typeof targetSelector !== "string" || !targetSelector.trim()) {
      if (globalDebugWarn) {
        console.error(`AgnosticHTML: Invalid targetSelector "${targetSelector}". It must be a non-empty string.`);
      }
      return;
    }

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    function createDOMElement(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        return document.createTextNode(node.textContent);
      }

      const element = document.createElement(node.tagName.toLowerCase());

      if (node.classList.length > 0) {
        node.classList.forEach((cls) => element.classList.add(cls));
      }

      if (node.attributes) {
        Array.from(node.attributes).forEach((attr) => {
          element.setAttribute(attr.name, attr.value);
        });
      }

      Array.from(node.childNodes).forEach((child) => {
        element.appendChild(createDOMElement(child));
      });

      return element;
    }

    const fragment = document.createDocumentFragment();
    Array.from(tempDiv.childNodes).forEach((node) => {
      fragment.appendChild(createDOMElement(node));
    });

    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      if (globalDebugLog) {
        console.log(`AgnosticHTML: Target element "${targetSelector}" exists. Inserting content.`);
      }
      targetElement.appendChild(fragment);
    } else {
      if (globalDebugWarn) {
        console.warn(`AgnosticHTML: Target element with selector "${targetSelector}" does not exist. Unable to insert content.`);
      }
    }

    return fragment;
  };
}
