export class Product {
    title: string;
    price: number;
  
    constructor(title: string, price: number) {
      this.title = title;
      this.price = price;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    setTitle(value: string) {
      this.title = value;
    }
  
    getPrice(): number {
      return this.price;
    }
  
    setPrice(value: number) {
      this.price = value;
    }
  }