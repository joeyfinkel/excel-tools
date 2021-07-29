export default class TableBody {
  constructor(table, tableBody, tableData) {
    this.table = table;
    this.tableBody = tableBody;
    this.tableData = tableData;
  }

  createTableBody() {
    const columns = this.tableData.slice(1);

    columns.forEach((column) => {
      const row = this.tableBody.insertRow();
      column.forEach((element) => {
        const cell = row.insertCell();
        cell.innerHTML = element;
      });
    });

    this.table.appendChild(this.tableBody);
  }
}
