import {random} from '../utils.js';

const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateFilters = () => {
  const checkedIndex = random.arrayIndex(filterNames);

  return filterNames.map((it, index) => {
    const isChecked = index === checkedIndex;
    return {
      title: it,
      count: random.int(0, 50),
      isChecked,
      isDisabled: !isChecked && random.bool(),
    };
  });
};


export {generateFilters};
