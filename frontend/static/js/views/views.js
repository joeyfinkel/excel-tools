import { map, Titles } from '../components/title.js';
import { abstractView } from './abstractView.js';

/**
 * Creates the `main` view
 * @returns {string} The HTML for the `main` view
 */
export const main = async () => {
  document.title = Titles.main.documentTitle;

  return `
      <section class="home">
          ${map(Titles.main.headings)}
      </section>
    `;
};

/**
 * Creates the `item template` view
 * @returns {string} The HTML for the `item template` view
 */
export const itemTemplate = () =>
  abstractView('itemTemplate', Titles.itemTemplate.documentTitle, {
    headings: Titles.itemTemplate.headings,
    lblText: `Drag file here or click to <strong>browse</strong> for one.`,
    btnText: 'Item Template',
  });

/**
 * Creates the `image template` view
 * @returns {string} The HTML for the `image template` view
 */
export const imageTemplate = () =>
  abstractView('imageTemplate', Titles.imageTemplate.documentTitle, {
    headings: Titles.imageTemplate.headings,
    lblText: `Drag file here or click to <strong>browse</strong> for one.`,
    btnText: 'Image Template',
  });

/**
 * Creates the `sheet merger` view
 * @returns {string} The HTML for the `sheet merger` view
 */
export const sheetMerger = () =>
  abstractView('sheetMerger', Titles.sheetMerger.documentTitle, {
    headings: Titles.sheetMerger.headings,
    lblText: `Drag file here or click to <strong>browse</strong> for one.`,
    btnText: 'Merged Sheet',
  });
