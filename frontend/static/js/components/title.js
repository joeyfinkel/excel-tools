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
const createHeading = (headingNum, text) => `
  <h${headingNum}
    class='h${headingNum} text-center mt-4 mb-2'
  >
    <strong>${text}</strong>
  </h${headingNum}>
`;

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
      createHeading(main, 'Excel Tools'),
      createHeading(subTitle, 'Create templates or merge sheets together'),
    ],
  },
  itemTemplate: {
    documentTitle: `${documentTitle} - Item Template Creator`,
    headings: [
      createHeading(main, 'Item Template Creator'),
      createHeading(subTitle, 'Create any item template easily!'),
      createHeading(
        subTitle,
        'Start here by uploading a CSV or XLSX file to get started'
      ),
    ],
  },
  imageTemplate: {
    documentTitle: `${documentTitle} - Image Template Creator`,
    headings: [
      createHeading(main, 'Image Template'),
      createHeading(subTitle, 'Create any image template easily'),
      createHeading(
        5,
        `Start by uploading the file that contains the list of id's`
      ),
    ],
  },
  sheetMerger: {
    documentTitle: `${documentTitle} - Sheet Merger`,
    headings: [
      createHeading(main, 'Sheet Merger'),
      createHeading(5, 'Easily merge multiple sheets together'),
      createHeading(
        5,
        'Start by uploading the sheets you want to merge together, then select the columns to merge'
      ),
    ],
  },
};
