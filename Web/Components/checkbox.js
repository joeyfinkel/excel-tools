import { FinalHeaderList } from '../Data/headers.js';

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
        FinalHeaderList.headers === 0
          ? FinalHeaderList.showMessage()
          : FinalHeaderList.changeHeadersToKeepMessage(checkbox),
      false
    );

    return checkbox;
  },
  add(id, name) {
    document.getElementById(id).appendChild(this.create(name));
  },
};
