import { FileData } from './Data/fileData.js';

document.getElementById('select-file').addEventListener(
  'click',
  async () => {
    FileData.showSheetInformation();
  },
  false
);
