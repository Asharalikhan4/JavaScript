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

  this.calcAge = function () {
    /*
    Not a good practise, function should not be implemented like this or method should be not created inside of a construtor function that's because imagine we gonna create a hundred or thousand of person objects using this constructor function then each of this object would carry this function here. thousand instance will create thousand instance of this function too which will cause performance issue in our code. to solve this issue we gonna use the prototypes and protype inheritance.
    */
    console.log(2037 - this.birthYear);
  };
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