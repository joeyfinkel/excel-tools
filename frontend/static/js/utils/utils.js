/** Object containing all data attributes.  */
export const dataAttributes = {
  navButton: 'data-link',
  dragDrop: 'data-file-input',
  radio: 'data-sheet-radio',
  nextButton: 'data-next-button',
  backButton: 'data-back-button',
  checkbox: 'data-header-checkbox',
  createNewSheet: 'data-create-sheet',
};

/**
 * Hides an element by setting display to `none`.
 * @param {string} id Id of element to hide.
 */
export const hide = (id) => {
  document.getElementById(id).style.display = 'none';
};

/**
 * Adds the next component to the element with the id `sheetDisplays`.
 * @param {string} component The next component to be shown.
 */
export const showNextComponent = (component) => {
  document.getElementById('sheetDisplays').innerHTML += component;
};
