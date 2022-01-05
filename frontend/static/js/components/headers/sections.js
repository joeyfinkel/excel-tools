import { createCheckbox } from '../elements/checkbox.js';

/**
 * Creates a checkbox and displays every header from the selected sheet.
 * @param {string[]} columns List of columns of the selected sheet from the uploaded spreadsheet.
 * @returns {string} A div with a checkbox and a label for each header in the sheet.
 */
export const getHeaders = (columns) => {
  let html = '';

  columns
    .map((header) => {
      html += `
        <div class="d-flex align-content-center justify-content-start align-items-center gap-2">
          ${createCheckbox(header)}
        </div>`;

      return html;
    })
    .join(' ');

  return  `<div class="ms-5 py-3">${html}</div>`;
};
