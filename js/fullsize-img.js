import {openModal} from './controls.js';

const popup = document.querySelector('.big-picture');
const commentsList = popup.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const commentsCount = popup.querySelector('.social__comment-count');
const commentsLoader = popup.querySelector('.comments-loader');
const MAX_VISIBLE_COUNT = 5;

const updateCounter = (count) => commentsCount.firstChild.textContent = `${count} из `;

const showPartComments = (comments) => {
  for (let i=0; i < MAX_VISIBLE_COUNT; i++) {
    if (!comments[i]) {
      break;
    } commentsLoader.classList.remove('hidden');
    commentsList.append(comments[i]);
  }
  comments.splice(0, MAX_VISIBLE_COUNT);
  if (comments.length === 0) {
    commentsLoader.classList.add('hidden');
  }
};

const downloadMore = (storage) => {
  commentsLoader.addEventListener('click', () => {
    showPartComments(storage);
    updateCounter(commentsList.childElementCount);
  });
};

const renderComments = (comments) => {
  commentsList.innerHTML = "";
  const commentsStorage = [];
  comments.forEach(({avatar, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsStorage.push(commentElement);
  });
  showPartComments(commentsStorage);
  downloadMore(commentsStorage);
  updateCounter(commentsList.childElementCount);
};

const renderFullsize = ({url, likes, comments, description}) => {
  openModal();
  popup.querySelector('.big-picture__img').querySelector('img').src = url;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.comments-count').textContent = comments.length;
  popup.querySelector('.social__caption').textContent = description;
  renderComments(comments);
};

export {renderFullsize};
