import AbstractView from './AbstractView.js';
import { map, Titles } from '../components/title.js';
import { DragDrop } from '../components/dragDrop.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle(Titles.itemTemplate.documentTitle);
  }

  async getHtml() {
    const lblText = `Drag file here or click to <strong>browse</strong> for one.`;
    return `
      <section class="item-template">
        ${map(Titles.itemTemplate.headings)}
        <div
          id="dragDropContainer"
          class="drag-drop-container mx-auto mt-4"
        >
          ${DragDrop.create('itemTemplateDragDrop', lblText)}
        </div>
        <div
          id="itemSheetDisplay"
          class="sheet-display item-template-sheets mx-auto mt-4"
        >
          <div class="headers">
            <p class="h6 mx-auto">Sheet Name</p>
            <p class="h6 mx-auto">Columns</p>
            <p class="h6 mx-auto">Rows</p>
          </div>
          <div id="itemTemplateSheets" class="sheets"></div>
          <button class="btn btn-nav btn-create-sheet">Create Item Template</button>
        </div>
      </section>
    `;
  }
}
