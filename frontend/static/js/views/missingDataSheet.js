import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { missingDataTemplate } = templateTypes;

/**
 * Creates the `missing data template` view.
 * @returns {string} The HTML for the `missing data template` view.
 */
export const missingDataTemplateView = () => createView(missingDataTemplate);
