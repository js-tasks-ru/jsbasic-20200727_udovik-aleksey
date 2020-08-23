"use strict";

function initCarousel() {
  // ваш код...
  var picture = document.querySelector('.carousel__inner');
  var buttonRight = document.querySelector('.carousel__arrow_right');
  var buttonLeft = document.querySelector('.carousel__arrow_left'); // переменные для вычисления сдвига слайда

  var rightShift = 0;
  var leftShift = 0; // вычисление размера слайда

  var shiftValue = picture.offsetWidth;
  buttonLeft.style.display = 'none';
  buttonRight.addEventListener('click', function () {
    rightShift += -shiftValue;
    picture.style.transform = "translateX(".concat(rightShift, "px)"); // скрываю правую стрелочку, при достижении крайнего правого слайда

    if (rightShift === -(shiftValue * 3)) {
      buttonRight.style.display = 'none';
    }

    buttonLeft.style.display = ''; // передаю текущее положение изображения в buttonLeft.addEventListener

    leftShift = rightShift;
  });
  buttonLeft.addEventListener('click', function () {
    leftShift += shiftValue;
    picture.style.transform = "translateX(".concat(leftShift, "px)");

    if (leftShift === 0) {
      buttonLeft.style.display = 'none';
    }

    buttonRight.style.display = '';
    rightShift = leftShift;
  });
}