// import { createPhotosList } from './create-photos.js';
const pictures = document.querySelector('.pictures');

const pictureFragment = document.querySelector('#picture').content;
const picture = pictureFragment.querySelector('.picture');

// const photoData = createPhotosList(25);
const commentsArray = [];
const descriptionArray = [];

const renderPictures = function (picturesArray) {
  const fragment = document.createDocumentFragment();

  picturesArray.forEach(({ url, likes, comments, description }) => {
    const photoElement = picture.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent =
      comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;

    commentsArray.push(comments);
    descriptionArray.push(description);
    fragment.appendChild(photoElement);
  });


  pictures.appendChild(fragment);

};
export { renderPictures, commentsArray, descriptionArray };
