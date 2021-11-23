import { navbar, checkPage } from '../Web/frontend/Components/navbar.js';
import { DragDrop } from '../Web/frontend/Components/dragDrop.js';
import { Titles } from '../Web/frontend/Components/title.js';

const fileInputId = 'itemTemplateDragDrop';

const itemTemplateDragDrop = document.getElementById('itemTemplateDragDrop');
const titles = [
  Titles.create(Titles.headings.main, 'Item Template Creator'),
  Titles.create(Titles.headings.subtitle, 'Create any item template easily!'),
  Titles.create(
    Titles.headings.subtitle,
    'Start here by uploading a CSV or XLSX file to get started'
  ),
];
const lblText = `Drag file here or click to <strong>browse</strong> for one.`;

document.getElementById('sidebar').innerHTML = navbar;
titles.forEach(
  (heading) => (document.getElementById('title').innerHTML += heading)
);
document.getElementById('dragDropContainer').innerHTML = DragDrop.create(
  fileInputId,
  lblText
);

DragDrop.onChange('itemTemplateDragDrop', 'itemTemplateSheets');
console.log(document.URL);
console.log(window.location.pathname);
