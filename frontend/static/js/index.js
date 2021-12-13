import { router, navigateTo } from './utils/router.js';
import { dragDropOnchange } from './components/built/dragDrop.js';
import { nextButtonEvent } from './components/elements/buttons/next.js';
import { dataAttributes, getActiveComponent } from './utils/utils.js';
import { comparedHeaders } from './components/elements/checkbox.js';
import { createNewSheetEvent } from './components/elements/buttons/createSheet.js';
import { backButtonEvent } from './components/elements/buttons/back.js';

// This file contains all the event listeners for the application.

const {
  navButton,
  dragDrop,
  radio,
  nextButton,
  backButton,
  checkbox,
  createNewSheet,
} = dataAttributes;

const template = 'item-template';
let activeSheet = '';
let headers = [];

/**
 * If a nav button is clicked, the page won't reload and yo will be redirected to that page.
 * @param {Event} e Event from body on click.
 */
const navButtonEvent = (e) => {
  e.preventDefault();
  navigateTo(e.target.href);
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', async (e) => {
    if (e.target.matches(`[${navButton}]`)) navButtonEvent(e);
    if (e.target.matches(`[${dragDrop}]`)) dragDropOnchange(template);
    if (e.target.matches(`[${radio}]`)) activeSheet = e.target.id;
    if (e.target.matches(`[${nextButton}]`))
      nextButtonEvent(template, activeSheet);
    // TODO: #1 Need to get this to work
    if (e.target.matches(`[${checkbox}]`)) headers = await comparedHeaders();
    if (e.target.matches(`[${createNewSheet}]`))
      await createNewSheetEvent(activeSheet);
    if (e.target.matches(`[${backButton}]`))
      backButtonEvent(
        template,
        `Drag file here or click to <strong>browse</strong> for one.`
      );
  });

  router();
});
