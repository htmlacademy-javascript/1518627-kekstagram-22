// Функция для получения случайного числа взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandom = function (min, max) {
  if (min > max) {
    let swap = min;
    min = max;
    max = swap;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCommentLength = function (currentLength, maxLength) {
  if (currentLength <= maxLength) {
    return true;
  } else {
    return false;
  }
};

const isEscButton = function(evt){
  return evt.key === ('Escape' || 'Esc');
};

export { getRandom, getCommentLength, isEscButton };
