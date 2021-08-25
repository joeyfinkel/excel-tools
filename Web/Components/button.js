import { TextBox } from './textBox.js';

export const Button = {
  id: 'createSheetBtn',
  class: 'btn btn-secondary mt-3',
  text: 'Create New Sheet',
  async createNewSheet(file, data, originalHeaders, newHeaders) {
    const columnsByRow = await eel.get_columns_by_row(file, data)();
    const finalHeaders = await eel.set_final_headers(
      originalHeaders,
      newHeaders
    )();
    const finalColumns = await eel.final_data(
      file,
      columnsByRow,
      originalHeaders,
      newHeaders
    )();
    const newFilename = TextBox.reference().value;

    newFilename && eel.save_new_sheet(finalHeaders, finalColumns, newFilename);
  },
  create(file, data, originalHeaders, newHeaders) {
    const button = document.createElement('button');
    button.id = this.id;
    button.className = this.class;
    button.textContent = this.text;
    button.type = 'button';
    button.addEventListener(
      'click',
      () => this.createNewSheet(file, data, originalHeaders, newHeaders),
      false
    );

    return button;
  },
  add(id, file, data, originalHeaders, newHeaders) {
    document
      .getElementById(id)
      .appendChild(this.create(file, data, originalHeaders, newHeaders));
  },
};
