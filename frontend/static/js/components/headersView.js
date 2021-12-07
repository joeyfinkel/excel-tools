import { createCheckbox } from './checkbox.js';

/**
 * Creates the component to show the name of the columns.
 * @param {string[]} columns List of columns of the selected sheet from the uploaded spreadsheet.
 * @param {string} templateType The name of the template. Used for the Id of the component.
 * @param {string} title The title for component.
 * @returns {string} The HTML for the component.
 */
export const headersView = (columns, templateType, title) => {
  /**
   * Creates a checkbox and displays every header from the selected sheet.
   * @returns {string[]} A div with a checkbox and a label for each header in the sheet.
   */
  const getHeaders = () =>
    columns
      .map(
        (header) => `
        <div class="column-names">
          ${createCheckbox(header)}
        </div>`
      )
      .join(' ');

  return `
    <div
      id="${templateType}ColumnsView"
      class="sheet-display mx-auto mt-4"
    >
        <div class="h2 ms-4">
          <strong>${title}</strong>
        </div>
        <div class="column-names-wrapper ms-5 py-3">
          ${getHeaders()}
          </div>
          <div class="ms-5 new-sheet-name-wrapper">
            <input
              type="text"
              name="New Sheet Name"
              placeholder="Enter new filename here..."
              id="newSheetName"
            />
          </div>
        <button
          type="submit"
          id="createSheet"
          class="btn btn-create"
        >Create Sheet</button>
    </div>
  `;
};
