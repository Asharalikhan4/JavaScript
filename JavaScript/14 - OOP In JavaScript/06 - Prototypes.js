"use strict";

const Person = function(firstName, birthYear){
    // Instance Properties.
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function() {
    //     // Not a good practise, function should not be implemented like this.
    //     console.log(2037 - this.birthYear);
    // }
}

const ashar = new Person("Ashar Ali Khan", 2003);
const hamza = new Person("Hamza Ali Khan", 1996);
console.log(ashar);
console.log(hamza);
console.log(ashar instanceof Person);
console.log("hamza" instanceof Person);

/*

What happen after running this function.
1. New empty object is created.
2. function is called, this keyword will point to this new object here.
3. this new object creted is linked to a prototype.
4. function automatically return the object.

*/

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

ashar.calcAge();
hamza.calcAge();

console.log(ashar.__proto__);

console.log(ashar.__proto__ === Person.prototype);