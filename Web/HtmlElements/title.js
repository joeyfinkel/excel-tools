export default class Title {
  constructor(text) {
    this.text = text;
  }

  createTitle() {
    const title = document.createElement('p');
    title.innerHTML = this.text;
  }

  addToDiv(id) {
    const div = document.getElementById(id);
    const title = this.createTitle();

    div.appendChild(title);
  }
}
