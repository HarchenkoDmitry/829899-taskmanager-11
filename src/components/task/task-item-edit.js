import {COLORS} from '../../const.js';
import {formatDate, formatTime} from '../../utils.js';

export const createTaskItemEditTemplate = (task) => {
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

  const createColorListTemplate = (selectedColor) => {
    const colorListMarkup = COLORS.map((color, index) => {
      return (
        `<input
          type="radio"
          id="color-${color}-${index}"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
          ${color === selectedColor ? `checked` : ``}
        />
        <label
          for="color-${color}-${index}"
          class="card__color card__color--${color}"
          >${color}</label
        >`
      );
    }).join(`\n`);

    return (
      `<div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
          ${colorListMarkup}
        </div>
      </div>`
    );
  };

  const createRepeatDaysListTemplate = (days) => {
    const repeatDaysListMarkup = Object.entries(Object.fromEntries(days)).map(([dayName, isRepeat], index) => {
      return (
        `<input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${dayName}-${index}"
        name="repeat"
        value="${dayName}"
        ${isRepeat ? `checked` : ``}
      />
      <label class="card__repeat-day" for="repeat-${dayName}-${index}"
        >${dayName}</label>`
      );
    });

    return (
      `<fieldset class="card__repeat-days">
        <div class="card__repeat-days-inner">
          ${repeatDaysListMarkup.join(`\n`)}
        </div>
      </fieldset>`
    );
  };

  return (
    `<article class="card card--edit card--${task.color} ${repeatClass} ${deadlineClass}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${task.text}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">${task.dueDate ? `yes` : `no`}</span>
                </button>

                ${task.dueDate ? `
                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder=""
                      name="date"
                      value="${formatDate(task.dueDate)} ${formatTime(task.dueDate)}"
                    />
                  </label>
                </fieldset>` : ``}

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${isRepeating ? `yes` : `no`}</span>
                </button>

                ${isRepeating ? createRepeatDaysListTemplate(task.repeatingDays) : ``}
              </div>
            </div>

            ${createColorListTemplate(task.color)}
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};
