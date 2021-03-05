import { isEscButton } from './util.js';
import { replaceComments } from './replace-comments.js';
import { descriptionArray } from './render-pictures.js';
const pictures = document.querySelectorAll('.picture');
const images = document.querySelectorAll('.picture .picture__img');
const pictureComments = document.querySelectorAll('.picture .picture__comments');
const pictureLikes = document.querySelectorAll('.picture .picture__likes');
const fullImageOverlay = document.querySelector('.big-picture');
const fullImage = document.querySelector('.big-picture__img > img');
const closeModal = document.querySelector('.big-picture__cancel');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentsList = document.querySelector('.social__comments');
const description = document.querySelector('.social__caption');
const body = document.querySelector('body');
const commentsCount = document.querySelector('.social__comment-count');
const commentsloader = document.querySelector('.comments-loader');

const showFullImage = function () {
  for (let i = 0; i < pictures.length; i++) {
    images[i].addEventListener('click', function () {
      fullImageOverlay.classList.remove('hidden');
      body.classList.add('modal-open');
      fullImage.src = images[i].src;
      likes.innerHTML = pictureLikes[i].innerHTML;
      comments.innerHTML = pictureComments[i].innerHTML;
      description.textContent = descriptionArray[i];
      const currentComments = replaceComments(i);
      commentsList.innerHTML = '';
      commentsCount.classList.add('hidden');
      commentsloader.classList.add('hidden');
      commentsList.appendChild(currentComments);
    });
  }
};

closeModal.addEventListener('click', function () {
  fullImageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
});


window.addEventListener('keydown', function(evt){
  if (isEscButton(evt)) {
    evt.preventDefault();
    fullImageOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

showFullImage();
