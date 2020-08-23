function initCarousel() {
  // ваш код...

  let picture = document.querySelector('.carousel__inner');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  // переменные для вычисления сдвига слайда
  let rightShift = 0;
  let leftShift = 0;
  // вычисление размера слайда
  let shiftValue = picture.offsetWidth;

  buttonLeft.style.display = 'none';

  buttonRight.addEventListener('click', function() {

      rightShift += -(shiftValue);
      picture.style.transform = `translateX(${rightShift}px)`;

      // скрываю правую стрелочку, при достижении крайнего правого слайда
      if (rightShift === -(shiftValue*3)) {
        buttonRight.style.display = 'none';
      }

      buttonLeft.style.display = '';
      // передаю текущее положение изображения в buttonLeft.addEventListener
      leftShift = rightShift;
  });

  buttonLeft.addEventListener('click', function() {

      leftShift += shiftValue;
      picture.style.transform = `translateX(${leftShift}px)`;

      if (leftShift === 0) {
        buttonLeft.style.display = 'none';
      }

      buttonRight.style.display = '';
      rightShift = leftShift;
  });
}
