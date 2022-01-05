import { dataAttributes } from '../../utils/text.js';
import { createNewSheetEvent } from '../elements/buttons/createSheet.js';
import { addToFinalHeadersList } from '../elements/checkbox.js';
import { activeSheet } from '../sheets/event.js';

/**
 * The events that take place while on the headers view component.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the event is being called on.
 * @param {string} lblText The text for the label for the drag and drop component.
 */
export const headersViewEvents = (templateType, lblText) => {
  document.body.addEventListener('click', async (e) => {
    const { checkbox, buttons } = dataAttributes;

    if (e.target.matches(`[${checkbox}]`)) addToFinalHeadersList(e.target.id);

    if (e.target.matches(`[${buttons.newSheet}]`))
      await createNewSheetEvent(activeSheet[0], templateType, lblText);
  });
};
