import { columnNamesView } from './columnNamesView.js';

/**
 * Creates the sheet view component. Displays all the sheet names, columns, and rows
 * of the uploaded spreadsheet.
 * @param {string} templateType Type of template.
 * @returns {string} The HTML for the sheet view component.
 */
export const sheetView = (templateType, sheetData) => {
  /**
   * Creates the HTML for displaying sheet information.
   * @param {string} sheet Sheet from uploaded spreadsheet.
   * @returns {string} The HTML to display the sheet name, total columns, and total rows.
   */
  const showSheetInformation = (sheet) => {
    const sheetName = sheet[0];

    return `
        <div class="sheet-info form-check" id="${sheetName}">
        <p class='h6 mx-auto sheet-1'>
            <input
            type="radio"
            name="sheet"
            id="${sheetName}"
            class="sheet-check form-check-input"
            />
            <label for="${sheetName}" class="form-check-label">${sheetName}</label>
        </p>
        <p class='h6 mx-auto'>${sheet[1]}</p>
        <p class='h6 mx-auto'>${sheet[2]}</p>
        </div>
    `;
  };

  return `
    <div
        id="${templateType}Display"
        class="sheet-display mx-auto mt-4"
    >
        <div class="headers">
            <p className="h6 mx-auto">Sheet Name</p>
            <p className="h6 mx-auto">Columns</p>
            <p className="h6 mx-auto">Rows</p>
        </div>
        <div id="${templateType}Sheets" class="sheets">
            ${sheetData.map((sheet) => showSheetInformation(sheet)).join('')}
        </div>
            <i
                id="showColumnNames"
                class="fas fa-arrow-right fa-lg"
            >
            </i>
    </div>
    `;
};

/**
 * The onclick event handler for the right arrow. Hides the sheet name component and
 * shows the column name component with the columns from the selected sheet.
 * @param {string} templateType The name of the current template.
 * @param {string} selectedSheet The name of the sheet the user selected.
 * @param {{columns: string[], title: string}} param2 Object for the `columnNamesView` component.
 */
export const onclick = (templateType, selectedSheet, { columns, title }) => {
  const showColumnNames = document.getElementById('showColumnNames');

  showColumnNames &&
    showColumnNames.addEventListener(
      'click',
      () => {
        // Hide sheet name view
        document.getElementById(`${templateType}Display`).style.display =
          'none';

        // Get selected sheet, make it active to use to get column names from
        console.log(selectedSheet);

        // Show column name view, display column name
        document.getElementById(templateType).innerHTML += columnNamesView(
          columns,
          templateType,
          `${title} From ${selectedSheet}`
        );
      },
      false
    );
};
