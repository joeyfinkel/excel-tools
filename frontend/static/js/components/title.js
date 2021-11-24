const documentTitle = 'Excel Tools';
const headingNumRef = {
  main: 1,
  subTitle: 5,
};
const main = headingNumRef.main;
const subTitle = headingNumRef.subTitle;

/**
 * Creates the title component for each page
 * @param {number} headingNum Number for heading (1-6)
 * @param  {string} text Text for the titles
 * @returns {string} The title component for each page
 */
const create = (headingNum, text) => `
    <h${headingNum} class='h${headingNum} text-center mt-5 mb-0'>
      <strong>${text}</strong>
    </h${headingNum}>`;

/**
 * Maps the list of titles in a `div`
 * @param {string[]} titles Array of all titles on a page
 * @returns {string} A div with the title
 */
export const map = (titles) => titles.map((title) => title).join('');

/**
 * Object of all titles used for the pages
 */
export const Titles = {
  main: {
    documentTitle,
    headings: [
      create(main, 'Excel Tools'),
      create(subTitle, 'Create templates or merge sheets together'),
    ],
  },
  itemTemplate: {
    documentTitle: `${documentTitle} - Item Template Creator`,
    headings: [
      create(main, 'Item Template Creator'),
      create(subTitle, 'Create any item template easily!'),
      create(
        subTitle,
        'Start here by uploading a CSV or XLSX file to get started'
      ),
    ],
  },
  imageTemplate: {
    documentTitle: `${documentTitle} - Image Template Creator`,
    headings: [create(main, 'Image Template')],
  },
  sheetMerger: {
    documentTitle: `${documentTitle} - Sheet Merger`,
    headings: [create(main, 'Sheet Merger')],
  },
};
