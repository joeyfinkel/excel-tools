import { router, navigateTo } from './utils/router.js';
import { showSheetInformation } from './components/dragDrop.js';
import { getFile } from './utils/fileData.js';

// This file contains all the event listeners for the application.

const itemTemplateDragDrop = document.getElementById('itemTemplateDragDrop');

//#region Global event listeners
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

window.addEventListener(
  'load',
  async () => {
    const template = 'item-template';
    const file = await getFile(template);
    const sheetView = await showSheetInformation(template, file);
    console.log(file);
    document.getElementById(template).innerHTML += sheetView;
  },
  false
);
