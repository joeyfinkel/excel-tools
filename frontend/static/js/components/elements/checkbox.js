import { dataAttributes } from '../../utils/utils.js';

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

/**
 * Checks if the selected header is in the list of headers.
 * Adds the header to `headersList` if it's not there already.
 * If the `selectedHeader` is in `headersList`, it will be removed.
 * @returns {Promise.<string[]>} An array with the headers the user selected.
 */
export const comparedHeaders = () => {
  const checkbox = document.querySelector(`input[name='${boxAttr}']`);
  /** @type {string[]} */
  const headers = [];

  document.body.addEventListener('change', async (e) => {
    if (e.target.matches(`[${boxAttr}]`))
      if (checkbox.checked) headers.push(e.target.id);
  });

  return new Promise((resolve, reject) => resolve(headers));
};
