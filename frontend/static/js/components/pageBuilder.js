import { DragDrop } from './dragDrop.js';

/**
 * Creates a template that can be used for creating any page
 * @param {string} templateType The type of template that is being created. Options:
 * `itemTemplate`, `imageTemplate`, `sheetMerger`.
 * @param {{pageTitles: string[], lblText: string, btnText: string}} param1 Collection
 * of all the static text that shows on the page.
 * @returns {string} Html template containing all data for the page.
 */
export const pageBuilder = (templateType, { pageTitles, lblText, btnText }) => {
  const fileInputId = `${templateType}DragDrop`;

  return `
    <section id="${templateType}">
        <div class="title pt-2">${pageTitles}</div>
        <div
          id="dragDropContainer"
          class="drag-drop-container mx-auto mt-5"
        >
          ${DragDrop.create(fileInputId, lblText)}
        </div>
        <div
            id="${templateType}Display"
            class="sheet-display mx-auto mt-4"
        >
            <div class="headers">
                <p className="h6 mx-auto">Sheet Name</p>
                <p className="h6 mx-auto">Columns</p>
                <p className="h6 mx-auto">Rows</p>
            </div>
            <div id="${templateType}Sheets" class="sheets"></div>
            <button class="btn btn-create">Create ${btnText}</button>
        </div>
    </section>
`;
};
