function initCarousel() {
  // ваш код...

  let picture = document.querySelector('.carousel__inner');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let rightShift = 0;
  let leftShift = 0;
  let coords = '';

  buttonLeft.style.display = 'none';

  buttonRight.addEventListener('click', function() {
    
    if (picture.style.transform === coords) {
      rightShift += (-988);
      picture.style.transform = `translateX(${rightShift}px)`;
      coords = picture.style.transform;

      if (rightShift === (-2964)) {
        buttonRight.style.display = 'none';
      }

      buttonLeft.style.display = '';
      leftShift = rightShift;
    }
  });

  buttonLeft.addEventListener('click', function() {

    if (picture.style.transform === coords) {
      leftShift += 988;
      picture.style.transform = `translateX(${leftShift}px)`;
      coords = picture.style.transform;

      if (leftShift === 0) {
        buttonLeft.style.display = 'none';
      }

      buttonRight.style.display = '';
      rightShift = leftShift;
    }
  });
}
