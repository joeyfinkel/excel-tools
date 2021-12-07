import { router, navigateTo } from './utils/router.js';
import { dragDropOnchange } from './components/dragDrop.js';
import { radioOnclick } from './components/radio.js';

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
    dragDropOnchange(template);
    radioOnclick(template);
  },
  false
);
