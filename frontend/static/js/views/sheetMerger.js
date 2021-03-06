import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { sheetMerger } = templateTypes;

/**
 * Creates the `sheet merger` view.
 * @returns {string} The HTML for the `sheet merger` view.
 */
export const sheetMergerView = () =>
  createView(
    sheetMerger,
    'The sheet merger tool only works with <strong>2 .xlsx files</strong>'
  );
