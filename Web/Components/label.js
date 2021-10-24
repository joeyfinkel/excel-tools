import { Checkbox } from './checkbox.js';
import { Div } from './div.js';

export const Label = {
  /**
   * Creates a new label
   * @param {string} text Label's text
   * @returns A new label element
   */
  create(text) {
    const label = document.createElement('label');

    label.id = 'flexCheckDefault';
    label.className = 'form-check-label';
    label.setAttribute('for', Checkbox.id);
    label.innerHTML = text;

    return label;
  },
  renderHeaders(headers) {
    const headerLabelWrapper = Div.create(
      'headerLabelWrapper',
      'header-label-wrapper'
    );

    headers.forEach((header) => {
      const div = Div.create(
        'individualHeaderWrapper',
        'individual-header-wrapper'
      );

      div.appendChild(Checkbox.create(header));
      div.appendChild(this.create(header));
      headerLabelWrapper.appendChild(div);
    });

    return headerLabelWrapper;
  },
};
