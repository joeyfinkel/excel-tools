import { templateTypes } from '../utils/text.js';

/**
 * Creates the `main` view.
 * @returns {string} The HTML for the `main` view.
 */
export const mainView = () => {
  const { main } = templateTypes;

  document.title = main.title;

  /**
   * Creates the summary for every component.
   * @param {string} title The title for the summary section.
   * @param {string} text The text for the summary.
   * @returns {string} The HTML for the summary for the `main` view.
   */
  const createSummarySection = () => {
    let message = '';

    for (const templates in templateTypes) {
      const template = templateTypes[templates];
      const { type, summaryAttributes } = template;

      if (type === 'main' || type === 'tutorials') continue;

      message += `
        <div class='mt-5 mb-5' id='${type}-Summary'>
          <p class="h3 summary-title">${summaryAttributes?.title}</p>
          <p class='h6 summary-text'>${summaryAttributes?.text}</p>
        </div>
      `;
    }

    return message;
  };

  return `
    <section id='${main.type}'>
      ${main.headings.map((headings) => headings).join('')}
      <div class="mt-4 overflow-auto">
        ${createSummarySection()}
      </div>
    </section>
    `;
};
