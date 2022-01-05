import {
  saveRowsAndColumns,
  saveSheetNames,
  saveSheetInformation,
} from './utils.js';

/**
 * Gets each sheet name, total columns, and total rows in every sheet in the file uploaded.
 * @param {{name: string}} sheets List of sheet names from the uploaded XLSX file.
 * @param {Event} file The uploaded XLSX file.
 * @returns {[{name: string, columns: number, rows: number, sheetData: any[]}]} Array of arrays containing each sheet name, total columns, and total rows.
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
    const filename = file.name.replace('.xlsx', '');

    saveRowsAndColumns(`${filename}-${sheet}`, data);
    saveSheetNames(sheetNames);
    data.forEach((row) => (columns = row.length));
    sheetData.push({
      name: sheet,
      columns,
      rows: data.length,
      sheetData: data,
    });
  }

  saveSheetInformation(sheetData);

  return sheetData;
};

/**
 * Loops through the local storage item that has all the file's data
 * and returns the selected sheets'.
 * @param {string} selectedSheet The selected sheet.
 * @returns {[string[], [string|number]]} Gets the selected sheet's data.
 */
export const getSheetDataFromStorage = (selectedSheet) => {
  const filesObj = JSON.parse(localStorage.getItem('filesData'));
  const sheetData = [];

  for (const files in filesObj) {
    const filenames = filesObj[files];

    for (const filename in filenames) {
      const dataFromFile = filenames[filename];

      for (const data in dataFromFile) {
        const { name, sheetData: _sheetData } = dataFromFile[data];
        name === selectedSheet && sheetData.push(_sheetData);
      }
    }
  }

  return sheetData;
};
