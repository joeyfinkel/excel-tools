import { sheetsViewComponent } from '../sheets/component.js';
import { getSheetData } from '../../utils/fileData.js';
import { dataAttributes } from '../../utils/text.js';
import { removeElement, showComponent } from '../../utils/utils.js';

const {
  dragDrop: { main, child },
} = dataAttributes;
const dragDropSelector = `[${main}]`;

/**
 * Creates the drag and drop component.
 * @param {string} templateType The template the component is being used for.
 * @param {string} lblText The text to display.
 * @param {string} warningText The text to display under the drag and drop component.
 * @returns {string} The HTML for the drag and drop component.
 */
export const dragDropComponent = (templateType, lblText, warningText = '') => {
  const id = `${templateType}DragDrop`;

  return `
    <div
      class='drag-drop-container mx-auto mt-5'
      ${main}
    >
      <form class='mx-auto'>
        <input
          type='file'
          name=${id}
          id=${id}
          ${
            templateType === 'sheet-merger' || templateType === 'image-template'
              ? 'multiple'
              : ''
          }
          hidden
          ${child}
        />
        <label
          for=${id}
          class='text-center h6 drag-drop-label'
        >${lblText}</label>
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
   * @param {*[]} files The XLSX file that was uploaded.
   */
  const showSheetInformation = async (...files) => {
    const filesObj = {};
    const sheetDataObj = {};

    for (const file of files) {
      const sheets = await readXlsxFile(file, {
        getSheets: true,
      });
      const filename = file.name.replace('.xlsx', '');

      sheetDataObj[filename] = await getSheetData(sheets, file);

      // Removes the component if it exists.
      document.querySelector(dragDropSelector) &&
        removeElement(dragDropSelector);
    }

    filesObj['files'] = sheetDataObj;

    console.log(filesObj);
    
    localStorage.setItem('filesData', JSON.stringify(filesObj, null, 2));
    showComponent(sheetsViewComponent(templateType, filesObj));
  };

  /** Adds an on change event to the drag and drop component. */
  const onChange = () => {
    const dragDropContainer = document.querySelector(dragDropSelector);

    // Check if the drag and drop component exists and add an on change event.
    dragDropContainer &&
      dragDropContainer.addEventListener('change', async (e) => {
        const files = e.target.files;

        if (files.length === 1) showSheetInformation(files[0]);
        else if (files.length === 2) showSheetInformation(files[0], files[1]);
        else alert('Please choose 2 files only');
      });
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.matches(`[${child}]`)) onChange();
  });
};
