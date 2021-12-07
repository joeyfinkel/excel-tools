export const Headers = {
  /**
   * The selected headers from the sheet
   * @type {string[]}
   */
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
  getUnselectedHeaders(original, final) {
    return original.filter((item) => !final.includes(item));
  },
  /**
   * Compares the selected headers and the original headers to get the indexes of the
   * non-selected headers
   * @param {string[]} original List of original headers from the uploaded spreadsheet
   * @param {string[]} final List of selected headers to use for new sheet
   * @returns {number[]} List of indexes of the non-selected headers
   */
  getUnselectedHeadersIdx(original, final) {
    return final.map((item) => original.indexOf(item));
  },
};
