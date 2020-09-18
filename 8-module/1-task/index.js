import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
    this.initialTopCoord;
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    // ваш код ...
    if (!this.initialTopCoord) {
      this.initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
    }
    
    let documentWidth = document.documentElement.clientWidth;

    if ( documentWidth <= 767 && this.elem.classList.contains('cart-icon_visible') ) {
      return;
    } else if (window.pageYOffset > this.initialTopCoord ) {
      let container = document.querySelector('.container');
      
      let marginRight20 = container.getBoundingClientRect().right + 20;
      let margitRight10 = documentWidth - this.elem.offsetWidth - 10;

      let marginIndent = Math.min(marginRight20, margitRight10);
      
      this.elem.style.cssText = `
        position: fixed;
        top: 50px;
        z-index: 1000;
        left: ${marginIndent}px;
      `;
    } else if (window.pageYOffset <= this.initialTopCoordinate || documentWidth <= 767) {
      this.elem.style.cssText = '';
    }
  }
}
