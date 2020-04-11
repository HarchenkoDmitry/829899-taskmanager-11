import {createSortTemplate} from './sort.js';
import {createLoadMoreButtonTemplate} from './load-more-button.js';
import {createTaskListTemplate} from './task/task-list.js';

export const createBoardTemplate = (tasks) => {
  return (
    `<section class="board container">
      ${createSortTemplate()}
      ${createTaskListTemplate(tasks)}
      ${createLoadMoreButtonTemplate()}  
    </section>`
  );
};
