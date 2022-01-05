import { templateMainSection } from '../components/built/templateMainSection.js';
import { dragDropEvent } from '../components/built/dragDrop.js';
import { lblText, dataAttributes } from '../utils/text.js';
import { navigateTo } from '../utils/router.js';
import { sheetsViewEvent } from '../components/sheets/event.js';
import { headersViewEvents } from '../components/headers/event.js';

/**
 * Creates a section with the id of `templateType` with the page contents.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template to create.
 * @param {string} warningText The text to display under the drag and drop component.
 * @returns {string} The HTML for the specified template.
 */
export const createView = (templateType, warningText = '') => {
  const { type, headings } = templateType;

  return `
    <section id=${type} class='mx-auto'>
      ${templateMainSection(
        headings.map((heading) => heading).join(''),
        type,
        warningText
      )}
    </section>
  `;
};

/**
 * Adds {@link dragDropEvent}, {@link sheetsViewEvents}, and {@link headersViewEvents} to the specified template.
 * @param {{type: string, title: string, headings: string[]}} templateTypes The type of template to call the events for.
 */
export const callEvents = (templateTypes) => {
  /** If a nav button is clicked, the page won't reload and you will be redirected to that page. */
  const navButtonEvent = () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches(`[${dataAttributes.buttons.nav}]`)) {
        e.preventDefault();
        navigateTo(e.target.href);
      }
    });
  };

  // Add component events for every view
  for (const templates in templateTypes) {
    const template = templateTypes[templates];
    const type = template.type;

    if (window.location.href.includes(type)) {
      navButtonEvent();
      dragDropEvent(template);
      sheetsViewEvent(template);
      headersViewEvents(template, lblText);
    }
  }
};
