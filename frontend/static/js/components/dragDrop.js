import { FileData } from '../Utils/fileData.js';

/**
 * The drag and drop object.
 */
export const DragDrop = {
  /**
   * Creates a a drag and drop component.
   * @param {string} fileInputId Id of the file input tag.
   * @param {string} lblText Text to display.
   * @returns {string} A drag and drop component.
   */
  create(fileInputId, lblText) {
    return `<form action="" class='mx-auto'>
              <input
                type="file"
                name=${fileInputId}
                id=${fileInputId}
                hidden
               />
                <label for=${fileInputId} class='mx-auto h6'>${lblText}</label>
            </form>`;
  },
  /**
   * Adds an onchange event to the drag and drop component.
   * @param {string} fileInputId Id of the file input tag.
   * @param {string} outputId Id of the output tag
   */
  onChange(fileInputId, outputId) {
    const fileInput = document.getElementById(fileInputId);

    fileInput.addEventListener(
      'change',
      async (e) => {
        const sheets = await readXlsxFile(fileInput.files[0], {
          getSheets: true,
        });
        const sheetNames = FileData.getSheets(sheets);
        const sheetInfo = await FileData.getSheetData(
          sheetNames,
          fileInput.files[0]
        );
        const sheetInfoObj = arrayToObj(sheetInfo);

        sheetInfoObj.map((info) =>
          FileData.renderFileData(outputId, info)
        );
      },
      false
    );
  },
};

const arrayToObj = (array) => {
  return array.map((el) => {
    const arr = el;
    const [sheetName, columns, rows] = arr;
    return { sheetName, columns, rows };
  });
};
