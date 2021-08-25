export const Title = {
  class: 'h6',
  text: 'Chose headers to keep for new sheet',
  create() {
    const title = document.createElement('p');
    title.className = this.class;
    title.innerHTML = this.text;

    return title;
  },
  add(id) {
    document.getElementById(id).appendChild(this.create());
  },
};
