import { Div } from './div.js';
import { Form } from './form.js';
import { TextBox } from './textBox.js';

export const ItemTemplateOutputArea = {
  fileDataOutput: document.createElement('p'),
  headersToKeepOutput: document.createElement('p'),

  displayFileData(filename, columns, rows) {
    this.fileDataOutput.id = 'output';
    this.fileDataOutput.innerHTML = `File chosen: <strong>${filename}</strong><br/>`;
    this.fileDataOutput.innerHTML += `Total columns are: <strong>${columns}</strong><br/>`;
    this.fileDataOutput.innerHTML += `Total rows are: <strong>${rows}</strong><br/>`;

    return this.fileDataOutput;
  },
  displayTextBox() {
    const wrapper = Div.create('newFilenameWrapper', 'form-group');

    wrapper.appendChild(TextBox.create());

    return wrapper;
  },
  displayHeadersFromSheet(header) {
    const formWrapper = Div.create('headerOutput', 'form-check header-output');
    this.headersToKeepOutput.id = 'headersToKeep';

    formWrapper.innerHTML = 'Choose headers to keep:<br/>';
    formWrapper.appendChild(Form.createHeaderOutputForm(header));
    formWrapper.appendChild(this.headersToKeepOutput);
    formWrapper.appendChild(this.displayTextBox());

    return formWrapper;
  },
  createOutputArea(filename, columns, rows, header) {
    const wrapper = Div.create('ItemTemplateOutput', 'output-area');

    wrapper.appendChild(this.displayFileData(filename, columns, rows));
    wrapper.appendChild(this.displayHeadersFromSheet(header));

    console.log(header);

    return wrapper;
  },
  add(filename, columns, rows, header) {
    document
      .getElementById('ItemDropArea')
      .appendChild(this.createOutputArea(filename, columns, rows, header));
  },
};
