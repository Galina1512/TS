"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    product;
    count;
    constructor(product, count) {
        this.product = product;
        this.count = count;
    }
    getProduct() {
        return this.product;
    }
    setProduct(value) {
        this.product = value;
    }
    getCount() {
        return this.count;
    }
    setCount(value) {
        this.count = value;
    }
    compare(other) {
        return other.getPrice() - this.getPrice();
    }
}
exports.AbstractSelling = AbstractSelling;
