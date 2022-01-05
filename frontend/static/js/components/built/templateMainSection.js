import { lblText } from '../../utils/text.js';
import { dragDropComponent } from './dragDrop.js';

/**
 * Creates the HTML that will display titles and the drag and drop component.
 * This can be used for every view.
 * @param {string} title Array of the headings that are shown on the every page.
 * @param {string} templateType The view the drag and drop component is being used for.
 * @param {string} warningText The text to display under the drag and drop component.
 * @returns {string} The HTML template of the titles and drag drop component
 * that is shown on every page.
 */
export const templateMainSection = (title, templateType, warningText = '') => `
  <div class="main-section mx-auto">
    <div class="title pt-2">
      ${title}
    </div>
    <div id="sheetDisplays" class="mx-auto">${dragDropComponent(
      templateType,
      lblText,
      warningText
    )}</div>
  </div>
`;
