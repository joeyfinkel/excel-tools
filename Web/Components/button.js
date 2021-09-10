import { TextBox } from './textBox.js';
import { FileData } from '../Data/fileData.js';

export const Button = {
  create(className, id, text, type) {
    const button = document.createElement('button');
    button.className = className;
    button.id = id;
    button.textContent = text;
    button.type = type;

    return button;
  },
};

export const UploadCSVButton = {
  create(className, id, text, type) {
    const button = document.createElement('button');
    button.className = className;
    button.id = id;
    button.textContent = text;
    button.type = type;

    button.addEventListener(
      'click',
      async () => FileData.showSheetInformation(),
      false
    );
    return button;
  },
};

export const ImageUploadButton = {
  create(className, id, text, type) {
    const button = document.createElement('button');
    button.className = className;
    button.id = id;
    button.textContent = text;
    button.type = type;

    button.addEventListener(
      'click',
      async () => {
        console.log('ImageUploadButton');
      },
      false
    );
    return button;
  },
};

export const IdUploadButton = {
  create(className, id, text, type) {
    const button = document.createElement('button');
    button.className = className;
    button.id = id;
    button.textContent = text;
    button.type = type;

    button.addEventListener(
      'click',
      async () => {
        console.log('IdUploadButton');
      },
      false
    );
    return button;
  },
};

export const NewSheetButton = {
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
};
