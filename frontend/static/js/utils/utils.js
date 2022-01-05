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

/**
 * The basic function to save to local storage.
 * @abstract
 * @param {string} key Name for local storage object.
 * @param {any} obj The file uploaded.
 */
export const saveToLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj, null, 2));
};

/**
 * Save all the data for each sheet from the uploaded file.
 * @param {string} key The sheet name.
 * @param {any} obj Data from the file uploaded.
 */
export const saveRowsAndColumns = (key, obj) => {
  saveToLocalStorage(`${key}-RowsAndColumns`, obj);
};

/**
 * Implements {@link saveToLocalStorage} to save a list of all the sheet names to local storage.
 * @param {any} obj Data from the uploaded file.
 */
export const saveSheetNames = (obj) => {
  saveToLocalStorage('sheetNames', obj);
};

/**
 * Implements {@link saveToLocalStorage} to save the sheet name, total columns,
 * and rows for each sheet from the uploaded file.
 * @param {any} obj Data from the file uploaded.
 */
export const saveSheetInformation = (obj) => {
  saveToLocalStorage(`sheetsInfo`, obj);
};

export const clearSheetInformation = (activeSheet) => {
  for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key !== `${activeSheet}-RowsAndColumns`)
      localStorage.removeItem(localStorage.key(i));
  }
};
