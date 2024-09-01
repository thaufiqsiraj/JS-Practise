class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`\nProduct: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }
}

const product1 = new Product("Shirt", 20);
product1.displayProduct();
const product2 = new Product("Pants", 12);
product2.displayProduct();
const product3 = new Product("Shoes", 24);
product3.displayProduct();
console.log(`\nTotal: $${product1.price + product2.price + product3.price}`);
