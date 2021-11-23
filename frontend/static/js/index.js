// Views import
import Main from './views/Main.js';
import ItemTemplate from './views/ItemTemplate.js';
import ImageTemplate from './views/ImageTemplate.js';
import SheetMerger from './views/SheetMerger.js';

const router = async () => {
  const routes = [
    {
      path: '/',
      view: Main,
    },
    {
      path: '/itemTemplate',
      view: ItemTemplate,
    },
    {
      path: '/imageTemplate',
      view: ImageTemplate,
    },
    {
      path: '/sheetMerger',
      view: SheetMerger,
    },
  ];

  const potentialMatches = routes.map((route) => {
    return { route: route, isMatch: location.pathname === route.path };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  match = !match && { route: routes[0], isMatch: true };

  document.querySelector('#content').innerHTML =
    await new match.route.view().getHtml();
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
      console.log(e.target);
      navigateTo(e.target.href);
    }
  });

  router();
});
