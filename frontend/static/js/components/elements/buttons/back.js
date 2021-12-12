import {
  dataAttributes,
  hide,
  showNextComponent,
} from '../../../utils/utils.js';
import { dragDrop } from '../../built/dragDrop.js';
import { sheetView } from '../../built/sheetView.js';
import * as types from '../../../utils/types.js';

/**
 * Creates the back button to go to back to the previous view.
 * @returns {types.ITag} A font awesome icon of a right arrow.
 */
export const createBackButton = () => `
  <i
    id="previousView"
    class="fas fa-arrow-left fa-lg"
    ${dataAttributes.backButton}
  ></i>
`;

/**
 * The logic for the back button.
 * @param {string} templateType Name of template.
 * @param {string} lblText Text for the drag and drop component.
 */
export const backButtonEvent = (templateType, lblText) => {
  const backButton = document.getElementById('previousView');

  switch (templateType) {
    case `${templateType}Display`:
      backButton.classList.add('active');
      hide(`${templateType}Display`);
      showNextComponent(dragDrop(`${templateType}DragDrop`, lblText));
      break;
    case `${templateType}ColumnsView`:
      backButton.classList.add('active');
      hide(`${templateType}ColumnsView`);
      showNextComponent(
        sheetView(templateType, JSON.parse(localStorage.getItem('sheets')))
      );
      break;
    default:
      backButton.classList.remove('active');
      break;
  }
};
