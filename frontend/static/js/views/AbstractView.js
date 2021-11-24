import { pageBuilder } from '../components/pageBuilder.js';
import { map } from '../components/title.js';

/**
 * The abstract view function that could be used to create any page.
 * @param {string} templateType The type of template to create. Options:
 * `itemTemplate`, `imageTemplate`, `sheetMerger`.
 * @param {string} documentTitle The title for the page.
 * @param {{headings: string[], lblText: string, btnText: string}} param1
 * Object containing the static text that shows up on the page.
 * @returns {string} HTML template for the `templateType`.
 */
export const abstractView = (
  templateType,
  documentTitle,
  { headings, lblText, btnText }
) => {
  document.title = documentTitle;

  return pageBuilder(templateType, {
    pageTitles: map(headings),
    lblText,
    btnText,
  });
};
