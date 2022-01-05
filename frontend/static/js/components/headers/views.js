import { titleSection } from '../elements/title.js';
import { getHeaders } from './sections.js';

/**
 * Creates the HTML for the column remover sheets view.
 * @param {string[]} columns List of columns of the selected sheet from the uploaded spreadsheet.
 * @returns {string} The HTML for the component when column remover is selected.
 */
export const columnRemover = (columns) => `
  <section id='${filename}Data'>
    ${titleSection(title)}
    ${getHeaders(columns)}
  </section>
`;
