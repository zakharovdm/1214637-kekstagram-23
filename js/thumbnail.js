const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderThumbnails = (posts) => {
  const picturesListFragment = document.createDocumentFragment();
  posts.forEach(({url, likes, comments, id}) => {
    const pictureElement = templatePicture.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.setAttribute('data-id', id);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(pictureElement);
  });
  picturesList.appendChild(picturesListFragment);
};

export {renderThumbnails};
