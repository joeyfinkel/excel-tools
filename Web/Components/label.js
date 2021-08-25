import { Checkbox } from './checkbox.js';
import { Form } from './form.js';

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
    headers.forEach((header) => {
      Checkbox.add(Form.id, header);
      this.add(Form.id, header);
    });
  },
};
