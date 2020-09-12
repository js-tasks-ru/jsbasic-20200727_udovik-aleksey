export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.isDrag = false;

    this.elem = this.createStepSlider();

    this.sliderThumb.ondragstart = () => false;
    this.sliderThumb.addEventListener('pointerdown', this.dragStart);
    this.elem.addEventListener('click', (event) => this.sliderClickHandler(event));
  }

  createStepSlider() {
    this.sliderElement = document.createElement('div');
    this.sliderElement.classList.add('slider');

    const sliderHTMLElement = `
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">0</span>
      </div>
      <div class="slider__progress" style="width: 0%;"></div>
      <div class="slider__steps"></div>
    `;

    this.sliderElement.innerHTML = sliderHTMLElement;

    // создаю шаги слайдера
    let sliderSteps = this.sliderElement.querySelector('.slider__steps');

    for (let i = 0; i < this.steps; i++) {
      const stepOfSlider = document.createElement('span');
      sliderSteps.append(stepOfSlider);

      if (i === this.value  ) stepOfSlider.classList.add('slider__step-active');
    }

    // записываю значение шага в this.value
    this.sliderValue = this.sliderElement.querySelector('.slider__value').textContent = this.segmentNumber;
    this.value = this.sliderValue;

    // шкала при инициализации
    this.sliderPercentsValue = this.segmentNumber / this.segmentsValue * 100;

    this.sliderThumb = this.sliderElement.querySelector('.slider__thumb');
    this.sliderProgress = this.sliderElement.querySelector('.slider__progress');
    
    this.sliderThumb.style.left = `${this.sliderPercentsValue}%`;
    this.sliderProgress.style.width = `${this.sliderPercentsValue}%`;

    return this.sliderElement;
  }
  
  dragStart = () => {
    this.elem.classList.add('slider_dragging');
    
    this.elem.addEventListener('pointermove', this.dragMove);
  }

  dragMove = (event) => {
    event.preventDefault();
    this.isDrag = true;
    
    this.addActiveStep(event);

    let clickPosition = event.clientX - this.elem.getBoundingClientRect().left; 
    let positionInsideSlider = clickPosition / this.elem.offsetWidth;

    if (positionInsideSlider < 0) {
      positionInsideSlider = 0;
    } else if (positionInsideSlider > 1) {
      positionInsideSlider = 1;
    }

    this.sliderPercentsValue = positionInsideSlider * 100;

    this.sliderThumb.style.left = `${this.sliderPercentsValue}%`;
    this.sliderProgress.style.width = `${this.sliderPercentsValue}%`;

    this.elem.addEventListener('pointerup', this.dragStop);
  }

  dragStop = () => {

    this.elem.classList.remove('slider_dragging');

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true,
    }));

    this.elem.removeEventListener('pointermove', this.dragMove);
    this.elem.removeEventListener('pointerup', this.dragStop);
    this.isDrag = false;
  }

  sliderClickHandler(event) {

    if (this.isDrag) return;

    this.addActiveStep(event);
    this.changeThumbPosition(event);

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true,
    }));
  }

  addActiveStep (event) {
    // Определяю ближний клику пользователя сегмент слайдера
    let clickPosition = event.clientX - this.elem.getBoundingClientRect().left; 
    let positionInsideSlider = clickPosition / this.elem.offsetWidth; // позиция клика относительно слайдера
    this.segmentsValue = this.steps - 1;
    let segmentAproximateValue = positionInsideSlider * this.segmentsValue;
    this.segmentNumber = Math.round(segmentAproximateValue); // значение положения ползунка
  
    this.sliderValue = this.elem.querySelector('.slider__value').textContent = this.segmentNumber;
    this.value = this.sliderValue; // заношу положение ползунка в this.value

    // Изменяю активный класс взависимости от выбранного пользователем сегмента
    const stepOfSlider = this.elem.querySelectorAll('.slider__steps > span');

    stepOfSlider.forEach(element => {
      element.classList.remove('slider__step-active');
    });

    stepOfSlider[this.value].classList.add('slider__step-active');
  }

  changeThumbPosition () {
    // Отображаю положение ползунка
    this.sliderProgress = this.elem.querySelector('.slider__progress');
    this.sliderPercentsValue = this.segmentNumber / this.segmentsValue * 100;

    this.sliderThumb.style.left = `${this.sliderPercentsValue}%`;
    this.sliderProgress.style.width = `${this.sliderPercentsValue}%`;
  }
}

