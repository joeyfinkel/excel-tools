import { dataAttributes } from '../../utils/utils.js';

/**
 * Creates an input radio element with a label.
 * @param {string} name Id for the radio element.
 * @returns {string} The HTML for a radio input
 */
export const createRadio = (name) => `
    <input
        type="radio"
        name="sheet"
        id="${name}"
        class="sheet-radio form-check-input"
        ${dataAttributes.radio}
    />
    <label for="${name}" class="form-check-label">${name}</label>
`;
