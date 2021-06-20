import {createPosts} from './data.js';
import {renderFullsize} from './fullsize-img.js';
import {renderThumbnails} from './thumbnail.js';

const posts = createPosts(25);
renderThumbnails(posts);

const thumbnails = document.querySelectorAll('.picture');

const renderContent = () => {
  const addClickHandler = (thumbnail, fullsize) => {
    thumbnail.addEventListener('click', () => {
      renderFullsize(fullsize);
    });
  };

  for (let id = 0; id < thumbnails.length; id++) {
    addClickHandler(thumbnails[id], posts[id]);
  }
};

export {renderContent};
