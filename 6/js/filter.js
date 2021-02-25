/* global noUiSlider:readonly */
import { imageContainer } from './replace-image.js'
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const noEffectButton = document.querySelector('#effect-none');
const chromeEffectButton = document.querySelector('#effect-chrome');
const sepiaEffectButton = document.querySelector('#effect-sepia');
const marvinEffectButton = document.querySelector('#effect-marvin');
const phobosEffectButton = document.querySelector('#effect-phobos');
const heatEffectButton = document.querySelector('#effect-heat');

// данные для фильтров
const FILTER_SETTINGS = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
  percent: '%',
  pixel: 'px',
  empty: '',
};

// функция для создания слайдера
const createSlider = function () {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  });
};
let innerImage = imageContainer.querySelector('img');
valueElement.value = 0;

// функция для обновления информации в слайдере и наложения фильтра на изображения с помощью параметров
const updateFilter = function (filterName, unit) {
  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {

    valueElement.value = unencoded[handle];
    innerImage.style.filter =
      '' + filterName + '(' + valueElement.value + unit + ')';
  });
};
// при выборе оригинала сбрасывает все фильтры и удаляет слайдер
noEffectButton.addEventListener('change', function (evt) {
  if (evt.target.checked) {
    innerImage.style.filter = 'none';
    sliderElement.noUiSlider.destroy();
  }
});
// накладывает фильтр серого
chromeEffectButton.addEventListener('change', function (evt) {
  // делает проверку, создан ли слайдер,если его нет - создаёт его
  if(!sliderElement.classList.contains('noUi-target')){
    createSlider();
  }
  // заменяет настройки слайдера на необходимые конкретному фильтру
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
  });
  // проверяет атрибут checked, сбрасывает стили и ползунок к базовому значению, вызывает функцию с нужными параметрами фильтра
  if (evt.target.checked) {
    sliderElement.noUiSlider.set(0);
    innerImage.style.filter = 'none';
    updateFilter(FILTER_SETTINGS.chrome, FILTER_SETTINGS.empty);
  }
});

// накладывает фильтр сепии
sepiaEffectButton.addEventListener('change', function (evt) {
  if(!sliderElement.classList.contains('noUi-target')){
    createSlider();
  }
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
  });
  if (evt.target.checked) {
    sliderElement.noUiSlider.set(0);
    innerImage.style.filter = 'none';
    updateFilter(FILTER_SETTINGS.sepia, FILTER_SETTINGS.empty);
  }
});

// накладывает фильтр инвертирования цветов
marvinEffectButton.addEventListener('change', function (evt) {
  if(!sliderElement.classList.contains('noUi-target')){
    createSlider();
  }
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
  });
  if (evt.target.checked) {
    sliderElement.noUiSlider.set(0);
    innerImage.style.filter = 'none';
    updateFilter(FILTER_SETTINGS.marvin, FILTER_SETTINGS.percent);
  }
});

// накладывает фильтр размытия
phobosEffectButton.addEventListener('change', function (evt) {
  if(!sliderElement.classList.contains('noUi-target')){
    createSlider();
  }
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 0,
    step: 0.1,
  });
  if (evt.target.checked) {
    sliderElement.noUiSlider.set(0);
    innerImage.style.filter = 'none';
    updateFilter(FILTER_SETTINGS.phobos, FILTER_SETTINGS.pixel);
  }
});

// накладывает фильтр яркости
heatEffectButton.addEventListener('change', function (evt) {
  if(!sliderElement.classList.contains('noUi-target')){
    createSlider();
  }
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 1,
    step: 0.1,
  });
  if (evt.target.checked) {
    sliderElement.noUiSlider.set(1);
    innerImage.style.filter = 'none';
    updateFilter(FILTER_SETTINGS.heat, FILTER_SETTINGS.empty);
  }
});

export { valueElement };
