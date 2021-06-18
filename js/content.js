import {createPosts} from './data.js';
import {renderFullsize} from './fullsize-img.js';
import {renderThumbnails} from './thumbnail.js';

const posts = createPosts(25);
renderThumbnails(posts);

const thumbnails = document.querySelectorAll('.picture');

const addClickHandler = (thumbnail, fullsize) => {
  thumbnail.addEventListener('click', () => {
    renderFullsize(fullsize);
  })
}

for (let i = 0; i < thumbnails.length; i++) {
  addClickHandler(thumbnails[i], posts[i]);
}
