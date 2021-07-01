import {getData} from './storage.js';
import {renderFullsize} from './fullsize-img.js';
import {renderThumbnails} from './thumbnail.js';
const uploadFile = document.querySelector('.img-upload');
const picturesList = document.querySelector('.pictures');
const posts = getData();
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

uploadFile.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

export {renderContent};
