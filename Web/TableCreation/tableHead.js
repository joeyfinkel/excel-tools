export default class TableHead {
  constructor(table, tableHead, tableData) {
    this.table = table;
    this.tableHead = tableHead;
    this.tableData = tableData;
  }

  createTableHead(headers) {
    const row = this.tableHead.insertRow();

    headers.forEach((header) => {
      const cell = row.insertCell();
      cell.innerHTML = `<strong>${header}</strong>`;
    });

    this.table.appendChild(this.tableHead);
  }
}
