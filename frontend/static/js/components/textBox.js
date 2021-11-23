import { Div } from './div.js';

const createTextBox = () => {
  const textBox = document.createElement('input');

  textBox.type = 'text';
  textBox.id = 'txtNewFilename';
  textBox.class = 'form-control';
  textBox.placeholder = 'Enter new filename here';

  return textBox;
};

const createFormText = () => {
  const div = Div.create('newFilenameHelpBlock', 'form-text');

  div.innerHTML =
    'You do not have to include the file extension. After you create the new sheet it will automatically be an excel sheet';

  return div;
};

export const TextBoxWrapper = {
    /**
     * Creates a new wrapper div for the text box
     * @returns A new div element
     */
  create() {
    return Div.create('txtNewFilenameWrapper', 'new-filename-wrapper');
    },
    /**
     * Adds a text box and fom text to the wrapper, then adds the wrapper to the specified tag
     * @param {string} id Id of the tag to add the wrapper div to
     */
  add(id) {
    const wrapper = this.create();

    wrapper.appendChild(createTextBox());
    wrapper.appendChild(createFormText());

    document.getElementById(id).appendChild(wrapper);
  },
};
