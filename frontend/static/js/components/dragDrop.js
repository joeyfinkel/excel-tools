import { sheetView } from './sheetView.js';
import { FileData } from '../utils/fileData.js';
import { onclick as checkboxOnclick } from './checkbox.js';
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
 * The onchange function for the drag and drop component. This function will get the sheet information,
 * hide the drag drop component, and display the sheet information.
 * @param {string} templateType Which page the event is being called on.
 */
export const onchange = (templateType) => {
  const template = document.getElementById(`${templateType}DragDrop`);

  template &&
    template.addEventListener(
      'change',
      async (e) => {
        const file = e.target.files[0];
        const sheets = await readXlsxFile(file, {
          getSheets: true,
        });
        const sheetData = await FileData.getSheetData(
          FileData.getSheets(sheets),
          file
        );

        // Hide the drag drop component
        document
          .getElementById('dragDropContainer')
          .setAttribute('class', 'hidden');

        // Display the sheet information
        document.getElementById(templateType).innerHTML += sheetView(
          templateType,
          sheetData
        );

        checkboxOnclick(templateType);
      },
      false
    );
};
