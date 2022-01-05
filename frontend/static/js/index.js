import { sidebarContent } from './components/built/sidebar.js';
import { router } from './utils/router.js';
import { templateTypes } from './utils/text.js';
import { callEvents } from './views/views.js';

window.addEventListener('popstate', router);

document.getElementById('sidebar').innerHTML += sidebarContent(
  './static/images/navigation/Logo.svg'
);

document.addEventListener('DOMContentLoaded', () => {
  callEvents(templateTypes);
  router();
});
