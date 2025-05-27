import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const { id, image, title, publisher, key } = this._data;
    const currentId = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link ${id === currentId ? 'preview__link--active' : ''}" href="#${id}">
          <figure class="preview__fig">
            <img src="${image}" alt="${title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${title}</h4>
            <p class="preview__publisher">${publisher}</p>
            <div class="preview__user-generated ${key ? '' : 'hidden'}">
              <svg><use href="${icons}#icon-user"></use></svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new PreviewView();