import {
  getActiveComponent,
  removeElementById,
  showComponent,
} from '../../../utils/utils.js';
import { dragDrop } from '../../built/dragDrop.js';
import { sheetView } from '../../built/sheetView.js';
import * as types from '../../../utils/types.js';
import { componentIds, dataAttributes } from '../../../utils/text.js';

/**
 * Creates the back button to go to back to the previous view.
 * @returns {types.ITag} A font awesome icon of a right arrow.
 */
export const createBackButton = () => `
  <i
    id="previousView"
    class="fas fa-arrow-left fa-lg"
    ${dataAttributes.buttons.backButton}
  ></i>
`;

/**
 * The logic for the back button.
 * @param {string} templateType Name of template.
 * @param {string} lblText Text for the drag and drop component.
 */
export const backButtonEvent = (templateType, lblText) => {
  const {
    sheetsView: { container },
    headersView: { id },
  } = componentIds;

  if (getActiveComponent(templateType) === 'headersView') {
    // Remove headers view
    removeElementById(id(templateType));
    // Show sheets view
    showComponent(
      sheetView(templateType, JSON.parse(localStorage.getItem('sheetsInfo')))
    );
  } else {
    // Remove sheets view
    removeElementById(container(templateType));
    // Show drag and drop
    showComponent(dragDrop(templateType, lblText));
  }
};
