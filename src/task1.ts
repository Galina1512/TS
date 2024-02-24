import { Employees } from "./Employees";
import { Students } from "./Students";
import { Users } from "./User";

const students = new Students();

students.add({
  id: 1,
  firstname: "Андрей",
  surname: "Козырев",
  age: 18,
  year: 73,
  specialty: "Химик",
});

students.add({
  id: 2,
  firstname: "Михаил",
  surname: "Марков",
  age: 20,
  year: 72,
  specialty: "Технолог",
});

students.add({
  id: 3,
  firstname: "Сергей",
  surname: "Кущ",
  age: 22,
  year: 79,
  specialty: "Кибернетик",
});

students.add({
  id: 4,
  firstname: "Александр",
  surname: "Фириченко",
  age: 20,
  year: 19,
  specialty: "Врач",
});

students.add({
  id: 5,
  firstname: "Василий",
  surname: "Василов",
  age: 21,
  year: 21,
  specialty: "Автодорожник",
});
console.log("Полный список студентов");
console.log(students);
console.log("");
console.log("Список после удалелния студента с id=2");
students.remove(2);
console.log(students);
console.log("");
console.log("Студент с id=4");
console.log(students.get(4));
console.log("");
console.log("Список после сортировки по id");
students.sorted("decreasing");
console.log(students);

console.log("");

const employees = new Employees();

employees.add({
  id: 10,
  firstname: "Михаил",
  surname: " Жоров",
  age: 58,
  post: "Профессор",
});

employees.add({
  id: 11,
  firstname: "Павел",
  surname: "Панченко",
  age: 75,
  post: "Декан",
});
console.log("Список сотрудников");
console.log(employees);
console.log("");

console.log("Список сотрудников после удаления декана");
employees.remove(11);
console.log(employees);


employees.add({
    id: 12,
    firstname: "Людмила",
    surname: " Ачкасова",
    age: 52,
    post: "Доцент",
  });
  console.log("");
console.log("Список сотрудников после добавления доцента");
console.log(employees);
