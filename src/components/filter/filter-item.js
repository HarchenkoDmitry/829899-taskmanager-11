export const createSiteFilterItemTemplate = (filter) => {
  return (
    `<input
        type="radio"
        id="filter__${filter.title}"
        class="filter__input visually-hidden"
        name="filter"
        ${filter.isChecked ? `checked` : ``}
        ${filter.isDisabled ? `disabled` : ``}
      />
      <label for="filter__${filter.title}" class="filter__label">
        ${filter.title} <span class="filter__${filter.title}-count">${filter.count}</span></label
      >`
  );
};
