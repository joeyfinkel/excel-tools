import { headersView } from './headersView.js';
import { selectHeaders } from './checkbox.js';

/**
 * Creates the next button to move on to the next view for creating the template sheet.
 * @returns {string} A font awesome icon of a right arrow.
 */
export const createNextButton = () =>
  `<i id="showColumnNames" class="fas fa-arrow-right fa-lg"></i>`;

/**
 * The onclick event handler for the right arrow. Hides the sheet name component and
 * shows the column name component with the columns from the selected sheet.
 * Implemented in `radio.js`.
 * @param {string} templateType The name of the current template.
 * @param {string} selectedSheet The name of the sheet the user selected.
 * @param {string[]} columns The headers from the selected sheet.
 */
export const showSheetHeaders = (templateType, selectedSheet, columns) => {
  const showColumnNames = document.getElementById('showColumnNames');

  showColumnNames &&
    showColumnNames.addEventListener(
      'click',
      () => {
        // Hide sheet name view
        document.getElementById(`${templateType}Display`).style.display =
          'none';

        // Show column name view, display column name
        document.getElementById(templateType).innerHTML += headersView(
          columns,
          templateType,
          `Columns From ${selectedSheet}`
        );

        selectHeaders();
      },
      false
    );
};
