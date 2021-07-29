export default class Checkbox {
  /**
   *
   * @param {string} className  class for the checkbox
   * @param {string} id the id for the checkbox
   * @param {string} name name for the checkbox
   */
  constructor(className, id, name) {
    this.className = className;
    this.id = id;
    this.name = name;
  }

  /**
   * Creates a new checkbox input
   * @returns {HTMLInputElement}
   */
  createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = this.className;
    checkbox.id = this.id;
    checkbox.name = this.name;
    checkbox.onclick = this.onclickEvent;

    return checkbox;
  }

  /**
   * Adds the checkbox to the targeted div
   * @param {string} divId the the div to add the checkbox to
   */
  addToDiv(divId) {
    const div = document.getElementById(divId);
    const checkbox = this.createCheckbox();

    div.appendChild(checkbox);
  }

  /**
   * creates a new onclick event for the checkbox
   * @param {string} id id of checkbox
   * @param {*} eventFunc onclick event to add to the checkbox
   */
  addOnClickEvent(id, eventFunc) {
    const checkbox = document.getElementsByName(id);
    checkbox.forEach((box) => {
      box.addEventListener('click', eventFunc, false);
    });
  }
}
