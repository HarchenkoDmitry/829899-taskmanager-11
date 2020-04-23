import AbstractComponent from '../abstract-component.js';
import FilterItem from './filter-item.js';

const createSiteFilterListTemplate = (filters) => {
  return (
    `<section class="main__filter filter container">
      ${filters.map((filter) => new FilterItem(filter).template).join(``)}
    </section>`
  );
};

export default class FilterList extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  get template() {
    return createSiteFilterListTemplate(this._filters);
  }
}
