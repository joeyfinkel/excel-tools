import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { columnRemover } = templateTypes;

/**
 * Creates the `column remover` view.
 * @returns {string} The HTML for the `column remover` view.
 */
export const columnRemoverView = () => createView(columnRemover);
