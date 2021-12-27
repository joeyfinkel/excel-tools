import { templateMainSection } from '../components/built/templateMainSection.js';
import {
  dragDropComponent,
  dragDropEvent,
} from '../components/built/dragDrop.js';
import { componentIds, lblText, dataAttributes } from '../utils/text.js';
import { sheetsViewEvents } from '../components/built/sheetView.js';
import { headersViewEvents } from '../components/built/headersView.js';
import { navigateTo } from '../utils/router.js';
/**
 * Creates a section with the id of `templateType` with the page contents.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template to create.
 * @returns {string} The HTML for the specified template.
 */
export const createView = (templateType) => `
  <section id=${templateType.type}>
    ${templateMainSection(
      templateType.headings.map((headings) => headings).join(''),
      dragDropComponent(templateType.type, lblText)
    )}
  </section>
`;

/**
 * Adds {@link dragDropEvent}, {@link sheetsViewEvents}, and {@link headersViewEvents} to the specified template.
 * @param {{type: string, title: string, headings: string[]}} templateType The type of template to call the events for.
 */
export const callEvents = (templateType) => {
  /** If a nav button is clicked, the page won't reload and you will be redirected to that page. */
  const navButtonEvent = () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches(`[${dataAttributes.buttons.navButton}]`)) {
        e.preventDefault();
        navigateTo(e.target.href);
      }
    });
  };

  // Adds events for every component for every page
  for (const templates in templateType) {
    const template = templateType[templates];
    const type = template.type;

    if (window.location.href.includes(type)) {
      navButtonEvent();
      dragDropEvent(template);
      sheetsViewEvents(template);
      headersViewEvents(template, lblText);
    }
  }
};
