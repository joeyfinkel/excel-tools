import { FileData } from './fileData.js';
import { Headers } from './headers.js';

/**
 * Houses all the functions needed to modify the rows to be used for the new sheet
 */
export const RowData = {
  /**
   * Removes whichever header is not selected and its column
   * @param {*[]} rows Original list of data from the sheet row by row
   * @param {string} headerToRemove The header to remove
   * @returns {*[]} List of the final data without the non-selected headers and its columns
   */
  remove(rows, headerToRemove) {
    const idx = rows[0].indexOf(headerToRemove);

    rows.forEach((row) => idx > -1 && row.splice(idx, 1));

    return rows;
  },
  getModifiedRows(sheetData) {
    const dataWithValue = this.convertToObj.insertElement(sheetData, 'value');
    const headers = FileData.getHeaders_Modified(dataWithValue);
    const headersToRemove = Headers.compare(headers, Headers.headers);

    let modifiedRows;

    // Deletes the entire column of each header to remove
    return headersToRemove.map((header) => {
      modifiedRows = this.remove(dataWithValue, header);
      modifiedRows.forEach((row) => this.remove(row, header));

      return modifiedRows;
    });
  },
  convertToObj: {
    /**
     * Inserts an element at every other index in each column
     * @param {*[]} rows Sheet data
     * @param {string || number} value What to insert into array
     * @returns Sheet data with inserted value at every other index
     */
    insertElement(rows, value) {
      rows.forEach((row) => {
        let i = 0;

        while (i < row.length) {
          row.splice(i, 0, value);
          i += 2;
        }
      });

      return rows;
    },
    /**
     * Takes in the original data from the sheet and creates an object for every cell
     * @param {*[]} data The data from the sheet
     * @returns {*[{}]} Each cell data as an object
     */
    createEachCell(data) {
      const row = [];
      const maxVal = 5; // Not sure why it's 5 but it works
      const delta = Math.floor(data.length / maxVal);

      for (let i = 0; i < data.length; i += delta / 2) {
        let obj = {};

        obj[data[i]] = data[i + 1];
        row.push(obj);
      }

      return row;
    },
    createRowWithCells(data) {},
  },
};
