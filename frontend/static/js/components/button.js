import { FileData } from '../Utils/fileData.js';
import { Headers } from '../Utils/headers.js';
import { Rows } from '../Utils/rows.js.js';
import { Label } from './label.js';
import { TextBoxWrapper } from './textBox.js';

/**
 * Houses all the buttons' actions on the DOM
 */
export const Buttons = {
  /**
   * Allows the user to upload files with a button instead of the input type file
   * @param {HTMLElement} button Id of the file upload
   * @param {HTMLElement} fileUploadId Id of the file upload
   */
  selectFile(button, fileUploadId) {
    button.addEventListener('click', () => fileUploadId.click(), false);
  },
  itemTemplate: {
    /**
     * Displays information on the sheet
     * @param {HTMLElement} fileUploadId Id of the file upload
     * @param {Event} e Event from onclick
     */
    upload(fileUploadId) {
      fileUploadId &&
        fileUploadId.addEventListener(
          'change',
          async (e) =>
            FileData.getSheets(fileUploadId.files[0]).then((rows) => {
              const headers = FileData.getHeaders_Original(rows);

              FileData.renderFileData('fileDataOutput', e, rows);

              document
                .getElementById('fileDataOutput')
                .appendChild(Label.renderHeaders(headers));

              TextBoxWrapper.add('fileDataOutput');
            }),
          false
        );
    },
    /**
     * Modifies the original data to be used for creating the new sheet
     * @param {HTMLElement} fileUploadId Id of file upload
     * @param {string} btnId Id of button to write data to new sheet
     */
    create(fileUploadId, btnId) {
      document.getElementById(btnId).addEventListener(
        'click',
        async () => {
          const create = Rows.create;
          const sheetData = await readXlsxFile(fileUploadId.files[0]);
          const modifiedData = Rows.modify.remove(
            sheetData[0],
            FileData.getListOfData(sheetData)
          );
          const cell = create.cell(modifiedData);
          const cellObj = create.cellObj(cell);
          const rowWithCells = create.rowWithCells(
            cellObj,
            Headers.headers.length
          );

          console.log(modifiedData)

          await writeXlsxFile(rowWithCells, {
            fileName: document.getElementById('txtNewFilename').value,
          });
        },
        false
      );
    },
  },
};
