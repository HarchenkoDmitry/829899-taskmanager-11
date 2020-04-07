import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSiteFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';

const render = (html, elem, where = `beforeend`) => {
  elem.insertAdjacentHTML(where, html);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(createSiteMenuTemplate(), siteHeaderElement);
render(createSiteFilterTemplate(), siteHeaderElement, `afterend`);
render(createBoardTemplate(), siteMainElement);
