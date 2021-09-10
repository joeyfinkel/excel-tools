import { Div } from './div.js';
import { Title } from './title.js';
import {
  UploadCSVButton,
  ImageUploadButton,
  IdUploadButton,
} from './button.js';

const itemTemplate = {
  className: 'btn btn-secondary',
  id: 'selectCSVFile',
  buttonText: 'Select CSV File',
  titleText: `To get started, choose a CSV file that you would like to use to create the <strong>item template</strong> with.
                Then choose the columns you would like to keep by clicking on the header associated with that column.
                Once you chose all the columns, click the button to create the item template and chose a location for it to save to.`,
  createTitle() {
    return Title.create('h6', this.titleText);
  },
  createUploadButton() {
    return UploadCSVButton.create(
      this.className,
      this.id,
      this.buttonText,
      'button'
    );
  },
};

const imageTemplate = {
  className: 'btn btn-secondary',
  id: 'selectCSVFile',
  imageUploadText: 'Select Images',
  xlsxIdUploadText: 'Select ID Sheet',
  titleText: `To get started, make sure all images are following the same naming convention (<strong>SKU_number, UPC_number</strong>) and are all <strong>.jpg</strong> files.
                Then, upload the images and a <strong>.xlsx</strong> file with the UPC of each product.
                Note, if the images are named by SKU, make sure the sheet has a SKU column along with the ID column.`,
  createTitle() {
    return Title.create('h6', this.titleText);
  },
  createImageUploadButton() {
    return ImageUploadButton.create(
      this.className,
      this.id,
      this.imageUploadText,
      'button'
    );
  },
  createIDUploadButton() {
    return IdUploadButton.create(
      this.className,
      this.id,
      this.xlsxIdUploadText,
      'button'
    );
  },
  createButtonGroup() {
    const div = Div.create('', 'template-buttons');

    div.appendChild(this.createImageUploadButton());
    div.appendChild(this.createIDUploadButton());

    return div;
  },
};

export const DragAndDrop = {
  determineTemplate(template, fileInput) {
    if (template === 'Item' || template === 'item') {
      fileInput.appendChild(itemTemplate.createTitle());
      fileInput.appendChild(itemTemplate.createUploadButton());
    }
    if (template === 'Image' || template === 'image') {
      fileInput.appendChild(imageTemplate.createTitle());
      fileInput.appendChild(imageTemplate.createButtonGroup());
    }
  },
  create(template) {
    const outerDiv = Div.create(
      `${template}DropArea`,
      'mx-auto mb-5 drop-area'
    );
    const fileInput = Div.create('', 'file-input');

    this.determineTemplate(template, fileInput);
    outerDiv.appendChild(fileInput);

    return outerDiv;
  },

  add(id, template) {
    document.getElementById(id).appendChild(this.create(template));
  },
};

export const OutputArea = {
  create(template) {
    const outputArea = Div.create(`${template}Output`, 'output-area');
    const newFileNameWrapper = Div.create('newFileNameWrapper', 'form-group');
    const output = document.createElement('p');
    const headersToKeep = document.createElement('p');

    output.id = 'output';
    headersToKeep.id = 'headersToKeep';

    outputArea.appendChild(output);
    outputArea.appendChild(headersToKeep);
    outputArea.appendChild(newFileNameWrapper);

    return outputArea;
  },
  add(id, template) {
    // Check to see if the id exists, otherwise will id will be null and an error will occur
    id === 'ItemDropArea' &&
      document.getElementById(id).appendChild(this.create(template));
  },
};
