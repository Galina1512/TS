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
console.log("Список после сортировки по id");
students.sorted("decreasing");
console.log(students);





