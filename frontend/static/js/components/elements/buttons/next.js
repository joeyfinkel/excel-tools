import { removeElement, showComponent } from '../../../utils/utils.js';
import { dataAttributes } from '../../../utils/text.js';
import { headersViewComponent } from '../../headers/component.js';
import { getSheetDataFromStorage } from '../../../utils/fileData.js';

const { sheetsView, buttons } = dataAttributes;

/**
 * Creates the next button to move on to the next view for creating the template sheet.
 * @returns {string} A font awesome icon of a right arrow.
 */
export const createNextButton = () =>
  `<p
    class="fas fa-arrow-right fa-lg position-absolute float-end me-3 mb-4"
    ${buttons.next}
  ></p>
`;

/**
 * Checks if next button is clicked on and shows the headers from the selected sheet.
 * @param {string} selectedSheet The selected sheet.
 */
export const nextButtonEvent = (selectedSheet) => {
  const headers = getSheetDataFromStorage(selectedSheet)[0][0];

  removeElement(`[${sheetsView}]`);
  showComponent(headersViewComponent(headers, selectedSheet));
};
