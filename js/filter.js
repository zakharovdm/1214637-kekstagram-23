import {getRandomPositiveInteger, hasDuplicates, debounce} from './utils.js';
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
    let randomPosts = [];
    const posts = getPosts();
    const counter = Math.min(posts.length, RANDOM_COUNT);
    const createRandomArray = () => {
      for (let i = 0; i < counter; i++) {
        randomPosts.push(posts[getRandomPositiveInteger(0, posts.length - 1)]);
      }
    };
    createRandomArray();
    while (hasDuplicates(randomPosts)) {
      randomPosts = [];
      createRandomArray();
    }
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

  filterForm.addEventListener('click', debounce(changeFilter));
  filterForm.addEventListener('click', changeActiveBtn);
};

export {startFilters};
