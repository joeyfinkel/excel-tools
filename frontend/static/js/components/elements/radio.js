import { dataAttributes } from '../../utils/text.js';

/**
 * Creates an input radio element with a label.
 * @param {string} radioName Id for the radio element.
 * @returns {string} The HTML for a radio input
 */
export const createRadio = (radioName) => `
  <input
      type="radio"
      id="${radioName}"
      name="${radioName}"
      value="${radioName}"
      class="form-check-input"
      ${dataAttributes.radio}
  />
  <label for="${radioName}" class="form-check-label">${radioName}</label>
`;
