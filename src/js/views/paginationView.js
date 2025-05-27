import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', ({ target }) => {
      const goToPage = target.closest('.btn--inline')?.dataset.goto;
      if (!goToPage) return;
      handler(+goToPage);
    });
  }

  _generateButton(page, type) {
    const arrow = type === 'next' ? 'right' : 'left';
    return `
      <button data-goto="${page}" class="btn--inline pagination__btn--${type}">
        ${type === 'prev' ? `<svg class="search__icon"><use href="${icons}#icon-arrow-${arrow}"></use></svg>` : ''}
        <span>${page}</span>
        ${type === 'next' ? `<svg class="search__icon"><use href="${icons}#icon-arrow-${arrow}"></use></svg>` : ''}
      </button>
    `;
  }

  _generateMarkup() {
    const { page: currPage, results, resultsPerPage } = this._data;
    const numPages = Math.ceil(results.length / resultsPerPage);

    if (numPages === 1) return '';
    if (currPage === 1) return this._generateButton(currPage + 1, 'next');
    if (currPage === numPages) return this._generateButton(currPage - 1, 'prev');

    return this._generateButton(currPage - 1, 'prev') + this._generateButton(currPage + 1, 'next');
  }
}

export default new PaginationView();