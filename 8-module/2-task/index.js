import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem;

    this.render();
    this.createProductsGrid(this.products);
  }

  render() {
    let productsGrid = document.createElement('div');
    productsGrid.classList.add('products-grid');
    productsGrid.innerHTML = `
      <div class="products-grid__inner">
      </div>
    `;

    this.elem = productsGrid;
  }

  createProductsGrid(products) {
    this.productsGridInner = this.elem.querySelector('.products-grid__inner');
    this.productsGridInner.innerHTML = '';
    
    for (let product of products) {
      
      let productCard = new ProductCard(product);
      this.productsGridInner.append(productCard.elem);
    }    
  }

  updateFilter(filters) {
    
    for (let filter in filters) {

      this.filters[filter] = filters[filter];
    }

    let customProducts = this.products;

    if (this.filters.noNuts) {
      customProducts = customProducts.filter((item) => item.nuts === false || !item.nuts);  
    }

    if (this.filters.vegeterianOnly) {
      customProducts = customProducts.filter((item) => item.vegeterian === true);
    }

    if (this.filters.maxSpiciness) {
      customProducts = customProducts.filter((item) => item.spiciness <= this.filters.maxSpiciness);
    }

    if (this.filters.category) {
      customProducts = customProducts.filter((item) => item.category === this.filters.category);
    }

    this.productsGridInner.classList.remove('.products-grid__inner');
    this.createProductsGrid(customProducts);

  }
}
