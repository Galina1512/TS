interface User  {
   type: 'user',
    name: string,
    age: number,
    group: string,
};

interface Admin  {
    type: 'admin';
    name: string;
    age: number;
    role: string;
  }

  // type Person = User | Admin;
  interface Person extends User, Admin {}


const persons: Person[] = [
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Ирина Тицкая',
    age: 25,
    group: 'семья',
  },
  {
    type: 'user',
    name: 'Сергей Пахомов',
    age: 32,
    group: 'друзья',
  },
  {
    type: 'user',
    name: 'Андрей Долгий',
    age: 36,
    group: 'тестировщик',
  },
  {
    type: 'admin',
    name: "Максим Лескин",
    age: 35,
    role: 'Administrator',

  },
];

const isAdmin = (person: Person) => {
  return person.type === 'admin';
}
const isUser = (person: Person) => {
  return person.type === 'user';
}

const logPerson = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  } 
  if (isUser(person)) {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log('Users:');
persons.filter(isUser).forEach(logPerson);