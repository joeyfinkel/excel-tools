import { dataAttributes, lblText } from '../../../utils/text.js';
import { removeElement, showComponent } from '../../../utils/utils.js';
import { dragDropComponent } from '../../built/dragDrop.js';
import { finalHeaders } from '../checkbox.js';
import { headers } from '../../../views/itemTemplate.js';
import { rearrangeData } from '../../../utils/swapColumns.js';
import { renameHeaders } from '../../../utils/headerManipulation.js';
import {
  headerIndex,
  removeData,
  transformData,
} from '../../../utils/createSheet.js';
import { getSheetDataFromStorage } from '../../../utils/fileData.js';

const { sheetsView, headersView, buttons } = dataAttributes;

/**
 * Creates the button used for creating a new sheet.
 * @returns {string} The HTML for the button to create a new sheet.
 */
export const createSheetButton = () => `
  <button
    id="createSheet"
    class="btn btn-create position-absolute float-end me-3 mb-4"
    ${buttons.newSheet}
  >Create Sheet</button>
`;

/**
 * Gets the sheet data from local storage, manipulates the data to only keep
 * the selected headers, and puts the data on a new spreadsheet.
 * @param {string} selectedSheet The selected sheet from the uploaded XLSX file.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the drag
 * and drop component is being used for.
 */
export const createNewSheetEvent = async (selectedSheet, templateType) => {
  const dataFromStorage = getSheetDataFromStorage(selectedSheet)[0];
  const originalHeaders = getSheetDataFromStorage(selectedSheet)[0][0];
  const uniqueFinalHeaders = [...new Set(finalHeaders)];
  const { type } = templateType;
  const newData = [];
  let indices;

  switch (type) {
    case 'column-remover':
      indices = headerIndex(originalHeaders, uniqueFinalHeaders, type);

      // Modify the data
      removeData(dataFromStorage, indices).forEach((row) =>
        newData.push(transformData(row))
      );

      // Remove the data
      await writeXlsxFile(newData, { fileName: 'New Sheet.xlsx' });

      removeElement(`[${headersView}]`);
      break;
    case 'sheet-merger':
      break;
    case 'item-template':
      const transformedData = [];
      indices = headerIndex(originalHeaders, headers.toRemove, type);

      // Modify the data
      removeData(dataFromStorage, indices).forEach((row) => newData.push(row));
      renameHeaders(newData);
      rearrangeData(newData).forEach((row) =>
        transformedData.push(transformData(row))
      );

      // Write the data
      await writeXlsxFile(transformedData, { fileName: 'Item Template.xlsx' });

      removeElement(`[${sheetsView}]`);
      break;
    default:
      break;
  }

  localStorage.clear();
  showComponent(dragDropComponent(type, lblText));
};
