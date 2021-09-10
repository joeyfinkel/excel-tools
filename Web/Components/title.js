export const Title = {
  class: 'h6',
  text: 'Chose headers to keep for new sheet',
  create(className, text) {
    const title = document.createElement('p');
    title.className = className;
    title.innerHTML = text;

    return title;
  },
  add(id, className, text) {
    document.getElementById(id).appendChild(this.create(className, text));
  },
};
