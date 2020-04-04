import {createSortTemplate} from './sort.js';
import {createTaskTemplate} from './task.js';
import {createTaskEditTemplate} from './task-edit.js';
import {createLoadMoreButtonTemplate} from './load-more-button.js';

export const createBoardTemplate = () => {
  const TASKS_AMOUNT = 3;
  const tasks = [];

  for (let i = 0; i < TASKS_AMOUNT; i++) {
    tasks.push(createTaskTemplate());
  }

  return (
    `<section class="board container">
      ${createSortTemplate()}
      <div class="board__tasks">
        ${createTaskEditTemplate()}  
        ${tasks.join(``)}   
      </div>
      ${createLoadMoreButtonTemplate()}  
    </section>`
  );
};
