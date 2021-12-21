import { templateTypes } from '../utils/text.js';

/**
 * Creates the `main` view.
 * @returns {string} The HTML for the `main` view.
 */
export const mainView = () => {
  const { main } = templateTypes;

  document.title = main.title;

  return `
    <section id='${main.type}'>
        ${main.headings.map((headings) => headings).join('')}
    </section>
    `;
};
