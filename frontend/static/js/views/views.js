import { map, Titles } from '../components/title.js';
import { abstractView } from './abstractView.js';
import { templateMainSection } from '../components/templateMainSection.js';
import { dragDrop } from '../components/dragDrop.js';

/**
 * Object containing all the different views for the application.
 */
export const views = {
  /**
   * Creates the `main` view.
   * @returns {string} The HTML for the `main` view.
   */
  main: async () => {
    document.title = Titles.main.documentTitle;

    return `
      <section class="home">
          ${map(Titles.main.headings)}
      </section>
    `;
  },
  /**
   * Creates the `item template` view.
   * @returns {string} The HTML for the `item template` view.
   */
  itemTemplate: async () => {
    const template = 'item-template';
    const fileInputId = `${template}DragDrop`;
    const pageTitles = Titles.itemTemplate.headings;
    const lblText = `Drag file here or click to <strong>browse</strong> for one.`;

    document.title = Titles.itemTemplate.documentTitle;

    return `
      <section id="${template}">
        ${templateMainSection(pageTitles, dragDrop(fileInputId, lblText))}
      </section>
    `;
  },
  /**
   * Creates the `image template` view.
   * @returns {string} The HTML for the `image template` view.
   */
  imageTemplate: async () =>
    abstractView('imageTemplate', Titles.imageTemplate.documentTitle, {
      headings: Titles.imageTemplate.headings,
      lblText: `Drag file here or click to <strong>browse</strong> for one.`,
      btnText: 'Image Template',
    }),
  /**
   * Creates the `sheet merger` view.
   * @returns {string} The HTML for the `sheet merger` view.
   */
  sheetMerger: async () =>
    abstractView('sheetMerger', Titles.sheetMerger.documentTitle, {
      headings: Titles.sheetMerger.headings,
      lblText: `Drag file here or click to <strong>browse</strong> for one.`,
      btnText: 'Merged Sheet',
    }),
};
