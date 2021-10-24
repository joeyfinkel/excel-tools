import { FileData } from '../Utils/fileData.js';
import { Headers } from '../Utils/headers.js';
import { RowData } from '../Utils/rows.js';
import { Label } from './label.js';
import { TextBoxWrapper } from './textBox.js';

const itemTemplateUpload = document.getElementById('itemTemplateUpload');

/**
 * Houses all the buttons' actions on the DOM
 */
export const Buttons = {
  selectCSVFile: {
    /**
     * The onClick function to allow file upload with a button
     */
    action() {
      itemTemplateUpload.click();
    },
  },
  itemTemplateUpload: {
    /**
     * Displays information on the sheet
     * @param {*[]} sheetData Original data from sheet
     * @param {Event} e Event from onclick
     */
    action(sheetData, e) {
      const headers = FileData.getHeaders_Original(sheetData);

      FileData.renderFileData('fileDataOutput', e, sheetData);

      document
        .getElementById('fileDataOutput')
        .appendChild(Label.renderHeaders(headers));

      TextBoxWrapper.add('fileDataOutput');
    },
  },
  createItemTemplate: {
    /**
     * Modifies the original data to be used for creating the new sheet
     * @param {*[]} sheetData Original data from the sheet
     */
    action(sheetData) {
      console.log(sheetData);
      console.log(RowData.getModifiedRows(sheetData));

      // finalData.forEach((cell) => (finalData = rowToObj.createEachCell(cell)));
      // finalData.forEach((cell) => console.log(rowToObj.createEachCell(cell)));
      // console.log(finalData);
    },
  },
};
