import { dragDropComponent } from '../../built/dragDrop.js';
import { dataAttributes } from '../../../utils/text.js';
import { sheetsViewComponent } from '../../sheets/component.js';
import {
  getActiveComponent,
  removeElement,
  showComponent,
} from '../../../utils/utils.js';

const { sheetsView, headersView } = dataAttributes;

/**
 * Creates the back button to go to back to the previous view.
 * @returns {string} A font awesome icon of a right arrow.
 */
export const createBackButton = () => `
  <p
    class='fas fa-arrow-left fa-lg position-absolute ms-3 mt-4'
    ${dataAttributes.buttons.back}
  ></p>
`;

/**
 * The logic for the back button.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template the event is being used for.
 * @param {string} lblText Text for the drag and drop component.
 */
export const backButtonEvent = (templateType, lblText) => {
  const { type } = templateType;

  if (getActiveComponent() === 'headersView') {
    // Remove headers view
    removeElement(`[${headersView}]`);
    // Show sheets view
    showComponent(
      sheetsViewComponent(
        templateType,
        JSON.parse(localStorage.getItem('sheetsInfo'))
      )
    );
  } else {
    // Remove sheets view
    removeElement(`[${sheetsView}]`);
    // Show drag and drop
    showComponent(dragDropComponent(type, lblText));
  }
};
