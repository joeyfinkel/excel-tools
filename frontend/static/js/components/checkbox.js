import { createNewSheet } from './button.js';

/**
 * Creates a checkbox with a unique Id and name.
 * @param {string} name The name for the checkbox. Used for the Id and name.
 * @returns {string} A checkbox.
 */
export const createCheckbox = (name) => `
  <input
    type="checkbox"
    name="${name}"
    id="${name}"
  />
  <label for="${name}">${name}</label>
`;

/**
 * Adds an event listener to every checkbox on the page. Used for selecting the columns
 * for the new sheet. Implemented in `nextButton.js`.
 */
export const selectHeaders = () => {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const name = [];

  /**
   * Checks if the selected header is in the list of headers.
   * Adds the header to `headersList` if it's not there already.
   * If the `selectedHeader` is in `headersList`, it will be removed.
   * @param {string} selectedHeader The header selected onclick.
   * @returns {string[]} An array with the headers the user selected.
   */
  const compareHeaders = (selectedHeader) => {
    const headersList = [];

    // Adds selectedHeader to headerList if it's not currently in the list.
    headersList.includes(selectedHeader)
      ? headersList.splice(headersList.indexOf(selectedHeader, 1))
      : headersList.push(selectedHeader);

    return headersList;
  };

  checkboxes &&
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener(
        'click',
        () => {
          name.push(checkbox.name);
          createNewSheet(name);
        },
        false
      )
    );
};
