function initCarousel() {
  // ваш код...

  let picture = document.querySelector('.carousel__inner');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  // переменная для вычисления сдвига слайда
  let shiftPosition = 0;
  // вычисление размера слайда
  let shiftValue = picture.offsetWidth;

  buttonLeft.style.display = 'none';

  buttonRight.addEventListener('click', function() {

    shiftPosition += -(shiftValue);
      picture.style.transform = `translateX(${shiftPosition}px)`;

      // скрываю правую стрелочку, при достижении крайнего правого слайда
      if (shiftPosition === -(shiftValue*3)) {
        buttonRight.style.display = 'none';
      }

      buttonLeft.style.display = '';
  });

  buttonLeft.addEventListener('click', function() {

      shiftPosition += shiftValue;
      picture.style.transform = `translateX(${shiftPosition}px)`;

      if (shiftPosition === 0) {
        buttonLeft.style.display = 'none';
      }

      buttonRight.style.display = '';
  });
}
