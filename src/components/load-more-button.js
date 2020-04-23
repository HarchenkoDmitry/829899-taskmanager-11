import AbstractComponent from './abstract-component.js';

const createLoadMoreButtonTemplate = () => {
  return (
    `<button 
      class="load-more" 
      type="button"
    >
      load more
    </button>`
  );
};

export default class LoadMoreButton extends AbstractComponent {
  get template() {
    return createLoadMoreButtonTemplate();
  }

  setClickHandler(handler) {
    this.element.addEventListener(`click`, handler);
  }
}
