import { views } from '../views/views.js';

/**
 * Creates a new route object with a `path` and `view`.
 * @param {string} path The path to the view.
 * @param {string} view The specific view to display.
 * @returns {{path: string, view: string}} A new route object with the path and view.
 */
const createRoute = (path, view) => {
  return { path, view };
};

/** Creates and deals with the routing logic. */
export const router = async () => {
  const { main, itemTemplate, imageTemplate, sheetMerger } = views;
  const routes = [
    createRoute('/', main()),
    createRoute('/item-template', itemTemplate()),
    createRoute('/image-template', imageTemplate()),
    createRoute('/sheet-merger', sheetMerger()),
  ];

  const potentialMatches = routes.map((route) => {
    return { route: route, isMatch: location.pathname === route.path };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) match = { route: routes[0], isMatch: true };

  document.querySelector('#content').innerHTML = await match.route.view;
};

/**
 * Navigates to the previous page.
 * @param {string} url The url of the page.
 */
export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
