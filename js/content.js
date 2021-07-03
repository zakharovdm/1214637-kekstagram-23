import {getData} from './storage.js';
import {renderThumbnails} from './thumbnail.js';
import {renderFullsize} from './fullsize-img.js';
const uploadFile = document.querySelector('.img-upload');
const picturesList = document.querySelector('.pictures');

const renderContent = () => {
  getData().then((posts) => {
    renderThumbnails(posts);
    picturesList.addEventListener('click', (evt) => {
      const findFullsize = (element) => {
        if (element.id === Number(evt.target.dataset.id)) {
          return element;
        }
      };
      renderFullsize(posts.find(findFullsize));
    });
  });
};

uploadFile.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

export {renderContent};
