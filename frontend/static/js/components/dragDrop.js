import { sheetView } from './sheetView.js';
import { FileData } from '../utils/fileData.js';
/**
 * Creates the drag and drop component.
 * @param {string} fileInputId Id for the file input element.
 * @param {string} lblText The text to display.
 * @returns {string} HTML component for the file input.
 */
export const dragDrop = (fileInputId, lblText) => `
    <div
      id="dragDropContainer"
      class="drag-drop-container mx-auto mt-5"
    >
      <form action="" class='mx-auto'>
        <input
          type="file"
          name=${fileInputId}
          id=${fileInputId}
          hidden
          />
          <label for=${fileInputId} class='text-center h6'>${lblText}</label>
      </form>
    </div>
    `;

const arrayToObj = (array) => {
  return array.map((el) => {
    const arr = el;
    const [sheetName, columns, rows] = arr;
    return { sheetName, columns, rows };
  });
};

/**
 * The onchange function for the drag and drop component. This function will get the sheet information.
 * hide the drag drop component, and display the sheet information.
 * @param {string} templateType Which page the event is being called on.
 * @param {Event} e The event from the file upload.
 * @returns {Promise<string>} The `sheetView` component.
 */
const showSheetInformation = async (templateType, file) => {
  const sheets = await readXlsxFile(file, {
    getSheets: true,
  });
  const sheetData = await FileData.getSheetData(
    FileData.getSheets(sheets),
    file
  );

  // Hide the drag drop component
  document.getElementById('dragDropContainer').style.display = 'none';

  return new Promise((resolve, reject) => {
    resolve(sheetView(templateType, sheetData));
    reject(new Error(`${file} is not found`));
  });
};

/**
 * If the drag and drop component exists on the page, an on change event is added
 * to get the file name and show the `sheetView` component.
 * @param {string} templateType Name of the template.
 */
export const dragDropOnchange = async (templateType) => {
  const template = document.getElementById(templateType);

  // Check if the drag and drop component exists and add an on change event.
  template &&
    template.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      const sheetViewComp = await showSheetInformation(templateType, file);

      template.innerHTML += sheetViewComp;
    });
};
