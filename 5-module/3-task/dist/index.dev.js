"use strict";

function initCarousel() {
  // ваш код...
  var picture = document.querySelector('.carousel__inner');
  var buttonRight = document.querySelector('.carousel__arrow_right');
  var buttonLeft = document.querySelector('.carousel__arrow_left');
  var rightShift = 0;
  var leftShift = 0;
  var coords = '';
  buttonLeft.style.display = 'none';
  buttonRight.addEventListener('click', function () {
    if (picture.style.transform === coords) {
      rightShift += -988;
      picture.style.transform = "translateX(".concat(rightShift, "px)");
      coords = picture.style.transform;

      if (rightShift === -2964) {
        buttonRight.style.display = 'none';
      }

      buttonLeft.style.display = '';
      leftShift = rightShift;
    }
  });
  buttonLeft.addEventListener('click', function () {
    if (picture.style.transform === coords) {
      leftShift += 988;
      picture.style.transform = "translateX(".concat(leftShift, "px)");
      coords = picture.style.transform;

      if (leftShift === 0) {
        buttonLeft.style.display = 'none';
      }

      buttonRight.style.display = '';
      rightShift = leftShift;
    }
  });
}