import {createPosts} from './data.js';
import {renderFullsize} from './fullsize-img.js';
import {renderThumbnails} from './thumbnail.js';
const picturesList = document.querySelector('.pictures');
const posts = createPosts(25);
renderThumbnails(posts);

const renderContent = () => {
  picturesList.addEventListener('click', (evt) => {
    const findFullsize = (element) => {
      if (element.id === Number(evt.target.dataset.id)) {
        return element;
      }
    };
    renderFullsize(posts.find(findFullsize));
  });
};

export {renderContent};
