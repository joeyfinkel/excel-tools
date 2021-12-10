import { dataAttributes } from '../../../utils/utils.js';

/**
 * Creates the button used for creating a new sheet.
 * @returns {string} The HTML for the button to create a new sheet.
 */
export const createSheetButton = () => `
  <button
    id="createSheet"
    class="btn btn-create"
    ${dataAttributes.createNewSheet}
  >Create Sheet</button>
`;

export const createNewSheetEvent = async (activeSheet) => {
  const dataFromStorage = JSON.parse(localStorage.getItem(activeSheet));
  const transformedData = [];
  // TODO #2 Remove the non selected headers from `dataFromStorage` by index

  /**
   * Takes each cell in the row and turns it into an object.
   * @param {any[]} row Each row from {@link dataFromStorage}.
   * @returns {Array.<Array.<{value: string|number}>>} Each cell in the row as an object in the row array.
   */
  const transformData = (row) =>
    row.map((value) => {
      return { value };
    });

  dataFromStorage.forEach((el) => transformedData.push(transformData(el)));
  await writeXlsxFile(transformedData, { fileName: 'Item Template.xlsx' });
};
