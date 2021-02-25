import { innerImage } from './replace-image.js';
const lessSizeButton = document.querySelector('.scale__control--smaller');
const moreSizeButton = document.querySelector('.scale__control--bigger');
let currentSize = document.querySelector('.scale__control--value');

const changeScale = function(){
  lessSizeButton.addEventListener('click', function () {
    let sum = (currentSize.value = currentSize.value.replace(/[%]/g, '') - 25);

    if (sum < 25) {
      currentSize.value = 25;
      lessSizeButton.disabled = true;
    } else {
      lessSizeButton.disabled = false;
    }
    innerImage.style.transform = 'scale(0.' + currentSize.value + ')';
    currentSize.value += '%';
  });

  moreSizeButton.addEventListener('click', function () {
    let sum = (currentSize.value = +currentSize.value.replace(/[%]/g, '') + 25);
    // пока что работает не корректно и при значении в 100, если повторно нажать на кнопку '+', то кнопка останется не активной до перезагрузки страницы
    if (sum > 100) {
      currentSize.value = 100;
      moreSizeButton.disabled = true;
    } else {
      lessSizeButton.disabled = false;
    }

    if(currentSize.value < 100){
      innerImage.style.transform = 'scale(0.' + currentSize.value + ')';
    } else{
      innerImage.style.transform = 'scale(1)'
    }
    currentSize.value += '%';
  });
}
changeScale();

export { changeScale };
