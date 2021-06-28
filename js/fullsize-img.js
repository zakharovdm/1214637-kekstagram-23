import {openModal} from './controls.js';
import {renderComments} from './comments.js';

const popup = document.querySelector('.big-picture');

const renderFullsize = ({url, likes, comments, description}) => {
  openModal();
  popup.querySelector('.big-picture__img').querySelector('img').src = url;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.comments-count').textContent = comments.length;
  popup.querySelector('.social__caption').textContent = description;
  renderComments(comments);
};

export {renderFullsize};
