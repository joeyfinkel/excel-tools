import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { itemTemplate } = templateTypes;

/**
 * Creates the `item template` view.
 * @returns {string} The HTML for the `item template` view.
 */
export const itemTemplateView = () => createView(itemTemplate);
