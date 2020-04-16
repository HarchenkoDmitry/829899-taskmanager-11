import {createSiteMenuTemplate} from './components/site-menu.js';
import {createBoardTemplate} from './components/board.js';
import {createSiteFilterListTemplate} from './components/filter/filter-list.js';
import {generateFilters} from './mock/filter.js';
import {generateTasks} from './mock/task.js';
import {createTaskItemTemplate} from './components/task/task-item.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

export const render = (html, elem, where = `beforeend`) => {
  elem.insertAdjacentHTML(where, html);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const addShowMoreByClick = () => {
  const loadMoreButton = document.querySelector(`.load-more`);
  const listWrap = document.querySelector(`.board__tasks`);
  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
  loadMoreButton.addEventListener(`click`, function () {
    const taskList = tasks.slice(showingTasksCount, showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON).map((task) => {
      return createTaskItemTemplate(task);
    }).join(``);
    showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON;
    if (showingTasksCount >= tasks.length) {
      loadMoreButton.remove();
    }
    render(taskList, listWrap);
  });
};

render(createSiteMenuTemplate(), siteHeaderElement);
render(createSiteFilterListTemplate(filters), siteHeaderElement, `afterend`);
render(createBoardTemplate(tasks.slice(0, SHOWING_TASKS_COUNT_ON_START)), siteMainElement);

addShowMoreByClick();
