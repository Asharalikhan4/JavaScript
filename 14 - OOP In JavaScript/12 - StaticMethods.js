"use strict";

// Static methods for constructor funciton.
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.hey = function() {
    console.log("Hey there.");
}

const Ashar = new Person("Ashar Ali Khan", 2003);

Person.hey();




// Static method in Class
class Person1{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(" ")){
            // if setter is trying to set the peoperty that is already assign by constructor then we use the underScore while using the this keyword. this is just a convention.
            this._fullName = name;
        } else {
            alert(`${name} is not a full name.`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        // Only the method that are initialized by static are static method other then that are instance method. every one can access the instance method but not the static method.
        console.log("Hey there");
    }
}

Person1.hey()