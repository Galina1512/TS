import { Product } from "./Product";

export abstract class AbstractSelling {
  product: Product;
  count: number;

  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }

  getProduct(): Product {
    return this.product;
  }

  setProduct(value: Product) {
    this.product = value;
  }

  getCount(): number {
    return this.count;
  }

  setCount(value: number) {
    this.count = value;
  }

  abstract getPrice(): number; 

  compare(other: AbstractSelling): number {
    return other.getPrice() - this.getPrice();
  }
}