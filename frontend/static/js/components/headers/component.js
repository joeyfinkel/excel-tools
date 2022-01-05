import { dataAttributes } from '../../utils/text.js';
import { createBackButton } from '../elements/buttons/back.js';
import { createSheetButton } from '../elements/buttons/createSheet.js';
import { createCheckbox } from '../elements/checkbox.js';

/**
 * Creates the component to show the name of the columns.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template the event is being used for.
 * @param {string[]} headers List of columns of the selected sheet from the uploaded spreadsheet.
 * @param {string} selectedSheet The selected sheet that the headers are from. Used for the title of the component.
 * @returns {string} The HTML for the component.
 */
export const headersViewComponent = (headers, selectedSheet) => {
  // const { type } = templateType;

  /**
   * Creates a checkbox and displays every header from the selected sheet.
   * @returns {string[]} A div with a checkbox and a label for each header in the sheet.
   */
  const mapHeaders = () =>
    headers
      .map(
        (header) => `
        <div class="d-flex align-content-center justify-content-start align-items-center gap-2">
          ${createCheckbox(header)}
        </div>`
      )
      .join(' ');

  // const abstractComponent = (data) => `
  //   <div
  //     class="sheet-display mx-auto mt-4 overflow-auto"
  //     ${headersView}
  //   >
  //     ${createBackButton()}
  //     ${data}
  //     ${createSheetButton()}
  //   </div>
  // `;

  return `
    <div
      class="sheet-display mx-auto mt-4 overflow-auto"
      ${dataAttributes.headersView}
    >
      ${createBackButton()}
      <div class="ms-5 mt-4">
        <div class="h2">
          <strong>Headers From: ${selectedSheet}</strong>
        </div>
        <p>Select columns to keep for the new sheet by selecting the column's headers.</p>
      </div>
      <div class="ms-5 py-3">
        ${mapHeaders()}
      </div>
      ${createSheetButton()}
    </div>
  `;
};
