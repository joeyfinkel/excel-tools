import { Buttons } from './Components/button.js';
import { FileData } from './Utils/fileData.js';
import { Label } from './Components/label.js';
import { TextBoxWrapper } from './Components/textBox.js';
import { RowData } from './Utils/rows.js';

const itemTemplateUpload = document.getElementById('itemTemplateUpload');

//#region Item Template
document
  .getElementById('selectCSVFile')
  .addEventListener('click', () => Buttons.selectCSVFile.action(), false);

itemTemplateUpload &&
  document.getElementById('itemTemplateUpload').addEventListener(
    'change',
    async (e) => {
      const sheetData = await readXlsxFile(itemTemplateUpload.files[0]);
      Buttons.itemTemplateUpload.action(sheetData, e);
    },
    false
  );

document.getElementById('btnCreateItemTemplate').addEventListener(
  'click',
  async () => {
    const sheetData = await readXlsxFile(itemTemplateUpload.files[0]);

    Buttons.createItemTemplate.action(sheetData);
  },
  false
);
//#endregion

//#region Image Template
document.getElementById('imageTemplateButton').addEventListener(
  'click',
  () => {
    document.title = 'Image Template Creator';
    showModalBodyContent('ImageDropArea', 'imageTemplateModal', 'Image');
  },
  false
);
//#endregion

const data = [
  // Row #1
  [
    // Column #1
    {
      value: 'Name',
      fontWeight: 'bold',
    },
    // Column #2
    {
      value: 'Date of Birth',
      fontWeight: 'bold',
    },
    // Column #3
    {
      value: 'Cost',
      fontWeight: 'bold',
    },
    // Column #4
    {
      value: 'Paid',
      fontWeight: 'bold',
    },
  ],
  // Row #2
  [
    // Column #1
    {
      type: String,
      value: 'John Smith',
    },
    // Column #2
    {
      type: Date,
      value: new Date(),
      format: 'mm/dd/yyyy',
    },
    // Column #3
    {
      type: Number,
      value: 1800,
    },
    // Column #4
    {
      type: Boolean,
      value: true,
    },
  ],
  // Row #3
  [
    // Column #1
    {
      type: String,
      value: 'Alice Brown',
    },
    // Column #2
    {
      type: Date,
      value: new Date(),
      format: 'mm/dd/yyyy',
    },
    // Column #3
    {
      type: Number,
      value: 2600,
    },
    // Column #4
    {
      type: Boolean,
      value: false,
    },
  ],
];
