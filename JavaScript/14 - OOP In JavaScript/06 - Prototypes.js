/*
- We constructor function to build an object using a function.
- the only difference between the normal function and constructor function we call the constructor function using the new keyword.
- Constructor function is used from the starting of javascript to simulate the classes.
*/

"use strict";

const Person = function (firstName, birthYear) {
  console.log(this);
  /*
  Instance Properties.
  */
  this.firstName = firstName;
  this.birthYear = birthYear;
};

/*
# Steps that happend after calling the function
1. New object({}) is created.
2. after function is called this keyword will start pointing to to this object (this = {})
3. now this newly created object is linked to a prototype
4. the object that is created is automatically returned from the constructor function.
*/
const ashar = new Person("Ashar Ali Khan", 2003);
const hamza = new Person("Hamza Ali Khan", 1996);
/*
ashar and hamza are the instance of Person
*/
console.log(ashar);
console.log(hamza);
console.log(ashar instanceof Person);
console.log("hamza" instanceof Person);

/*
Constructor function are the not the feature of JS, it is simply a pattern developed by developers, and simply everyone uses this.
*/

/*
# Prototypes
- Each and every object/functions (including constructor function) in js have a property called prototypes.
- Now every object that is created with a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
*/

console.log("Person Prototype", Person.prototype);
/*
- After defining this function all the object that is created using this constructor function will have access to this object.
- In a nutshell this is how we implement the very basic prototype inheritance.
*/
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; 

ashar.calcAge()
hamza.calcAge()

/*
# How does this work
- any object can have access to the methods and properties from it's prototype. and the prototype of ashar and hamza is Person.prototype we can confirm that because every object has a property called __proto__, it is not the prototype property, it is simply the prototype of object on which it is called.
- so the prototype of ashar object is essentially the prototype property of the constructor function.
*/

console.log("Ashar Proto", ashar.__proto__)
console.log("hamza Proto", hamza.__proto__)

console.log("Prototype Comparison", ashar.__proto__ === Person.prototype)
console.log("Prototype Comparison", Person.prototype.isPrototypeOf(ashar))
console.log("Prototype Comparison", Person.prototype.isPrototypeOf(Person))

// .prototypeOfLinkedObjects

/*
- Now we will see from where does the __proto__ property comes from.
- it is the step no 3 that we defined above where the newly created object is linked to a prototype.
- we can also set the properties on prototype.
- protoype inheritance is also called as delegation.
*/

Person.prototype.species = "Homo Sapiens"

console.log("Ashar Species:", ashar.species);

console.dir(Person.prototype.constructor)