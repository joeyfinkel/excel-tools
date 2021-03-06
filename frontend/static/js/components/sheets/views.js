import { headingsSection, sheetDataSection } from './sections.js';
import { titleSection } from '../elements/title.js';

/**
 * Creates the HTML for the column remover sheets view.
 * @param {{files: {[{name: string, columns: number, rows: number, sheetData: any[]}]}}} filesObj The object with all the file data.
 * @returns {string} The HTML for the component when column remover is selected.
 */
export const columnRemover = (filesObj) => {
  let id = '',
    title = '',
    html = '';

  for (const files in filesObj) {
    const filenames = filesObj[files];

    for (const filename in filenames) {
      const dataFromFile = filenames[filename];
      id = filename;

      for (const data in dataFromFile) {
        const { name, columns, rows } = dataFromFile[data];
        title = `Chose a sheet from '${filename}'`;

        html += sheetDataSection(name, columns, rows);
      }
    }
  }

  return `
    <section id='${id}Data'>
      ${titleSection(title)}
      ${headingsSection()}
      <div>
        ${html}
      </div>
    </section>
  `;
};

/**
 * Creates the HTML for the sheet merger sheets view.
 * @param {[string, [string, number, number]]} sheetData Array containing the sheet names, total columns, and total rows from the uploaded spreadsheet.
 * @returns {string} The HTML for the component when on sheet merger view.
 */
export const sheetMergerComponent = (filesObj) => {
  const title = titleSection('Select a sheet from each file');
  let html = '';

  for (const files in filesObj) {
    /** Object with the filenames as keys and data as values */
    const filenamesObj = filesObj[files];

    for (const filename in filenamesObj) {
      const dataFromFile = filenamesObj[filename];
      let sheetData = '';

      for (const data in dataFromFile) {
        const { name, columns, rows } = dataFromFile[data];
        const radioId = `${filename}_${name}`;

        sheetData += sheetDataSection(name, radioId, columns, rows);
      }

      html += `
        <section id='${filename}Data' class='col overflow-auto'>
          <p class="h4 ms-3">${filename}:</p>
          ${headingsSection()}
          ${sheetData}
        </section>
      `;
    }
  }

  return `
    ${title}
    <div class='container mt-3'>
      <div class='row'>${html}</div>
    </div>
  `;
};
