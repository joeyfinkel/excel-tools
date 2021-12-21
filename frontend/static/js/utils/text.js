import {
  createDocumentTitle,
  createMainHeading,
  createSubheading,
} from '../components/elements/title.js';

/** The text for the drag and drop component on any page. */
export const lblText = `Drag file here or click to <strong>browse</strong> for one.`;

/** Object containing the template types, titles, and headings. */
export const templateTypes = {
  main: {
    type: 'main',
    title: createDocumentTitle(true),
    headings: [
      createMainHeading('Excel Tools'),
      createSubheading('Easily remove, merge, or create templates'),
    ],
  },
  columnRemover: {
    type: 'column-remover',
    title: createDocumentTitle(false, 'Column Remover', false),
    headings: [
      createMainHeading('Column Remover'),
      createSubheading(`Easily remove any columns from a spreadsheet`),
      createSubheading('Start here by uploading a CSV or XLSX file'),
    ],
  },
  itemTemplate: {
    type: 'item-template',
    title: createDocumentTitle(false, 'Item Template', true),
    headings: [
      createMainHeading('Item Template Creator'),
      createSubheading('Create any item template easily!'),
      createSubheading('Start here by uploading a CSV or XLSX file'),
    ],
  },
  imageTemplate: {
    type: 'image-template',
    title: createDocumentTitle(false, 'Image Template', true),
    headings: [
      createMainHeading('Image Template Creator'),
      createSubheading('Create any image template easily!'),
      createSubheading(
        `Start by uploading the file that contains the list of id's`
      ),
    ],
  },
  sheetMerger: {
    type: 'sheet-merger',
    title: createDocumentTitle(false, 'Sheet Merger', false),
    headings: [
      createMainHeading('Sheet Merger'),
      createSubheading('Easily merge multiple sheets together'),
      createSubheading(
        'Start by uploading the sheets you want to merge together, then select the columns to merge'
      ),
    ],
  },
};

/** Object containing all data type attributes. */
export const dataAttributes = {
  dragDrop: 'data-file-input',
  radio: 'data-sheet-radio',
  checkbox: 'data-header-checkbox',
  buttons: {
    navButton: 'data-link',
    nextButton: 'data-next-button',
    backButton: 'data-back-button',
    createNewSheet: 'data-create-sheet',
  },
};

/** Object containing all id's for elements. */
export const componentIds = {
  dragDrop: {
    main: 'dragDropContainer',
    /**
     * Sets the id of the children elements in the drag and drop container.
     * @param {string} templateType The template the drag and drop is being used for.
     * @returns {string} The id for the child elements of the drag and drop component.
     */
    children: (templateType) => `${templateType}DragDrop`,
  },
  sheetsView: {
    container: (templateType) => `${templateType}SheetsContainer`,
    sheetsWrapper: (templateType) => `${templateType}Sheets`,
  },
  headersView: {
    id: (templateType) => `${templateType}HeadersView`,
  },
};
