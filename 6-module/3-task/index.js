import createElement from '../../assets/lib/create-element.js';
import {createArrows} from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.elem = this.createCarousel(this.slides);
    this.moveSlide();
    this.generateCardPlusEvent();
  }

  createCarousel(slides){
    const carouselParentElement = document.createElement('div');
    carouselParentElement.classList.add('carousel');
    const carouselInnerElement = document.createElement('div');
    carouselInnerElement.classList.add('carousel__inner');

    createArrows(carouselParentElement); //функция импортирована из ../create-element.js

    for (let element of slides) {

    const slide = `
      <div class="carousel__slide" data-id="${element.id}">
        <img src="/assets/images/carousel/${element.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${element.price.toFixed(2)}</span>
          <div class="carousel__title">${element.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
    carouselInnerElement.insertAdjacentHTML('beforeend', slide);
    }

    carouselParentElement.insertAdjacentElement('beforeend', carouselInnerElement);
    return carouselParentElement;
  }

  moveSlide() {
    let picture = this.elem.querySelector('.carousel__inner');
    let buttonRight = this.elem.querySelector('.carousel__arrow_right');
    let buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    let slidePosition = 0; // первоначальная позиция изображения
    let slideNumber = 1;  // считаю, что номер первого слайда равен 1

    buttonLeft.style.display = 'none'; // убираем левую стрелочку при отрисовке

    buttonRight.addEventListener('click', () => {
      let shiftValue = picture.offsetWidth;

      slidePosition += -shiftValue;
      picture.style.transform = `translateX(${slidePosition}px)`;
      slideNumber++; // после прокрутки, переходим ко второму слайду

      // если подошли к последнему слайду
      if (slideNumber === this.slides.length) {
        buttonRight.style.display = 'none';
      }

      buttonLeft.style.display = ''; 
    });

    buttonLeft.addEventListener('click', () => {
      let shiftValue = picture.offsetWidth;

      slidePosition += shiftValue;
      picture.style.transform = `translateX(${slidePosition}px)`;
      slideNumber--;

      if (slideNumber === 1) {
        buttonLeft.style.display = 'none';
      }
      buttonRight.style.display = ''; 
    });
  }

  generateCardPlusEvent() {
    let cardButton = this.elem

    cardButton.addEventListener('click', () => {
      if (event.target.closest('button')) {
        event.stopPropagation();

        let cardAddEvent = new CustomEvent('product-add', {
          detail: event.target.closest('.carousel__slide').dataset.id,
          bubbles: true,
        });
        cardButton.dispatchEvent(cardAddEvent);
      }
    });
  }
}
