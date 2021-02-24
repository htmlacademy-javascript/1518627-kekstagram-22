import { isEscButton } from './util.js';

const upload = document.querySelector('#upload-file');
const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const closeModal = document.querySelector('#upload-cancel');
const imageContainer = document.querySelector('.img-upload__preview');
const innerImage = imageContainer.querySelector('img');
const dropZone = document.querySelector('.img-upload__control');
let file;

// отменяю стандартные события браузера для апло
document.addEventListener('dragover', (evt) => evt.preventDefault());
document.addEventListener('drop', (evt) => evt.preventDefault());

// функция,которая добавляет изображение на страницу,полученное от пользователя
const replaceImage = function (image) {
  const newImage = document.createElement('img');
  newImage.src = URL.createObjectURL(image);
  newImage.alt = 'Предварительный просмотр фотографии';
  imageContainer.append(newImage);
  URL.revokeObjectURL(newImage);
};
// обработчик при клике на кнопку загрузки
dropZone.addEventListener('click', function () {
  upload.addEventListener('change', function (evt) {
    evt.preventDefault();
    overlay.classList.remove('hidden');
    body.classList.add('modal-open');
    file = upload.files[0];
    replaceImage(file);
  });
});
// обработчки при перетаскивании файла в зону загрузки
dropZone.addEventListener('drop', function (evt) {
  evt.preventDefault();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  file = evt.dataTransfer.files[0];
  replaceImage(file);
});

// обработчкик для закрытия оверлея с помощью клика
closeModal.addEventListener('click', function () {
  overlay.classList.add('hidden'),
  body.classList.remove('modal-open');
  // imageContainer.remove('img');
  imageContainer.innerHTML = '';
});
// обработчкик для закрытия оверлея с помощью esc
window.addEventListener('keydown', function (evt) {
  if (isEscButton(evt)) {
    evt.preventDefault();
    overlay.classList.add('hidden'),
    body.classList.remove('modal-open');
  }
});

export { imageContainer, innerImage };
