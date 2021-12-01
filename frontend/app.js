// import { Buttons } from './Components/button.js';
// import { navbar } from './Components/navbar.js';
// import { Titles } from './Components/title.js';

// const selectCSVFile = document.getElementById('selectCSVFile');
// const itemTemplateUpload = document.getElementById('itemTemplateUpload');
// const selectSheetAndImages = document.getElementById('selectSheetAndImages');
// const imageTemplateUpload = document.getElementById('imageTemplateUpload');
// const titles = [
//   Titles.create(1, 'Excel Tools'),
//   Titles.create(4, 'Create templates or merge sheets together'),
// ];
// const itemTemplate = Buttons.itemTemplate;

// document.getElementById('sidebar').innerHTML = navbar;
// titles.forEach(
//   (heading) => (document.getElementById('title').innerHTML += heading)
// );

// //#region Item Template
// Buttons.selectFile(selectCSVFile, itemTemplateUpload);
// itemTemplate.upload(itemTemplateUpload);
// itemTemplate.create(itemTemplateUpload, 'btnCreateItemTemplate');
// //#endregion

// //#region Image Template
// Buttons.selectFile(selectSheetAndImages, imageTemplateUpload);
// //#endregion

// Item Template
const itemTemplateDragDrop = document.getElementById('itemTemplateDragDrop');

itemTemplateDragDrop.addEventListener('change', (e) => console.log(e.target));
