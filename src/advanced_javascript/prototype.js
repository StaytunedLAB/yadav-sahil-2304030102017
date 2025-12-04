

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
};

Person.prototype.getAge = function () {
    return this.age;
};


function Employee(name, age, job) {
    Person.call(this, name, age);   
    this.job = job;
}


Employee.prototype = Object.create(Person.prototype);


Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
    console.log(`${this.name} works as a ${this.job}`);
};




const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;



const sampleArray = [1, 2, 3];
const sampleString = "hello";

console.log(sampleArray.__proto__ === Array.prototype); // true
console.log(sampleString.__proto__ === String.prototype); // true




String.prototype.firstChar = function () {
    return this[0];
};



const dictionary = Object.create(null);
dictionary.dog = "Animal";
dictionary.house = "Building";




const p1 = new Person("Alice", 25);
p1.sayHi();
console.log(p1.getAge());

const e1 = new Employee("Bob", 30, "Developer");
e1.sayHi();
e1.work();

console.log("Rabbit inherits eats:", rabbit.eats);
rabbit.walk();

console.log("First char of JavaScript:", "JavaScript".firstChar());

console.log("Dictionary keys:", Object.keys(dictionary));


console.log(Object.getPrototypeOf(e1));                // Employee.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(e1))); // Person.prototype
console.log(Object.getPrototypeOf(sampleArray));       // Array.prototype
