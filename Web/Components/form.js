import { Label } from './label.js';

export const Form = {
  id: 'headerForm',
  class: 'header-area-form',
  create() {
    const form = document.createElement('form');
    form.id = this.id;
    form.className = this.class;

    return form;
  },
  add(id) {
    document.getElementById(id).appendChild(this.create());
  },
  createHeaderOutputForm(header) {
    const form = this.create();

    form.appendChild(Label.createForEachHeader(header));

    return form;
  },
};
