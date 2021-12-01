/**
 * Creates the component to show the name of the columns.
 * @param {string[]} columns List of columns of the selected sheet from the uploaded spreadsheet.
 * @param {string} templateType The name of the template. Used for the Id of the component.
 * @param {string} title The title for component.
 * @returns {string} The HTML for the component.
 */
export const columnNamesView = (columns, templateType, title) => {
  /**
   * Loops over all the columns of the selected sheet and creates a div with a checkbox for each columns name.
   * @returns {string[]} A div with a checkbox and a label for each column in the sheet.
   */
  const showColumnNames = () =>
    columns
      .map(
        (column) => `
        <div class="column-names">
            <input
                type="checkbox"
                name="${column}"
                id="${column}"
            />
            <label for="${column}">${column}</label>
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
          ${showColumnNames()}
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
          class="btn btn-create"
        >Create Sheet</button>
    </div>
  `;
};
