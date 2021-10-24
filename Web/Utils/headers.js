export const Headers = {
  headers: [],
  /**
   * Removes the header if it exists already
   * @param {string} header Header that is clicked on
   * @returns {string[]} List of headers with a comma and a space
   */
  finalHeaderList(header) {
    const original = this.headers;

    !original.includes(header)
      ? original.push(header)
      : original.splice(original.indexOf(header), 1);
    return original;
  },
  /**
   * Outputs the headers with a message to the DOM
   * @param {string} id Id of the element to add the message to
   * @param {HTMLInputElement} checkbox The checkbox of the selected header
   */
  render(id, checkbox) {
    document.getElementById(id).innerHTML = checkbox.checked
      ? `Headers to keep: <strong> ${this.finalHeaderList(
          checkbox.value
        )}</strong>`
      : `Headers to keep: <strong>${this.finalHeaderList(
          checkbox.value
        )}</strong>`;
  },
  /**
   * Compares the original headers and selected headers and looks for differences
   * @param {string[]} original List of original headers from the uploaded spreadsheet
   * @param {string[]} final List of selected headers to use for the new spreadsheet
   * @returns {string[]} The remaining list of headers that were not selected
   */
  compare(original, final) {
    return original.filter((x) => !final.includes(x));
  },
};
