import { componentIds, dataAttributes } from '../../utils/text.js';
import { createBackButton } from '../elements/buttons/back.js';
import {
  createNewSheetEvent,
  createSheetButton,
} from '../elements/buttons/createSheet.js';
import { addToFinalHeadersList, createCheckbox } from '../elements/checkbox.js';
import { activeSheet } from './sheetView.js';

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
      id="${componentIds.headersView.id(templateType)}"
      class="sheet-display mx-auto mt-4"
    >
      ${createBackButton()}
      <div class="ms-5 mt-4">
        <div class="h2">
          <strong>${title}</strong>
        </div>
        <p>Select columns to keep for the new sheet</p>
      </div>
      <div class="column-names-wrapper ms-5 py-3">
        ${getHeaders()}
      </div>
      ${createSheetButton()}
    </div>
  `;
};

/**
 * The events that take place while on the headers view component.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the event is being called on.
 * @param {string} lblText The text for the label for the drag and drop component.
 */
export const headersViewEvents = (templateType, lblText) => {
  document.body.addEventListener('click', async (e) => {
    if (e.target.matches(`[${dataAttributes.checkbox}]`))
      addToFinalHeadersList(e.target.id);

    if (e.target.matches(`[${dataAttributes.buttons.createNewSheet}]`))
      await createNewSheetEvent(activeSheet[0], templateType, lblText);
  });
};
