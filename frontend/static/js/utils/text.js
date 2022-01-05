import {
  createDocumentHeadings,
  createDocumentTitle,
} from '../components/elements/title.js';

/** The text for the drag and drop component on any page. */
export const lblText = `
  <div>
    <p class="fas fa-upload fa-2x"></p>
    <p>Drag file here or click to <strong>browse</strong> for one.</p>
  </div>
`;

/** Object containing the template types, titles, and headings. */
export const templateTypes = {
  main: {
    type: 'main',
    title: createDocumentTitle(true),
    headings: createDocumentHeadings(
      'Excel Tools',
      'Easily manipulate Excel sheets',
      ''
    ),
  },
  columnRemover: {
    type: 'column-remover',
    title: createDocumentTitle(false, 'Column Remover', false),
    headings: createDocumentHeadings(
      'Column Remover',
      'Easily remove any columns from a spreadsheet',
      'Start here by uploading a CSV or XLSX file'
    ),
    summaryAttributes: {
      title: 'Column Remover',
      text: `
        The column remover tool provides a quick and easy way to remove columns from your spreadsheet.
        Just upload the spreadsheet you want to remove columns from, select which sheet, and then select the columns you want to keep.
        Any header that is unselected will not be copied over to the new sheet. After, you will have a new spreadsheet with only the columns you want.
      `,
    },
    navbarAttributes: {
      link: 'column-remover',
      text: 'Column remover',
      icon: 'fas fa-cut',
    },
  },
  sheetMerger: {
    type: 'sheet-merger',
    title: createDocumentTitle(false, 'Sheet Merger', false),
    headings: createDocumentHeadings(
      'Sheet Merger',
      'Easily merge multiple sheets together',
      'Start by uploading the sheets you want to merge together, then select the columns to merge'
    ),
    summaryAttributes: {
      title: 'Sheet Merger',
      text: `
        The sheet merger tool allows you to merge columns together in a quick and easy way.
        Either upload multiple spreadsheets or just one. Then select the columns you wish to merge.
        Now, on the new sheet you will have one column of data instead of multiple.
      `,
    },
    navbarAttributes: {
      link: 'sheet-merger',
      text: 'Sheet merger',
      icon: 'fas fa-exchange-alt',
    },
  },
  itemTemplate: {
    type: 'item-template',
    title: createDocumentTitle(false, 'Item Template', true),
    headings: createDocumentHeadings(
      'Item Template Creator',
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file'
    ),
    summaryAttributes: {
      title: 'Item Template',
      text: `
        The item template creator is an easy way to create item templates.
        Get started by uploading an ASIN Data sheet.
        This tool will remove the columns that are not needed for the item template.
      `,
    },
    navbarAttributes: {
      link: 'item-template',
      text: 'Item template',
      icon: 'fas fa-barcode',
    },
  },
  imageTemplate: {
    type: 'image-template',
    title: createDocumentTitle(false, 'Image Template', true),
    headings: createDocumentHeadings(
      'Image Template Creator',
      'Create any image template easily!',
      `Start by uploading the file that contains the list of id'`
    ),
    summaryAttributes: {
      title: 'Image Template',
      text: `
        The image template creator is an easy way to create image templates.
        Get started by providing a link to a Google Drive folder that contains the images.
        This tool will get the link for every picture in that folder and add it to a spreadsheet.
        Repeat this process for as many folders of images there are.
        Once done, you will have an image template that is ready to be used.
      `,
    },
    navbarAttributes: {
      link: 'image-template',
      text: 'Image template',
      icon: 'far fa-image',
    },
  },
  missingDataTemplate: {
    type: 'missing-data-template',
    title: createDocumentTitle(false, 'missing-data-template', true),
    headings: createDocumentHeadings(
      'Missing Data Template Creator',
      'Create the missing data sheet easily',
      'Start by uploading an export from PDX'
    ),
    summaryAttributes: {
      title: 'Missing Data Sheet',
      text: `
        The missing data sheet creator provides an easy way to make the missing data sheets that we need all the time.
        Simply export from a category in PDX and import that file here.
        Everything that is required and empty will automatically be added to the sheet.
      `,
    },
    navbarAttributes: {
      link: 'missing-data-template',
      text: 'Missing data template',
      icon: 'fas fa-times',
    },
  },
  tutorials: {
    type: 'tutorials',
    title: createDocumentTitle(false, 'tutorials', false),
    headings: createDocumentHeadings(
      'Tutorials',
      'Find the tutorials for every tool here',
      ''
    ),
    navbarAttributes: {
      link: 'tutorials',
      text: 'Tutorials',
      icon: 'far fa-question-circle',
    },
  },
};

/** Object containing all data type attributes. */
export const dataAttributes = {
  dragDrop: { main: 'data-drag-drop', child: 'data-file-input' },
  sheetsView: 'data-sheets-view',
  headersView: 'data-headers-view',
  radio: 'data-sheet-radio',
  checkbox: 'data-header-checkbox',
  buttons: {
    nav: 'data-link',
    next: 'data-next-button',
    back: 'data-back-button',
    newSheet: 'data-create-sheet',
  },
};
