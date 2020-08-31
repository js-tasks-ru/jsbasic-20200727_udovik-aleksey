// doesn't work for td and some other elements that may not be placed into <div>
export default function(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
};

// функция для создания RabbonMenu
export function createArrows(carouselParentElement) {
  let arrows = `
    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>
  `;
  carouselParentElement.insertAdjacentHTML('afterbegin', arrows);
  return carouselParentElement;
}


export function createMenu(categories) {

  const ribbonElement = document.createElement('div');
  ribbonElement.classList.add('ribbon');

  // левая стрелочка
  const createRibbonArrowLeft = function(ribbonElement) {
    const ribbonArrowLeft = `
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;
    ribbonElement.insertAdjacentHTML('afterbegin', ribbonArrowLeft);
    return ribbonElement;
  }

  createRibbonArrowLeft(ribbonElement);

  // список меню
  const ribbonInner = document.createElement('nav');
  ribbonInner.classList.add('ribbon__inner');

  categories.forEach(category => {
    let ribbonItem = `
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
    `;
    ribbonInner.insertAdjacentHTML('beforeend', ribbonItem);
  });

  ribbonElement.insertAdjacentElement('beforeend', ribbonInner);


  // правая стрелочка
  const createRibbonArrowRight = function(ribbonElement) {
    const ribbonArrowRight = `
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;
    ribbonElement.insertAdjacentHTML('beforeend', ribbonArrowRight);
    return ribbonElement;
  }

  createRibbonArrowRight(ribbonElement);

  return ribbonElement;
}
