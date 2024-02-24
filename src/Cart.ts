interface Goods {
    title: string;
    count: number;
    price: number;
}

abstract class  Cart<T extends Goods> {
    protected goods: T[] = [];
    public add(item: T): void {
        this.goods.push(item)
    }

    public get(title: string): T | null {
        return this.goods.find(item => item.title === title)
        ?? null;
    }
    public get totalPrice(): number {
        return this.goods.reduce((acc, item) => acc + (item.price * item.count), 0);
    }
}

interface TechGoods {
    title: string;
    count: number;
    price: number;
    color: string;
    type: string;
    description: string;
}

class TechCart extends Cart<TechGoods> {}

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
