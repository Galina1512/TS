"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondSellingClass = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SecondSellingClass extends AbstractSelling_1.AbstractSelling {
    countProductDiscount;
    discountPercent = 10;
    constructor(product, count, countProductDiscount) {
        super(product, count);
        this.countProductDiscount = countProductDiscount;
    }
    getCountProductDiscount() {
        return this.countProductDiscount;
    }
    setCountProductDiscount(value) {
        this.countProductDiscount = value;
    }
    getDiscountPercent() {
        return this.discountPercent;
    }
    setDiscountPercent(value) {
        this.discountPercent = value;
    }
    getPrice() {
        if (this.count >= this.countProductDiscount) {
            return (this.product.price *
                this.count *
                (1 - this.discountPercent / 100)).toFixed(2);
        }
        else {
            return (this.product.price * this.count).toFixed(2);
        }
    }
}
exports.SecondSellingClass = SecondSellingClass;
