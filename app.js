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

/*
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
*/

class Vehicle {
    constructor(make, wheels, doors) {
        this.make = make;
        this.wheels = wheels;
        this.doors = doors;
    }

    aboutVehicle() {
        console.log(`This right here ${this.make} has ${this.wheels} wheels and ${this.doors}, ya'hear?!`);
    }
}

class Truck extends Vehicle {
    constructor(make, wheels, doors, hasBed) {
        super(make, wheels, doors);
        this.hasBed = hasBed;
    }
    aboutVehicle() {
        console.log(`This right here ${this.make} is a pick-em-up truck with ${this.wheels} wheels, and ${this.doors} doors. Does it have a bed, you ask? That's ${this.hasBed}, ya'hear?!`);
    }
}

class Sedan extends Vehicle {
    constructor(make, wheels, doors, size, mpg) {
        super(make, wheels, doors);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This right here ${this.make} is a see-dan with ${this.wheels} wheels, and ${this.doors} doors. It's ${this.size}-size, and gets ${this.mpg} MPG, ya'll!`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, wheels, doors, hasSteeringWheel, canReverse) {
        super(make, wheels, doors);
        this.hasSteeringWheel = hasSteeringWheel;
        this.canReverse = canReverse;
    }
    aboutVehicle() {
        console.log(`This right here ${this.make} is a motorcycle on account it's got just ${this.wheels} wheels, and ${this.doors} doors. If y'all think it's got a steering wheel, that's ${this.hasSteeringWheel} because it's got handlebars, and if you think it can go in reverse that's ${this.canReverse}!`);
    }
}

let genericVehicle = new Vehicle('Mazda', 4, 4);
let pickEmUp = new Truck('Ford', 6, 4, true);
let myOldToyotaEcho = new Sedan('Toyota', 4, 2, 'Compact', 37);
let badassCBR1000RR = new Motorcycle('Honda', 2, 0, false, false);

genericVehicle.aboutVehicle();
pickEmUp.aboutVehicle();
myOldToyotaEcho.aboutVehicle();
badassCBR1000RR.aboutVehicle();