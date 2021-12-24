import { dataAttributes } from '../../utils/text.js';

/**
 * Used when `templateType.type === 'column-remover'`.
 *
 * List of final headers to use for the new sheet.
 *
 * @type {string[]}  */
export const finalHeaders = [];

const boxAttr = dataAttributes.checkbox;

/**
 * Creates a checkbox with a unique Id and name.
 * @param {string} name The name for the checkbox. Used for the Id and name.
 * @returns {string} A checkbox.
 */
export const createCheckbox = (name) => `
  <input
    type="checkbox"
    name="${boxAttr}"
    id="${name}"
    ${boxAttr}
  />
  <label for="${name}">${name}</label>
`;

export const addToFinalHeadersList = (header) => {
  finalHeaders.push(header);

  return finalHeaders;
};
