import { createRadio } from '../elements/radio.js';

const styles = {
  listGroup: 'list-group list-group-flush list-group-horizontal',
  listItem: 'list-group-item bg-transparent border-0 h6 mx-auto mb-0 text',
};

/**
 * Creates the headings for the component.
 * @returns {string} A HTML paragraph for element in the list to create the headings.
 */
export const headingsSection = () => {
  const headers = () =>
    ['Sheet Name', 'Columns', 'Rows']
      .map((el) => `<li class='${styles.listItem}'>${el}</li>`)
      .join(' ');

  return `
    <div>
      <ul
        class='${styles.listGroup} mt-3 underline'
      >${headers()}</ul>
    </div>
  `;
};

/**
 * Creates the HTML for every sheet in the file that displays the sheet name, total columns,
 * and total rows. It is shown on the sheets view component.
 * @param {string} name The name of the sheet.
 * @param {string} id The id for the radio.
 * @param {number} columns The total number of columns in the sheet.
 * @param {number} rows The total number of rows in the sheet.
 * @returns {string} The HTML that displays the sheet name, total columns, and total rows.
 */
export const sheetDataSection = (name, id, columns, rows) => {
  const sheetData = [createRadio(name, id), columns, rows];

  const row = () =>
    sheetData
      .map((value) => `<li class='${styles.listItem}'>${value}</li>`)
      .join('');

  return `
    <ul class='${styles.listGroup} mt-2 underline'>
      ${row()}
    </ul>
  `;
};
