import { headersView } from '../../built/headersView.js';
import {
  removeElementById,
  saveRowsAndColumns,
  showComponent,
} from '../../../utils/utils.js';
import { componentIds, dataAttributes } from '../../../utils/text.js';
import * as types from '../../../utils/types.js';

/**
 * Creates the next button to move on to the next view for creating the template sheet.
 * @returns {types.ITag} A font awesome icon of a right arrow.
 */
export const createNextButton = () =>
  `<i
    id="showColumnNames"
    class="fas fa-arrow-right fa-lg"
    ${dataAttributes.buttons.nextButton}
  ></i>`;

/**
 * Checks if next button is clicked on and shows the headers from the selected sheet.
 * @param {string} templateType Type of template the event is for.
 * @param {string} activeSheet The selected sheet.
 */
export const nextButtonEvent = (templateType, activeSheet) => {
  const key = `${activeSheet}-RowsAndColumns`;
  const activeSheetInfo = localStorage.getItem(key);
  const data = JSON.parse(activeSheetInfo);

  removeElementById(componentIds.sheetsView.container(templateType));

  // Creates a copy of the selected sheet data to be manipulated.
  saveRowsAndColumns(`Copy-${activeSheet}`, data);

  showComponent(
    headersView(data[0], templateType, `Headers From ${activeSheet}`)
  );
};
