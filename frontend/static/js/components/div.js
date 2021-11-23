export const Div = {
  create(id, className) {
    const div = document.createElement('div');
    div.id = id;
    div.className = className;

    return div;
  },
};
