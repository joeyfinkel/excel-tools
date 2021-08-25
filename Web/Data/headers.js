import { Form } from '../Components/form.js';
import { Title } from '../Components/title.js';
import { Checkbox } from '../Components/checkbox.js';
import { Label } from '../Components/label.js';
import { Button } from '../Components/button.js';

export const FinalHeaderList = {
  headers: [],
  keptHeaderOutput: document.getElementById('headers-to-keep'),
  changeFinalHeadersList(header) {
    !this.headers.includes(header)
      ? this.headers.push(header)
      : this.headers.splice(this.headers.indexOf(header), 1);
    return this.headers.join(', ');
  },
  changeHeadersToKeepMessage(checkbox) {
    this.keptHeaderOutput.innerHTML = checkbox.checked
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

export const displayHeadersArea = async (path, columns, header) => {
  Form.add('headerOutput');
  Title.add(Form.id);
  Checkbox.add(Form.id, header);
  Label.createForEachHeader(header);
  Button.add(Form.id, path, columns, header, FinalHeaderList.headers);
  FinalHeaderList.showMessage();
};
