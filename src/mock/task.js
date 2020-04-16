import {random} from '../utils.js';
import {COLORS, DAYS} from '../const.js';

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const defaultRepeatingDays = new Map();
DAYS.forEach((day) => {
  defaultRepeatingDays.set(day, false);
});


const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = random.int(-8, 60);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  const repeatingDays = new Map();
  for (const day of defaultRepeatingDays.keys()) {
    repeatingDays.set(day, random.bool());
  }
  return repeatingDays;
};

const generateTask = () => {
  const dueDate = random.bool() ? null : getRandomDate();

  return {
    text: random.arrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
    color: random.arrayItem(COLORS),
    isArchive: random.bool(),
    isFavorite: random.bool(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};


export {generateTask, generateTasks};
