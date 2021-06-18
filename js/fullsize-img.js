const popup = document.querySelector('.big-picture');
const commentsList = popup.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsListFragment.appendChild(commentElement);
  })
  commentsList.replaceWith(commentsListFragment);
}

const renderFullsize = ({url, likes, comments, description}) => {
  popup.classList.remove('hidden');
  popup.querySelector('.big-picture__img').querySelector('img').src = url;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.comments-count').textContent = comments.length;
  popup.querySelector('.social__caption').textContent = description;
  renderComments(comments);
}

export {renderFullsize};
