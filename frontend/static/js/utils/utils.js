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
