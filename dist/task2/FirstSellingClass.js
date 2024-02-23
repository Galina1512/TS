"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstSellingClass = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FirstSellingClass extends AbstractSelling_1.AbstractSelling {
    discount = 10;
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        return this.product.price > this.discount
            ? ((this.product.price - this.discount) * this.count).toFixed(2)
            : (this.product.price * this.count).toFixed(2);
    }
}
exports.FirstSellingClass = FirstSellingClass;
