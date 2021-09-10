import { Checkbox } from './checkbox.js';
import { Form } from './form.js';
import { Div } from './div.js';

export const Label = {
  id: 'flexCheckDefault',
  class: 'form-check-label',

  create(text) {
    const label = document.createElement('label');
    label.id = this.id;
    label.className = this.class;
    label.setAttribute('for', Checkbox.id);
    label.innerHTML = text;

    return label;
  },
  add(id, lblTxt) {
    const element = document.getElementById(id);

    element.appendChild(this.create(lblTxt));
    element.appendChild(document.createElement('br'));
  },
  createForEachHeader(headers) {
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
