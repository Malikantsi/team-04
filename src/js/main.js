import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// create an instance of ProductData for tents
const dataSource = new ProductData("tents");
//create an instance of productList
const productList = new ProductList(dataSource, "productList");
//load the product data and display it
productList.loadData();
productList.display();
