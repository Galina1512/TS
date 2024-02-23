"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstSellingClass_1 = require("./FirstSellingClass");
const SecondSellingClass_1 = require("./SecondSellingClass");
const Product_1 = require("./Product");
const products = [
    new FirstSellingClass_1.FirstSellingClass(new Product_1.Product("Тарелка", 11.70), 20),
    new FirstSellingClass_1.FirstSellingClass(new Product_1.Product("Бокал", 2.45), 100),
    new FirstSellingClass_1.FirstSellingClass(new Product_1.Product("Чайник", 34.17), 25),
    new FirstSellingClass_1.FirstSellingClass(new Product_1.Product("Ваза", 20.56), 15),
    new SecondSellingClass_1.SecondSellingClass(new Product_1.Product("Стол", 17.50), 10, 5),
    new SecondSellingClass_1.SecondSellingClass(new Product_1.Product("Стул", 4.23), 25, 10),
    new SecondSellingClass_1.SecondSellingClass(new Product_1.Product("Зеркало", 5.4), 20, 10),
    new SecondSellingClass_1.SecondSellingClass(new Product_1.Product("Ковер", 8.1), 9, 5),
];
products.map((item) => {
    console.log('');
    console.log(item);
    console.log(`Итоговая стоимость продукта "${item.product.title}" в количестве ${item.count} шт. 
    составляет ${item.getPrice()}$`);
});
console.log('');
console.log("Сортировка продуктов по суммарной стоимости");
products.sort((a, b) => a.compare(b));
products.map((item, index) => {
    console.log(`${index + 1}. ${item.product.title} - ${item.getPrice()}$`);
});
