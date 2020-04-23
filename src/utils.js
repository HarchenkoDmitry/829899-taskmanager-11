import {MONTH_NAMES} from './const.js';

export const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

export const formatDate = (date) => {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  return `${day} ${month}`;
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const random = {
  bool() {
    return Math.random() > 0.5;
  },
  int(min, max) {
    return min + Math.floor(Math.random() * (max - min));
  },
  arrayIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  },
  arrayItem(arr) {
    return arr[this.arrayIndex(arr)];
  }
};
