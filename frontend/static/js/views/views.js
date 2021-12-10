import { map, Titles } from '../components/elements/title.js';
import { templateMainSection } from '../components/built/templateMainSection.js';
import { dragDrop } from '../components/built/dragDrop.js';

/**
 * Creates a section with the id of `templateType` with the page contents.
 * @param {string} docTitle The title for the document.
 * @param {string} templateType Type of template to create.
 * @param {string[]} headings Array of headings to display on the page.
 * @param {string} lblText Text to display on the drag and drop component.
 * @returns {string} The HTML for the specified template.
 */
const createView = (docTitle, templateType, headings, lblText) => {
  const fileInputId = `${templateType}DragDrop`;
  document.title = docTitle;

  return `
    <section id=${templateType}>
      ${templateMainSection(map(headings), dragDrop(fileInputId, lblText))}
    </section>
  `;
};

/** Object containing all the different views for the application. */
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
  itemTemplate: async () =>
    createView(
      Titles.itemTemplate.documentTitle,
      'item-template',
      Titles.itemTemplate.headings,
      `Drag file here or click to <strong>browse</strong> for one.`
    ),
  /**
   * Creates the `image template` view.
   * @returns {string} The HTML for the `image template` view.
   */
  imageTemplate: async () =>
    createView(
      Titles.imageTemplate.documentTitle,
      'image-template',
      Titles.imageTemplate.headings,
      `Drag file here or click to <strong>browse</strong> for one.`
    ),
  /**
   * Creates the `sheet merger` view.
   * @returns {string} The HTML for the `sheet merger` view.
   */
  sheetMerger: async () =>
    createView(
      Titles.sheetMerger.documentTitle,
      'sheet-merger',
      Titles.sheetMerger.headings,
      `Drag file here or click to <strong>browse</strong> for one.`
    ),
};
