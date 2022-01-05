import { dataAttributes } from '../../utils/text.js';

/**
 * Creates an input radio element with a label.
 * @param {string} name Name for the radio element.
 * @param {string} id Id for the radio element.
 * @returns {string} The HTML for a radio input
 */
export const createRadio = (name, id) => `
  <input
      type="radio"
      id="${id}"
      name="${name}"
      value="${name}"
      class="form-check-input"
      ${dataAttributes.radio}
  />
  <label for="${id}" class="form-check-label">${name}</label>
`;
