import { views } from './views/views.js';

const { main, itemTemplate, imageTemplate, sheetMerger } = views;

/**
 * Creates a new route object with a `path` and `view`
 * @param {string} path The path to the view
 * @param {string} view The specific view to display
 * @returns {{path: string, view: string}} A new route object with the path and view
 */
const createRoute = (path, view) => {
  return { path, view };
};

const router = async () => {
  const routes = [
    createRoute('/', main()),
    createRoute('/itemTemplate', itemTemplate()),
    createRoute('/imageTemplate', imageTemplate()),
    createRoute('/sheetMerger', sheetMerger()),
  ];

  const potentialMatches = routes.map((route) => {
    return { route: route, isMatch: location.pathname === route.path };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) match = { route: routes[0], isMatch: true };

  document.querySelector('#content').innerHTML = await match.route.view;
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
