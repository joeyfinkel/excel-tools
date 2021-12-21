import { router, navigateTo } from './utils/router.js';
import { dragDropEvent } from './components/built/dragDrop.js';
import { dataAttributes, lblText, templateTypes } from './utils/text.js';
import { sheetViewEvents } from './components/built/sheetView.js';
import { headersViewEvents } from './components/built/headersView.js';

// This file contains all the event listeners for the application.

const { columnRemover, itemTemplate, imageTemplate, sheetMerger } =
  templateTypes;

/** If a nav button is clicked, the page won't reload and you will be redirected to that page. */
const navButtonEvent = () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches(`[${dataAttributes.buttons.navButton}]`)) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  navButtonEvent();
  dragDropEvent(columnRemover);
  sheetViewEvents(columnRemover);
  headersViewEvents(columnRemover, lblText);

  router();
});
