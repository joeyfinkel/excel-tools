import { displayHeadersArea } from './headers.js';
import { TextBox } from '../Components/textBox.js';

export const Columns = {
  columns: [],
  async setColumns(path) {
    return eel.get_columns(path)();
  },
  async getColumnsByRow(path) {
    return this.setColumns(path).then((columns) =>
      eel.get_columns_by_row(path, columns)()
    );
  },
  async setFinalColumnList(path) {
    return this.getColumnsByRow(path).then((columns) =>
      eel.empty_string_list(columns)()
    );
  },
  async showTotal(path) {
    const total = await eel.get_total_columns(path)();
    FileData.output.innerHTML += `Total columns are: <strong>${total}</strong><br/>`;
  },
};

export const Rows = {
  async showTotal(path) {
    const total = await eel.get_total_rows(path)();
    FileData.output.innerHTML += `Total rows are: <strong>${total}</strong><br/>`;
  },
};

export const FileData = {
  headers: [],
  isShowing: false,
  output: document.getElementById('output'),
  async setPath() {
    return eel.open_file_explorer()();
  },
  async setHeaders(path, columns) {
    return eel.get_headers(path, columns)();
  },
  filename(path) {
    return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf(':'));
  },
  showFilename(path) {
    this.output.innerHTML += `File chosen: <strong>${this.filename(
      path
    )}</strong><br/>`;
  },
  isValidFile(path) {
    if (path) return true;
    return false;
  },
  async showSheetInformation() {
    this.setPath().then((path) => {
      path += ':';

      if (this.isValidFile(path)) {
        this.isShowing = true;
        this.showFilename(path);
        Columns.showTotal(path);
        Rows.showTotal(path);
        TextBox.add('newFilenameWrapper');
        Columns.setColumns(path).then((columns) => {
          Columns.getColumnsByRow(path, columns);
          this.setHeaders(path, columns).then((header) => {
            displayHeadersArea(path, columns, header);
          });
        });
      }
    });
  },
};
