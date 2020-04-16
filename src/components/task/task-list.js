import {createTaskItemTemplate} from './task-item.js';
import {createTaskItemEditTemplate} from './task-item-edit.js';

export const createTaskListTemplate = (tasks) => {
  const taskList = tasks.splice(1).map((task) => {
    return createTaskItemTemplate(task);
  }).join(``);

  return (
    `<div class="board__tasks">
      ${createTaskItemEditTemplate(tasks[0])}  
      ${taskList}   
    </div>`
  );
};
