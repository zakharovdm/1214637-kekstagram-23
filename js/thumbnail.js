const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderThumbnails = (posts) => {
  const picturesListFragment = document.createDocumentFragment();
  posts.forEach(({url, likes, comments, id}) => {
    const picture = templatePicture.cloneNode(true);
    const pictureImg = picture.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.dataset.id = id;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(picture);
  });
  picturesList.appendChild(picturesListFragment);
};

export {renderThumbnails};
