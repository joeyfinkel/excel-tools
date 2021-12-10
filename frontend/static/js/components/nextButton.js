import { headersView } from './headersView.js';
import { hide, showNextComponent } from '../utils/utils.js';
import { dataAttributes } from '../utils/dataAttributes.js';

/**
 * Creates the next button to move on to the next view for creating the template sheet.
 * @returns {string} A font awesome icon of a right arrow.
 */
export const createNextButton = () =>
  `<i
    id="showColumnNames"
    class="fas fa-arrow-right fa-lg"
    ${dataAttributes.nextButton}
  ></i>`;

/**
 * Checks if next button is clicked on and shows the headers from the selected sheet.
 * @param {string} templateType Type of template the event is for.
 * @param {string} activeSheet The selected sheet.
 */
export const nextButtonEvent = (templateType, activeSheet) => {
  const data = JSON.parse(localStorage.getItem(activeSheet));

  hide(`${templateType}Display`);
  showNextComponent(
    headersView(data[0], templateType, `Headers From ${activeSheet}`)
  );
};
