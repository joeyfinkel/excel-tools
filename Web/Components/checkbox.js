import { Headers } from '../Utils/headers.js';

export const Checkbox = {
  id: 'flexCheckDefault',
  class: 'form-check-input header-checkboxes',
  name: 'headerCheckbox',
  create(name) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `${this.id}_${name}`;
    checkbox.className = this.class;
    checkbox.name = this.name;
    checkbox.value = name;
    checkbox.addEventListener(
      'click',
      () =>
        (Headers.headers =
          Headers.headers === 0 ? '' : Headers.finalHeaderList(checkbox.value)),
      false
    );

    return checkbox;
  },
  add(id, name) {
    document.getElementById(id).appendChild(this.create(name));
  },
};
