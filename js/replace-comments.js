import { commentsArray } from './generate-picture.js';
const commentsList = document.querySelector('.social__comments');
const comment = commentsList.querySelector('li');
console.log(commentsArray);


const getCommentsLengthArray = function () {
  const pictureComments = document.querySelectorAll('.picture__comments');
  return Array.prototype.map.call(pictureComments, function(evt) { return evt.textContent; });
}

console.log(getCommentsLengthArray());

const replaceComments = function () {
  const fragment = document.createDocumentFragment();

  for(let j = 0; j < getCommentsLengthArray().length; j++){
    let commentsCount =  getCommentsLengthArray()[j];

    for(let i= 0; i < commentsCount; i++){
      commentsArray.forEach(({ avatar, name, message }) => {
        const newComment = comment.cloneNode(true)
        newComment.querySelector('.social__picture').src = avatar;
        newComment.querySelector('.social__picture').alt = name;
        newComment.querySelector('.social__text').textContent = message;
        fragment.appendChild(newComment);
      })
    }
  }
  commentsList.appendChild(fragment);
};

// const replaceComments = function () {
//   const fragment = document.createDocumentFragment();
//   commentsArray.forEach(({ avatar, name, message }) => {
//     const newComment = comment.cloneNode(true)
//     newComment.querySelector('.social__picture').src = avatar;
//     newComment.querySelector('.social__picture').alt = name;
//     newComment.querySelector('.social__text').textContent = message;
//     fragment.appendChild(newComment);
//   })

//   commentsList.appendChild(fragment);
// };

export { commentsList, replaceComments };
