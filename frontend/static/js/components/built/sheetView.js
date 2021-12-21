import { createRadio } from '../elements/radio.js';
import { createNextButton, nextButtonEvent } from '../elements/buttons/next.js';
import { backButtonEvent, createBackButton } from '../elements/buttons/back.js';
import { componentIds, dataAttributes, lblText } from '../../utils/text.js';
import * as types from '../../utils/types.js';

/**
 * The selected sheet.
 * @type {string[]}
 */
export const activeSheet = [];

/**
 * Creates the sheet view component. Displays all the sheet names, columns, and rows
 * of the uploaded spreadsheet.
 * @param {string} templateType Type of template.
 * @param {string[]} sheetNames Array of all the sheets names from the uploaded spreadsheet.
 * @returns {types.sheetViewComponent} The HTML for the sheet view component.
 */
export const sheetView = (templateType, sheetNames) => {
  const { container, sheetsWrapper } = componentIds.sheetsView;

  /**
   * Creates the HTML for displaying sheet information.
   * @param {string} sheet Sheet from uploaded spreadsheet.
   * @returns {Promise<string>} The HTML to display the sheet name, total columns, and total rows.
   */
  const showSheetInformation = (sheet) => {
    const sheetName = sheet[0];

    return `
      <div class='sheet-info' id='${sheetName}'>
        <p class='h6 mx-auto sheet-1'>${createRadio(sheetName)}</p>
        <p class='h6 mx-auto'>${sheet[1]}</p>
        <p class='h6 mx-auto'>${sheet[2]}</p>
      </div>
    `;
  };

  return `
    <div
      id='${container(templateType)}'
      class='sheet-display mx-auto mt-4'
    >
      ${createBackButton()}
      <div class='mt-4'>
          <div class='headers'>
              <p class='h6 mx-auto'>Sheet Name</p>
              <p class='h6 mx-auto'>Columns</p>
              <p class='h6 mx-auto'>Rows</p>
          </div>
          <div id='${sheetsWrapper(templateType)}' class='sheets'>
              ${sheetNames.map((sheet) => showSheetInformation(sheet)).join('')}
          </div>
      </div>
      ${createNextButton()}
    </div>
  `;
};

/**
 * Handles all the events for the sheet view component.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the event is for.
 */
export const sheetViewEvents = (templateType) => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches(`[${dataAttributes.radio}]`))
      activeSheet.push(e.target.id);

    if (e.target.matches(`[${dataAttributes.buttons.nextButton}]`))
      nextButtonEvent(templateType.type, activeSheet[0]);

    if (e.target.matches(`[${dataAttributes.buttons.backButton}]`))
      backButtonEvent(templateType.type, lblText);
  });
};
