// Class Expression
const Person1 = class {

}

// Class Declration
class Person{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property.
    calcAge() {
        console.log(2037 - this.birthYear);
    }
};

const Ashar = new Person("Ashar Ali Khan", 2003);
console.log(Ashar);
Ashar.calcAge();
// Proving that Classes are just sugar coated prototype.
console.log(Ashar.__proto__ === Person.prototype);

// Manually adding a method in class.
Person.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
}

Ashar.greet();

// 1. Classes are not hoisted. function declaration are hoisted.
// 2. Classes are first class citizens.
// 3. Classes are executed in strict mode.