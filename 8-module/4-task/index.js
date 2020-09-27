import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
  }

  addProduct(product) {
    let cartItem = this.cartItems.some((item) => {
      if (item.product == product) {
        item.count++;
        return true;
      }
    });

    if (!cartItem) {
      this.cartItems.push({product: product, count: 1});
    }

    this.onProductUpdate(this.cartItems);
  }

  updateProductCount(productId, amount) {
    this.cartItems.map((item) => {

      if (item.product.id === productId) {
        item.count += amount;
      }
    });

    this.onProductUpdate(this.cartItems);
  }

  isEmpty() {
    return this.cartItems.length ? false : true;
  }

  getTotalCount() {
    let totalCount = 0;

    for (let item of this.cartItems) {
      totalCount += item.count;
    }
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;

    for (let item of this.cartItems) {
      totalPrice += item.product.price * item.count;
    }

    return totalPrice;
  }

  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${
      product.id
    }">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
              2
            )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {
    let modalDiv = document.createElement('div');
    this.cartItems.forEach(item => {
      modalDiv.append(this.renderProduct(item.product, item.count));
    });

    modalDiv.append(this.renderOrderForm());

    this.modal = new Modal();
    this.modal.setTitle('Your order');
    this.modal.setBody(modalDiv);

    this.modal.open();

    let modalBody = document.querySelector('.modal__body');

    modalBody.addEventListener('click', (event) => {
      let cartProduct = event.target.closest('.cart-product');
      let productId = cartProduct && cartProduct.dataset.productId;

      if (event.target.closest('.cart-counter__button_minus')) {
        this.updateProductCount(productId, -1);
      }

      if (event.target.closest('.cart-counter__button_plus')) {
        this.updateProductCount(productId, 1);
      }
    });

    let cartForm = document.querySelector('.cart-form');
    cartForm.addEventListener('submit', (event) => {
      this.onSubmit(event);
    });

  }

  onProductUpdate() {
    this.cartIcon.update(this);

    if (!document.body.classList.contains('is-modal-open')) {
      return;
    }

    let index = 0;

    for (let item of this.cartItems){
      

      let id = item.product.id;
      let modal = document.querySelector('.modal');
      let updProduct = modal.querySelector(`[data-product-id=${id}]`);
      let cartCounter = updProduct.querySelector('.cart-counter__count');
      let cartProductPrice = updProduct.querySelector('.cart-product__price');
      let infoPrice = modal.querySelector('.cart-buttons__info-price');

      cartCounter.textContent = item.count;
      cartProductPrice.textContent = `€${(item.product.price * item.count).toFixed(2)}`;

      infoPrice.textContent = `€${this.getTotalPrice().toFixed(2)}`;

      if (item.count <= 0) {
        updProduct.remove();
        this.cartItems.splice(index, 1);
      }
      index++;
    }

    if (this.cartItems.length === 0) {
      this.modal.close();
      this.cartIcon.update(this);
      return;
    }

  }

  onSubmit(event) {
    event.preventDefault();
    
    let orderButton = event.target.querySelector('button[type="submit"]');
    orderButton.classList.add('is-loading');
    
    let orderFormData = new FormData(event.target);

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: orderFormData,
    })
    .then(response => {
      if (response.ok) {
        this.cartItems = [];

        let orderModalBody = document.createElement('div');
        orderModalBody.className = 'modal__body-inner';
        orderModalBody.innerHTML = `
          <p>
            Order successful! Your order is being cooked :) <br>
            We’ll notify you about delivery time shortly.<br>
            <img src="/assets/images/delivery.gif">
          </p>
        `;
        this.modal.setTitle('Success!');
        this.modal.setBody(orderModalBody);
      }
    });
  };

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}
