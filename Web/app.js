import Table from './TableCreation/table.js';
import Filename from './Data/filename.js';
import Header from './Data/headers.js';
import Validaton from './Data/validation.js';

const output = document.getElementById('output');

function validateFile(path, headers, combinedColumns) {
  const table = new Table(combinedColumns);

  if (path) {
    const filename = new Filename(path);
    const header = new Header(headers);

    filename.showFilename(output);
    table.createTable(headers);
    header.displayHeaders();
  }
}

function choseColumnsToKeep() {}

document.getElementById('select-file').addEventListener('click', async () => {
  let path = await eel.get_file()();
  const columns = await eel.get_columns(path)();
  const totalColumns = await eel.get_total_columns(path)();
  const totalRows = await eel.get_total_rows(path)();
  const combinedColumns = await eel.data_to_table(path, columns)();
  const headers = new Header(['hello', 'bye']);
  path += ':';
  // const validate = new Validation(path);

  // validate.displayTable(headers, combinedColumns);
  validateFile(path, combinedColumns[0], combinedColumns);
});

// Sends file back to python to be used in the backend
eel.expose(sendFileToPython);
function sendFileToPython() {
  getFile().then((x) => {
    console.log(x);
  });
}
