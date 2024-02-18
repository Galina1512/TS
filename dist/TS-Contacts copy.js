"use strict";
;
const persons = [
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
const logPerson = (persons) => {
    let information;
    if (persons.role) {
        information = persons.role;
    }
    else {
        information = persons.group;
    }
    console.log(`${persons.name}, ${persons.age}, ${information}`);
};
persons.forEach(logPerson);
