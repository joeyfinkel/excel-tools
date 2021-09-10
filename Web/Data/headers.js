export const FinalHeaderList = {
  headers: [],
  keptHeaderOutput: document.getElementById('headersToKeep'),
  changeFinalHeadersList(header) {
    !this.headers.includes(header)
      ? this.headers.push(header)
      : this.headers.splice(this.headers.indexOf(header), 1);
    return this.headers.join(', ');
  },
  changeHeadersToKeepMessage(checkbox) {
    document.getElementById('headersToKeep').innerHTML = checkbox.checked
      ? `Headers to keep: <strong> ${this.changeFinalHeadersList(
          checkbox.value
        )}</strong>`
      : `Headers to keep: <strong>${this.changeFinalHeadersList(
          checkbox.value
        )}</strong>`;
  },
  showMessage() {
    this.keptHeaderOutput.innerHTML =
      '<strong>Please choose headers to keep</strong>';
  },
};
