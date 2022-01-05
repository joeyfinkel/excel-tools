import { dataAttributes } from '../../utils/text.js';
import { createBackButton } from '../elements/buttons/back.js';
import { createNextButton } from '../elements/buttons/next.js';
import { createSheetButton } from '../elements/buttons/createSheet.js';
import { columnRemover, sheetMergerComponent } from './views.js';

/**
 * Creates the sheet view component. Displays all the sheet names, columns, and rows
 * of the uploaded spreadsheet.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template the event is being used for.
 * @param {{[{name: string, columns: number, rows: number}]}} filesObj The object with all the file data.
 * @returns {string} The HTML for the sheet view component based on the current view.
 */
export const sheetsViewComponent = (templateType, filesObj) => {
  const { type } = templateType;

  const abstractComponent = (data) => `
    <div
      class='position-relative overflow-auto pt-3 sheet-display mx-auto mt-4'
      ${dataAttributes.sheetsView}
    >
      ${createBackButton()}
      ${data}
      ${type.includes('template') ? createSheetButton() : createNextButton()}
    </div>
  `;

  switch (type) {
    case 'column-remover':
      return abstractComponent(columnRemover(filesObj));
    case 'sheet-merger':
      return abstractComponent(sheetMergerComponent(filesObj));
    default:
      return abstractComponent(columnRemover(filesObj));
  }
};
