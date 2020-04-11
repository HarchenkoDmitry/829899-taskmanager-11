import {formatDate, formatTime} from '../../utils.js';

export const createTaskItemTemplate = (task) => {
  let isRepeating = false;
  for (const isRepeatDay of task.repeatingDays.values()) {
    if (isRepeatDay) {
      isRepeating = true;
      break;
    }
  }

  const isOverdue = task.dueDate && task.dueDate - new Date() < 0;

  const repeatClass = isRepeating ? `card--repeat` : ``;
  const deadlineClass = isOverdue ? `card--deadline` : ``;

  const archiveActiveClass = task.isArchive ? `card__btn--disabled` : ``;
  const favoriteActiveClass = task.isFavorite ? `card__btn--disabled` : ``;

  return (
    `<article class="card card--${task.color} ${repeatClass} ${deadlineClass}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button 
              type="button" 
              class="card__btn card__btn--archive ${archiveActiveClass}"
            >
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites ${favoriteActiveClass}"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${task.text}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
            
            ${task.dueDate ? `
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${formatDate(task.dueDate)}</span>
                    <span class="card__time">${formatTime(task.dueDate)}</span>
                  </p>
                </div>
              </div>` : ``}
            
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};
