import { ItemTemplateOutputArea } from '../Components/outputArea.js';

export const FileData = {
  filePath: '',
  originalHeaders: '',
  columnData:'',
  headers: [],
  isShowing: false,
  output: document.getElementById('output'),
  /**
   * Removes the last character of the file path so it can be used to get data
   * from the sheet
   * @param {string} path the path of the imported file
   * @returns the name of the file
   */
  filename(path) {
    return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf(':'));
  },
  isValidFile(path) {
    if (path) return true;
    return false;
  },
  async showSheetInformation() {
    let path = await eel.open_file_explorer()();
    const columns = await eel.get_columns(path)();
    const headers = await eel.get_headers(path, columns)();
    const totalColumns = await eel.get_total_columns(path)();
    const totalRows = await eel.get_total_rows(path)();
    
    this.filePath = path;
    this.originalHeaders = headers
    this.columnData = columns

    path += ':';

    this.isValidFile(path) &&
      ItemTemplateOutputArea.add(
        this.filename(path),
        totalColumns,
        totalRows,
        headers
      );
  },
};
