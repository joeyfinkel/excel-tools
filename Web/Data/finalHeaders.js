export const FinalHeaderList = {
  _headers: [],
  set headers(headers) {
    this._headers = headers;
  },
  add(list, header) {
    if (!list.includes(header)) list.push(header);
    return list.join(', ');
  },
  remove(list, header) {
    if (list.includes(header)) list.splice(list.indexOf(header), 1);
    return list.join(', ');
  },
  show(checkbox, output, list) {
    if (checkbox.checked)
      output.innerHTML = `Headers to keep: <strong> ${this.add(
        list,
        checkbox.value
      )}</strong>`;
  },
  hide(checkbox, output, list) {
    if (!checkbox.checked)
      output.innerHTML = `Headers to keep: <strong>${this.remove(
        list,
        checkbox.value
      )}</strong>`;
    if (!checkbox.checked && list.length === 0)
      output.innerHTML = '<strong>Please choose headers to keep</strong>';
  },
  showMessage(list, output) {
    if (list.length === 0)
      output.innerHTML = '<strong>Please choose headers to keep</strong>';
  },
};
