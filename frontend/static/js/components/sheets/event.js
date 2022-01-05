import { dataAttributes, lblText } from '../../utils/text.js';
import { nextButtonEvent } from '../elements/buttons/next.js';
import { backButtonEvent } from '../elements/buttons/back.js';

/** @type {string[]} The selected sheet. */
export const activeSheet = [];

/**
 * Handles all the events for the sheet view component.
 * @param {{type: string, title: string, headings: string[]}} templateType The template the event is for.
 */
export const sheetsViewEvent = (templateType) => {
  document.body.addEventListener('click', (e) => {
    const { radio, buttons } = dataAttributes;

    if (e.target.matches(`[${radio}]`)) activeSheet.push(e.target.id);

    if (e.target.matches(`[${buttons.next}]`)) nextButtonEvent(activeSheet[0]);

    if (e.target.matches(`[${buttons.back}]`))
      backButtonEvent(templateType, lblText);
  });
};
