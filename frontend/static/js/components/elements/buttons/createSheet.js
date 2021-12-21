import { dataAttributes, componentIds } from '../../../utils/text.js';
import { removeElementById, showComponent } from '../../../utils/utils.js';
import { dragDrop } from '../../built/dragDrop.js';
import { finalHeaders } from '../checkbox.js';

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
 * @param {{type: string, title: string, headings: string[]}} templateType The template the drag and drop component is being used for.
 * @param {string} lblText The text for the drag and drop component label.
 */
export const createNewSheetEvent = async (
  activeSheet,
  templateType,
  lblText
) => {
  const activeSheetData = localStorage.getItem(
    `Copy-${activeSheet}-RowsAndColumns`
  );
  /** @type {Array<any[]>} */
  const dataFromStorage = JSON.parse(activeSheetData);
  /** @type {string[]} List of headers from selected sheet. */
  const originalHeaders = dataFromStorage[0];
  const uniqueFinalHeaders = [...new Set(finalHeaders)];
  const newData = [];

  /**
   * Compares selected headers to the original headers and returns the non selected header.
   * @returns {number[]} A list of numbers representing the indices of the non selected headers.
   */
  const getNonSelectedHeadersIndex = () => {
    /** @type {number[]} Array containing the indexes of the non selected headers. */
    const index = [];

    originalHeaders.filter((header) => {
      return (
        !uniqueFinalHeaders.includes(header) &&
        index.push(originalHeaders.indexOf(header))
      );
    });

    return index;
  };

  /**
   * Remove the non selected header's indices from the data.
   * @returns {[any[]]} The new data to be used for the new sheet.
   */
  const createNewData = () => {
    const index = getNonSelectedHeadersIndex();
    const row = [];

    dataFromStorage.forEach((entry) => {
      const newEntry = [];

      entry.forEach((val, idx) => {
        if (!index.includes(idx)) newEntry.push(val);
      });

      row.push(newEntry);
    });

    return row;
  };

  /**
   * Takes each cell in the row and turns it into an object.
   * @param {any[]} row Each row from {@link dataFromStorage}.
   * @returns {[[{value: string|number}]]} Each cell in the row as an object in the row array.
   */
  const transformData = (row) =>
    row.map((value) => {
      return { value };
    });

  createNewData().forEach((row) => newData.push(transformData(row)));

  // Write data to new file.
  await writeXlsxFile(newData, { fileName: 'Item Template.xlsx' });

  // Clear everything from local storage.
  localStorage.clear();

  // Remove the headers view component and show the drag and drop component.
  removeElementById(componentIds.headersView.id(templateType.type));
  showComponent(dragDrop(templateType, lblText));
};
