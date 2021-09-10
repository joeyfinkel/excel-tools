import { DragAndDrop } from './Components/dragAndDrop.js';
import { FinalHeaderList } from './Data/headers.js';
import { FileData } from './Data/fileData.js';
import { NewSheetButton } from './Components/button.js';

const removeModal = (dropArea, modal) => {
  if (typeof dropArea !== 'undefined' && dropArea !== null)
    modal.remove(dropArea);
};

const createNewSheet = () => {
  const path = FileData.filePath;
  const data = FileData.columnData;
  const originalHeaders = FileData.originalHeaders;
  const newHeaders = FinalHeaderList.headers;
  NewSheetButton.createNewSheet(path, data, originalHeaders, newHeaders);
};

document
  .getElementById('itemTemplateButton')
  .addEventListener('click', () => createNewSheet(), false);

document
  .getElementById('btnCreateItemTemplate')
  .addEventListener('click', () => {}, false);

document.getElementById('imageTemplateButton').addEventListener(
  'click',
  () => {
    const dropArea = document.getElementById('ImageDropArea');
    const modal = document.getElementById('imageTemplateModal');
    const template = 'Image';

    removeModal(dropArea, modal);
    DragAndDrop.add('imageTemplateModalBody', template);
  },
  false
);
