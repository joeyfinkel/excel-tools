import { router } from './utils/router.js';
import { templateTypes } from './utils/text.js';
import { callEvents } from './views/views.js';

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  callEvents(templateTypes);
  router();
});
