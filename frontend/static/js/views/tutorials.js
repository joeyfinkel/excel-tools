import { templateTypes } from '../utils/text.js';
import { createView } from './views.js';

const { tutorials } = templateTypes;

export const tutorialsView = () => createView(tutorials);
