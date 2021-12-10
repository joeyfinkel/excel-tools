import { sheetView } from './sheetView.js';
import { FileData } from '../utils/fileData.js';
import { hide, showNextComponent } from '../utils/utils.js';
import { dataAttributes } from '../utils/dataAttributes.js';
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
    data-drag-drop
  >
    <form action="" class='mx-auto'>
      <input
        type="file"
        name=${fileInputId}
        id=${fileInputId}
        hidden
        ${dataAttributes.dragDrop}
        />
        <label for=${fileInputId} class='text-center h6' data-lbl>${lblText}</label>
    </form>
  </div>
`;

/**
 * If the drag and drop component exists on the page, an on change event is added
 * to get the file name and show the `sheetView` component.
 * @param {string} templateType Name of the template.
 */
export const dragDropOnchange = (templateType) => {
  const dragDropContainer = document.getElementById('dragDropContainer');

  /**
   * Reads the uploaded XLSX file and gets information on each sheet.
   * @param {Event} file The XLSX file that was uploaded.
   * @returns {Promise<void>} Hides the drag drop component and shows that sheet view component.
   */
  const showSheetInformation = async (file) => {
    /**
     * List of sheets from the uploaded file.
     * @type {string{}}
     */
    const sheets = await readXlsxFile(file, {
      getSheets: true,
    });
    const sheetData = await FileData.getSheetData(
      FileData.getSheets(sheets),
      file
    );

    hide('dragDropContainer');
    showNextComponent(sheetView(templateType, sheetData));
  };

  // Check if the drag and drop component exists and add an on change event.
  dragDropContainer &&
    dragDropContainer.addEventListener('change', async (e) =>
      showSheetInformation(e.target.files[0])
    );
};
