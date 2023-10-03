"use strict";

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const Ashar = new Person("Ashar Ali Khan", 2003);
console.log(Ashar);


// Prototypes

// Each and every obect in JavaScript automatically has a property called prototype, that also include constructor function.

// all the objects that are created through this constructor function here will inherit so they will get access all the method and properties that are defined on this prototype property.
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

const Hamza = new Person("Hamza Ali Khan", 2003);
console.log(Hamza);

console.log(Person.prototype);

// hamza has access to this method because of the prototypal inheritance, it will work same for each of object created with person.
Hamza.calcAge();

// this is how we implement the protoypal inheritence.
// it works because any object has access to it's method and properties from it's prototype.

console.log(Ashar.__proto__)
console.log(Ashar.__proto__ === Person.prototype)
// Person.prototype is not a prototype of a person it is what gonna be used as the prototype of all the objects that are created with the person constructor function.

// we have other thing also to prove this point
console.log(Person.prototype.isPrototypeOf(Ashar));
// below line clarify that person.prototype is not a prototype of Person.
console.log(Person.prototype.isPrototypeOf(Person));

// we can also set peoperties on prototype
Person.prototype.species = "Homo Sapiens";

console.log(Ashar.species);

// to check for own properties
console.log(Ashar.hasOwnProperty("firstName"));
console.log(Ashar.hasOwnProperty("Species"));