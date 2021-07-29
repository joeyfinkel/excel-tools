export default class Label {
  /**
   *
   * @param {string} className class name for the label
   */
  constructor(className, id) {
    this.className = className;
    this.id = id;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this._id = id;
  }

  /**
   * Creates a new a label
   * @param {string} checkboxId id to make the label for
   * @returns {HTMLLabelElement}
   */
  createLabel(checkboxId, text) {
    const label = document.createElement('label');
    label.id = this.id;
    label.className = this.className;
    label.setAttribute('for', checkboxId);
    label.innerHTML = `${text} <br/>`;

    return label;
  }

  /**
   * Adds the label to the targeted div
   * @param {string} checkboxId id to make the label for
   * @param {string} divId the id of the div to add the label to
   */
  addToDiv(divId, checkboxId, text) {
    const div = document.getElementById(divId);
    const label = this.createLabel(checkboxId, text);
    const br = document.createElement('br');

    div.appendChild(label);
    div.appendChild(br);
  }
}
