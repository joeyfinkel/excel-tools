import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { imageTemplate } = templateTypes;

/**
   * Creates the `image template` view.
   * @returns {string} The HTML for the `image template` view.
   */
export const imageTemplateView = () => createView(imageTemplate);
