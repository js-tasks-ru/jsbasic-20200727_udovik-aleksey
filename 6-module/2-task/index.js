import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.elem = this.createProduct();
    this.generateCardPlusEvent(this.id);
  }

  createProduct() {

    let parentDiv = document.createElement('div');
    let cardText = `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
          <span class="card__price">€${this.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;

    parentDiv.insertAdjacentHTML('afterbegin', cardText);
    return parentDiv;
  }

  generateCardPlusEvent(productId) {
    let cardButton = this.elem.querySelector('.card__button');
    
    cardButton.addEventListener('click', () => {
      let cardAddEvent = new CustomEvent('product-add', {
        detail: productId, // productId передано в аргументе функции generateCardPlusEvent от поля конструктра this.id
        bubbles: true,
      });
      cardButton.dispatchEvent(cardAddEvent);
    });
  }
}
