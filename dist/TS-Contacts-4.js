"use strict";
;
const persons = [
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
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => {
    return person.type === 'user';
};
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
