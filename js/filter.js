import {getRandomPositiveInteger, hasDuplicates, debounce, shuffle} from './utils.js';
import {getPosts} from './storage.js';
import {renderThumbnails} from './thumbnail.js';
const filterForm = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');
const RANDOM_COUNT = 10;

const clearPosts = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const compareAmountComments = (amountA, amountB) => {
  const amountCommentsA = amountA.comments.length;
  const amountCommentsB = amountB.comments.length;

  return amountCommentsB - amountCommentsA;
};

const startFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
  const showDefault = () => {
    clearPosts();
    renderThumbnails(getPosts());
  };

  const showRandom = () => {
    clearPosts();
    const posts = getPosts().slice();
    shuffle(posts);
    const randomPosts = posts.slice(0, RANDOM_COUNT);
    renderThumbnails(randomPosts);
  };

  const showDiscussed = () => {
    clearPosts();
    const discussedPosts = getPosts().slice();
    discussedPosts.sort(compareAmountComments);
    renderThumbnails(discussedPosts);
  };

  const changeFilter = (evt) => {
    const filterBtn = evt.target;
    switch (filterBtn.id) {
      case 'filter-default':
        showDefault();
        break;

      case 'filter-random':
        showRandom();
        break;

      case 'filter-discussed':
        showDiscussed();
        break;
    }
  };

  const changeActiveBtn = (evt) => {
    filterButtons.forEach((button) => button.classList.toggle('img-filters__button--active', button === evt.target));
  };

  const changeView = (evt) => {
    changeActiveBtn(evt);
    debounce(changeFilter)(evt);
  }

  filterForm.addEventListener('click', changeView);
};

export {startFilters};
