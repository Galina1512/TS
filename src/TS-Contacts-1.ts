type User = {
    name: string,
    age: number,
    group: string,
};

const persons: User[] = [
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
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);