export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.elem = this.createStepSlider();
    this.elem.addEventListener('click', () => this.sliderHandler());
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

    let sliderSteps = this.sliderElement.querySelector('.slider__steps');

    for (let i = 0; i < this.steps; i++) {
      const stepOfSlider = document.createElement('span');
      sliderSteps.append(stepOfSlider);

      if (i === 0) stepOfSlider.classList.add('slider__step-active');
    }

    return this.sliderElement;
  }

  sliderHandler() {
    // Определяю ближний клику пользователя сегмент слайдера
    let clickPosition = event.clientX - this.elem.getBoundingClientRect().left;
    let positionInsideSlider = clickPosition / this.elem.offsetWidth;
    let segmentsValue = this.steps - 1;
    let segmentAproximateValue = positionInsideSlider * segmentsValue;
    let segmentNumber = Math.round(segmentAproximateValue);
    
    this.sliderValue = document.querySelector('.slider__value').textContent = segmentNumber;
    this.value = this.sliderValue;

    // Изменяю активный класс взависимости от выбранного пользователем сегмента
    let stepOfSlider = this.elem.querySelectorAll('.slider__steps > span');

    stepOfSlider.forEach(element => {
      element.classList.remove('slider__step-active');
    });

    stepOfSlider[this.value].classList.add('slider__step-active');

    // Отображаю положение ползунка
    let sliderThumb = this.elem.querySelector('.slider__thumb');
    let sliderProgress = this.elem.querySelector('.slider__progress');
    this.sliderPercentsValue = segmentNumber / segmentsValue * 100;

    sliderThumb.style.left = `${this.sliderPercentsValue}%`;
    sliderProgress.style.width = `${this.sliderPercentsValue}%`;
    
    // Добавляю пользовательское событие
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true,
    }));
  }
}
