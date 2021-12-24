import { createRadio } from '../elements/radio.js';
import { createNextButton, nextButtonEvent } from '../elements/buttons/next.js';
import { createSheetButton } from '../elements/buttons/createSheet.js';
import { backButtonEvent, createBackButton } from '../elements/buttons/back.js';
import { componentIds, dataAttributes, lblText } from '../../utils/text.js';
import * as types from '../../utils/types.js';

/** @type {string[]} The selected sheet. */
export const activeSheet = [];
/**
 * Creates the sheet view component. Displays all the sheet names, columns, and rows
 * of the uploaded spreadsheet.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template the event is being used for.
 * @param {[string, number, number]} sheetNames Array of all the sheets names from the uploaded spreadsheet.
 * @returns {types.sheetViewComponent} The HTML for the sheet view component.
 */
export const sheetsView = (templateType, sheetNames) => {
  const { container, sheetsWrapper } = componentIds.sheetsView;
  const { type } = templateType;

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

  /**
   * Creates the headings for the component.
   * @returns {string} A HTML paragraph for element in the list to create the headings.
   */
  const createHeadings = () =>
    ['Sheet Name', 'Column', 'Rows']
      .map((el) => `<p class='h6 mx-auto'>${el}</p>`)
      .join(' ');

  return `
    <div
      id='${container(type)}'
      class='sheet-display mx-auto mt-4'
    >
      ${createBackButton()}
      <div class='mt-4'>
        <div class='headers'>
          ${createHeadings()}
        </div>
        <div id='${sheetsWrapper(type)}' class='sheets'>
          ${sheetNames.map((sheet) => showSheetInformation(sheet)).join('')}
        </div>
      </div>
      ${type === 'item-template' ? createSheetButton() : createNextButton()}
    </div>
  `;
};

/**
 * Handles all the events for the sheet view component.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the event is for.
 */
export const sheetsViewEvents = (templateType) => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches(`[${dataAttributes.radio}]`))
      activeSheet.push(e.target.id);

    if (e.target.matches(`[${dataAttributes.buttons.nextButton}]`))
      nextButtonEvent(templateType, activeSheet[0]);

    if (e.target.matches(`[${dataAttributes.buttons.backButton}]`))
      backButtonEvent(templateType, lblText);
  });
};

/**
 * Gets the id of the sheets view for the current template.
 * @param {string} templateType The type of template the headers view is
 * currently used for.
 * @returns {string} The id of the sheets view.
 */
export const getSheetsViewId = (templateType) =>
  `${templateType}SheetsContainer`;
