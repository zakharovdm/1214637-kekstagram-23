import {getData} from './api.js';
import {showAlert} from './utils.js';
import {renderThumbnails} from './thumbnail.js';
import {renderFullsize} from './fullsize-img.js';
const uploadFile = document.querySelector('.img-upload');
const picturesList = document.querySelector('.pictures');

const renderContent = () => {
  getData(showAlert).then((posts) => {
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
