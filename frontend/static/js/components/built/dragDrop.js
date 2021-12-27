import { sheetsView } from './sheetView.js';
import { getSheetData } from '../../utils/fileData.js';
import { removeElementById, showComponent } from '../../utils/utils.js';
import { dataAttributes, componentIds } from '../../utils/text.js';

const { dragDrop } = dataAttributes;
const {
  dragDrop: { main, children },
} = componentIds;

/**
 * Creates the drag and drop component.
 * @param {string} templateType The template the component is being used for.
 * @param {string} lblText The text to display.
 * @returns {string} The HTML for the drag and drop component.
 */
export const dragDropComponent = (templateType, lblText) => `
  <div
    id='${main}'
    class='drag-drop-container mx-auto mt-5'
  >
    <form class='mx-auto'>
      <input
        type='file'
        name=${children(templateType)}
        id=${children(templateType)}
        ${
          templateType === 'sheet-merger' || templateType === 'image-template'
            ? 'multiple'
            : ''
        }
        hidden
        ${dragDrop}
      />
      <label
        for=${children(templateType)}
        class='text-center h6 drag-drop-label'
      >${lblText}</label>
    </form>
  </div>
`;

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
    const sheets = await readXlsxFile(file, {
      getSheets: true,
    });
    const sheetData = await getSheetData(sheets, file);

    localStorage.setItem('filename', file.name);

    removeElementById(main);
    showComponent(sheetsView(templateType, sheetData, file.name));
  };

  /** Adds an on change event to the drag and drop component. */
  const onChange = () => {
    const dragDropContainer = document.getElementById(main);

    // Check if the drag and drop component exists and add an on change event.
    dragDropContainer &&
      dragDropContainer.addEventListener('change', async (e) => {
        console.log(e.target.files);
        showSheetInformation(e.target.files[0]);
      });
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.matches(`[${dragDrop}]`)) onChange();
  });
};
