const documentTitle = 'Excel Tools';
const headingNumRef = {
  main: 1,
  subtitle: 5,
};
/**
 * Creates the title component for each page
 * @param {number} headingNum Number for heading (1-6)
 * @param  {string} text Text for the titles
 * @returns {string} The title component for each page
 */
export const create = (headingNum, text) => `
    <h${headingNum} class='h${headingNum} text-center mt-5'>
      <strong>${text}</strong>
    </h${headingNum}>`;

/**
 * Maps the list of titles in a `div`
 * @param {Array<string>} titles Array of all titles on a page
 * @returns {string} A div with the title
 */
export const map = (titles) =>
  `<div class="title">${titles.map((title) => title)}</div>`;

/**
 * Object of all titles used for the pages
 */
export const Titles = {
  main: {
    documentTitle,
    headings: [
      create(1, 'Excel Tools'),
      create(4, 'Create templates or merge sheets together'),
    ],
  },
  itemTemplate: {
    documentTitle: `${documentTitle} - Item Template Creator`,
    headings: [
      create(headingNumRef.main, 'Item Template Creator'),
      create(headingNumRef.subtitle, 'Create any item template easily!'),
      create(
        headingNumRef.subtitle,
        'Start here by uploading a CSV or XLSX file to get started'
      ),
    ],
  },
  imageTemplate: {
    documentTitle: `${documentTitle} - Image Template Creator`,
    headings: [create(headingNumRef.main, 'Image Template')],
  },
  sheetMerger: `${documentTitle} - Sheet Merger`,
};
