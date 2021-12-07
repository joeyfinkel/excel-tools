import { showSheetHeaders } from './nextButton.js';

/**
 * Creates an input radio element with a label.
 * @param {string} name Id for the radio element.
 * @returns {string} The HTML for a radio input
 */
export const createRadio = (name) => `
    <input
        type="radio"
        name="sheet"
        id="${name}"
        class="sheet-radio form-check-input"
    />
    <label for="${name}" class="form-check-label">${name}</label>
`;

/**
 * Adds an event listener to every radio button on the page.
 * @param {Event} file The file that was uploaded.
 * @param {string} templateType The type of template/page
 */
export const selectSheet = (file, templateType) => {
  const radios = document.querySelectorAll('.sheet-radio');

  radios &&
    radios.forEach((radio) =>
      radio.addEventListener(
        'change',
        async () => {
          // Read the data from the selected sheet
          const readFile = await readXlsxFile(file, { sheet: radio.id });
          const headers = await readFile[0];

          showSheetHeaders(templateType, radio.id, headers);
        },
        false
      )
    );
};
