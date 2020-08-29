"use strict";

function initCarousel() {
  // ваш код...
  var picture = document.querySelector('.carousel__inner');
  var buttonRight = document.querySelector('.carousel__arrow_right');
  var buttonLeft = document.querySelector('.carousel__arrow_left'); // переменная для вычисления сдвига слайда

  var shiftPosition = 0; // вычисление размера слайда

  var shiftValue = picture.offsetWidth;
  buttonLeft.style.display = 'none';
  buttonRight.addEventListener('click', function () {
    shiftPosition += -shiftValue;
    picture.style.transform = "translateX(".concat(shiftPosition, "px)"); // скрываю правую стрелочку, при достижении крайнего правого слайда

    if (shiftPosition === -(shiftValue * 3)) {
      buttonRight.style.display = 'none';
    }

    buttonLeft.style.display = '';
  });
  buttonLeft.addEventListener('click', function () {
    shiftPosition += shiftValue;
    picture.style.transform = "translateX(".concat(shiftPosition, "px)");

    if (shiftPosition === 0) {
      buttonLeft.style.display = 'none';
    }

    buttonRight.style.display = '';
  });
}