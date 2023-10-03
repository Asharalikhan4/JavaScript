"use strict";

// Constructor function always start with Capital letter
// arrow function dosen't work here
const Person = function(firstName, birthYear){
    // these are instance peoperties.
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create a method inside a constructor function cause we're going to create ten of thousand instance of this object and all the instance will carry this method then. it will affect out performance. to solve this problem we'll use prototype and protoype inheritance.
    this.calcAge = function(){
        console.log(2037 - this.birthYear);
    }
};

const Ashar = new Person("Ashar Ali Khan", 2003);
const Hamza = new Person("Hamza Ali Khan", 2003);
/*
things that happen when you use the new keyword
1. New object is created.
2. function is called and the this keyword is assigned to this newly created object.
3. Now this newly created object is linked to a prototype 
4. function automatically return the newly creted object.
*/

console.log(Ashar, Hamza);

// Ashar and Hamza are the instanace of the person object.
console.log(Ashar instanceof Person);
