import { Headers } from './headers.js';

/**
 * Houses all the functions needed to modify the rows to be used for the new sheet
 */
export const Rows = {
  modify: {
    remove(headers, listOfData) {
      const cell = [];
      const delIdxList = Rows.create.delIdxList(headers, listOfData);
      console.log(delIdxList);
      delIdxList.forEach((number) =>
        listOfData.filter((el, idx) => number !== idx && cell.push(el))
      );

      return cell;
    },
  },
  create: {
    /**
     * Creates an array of numbers which represent the index to delete from the original data
     * @param {string[]} headers Headers from sheet
     * @returns {number[]} Array of numbers representing the indices to delete
     */
    delIdxList(headers, listOfData) {
      const indexes = [];
      const delIdx = Headers.getUnselectedHeadersIdx(
        headers,
        Headers.getUnselectedHeaders(headers, Headers.headers)
      );

      delIdx.forEach((idx) => {
        while (idx < listOfData.length) {
          indexes.push(idx);
          idx += headers.length;
        }
      });

      indexes.sort((a, b) => a - b);

      return indexes;
    },
    /**
     * Creates an array for each cell value
     * @param {*[]} data The data from the sheet
     * @returns {*[][]} Each cell value as it's own array
     */
    cell(data) {
      const cell = [];

      data.forEach((row) => {
        let start = 0;

        while (start < row.length) {
          cell.push([row[start]]);

          start++;
        }
      });

      return cell;
    },
    /**
     * Turns each cell into an object
     * @param {*[][]} data The data from the sheet
     * @returns {*[]{}} Array with each cell as an object
     */
    cellObj(data) {
      return data.map(([value]) => ({ value }));
    },

    /**
     * Creates an array for each row of the data provided
     * @param {*[]} data The data from the sheet
     * @param {number} selectedHeaders The amount of headers selected
     * @returns {*[][]} An array with an array of each row with every cell in an object
     */
    rowWithCells(data, selectedHeaders) {
      const row = [];

      data.map((_) => {
        let start = 0;

        while (start < data.length) {
          row.push([data[start], data[start + 1]]);
          start += 2;
        }
      });

      return row.slice(0, selectedHeaders * 2);
    },
  },
};
