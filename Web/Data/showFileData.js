export default class ShowFileData {
  constructor(headers, columns) {
    this.headers = headers;
    this.columns = columns;
  }

  showColumnData(output) {
    output.innerHTML += `Column values are: ${this.column}<br/>`;
  }

  showHeaders(output) {
    output.innerHTML += `Headers are: ${this.headers}<br/>`;
  }

  showTotalColumn(output, totalColumns) {
    output.innerHTML += `Total columns are: ${totalColumns}<br/>`;
  }

  showTotalRows(output, totalRows) {
    output.innerHTML += `Total rows are: ${totalRows}<br/>`;
  }
}
