import {
  indicesToRemove,
  removeData,
  transformData,
} from '../../../utils/createSheet.js';
import { dataAttributes, lblText } from '../../../utils/text.js';
import { removeElementById, showComponent } from '../../../utils/utils.js';
import {
  renameDims,
  renameFeatures,
  renameHeadersObj,
} from '../../../utils/headerManipulation.js';
import { dragDrop } from '../../built/dragDrop.js';
import { getHeadersViewId } from '../../built/headersView.js';
import { finalHeaders } from '../checkbox.js';
import { headers } from '../../../views/itemTemplate.js';
import { getSheetsViewId } from '../../built/sheetView.js';
import { insertColumnAt } from '../../../utils/swapColumns.js';

/**
 * Creates the button used for creating a new sheet.
 * @returns {string} The HTML for the button to create a new sheet.
 */
export const createSheetButton = () => `
  <button
    id="createSheet"
    class="btn btn-create"
    ${dataAttributes.buttons.createNewSheet}
  >Create Sheet</button>
`;

/**
 * Gets the sheet data from local storage, manipulates the data to only keep
 * the selected headers, and puts the data on a new spreadsheet.
 * @param {string} activeSheet The selected sheet from the uploaded XLSX file.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the drag
 * and drop component is being used for.
 */
export const createNewSheetEvent = async (activeSheet, templateType) => {
  const activeSheetData = localStorage.getItem(`${activeSheet}-RowsAndColumns`);
  const dataFromStorage = JSON.parse(activeSheetData);
  const originalHeaders = dataFromStorage[0];
  const uniqueFinalHeaders = [...new Set(finalHeaders)];
  const { type } = templateType;
  const newData = [];
  let indices;

  switch (type) {
    case 'column-remover':
      indices = indicesToRemove(originalHeaders, uniqueFinalHeaders, type);

      removeData(dataFromStorage, indices).forEach((row) =>
        newData.push(transformData(row))
      );
      await writeXlsxFile(newData, { fileName: 'New Sheet.xlsx' });
      removeElementById(getHeadersViewId(type));
      break;
    case 'item-template':
      const transformedData = [];
      indices = indicesToRemove(originalHeaders, headers.toRemove, type);

      removeData(dataFromStorage, indices).forEach((row) => newData.push(row));
      renameHeadersObj(newData, {
        asin: 'ASIN',
        model: 'SKU',
        description: 'Marketing Copy',
        upcList: 'UPC',
      });
      renameDims(newData, 'item', 'Item');
      renameDims(newData, 'package', 'Package');
      renameFeatures(newData);

      insertColumnAt(newData, newData[0].indexOf('UPC'), 0);
      insertColumnAt(newData, newData[0].indexOf('SKU'), 1);
      // #TODO Figure out best way to implement column mover for all columns.
      console.log(newData);

      newData.forEach((row) => transformedData.push(transformData(row)));

      // await writeXlsxFile(transformedData, { fileName: 'Item Template.xlsx' });
      // removeElementById(getSheetsViewId(type));
      break;
    default:
      break;
  }

  localStorage.clear();
  showComponent(dragDrop(type, lblText));
};
