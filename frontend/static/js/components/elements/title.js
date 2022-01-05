/**
 * Creates the title section for the component.
 * @param {string} title The title of the component.
 * @returns {string} The HTML for the title section of the component.
 */
export const titleSection = (title) => `
  <p class='ms-5 my-4 h2 text-center'>
    <strong>${title}</strong>
  </p>
`;

/**
 * Creates the string for the document title. Implement by setting to `document.title`.
 * @param {boolean} main If true the main document title will be returned, otherwise return will be specific to `templateType`.
 * @param {string} templateType Name of the template to create the document title for.
 * @param {boolean} creator Set to false by default. If true the word creator will appear after `templateType`.
 * @returns {string} The string for the document title.
 */
export const createDocumentTitle = (
  main,
  templateType = '',
  creator = false
) => {
  if (main) return 'Excel Tools';
  if (creator) return `Excel Tools - ${templateType} Creator`;
  else return `Excel Tools - ${templateType}`;
};

/**
 * Creates the main heading HTML.
 * @param {string} text The text for the heading.
 * @returns {string} `<h1>text</h1>`
 */
const createMainHeading = (text) => `
  <h1 class='h1 text-center mt-4 mb-2'>
    <strong>${text}</strong>
  </h1>
`;

/**
 * Creates the subheading HTML.
 * @param {string} text The text for the heading.
 * @returns {string} `<h5>text</h5>`
 */
const createSubheading = (text) => `
  <h5 class='h5 text-center mt-4 mb-2'>
    <strong>${text}</strong>
  </h5>
`;

export const createDocumentHeadings = (...text) => [
  createMainHeading(text[0]),
  createSubheading(text[1]),
  createSubheading(text[2]),
];
