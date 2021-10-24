/**
 * Houses all the functions to get data from the sheet that was uploaded
 */
export const FileData = {
  /**
   * Gets the file name of the file uploaded
   * @param {Event} e Event from the file upload
   * @returns {string} The name of file uploaded
   */
  filename(e) {
    return e.target.files[0].name;
  },
  /**
   * Gets the headers from the sheet that was uploaded
   * @param {*[]} data Data from sheet
   * @returns {string[]} First row from sheet
   */
  getHeaders_Original(data) {
    return data[0];
  },
  /**
   * Gets the headers from the modified sheet data
   * @param {*[]} data Modified data from the sheet
   * @returns {*[]} First row from sheet
   */
  getHeaders_Modified(data) {
    const headers = [];

    data[0].forEach((row, idx) => idx % 2 !== 0 && headers.push(row));

    return headers;
  },
  /**
   * Gets the total number of columns from a sheet
   * @param {*[]} data Data from the sheet uploaded
   * @returns {number} Amount of columns present in the sheet that was uploaded
   */
  totalColumns(data) {
    let count;

    data.forEach((row) => {
      count = row.length;
    });

    return count;
  },
  /**
   * Displays basic information about the uploaded sheet
   * @param {string} id The id of the element to add the file data to
   * @param {Event} e Event data from event
   * @param {*[]} rows Rows of data from spreadsheet
   * @returns {string} The markup for the file data
   */
  renderFileData(id, e, rows) {
    document.getElementById(id).innerHTML = `
      Title: ${this.filename(e)}<br>
      Total Columns: ${this.totalColumns(rows)}<br>
      Total Rows: ${rows.length}<br>
      <strong>Please choose headers to keep:</strong><br>
    `;
  },
};
