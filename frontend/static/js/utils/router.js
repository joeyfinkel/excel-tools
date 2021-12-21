import { mainView } from '../views/main.js';
import { columnRemoverView } from '../views/columnRemover.js';
import { itemTemplateView } from '../views/itemTemplate.js';
import { imageTemplateView } from '../views/imageTemplate.js';
import { sheetMergerView } from '../views/sheetMerger.js';

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
  const routes = [
    createRoute('/', mainView()),
    createRoute('/column-remover', columnRemoverView()),
    createRoute('/item-template', itemTemplateView()),
    createRoute('/image-template', imageTemplateView()),
    createRoute('/sheet-merger', sheetMergerView()),
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
