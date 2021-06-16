const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderThumbnails = (posts) => {
  const picturesListFragment = document.createDocumentFragment();
  posts.forEach(({url, likes, comments}) => {
    const pictureElement = templatePicture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(pictureElement);
  });
  picturesList.appendChild(picturesListFragment);
};

export {renderThumbnails};
