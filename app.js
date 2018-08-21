/*
console.log('Part 1 with just object literals:\n\n');

let animal1 = {
    name: "Luna",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

let animal2 = {
    name: "Mishka",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

let animal3 = {
    name: "Lucy",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

let animal4 = {
    name: "Scout",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

let animal5 = {
    name: "Kitchen",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

animal1.sayHello();
animal2.sayHello();
animal3.sayHello();
animal4.sayHello();
animal5.sayHello();
*/

/*
console.log('Part 2 with prototypes/pseudo classes:\n\n');

function Animal(name, city, age) {
    this.name = name;
    this.city = city;
    this.age  = age;
}

Animal.prototype.greet = function() {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}!`);
};

let a1 = new Animal('Luna', 'Purrmingham', 2);
let a2 = new Animal('Mishka', 'Purrmingham', 12);
let a3 = new Animal('Lucy', 'Borkingham', 9);
let a4 = new Animal('Scout', 'Purrmingham', 2);
let a5 = new Animal('Kitchen', 'Purrmingham', 1);

a1.greet();
a2.greet();
a3.greet();
a4.greet();
a5.greet();
*/

console.log('Part 3 with that sweet ES6 syntactical sugar:\n\n');

class Animal {
    constructor(name, city, age) {
        this.name = name;
        this.city  = city;
        this.age = age;
    }

    greet() {
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}!`);
    }
}

let a1 = new Animal('Luna', 'Purrmingham', 2);
let a2 = new Animal('Mishka', 'Purrmingham', 12);
let a3 = new Animal('Lucy', 'Borkingham', 9);
let a4 = new Animal('Scout', 'Purrmingham', 2);
let a5 = new Animal('Kitchen', 'Purrmingham', 1);

a1.greet();
a2.greet();
a3.greet();
a4.greet();
a5.greet();