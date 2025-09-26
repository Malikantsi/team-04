import { renderListwithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return
  `<li class="product-card">
    <a href ="product_pages/?products=${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.Brand.Nameame}</h2>
      <h3>${product.Name}</h3>
      <p class="product-card__price">${product.FinalPrice}</p>
    </a>
  </li>`;

}
export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
    async init() {
        const products = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
      //const htmlStrings = list.map(productCardTemplate);
      //this.listElement.isertAdjacentHTML('afterbegin', htmlStrings.join(''));

      //apply use new utulity function instead of the commented code above
      renderListwithTemplate(productCardTemplate, list, this.listElement);
    }
}