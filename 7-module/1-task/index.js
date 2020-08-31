import createElement from '../../assets/lib/create-element.js';
import {createMenu} from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = createMenu(this.categories);
    this.makeScrollRibbonMenu(this.elem);
    this.generateSelectedCategory(this.elem);
  }

  // интерфейс меню
  makeScrollRibbonMenu(elem) {
    const ribbonInner = elem.querySelector('.ribbon__inner');
    const ribbonArrowLeft = elem.querySelector('.ribbon__arrow_left');
    const ribbonArrowRight = elem.querySelector('.ribbon__arrow_right');
    
    // обработчики движения скролла
    ribbonArrowLeft.addEventListener('click', makeScroll);
    ribbonArrowRight.addEventListener('click', makeScroll);

    function makeScroll(event) {
      event.stopPropagation();
      
      if (event.currentTarget === ribbonArrowLeft) {
        ribbonInner.scrollBy(-350, 0);
      } else if (event.currentTarget === ribbonArrowRight) {
        ribbonInner.scrollBy(350, 0);
      }
    }

    // обработчик скрытия стрелочек
    ribbonInner.addEventListener('scroll', () => {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      
      if (scrollLeft < 1) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
    });
  }

  // интерфейс при выборе пункта меню
  generateSelectedCategory(elem) {
    
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      // создаю массив ссылок <a> из элемента <nav class="ribbon__inner">
      let elemArray = elem.querySelectorAll('.ribbon__item');

      // прохожусь по массиву и удаляю класс 'ribbon__item_active', если такой имеется
      elemArray.forEach(element => {
        element.classList.remove('ribbon__item_active');
      });
      // добавляю класс 'ribbon__item_active' у выбранного элемента
      event.target.classList.add('ribbon__item_active');

      let ribbonSelected = new CustomEvent('ribbon-select', {
        detail: event.target.closest('.ribbon__item').dataset.id,
        bubbles: true,
      });
      elem.dispatchEvent(ribbonSelected);
    });
  }
  
}
