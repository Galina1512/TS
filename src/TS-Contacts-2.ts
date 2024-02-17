type User = {
    name: string,
    age: number,
    group: string,
};

type Admin = {
    name: string;
    age: number;
    role: string;
  }

  type UserWithAdmin = User | Admin;


const persons: UserWithAdmin[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Ирина Тицкая',
    age: 25,
    group: 'семья',
  },
  {
    name: 'Сергей Пахомов',
    age: 32,
    group: 'друзья',
  },
  {
    name: 'Андрей Долгий',
    age: 36,
    group: 'тестировщик',
  },
  {
    name: "Максим Лескин",
    age: 35,
    role: 'admin',

  },
];

const logPerson = (person: UserWithAdmin) => {
  console.log(`${person.name}, ${person.age}`);
}

console.log('Users:');
persons.forEach(logPerson);