import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class FirstSellingClass extends AbstractSelling {
  readonly discount: number = 10;
  constructor(product: Product, count: number) {
    super(product, count);
  }

  public override getPrice(): number {
    return this.product.price > this.discount
    ? ((this.product.price - this.discount) * this.count).toFixed(2)
    : (this.product.price * this.count).toFixed(2)
    }
  }
