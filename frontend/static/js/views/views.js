import { templateMainSection } from '../components/built/templateMainSection.js';
import { dragDrop } from '../components/built/dragDrop.js';
import { templateTypes, componentIds, lblText } from '../utils/text.js';

const { main, columnRemover, itemTemplate, imageTemplate, sheetMerger } =
  templateTypes;

/**
 * Creates a section with the id of `templateType` with the page contents.
 * @param {{type: string, title: string, headings: string[]}} templateType Type of template to create.
 * @returns {string} The HTML for the specified template.
 */
const createView = (templateType) => {
  document.title = templateType.title;

  return `
    <section id=${templateType.type}>
      ${templateMainSection(
        templateType.headings.map((headings) => headings).join(''),
        dragDrop(componentIds.dragDrop.children(templateType.type), lblText)
      )}
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
    document.title = main.title;

    return `
      <section class="home">
          ${main.headings.map((headings) => headings).join('')}
      </section>
    `;
  },
  /**
   * Creates the `column remover` view.
   * @returns {string} The HTML for the `column remover` view.
   */
  columnRemover: async () => createView(columnRemover),
  /**
   * Creates the `item template` view.
   * @returns {string} The HTML for the `item template` view.
   */
  itemTemplate: async () => createView(itemTemplate),
  /**
   * Creates the `image template` view.
   * @returns {string} The HTML for the `image template` view.
   */
  imageTemplate: async () => createView(imageTemplate),
  /**
   * Creates the `sheet merger` view.
   * @returns {string} The HTML for the `sheet merger` view.
   */
  sheetMerger: async () => createView(sheetMerger),
};
