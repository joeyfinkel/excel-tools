import { Titles } from '../../Components/title.js';
import { DragDrop } from '../../Components/dragDrop.js';

const titles = [
  Titles.create(Titles.headings.main, 'Item Template Creator'),
  Titles.create(Titles.headings.subtitle, 'Create any item template easily!'),
  Titles.create(
    Titles.headings.subtitle,
    'Start here by uploading a CSV or XLSX file to get started'
  ),
];

export const itemTemplate = `
    <section className="itemTemplate">
        <div className="titles">${Titles.map(titles)}</div>
        <div id="dragDropContainer" className="drag-drop-container mx-auto mt-4">
            ${DragDrop.create(
              'itemTemplateDragDrop',
              'Drag file here or click to <strong>browse</strong> for one.'
            )}
        </div>
        <div
            id="itemSheetDisplay"
            className="sheet-display item-template-sheets mx-auto mt-4"
        >
            <div className="headers">
                <p className="h6 mx-auto">Sheet Name</p>
                <p className="h6 mx-auto">Columns</p>
                <p className="h6 mx-auto">Rows</p>
            </div>
            <div id="itemTemplateSheets" className="sheets">
                ${DragDrop.onChange(
                  'itemTemplateDragDrop',
                  'itemTemplateSheets'
                )}
            </div>
            <button className="btn btn-nav btn-create-sheet">Create Item Template</button>
        </div>
    </section>
`;
