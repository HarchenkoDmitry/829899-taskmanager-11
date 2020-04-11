import {createSiteFilterItemTemplate} from './filter-item.js';

export const createSiteFilterListTemplate = (filters) => {
  return (
    `<section class="main__filter filter container">
      ${filters.map((filter) => createSiteFilterItemTemplate(filter)).join(``)}
    </section>`
  );
};
