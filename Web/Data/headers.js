import Checkbox from '../HtmlElements/checkbox.js';
import Label from '../HtmlElements/label.js';
import Title from '../HtmlElements/title.js';
import properties from '../HtmlElements/elementProps.js';

export default class Header {
  sheetHeaders = [];
  refHeaders = [];

  constructor(data) {
    this.data = data;
  }

  displayHeaders() {
    const divId = properties.div.id;
    const title = new Title(properties.title.text);
    const checkbox = new Checkbox(
      properties.checkbox.class,
      properties.checkbox.id,
      properties.checkbox.name
    );
    const label = new Label(properties.label.class, properties.label.id);

    title.addToDiv(divId);

    this.data.forEach((header) => {
      this.sheetHeaders.push(header);
      checkbox.addToDiv(divId);
      label.addToDiv(divId, properties.checkbox.id, header);
    });
    checkbox.addOnClickEvent(checkboxName, () => {
      const box = document.getElementsByName(properties.checkbox.name);
      if (box.checked) {
        // console.log(label.id);
        console.log(box.value);
      }
    });
  }
}
