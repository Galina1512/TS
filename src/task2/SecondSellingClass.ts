import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class SecondSellingClass extends AbstractSelling {
  countProductDiscount: number;
  discountPercent: number = 10;

  constructor(
    product: Product,
    count: number,
    countProductDiscount: number
  ) {
    super(product, count);
    this.countProductDiscount = countProductDiscount;
  }

  getCountProductDiscount(): number {
    return this.countProductDiscount;
  }

  setCountProductDiscount(value: number) {
    this.countProductDiscount = value;
  }

  getDiscountPercent(): number {
    return this.discountPercent;
  }

  setDiscountPercent(value: number) {
    this.discountPercent = value;
  }

  override getPrice(): number {
    if (this.count >= this.countProductDiscount) {
      return (this.product.price *
            this.count *
            (1 - this.discountPercent / 100)).toFixed(2);
    } else {
      return (this.product.price * this.count).toFixed(2);
    }
  }
}