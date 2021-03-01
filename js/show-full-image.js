import { isEscButton } from './util.js';
import { commentsList, replaceComments } from './replace-comments.js';
const pictures = document.querySelectorAll('.picture');
const images = document.querySelectorAll('.picture .picture__img');
const pictureComments = document.querySelectorAll('.picture .picture__comments');
const pictureLikes = document.querySelectorAll('.picture .picture__likes');
const fullImageOverlay = document.querySelector('.big-picture');
const fullImage = document.querySelector('.big-picture__img > img');
const closeModal = document.querySelector('.big-picture__cancel');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
commentsList.innerHTML = '';

const showFullImage = function () {
  for (let i = 0; i < pictures.length; i++) {
    images[i].addEventListener('click', function () {
      fullImageOverlay.classList.remove('hidden');
      fullImage.src = images[i].src;
      likes.innerHTML = pictureLikes[i].innerHTML;
      comments.innerHTML = pictureComments[i].innerHTML;
      replaceComments(comments.innerHTML);
    });
  }

};
showFullImage();

closeModal.addEventListener('click', function () {
  fullImageOverlay.classList.add('hidden');
  commentsList.innerHTML = '';
});

window.addEventListener('keydown', function (evt) {
  if (isEscButton(evt)) {
    evt.preventDefault();
    fullImageOverlay.classList.add('hidden');
    commentsList.innerHTML = '';
  }
});
export { showFullImage };
// export { showFullImage, comments };
