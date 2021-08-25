export const TextBox = {
  id: 'newFilename',
  class: 'form-control',
  placeholder: 'Enter new filename',
  text: '',
  reference() {
    return document.getElementById(this.id);
  },
  create() {
    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.className = this.class;
    textBox.id = this.id;
    textBox.value = this.text;
    textBox.placeholder = this.placeholder;

    return textBox;
  },
  add(id) {
    document.getElementById(id).appendChild(this.create());
  },
};
