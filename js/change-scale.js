import { innerImage } from './replace-image.js';
const lessSizeButton = document.querySelector('.scale__control--smaller');
const moreSizeButton = document.querySelector('.scale__control--bigger');
let currentSize = document.querySelector('.scale__control--value');

const SCALE_DATA = {
  min: 25,
  step: 25,
  max: 100,
};

const changeScale = function(){
  lessSizeButton.addEventListener('click', function () {
    let sum = (currentSize.value = currentSize.value.replace(/[%]/g, '') - SCALE_DATA.step);
    if (sum <= SCALE_DATA.min) {
      currentSize.value = SCALE_DATA.min;
      lessSizeButton.disabled = true;
    } else {
      lessSizeButton.disabled = false;
      moreSizeButton.disabled = false;
    }
    innerImage.style.transform = 'scale(0.' + currentSize.value + ')';
    currentSize.value += '%';
  });

  moreSizeButton.addEventListener('click', function () {
    let sum = (currentSize.value = + currentSize.value.replace(/[%]/g, '') + SCALE_DATA.step);
    // пока что работает не корректно и при значении в 100, если повторно нажать на кнопку '+', то кнопка останется не активной до перезагрузки страницы
    if (sum >= SCALE_DATA.max) {
      currentSize.value = SCALE_DATA.max;
      moreSizeButton.disabled = true;
    } else {
      lessSizeButton.disabled = false;
    }

    if(currentSize.value < SCALE_DATA.max){
      innerImage.style.transform = 'scale(0.' + currentSize.value + ')';
    } else{
      innerImage.style.transform = 'scale(1)'
    }
    currentSize.value += '%';
  });
}
changeScale();

export { changeScale };
