import Table from '../TableCreation/table.js';

export default class Validation {
  constructor(path) {
    this.path = path;
  }

  displayTable(headers, columns) {
    const table = new Table(columns);
    if (this.path) {
      table.createTable(headers);
    }
  }
}
