"use strict";
class Cart {
    goods = [];
    add(item) {
        this.goods.push(item);
    }
    get(title) {
        return this.goods.find(item => item.title === title)
            ?? null;
    }
    get totalPrice() {
        return this.goods.reduce((acc, item) => acc + (item.price * item.count), 0);
    }
}
class TechCart extends Cart {
}
const techCart = new TechCart();
techCart.add({
    title: 'Monitor',
    price: 20000,
    color: 'black',
    count: 1,
    description: 'jkj jkjl jkljl',
    type: 'monitor',
});
techCart.add({
    title: 'Nowtbook ASER',
    price: 50000,
    color: 'black',
    count: 1,
    description: 'aaaaaaaa aaa',
    type: 'nowtbook',
});
techCart.add({
    title: 'Book',
    price: 50000,
    color: 'blue',
    count: 1,
    description: 'bbb bbbb ',
    type: 'ebook',
});
console.log(techCart.totalPrice);
console.log(techCart.get('Book'));
