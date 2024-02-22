"use strict";
class Job {
    role;
    salary;
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}
class Person {
    job;
    name;
    constructor(name) {
        this.name = name;
        this.job = null;
    }
    setJob(job) {
        this.job = job;
    }
    work() {
        if (this.job) {
            this.job.work(this.name);
            console.log(`Его оклад: ${this.job.getSalary()} тыс. рублей.`);
        }
        else {
            console.log(`${this.name} не работает`);
        }
    }
}
const person1 = new Person('Иван');
const person2 = new Person('Федер');
const person3 = new Person('Сергей');
const job1 = new Job('начальник', 200);
const job2 = new Job('бригадир', 130);
const job3 = new Job('рабочий', 80);
const job4 = new Job('слесарь', 100);
person1.setJob(job1);
person1.work();
// console.log('Person1:', person1);
person1.setJob(job3);
// console.log('Person1:', person1);
person2.setJob(job2);
person2.work();
// console.log('Person2:', person2);
person3.setJob(job3);
person3.work();
// console.log('Person3:', person3);
setTimeout(() => {
    person1.setJob(job4);
    person1.work();
}, 2000);
setTimeout(() => {
    person1.setJob(job2);
    person1.work();
}, 5000);
setTimeout(() => {
    person1.setJob(job1);
    person1.work();
}, 8000);
