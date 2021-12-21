import {
  saveRowsAndColumns,
  saveSheetNames,
  saveSheetInformation,
} from './utils.js';

/**
 * Gets each sheet name, total columns, and total rows in every sheet in the file uploaded.
 * @param {{name: string}} sheets List of sheet names from the uploaded XLSX file.
 * @param {Event} file The uploaded XLSX file.
 * @returns {Array.<String[] & Number[]>} Array of arrays containing each sheet name, total columns, and total rows.
 */
export const getSheetData = async (sheets, file) => {
  const sheetData = [];
  let columns = 0;

  /**
   * Gets all sheet names from uploaded XLSX file.
   * @returns {string[]} A list of all sheet names.
   */
  const getSheets = () => {
    const sheetNames = [];
    sheets.forEach((sheet) => sheetNames.push(sheet.name));

    return sheetNames;
  };

  for (const sheet of getSheets()) {
    const sheetNames = getSheets();
    /** Read each sheet's data */
    const data = await readXlsxFile(file, {
      sheet,
    });

    saveRowsAndColumns(sheet, data);
    saveSheetNames(sheetNames);
    data.forEach((row) => (columns = row.length));
    sheetData.push([sheet, columns, data.length]);
  }

  saveSheetInformation(sheetData);

  return sheetData;
};
