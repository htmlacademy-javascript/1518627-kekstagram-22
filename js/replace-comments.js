import { commentsArray } from './render-pictures.js';
const commentsList = document.querySelector('.social__comments');
const comment = commentsList.querySelector('li');

const getCommentsLengthArray = function () {
  const pictureComments = document.querySelectorAll('.picture__comments');
  return Array.prototype.map.call(pictureComments, function (evt) {
    return evt.textContent;
  });
};

const replaceComments = function (index) {
  const currentComments = commentsArray[index];
  const fragment = document.createDocumentFragment();

  currentComments.forEach(({ avatar, name, message }) => {
    const newComment = comment.cloneNode(true);

    newComment.querySelector('.social__picture').src = avatar;
    newComment.querySelector('.social__picture').alt = name;
    newComment.querySelector('.social__text').textContent = message;
    fragment.appendChild(newComment);
  });

  return fragment;
};
getCommentsLengthArray();

export { replaceComments };
