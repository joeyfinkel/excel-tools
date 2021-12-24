import { sheetsView } from './sheetView.js';
import { getSheetData } from '../../utils/fileData.js';
import { removeElementById, showComponent } from '../../utils/utils.js';
import { dataAttributes, componentIds } from '../../utils/text.js';

/**
 * Creates the drag and drop component.
 * @param {string} templateType The template the component is being used for.
 * @param {string} lblText The text to display.
 * @returns {string} HTML component for the file input.
 */
export const dragDrop = (templateType, lblText) => {
  const childId = componentIds.dragDrop.children(templateType);

  return `
    <div
      id='${componentIds.dragDrop.main}'
      class='drag-drop-container mx-auto mt-5'
    >
      <form class='mx-auto'>
        <input
        type='file'
        name=${childId}
        id=${childId}
        hidden
        ${dataAttributes.dragDrop}
        />
        <label for=${childId} class='text-center h6'>${lblText}</label>
      </form>
    </div>
  `;
};

/**
 * Adds an event to the drag and drop component to read the data from the uploaded file and move to the next component.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template the event is being used for.
 */
export const dragDropEvent = (templateType) => {
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
    const sheetData = await getSheetData(sheets, file);

    removeElementById('dragDropContainer');
    showComponent(sheetsView(templateType, sheetData));
  };

  /** Adds an on change event to the drag and drop component. */
  const onChange = () => {
    const dragDropContainer = document.getElementById('dragDropContainer');

    // Check if the drag and drop component exists and add an on change event.
    dragDropContainer &&
      dragDropContainer.addEventListener('change', async (e) =>
        showSheetInformation(e.target.files[0])
      );
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.matches(`[${dataAttributes.dragDrop}]`)) onChange();
  });
};
