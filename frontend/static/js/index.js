// Views import
import {
  main,
  itemTemplate,
  imageTemplate,
  sheetMerger,
} from './views/views.js';

const router = async () => {
  const routes = [
    {
      path: '/',
      view: main(),
    },
    {
      path: '/itemTemplate',
      view: itemTemplate(),
    },
    {
      path: '/imageTemplate',
      view: imageTemplate(),
    },
    {
      path: '/sheetMerger',
      view: sheetMerger(),
    },
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
