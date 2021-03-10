import { getCommentLength } from './util.js';
import { onEscButton } from './replace-image.js';
const hashtagInput = document.querySelector('.text__hashtags');
const hashtagTemplate = new RegExp(/^(#)([a-zA-Zа-яА-Я0-9]{1,19})$/);
const commentTextArea = document.querySelector('.text__description');
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_LENGTH = 20;
const MAX_HASHTAG_NUMBER = 5;
// проверка оригинальности хэштега
const checkOriginality = function (hashtags) {
  const originalHashtag = [];
  let originality = true;
  hashtags.forEach((hashtag) => {
    const hashtagLowerCase = hashtag.toLowerCase();
    if (originalHashtag.includes(hashtagLowerCase)) {
      originality = false;
    } else {
      originalHashtag.push(hashtagLowerCase);
    }
  });
  return originality;
};
// проверка хэштега на соответсвие валдиности
const validateHashtag = function (input) {
  let error = '';
  if (input.slice(0, 1) !== '#') {
    error = 'Хэштег должен начинаться с решётки';
  } else if (hashtagTemplate.test(input) == false) {
    error = 'Хэштэг не должен содержать спецсимволы';
  } else if (input.length > HASHTAG_LENGTH) {
    error =
      'Хэштег не должен быть длиннее 20 символов (включая символ решётки)';
  }
  return error;
};
// проверка хэштегов на повторение и количество
const checkHashtagInput = function (input) {
  let error = '';
  const erorrsArray = [];
  const hashtags = input.split(' ');
  if (hashtags.length > MAX_HASHTAG_NUMBER) {
    erorrsArray.push('Количество хэштегов не должно привышать 5');
  }
  if (!checkOriginality(hashtags)) {
    erorrsArray.push('Хэштег не может повторяться');
  }
  hashtags.forEach((hashtag) => {
    error = validateHashtag(hashtag);
    if (error) {
      erorrsArray.push(error);
    }

  });
  error = erorrsArray.join(', ');
  if(error){
    hashtagInput.style.borderColor = 'red';
  }
  return error;
};
// функции для проверки фокуса в поле хештега
hashtagInput.onfocus = function () {
  window.removeEventListener('keydown', onEscButton);
};
hashtagInput.onblur = function () {
  window.addEventListener('keydown', onEscButton);
};
// функция валидации поля хэштега с применением функций описанных выше
hashtagInput.addEventListener('input', function () {
  hashtagInput.setCustomValidity(checkHashtagInput(hashtagInput.value));
});
// функции для проверки фокуса в поле комментария
commentTextArea.onfocus = function () {
  window.removeEventListener('keydown', onEscButton);
};
commentTextArea.onblur = function () {
  window.addEventListener('keydown', onEscButton);
};
// функция проверки длины комментария
commentTextArea.addEventListener('input', function () {
  const commentLength = commentTextArea.value.length;
  if (getCommentLength(commentLength, MAX_COMMENT_LENGTH) === false) {
    commentTextArea.setCustomValidity(
      'Длина комментария не должна превышать 140 символов');
  } else {
    commentTextArea.setCustomValidity('')
  }
})




