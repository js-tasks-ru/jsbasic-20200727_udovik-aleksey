export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    // ваш код

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
    // ваш код
    
    this.cartItems.map((item) => {
      if (item.product.id === productId) {
        item.count += amount;

        if (item.count === 0) {
          this.cartItems.splice(item, 1);
        }
      }
    });

    this.getTotalPrice();

    this.onProductUpdate(this.cartItems);
  }

  isEmpty() {
    // ваш код

    return this.cartItems.length ? false : true;
  }

  getTotalCount() {
    // ваш код
    let totalCount = 0;

    for (let item of this.cartItems) {
      totalCount += item.count;
    }
    return totalCount;
  }

  getTotalPrice() {
    // ваш код
    let totalPrice = 0;

    for (let item of this.cartItems) {
      totalPrice += item.product.price * item.count;
    }

    return totalPrice;
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

