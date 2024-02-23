import { AbstractSelling } from "./AbstractSelling";
import { FirstSellingClass } from "./FirstSellingClass";
import { SecondSellingClass } from "./SecondSellingClass";
import { Product } from "./Product";

const products: AbstractSelling[] = [
  new FirstSellingClass(new Product("Тарелка", 11.70), 20),
  new FirstSellingClass(new Product("Бокал", 2.45), 100),
  new FirstSellingClass(new Product("Чайник", 34.17), 25),
  new FirstSellingClass(new Product("Ваза", 20.56), 15),
  new SecondSellingClass(new Product("Стол", 17.50), 10, 5),
  new SecondSellingClass(new Product("Стул", 4.23), 25, 10),
  new SecondSellingClass(new Product("Зеркало", 5.4), 20, 10),
  new SecondSellingClass(new Product("Ковер", 8.1), 9, 5),
];

products.map((item): void => {
  console.log('');
  console.log(item);
  console.log(
    `Итоговая стоимость продукта "${item.product.title}" в количестве ${item.count} шт. 
    составляет ${item.getPrice()}$`
  );
});

console.log('');
console.log("Сортировка продуктов по суммарной стоимости");
products.sort((a, b) => a.compare(b));
products.map((item, index): void => {
  console.log(`${index + 1}. ${item.product.title} - ${item.getPrice()}$`);
});

