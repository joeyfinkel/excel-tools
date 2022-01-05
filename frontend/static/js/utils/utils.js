import { dataAttributes } from './text.js';

/**
 * Removes an element from the DOM.
 * @param {string} selectors Selector to get the element by.
 */
export const removeElement = (selectors) => {
  const element = document.querySelector(selectors);

  element.parentNode.removeChild(element);
};

/**
 * Adds the next component to the element with the id `sheetDisplays`.
 * @param {string} component The next component to be shown.
 */
export const showComponent = (component) => {
  document.getElementById('sheetDisplays').innerHTML += component;
};

/**
 * Checks if the sheetsView component is on the DOM and returns the current component that is shown.
 * This function is only used where there is a back button which is why it will only return `sheetsView` or `headersView`
 * @returns {string} The name of the current component.
 */
export const getActiveComponent = () =>
  document.querySelector(`[${dataAttributes.sheetsView}]`)
    ? 'sheetsView'
    : 'headersView';
