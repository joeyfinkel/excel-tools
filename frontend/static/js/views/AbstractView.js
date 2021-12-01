import { pageBuilder } from '../components/pageBuilder.js';
import { map } from '../components/title.js';

/**
 * The abstract view function that could be used to create any page.
 * @param {string} templateType The type of template to create. Options:
 * `itemTemplate`, `imageTemplate`, `sheetMerger`.
 * @param {string} documentTitle The title for the page.
 * @param {{headings: string[], lblText: string, btnText: string}} param1
 * Object containing the static text that shows up on the page.
 * @param {any} onChange The onchange function for the file input element.
 * @returns {string} HTML template for the `templateType`.
 */
export const abstractView = (
  templateType,
  documentTitle,
  { headings, lblText, btnText },
  onChange
) => {
  document.title = documentTitle;

  return pageBuilder(
    templateType,
    {
      pageTitles: map(headings),
      lblText,
      btnText,
    },
    onChange
  );
};
