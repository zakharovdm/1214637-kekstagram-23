import {getRandomPositiveInteger, hasDuplicates} from './utils.js';
import {getPosts} from './storage.js';
import {renderThumbnails} from './thumbnail.js';
const imgFilters = document.querySelector('.img-filters');
const filterDefaultBtn = imgFilters.querySelector('#filter-default');
const filterRandomBtn = imgFilters.querySelector('#filter-random');
const filterDiscussedBtn = imgFilters.querySelector('#filter-discussed');
const RANDOM_COUNT = 10;

const clearPosts = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
}

const startFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');

  const showDefault = () => {
    filterRandomBtn.classList.remove('img-filters__button--active');
    filterDiscussedBtn.classList.remove('img-filters__button--active');
    filterDefaultBtn.classList.add('img-filters__button--active');
    clearPosts();
    renderThumbnails(getPosts());
  }

  const showRandom = () => {
    filterDiscussedBtn.classList.remove('img-filters__button--active');
    filterDefaultBtn.classList.remove('img-filters__button--active');
    filterRandomBtn.classList.add('img-filters__button--active');
    clearPosts();
    let randomPosts = [];
    const posts = getPosts();
    const counter = Math.min(posts.length, RANDOM_COUNT);
    const createRandomArray = () => {
      for (let i = 0; i < counter; i++) {
        randomPosts.push(posts[getRandomPositiveInteger(0, posts.length - 1)]);
      }
    }
    createRandomArray();
    while (hasDuplicates(randomPosts)) {
      randomPosts = [];
      createRandomArray();
    };
    renderThumbnails(randomPosts);
  }

  filterRandomBtn.addEventListener('click', showRandom);
  filterDefaultBtn.addEventListener('click', showDefault);
}

export {startFilters};
