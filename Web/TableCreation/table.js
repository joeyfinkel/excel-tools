import TableHead from './tableHead.js';
import TableBody from './tableBody.js';

export default class Table {
  table = document.createElement('table');
  head = document.createElement('thead');
  body = document.createElement('tbody');

  constructor(tableData) {
    this.tableData = tableData;
  }

  createTable(headers) {
    /**
     * Creates and displays a HTML table
     * @param headers headers for the table
     */
    const tableHead = new TableHead(this.table, this.head, this.tableData);
    const tableBody = new TableBody(this.table, this.body, this.tableData);

    tableHead.createTableHead(headers);
    tableBody.createTableBody();
    document.body.appendChild(this.table);
  }
}
