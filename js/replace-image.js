import { isEscButton } from './util.js';

const upload = document.querySelector('#upload-file');
const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const closeModal = document.querySelector('#upload-cancel');
const imageContainer = document.querySelector('.img-upload__preview');
const innerImage = imageContainer.querySelector('img');
// const dropZone = document.querySelector('.img-upload__control');

// отменяю стандартные события браузера для апло
document.addEventListener('dragover', (evt) => evt.preventDefault());
document.addEventListener('drop', (evt) => evt.preventDefault());

// функция,которая добавляет изображение на страницу,полученное от пользователя


function replaceImage() {
  let file = upload.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    innerImage.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    innerImage.src = '';
  }
}

upload.addEventListener('change', function (evt) {
  evt.preventDefault();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  replaceImage();
});

// обработчки при перетаскивании файла в зону загрузки
// dropZone.addEventListener('drop', function (evt) {
//   evt.preventDefault();
//   overlay.classList.remove('hidden');
//   body.classList.add('modal-open');
//   replaceImage();
// });

// обработчкик для закрытия оверлея с помощью клика
closeModal.addEventListener('click', function () {
  overlay.classList.add('hidden'), body.classList.remove('modal-open');
});
// обработчкик для закрытия оверлея с помощью esc
window.addEventListener('keydown', function (evt) {
  if (isEscButton(evt)) {
    evt.preventDefault();
    overlay.classList.add('hidden'), body.classList.remove('modal-open');
  }
});

export { imageContainer, innerImage };
