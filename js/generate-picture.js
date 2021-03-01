import { createPhotosList } from './create-photos.js';

const pictures = document.querySelector('.pictures');

const pictureFragment = document.querySelector('#picture').content;
const picture = pictureFragment.querySelector('.picture');

const photoData = createPhotosList(25);
const commentsArray = [];

for(let i = 0; i < photoData.length; i++){
  commentsArray.push(photoData[i].comments)
}

const renderPictures = function () {
  const fragment = document.createDocumentFragment();

  photoData.forEach(({ url, likes, comments }) => {
    const photoElement = picture.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent =
      comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    fragment.appendChild(photoElement);
  });

  pictures.appendChild(fragment);
};

renderPictures();
export { renderPictures, commentsArray };
