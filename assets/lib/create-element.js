// doesn't work for td and some other elements that may not be placed into <div>
export default function(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
};

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
