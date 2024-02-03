/*

Variable Declarations:

ES5: var for variable declaration.
ES6: let and const for block-scoped variable declarations.
javascript
Copy code
// ES5
var x = 10;

// ES6
let y = 20;
const z = 30;
Function Declarations:

ES5: Function declarations using function keyword.
ES6: Arrow functions for concise syntax.
javascript
Copy code
// ES5
function add(a, b) {
    return a + b;
}

// ES6
const add = (a, b) => a + b;
Template Literals:

ES5: String concatenation or concatenation methods.
ES6: Template literals for string interpolation.
javascript
Copy code
// ES5
var greeting = "Hello, " + name + "!";

// ES6
const greeting = `Hello, ${name}!`;
Block Scoping:

ES5: Variables are function-scoped or globally scoped.
ES6: let and const are block-scoped.
javascript
Copy code
// ES5
if (true) {
    var x = 10;
}
console.log(x); // 10 (hoisted to the function scope)

// ES6
if (true) {
    let y = 20;
    const z = 30;
}
console.log(y); // ReferenceError: y is not defined
Object Literal Enhancements:

ES5: Traditional object literal notation.
ES6: Shorthand for defining properties and methods.
javascript
Copy code
// ES5
var obj = {
    name: "John",
    sayHello: function() {
        console.log("Hello, " + this.name + "!");
    }
};

// ES6
const obj = {
    name: "John",
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
};
Class Syntax:

ES5: Constructor functions and prototype-based inheritance.
ES6: Class syntax for object-oriented programming.
javascript
Copy code
// ES5
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    console.log("Hello, " + this.name + "!");
};

// ES6
class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}
Modules:

ES5: No built-in module system.
ES6: Introduces import and export statements for modular code.
javascript
Copy code
// ES5 (no built-in module system)
// script1.js
var x = 10;

// script2.js
console.log(x); // undefined

// ES6
// module1.js
export const x = 10;

// module2.js
import { x } from './module1';
console.log(x); // 10
Promises:

ES5: Relies on callback patterns for asynchronous operations.
ES6: Introduces native promises for handling asynchronous operations more conveniently.
javascript
Copy code
// ES5
function fetchData(callback) {
    setTimeout(function() {
        callback("Data fetched successfully");
    }, 1000);
}

// ES6
function fetchData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data fetched successfully");
        }, 1000);
    });
}

*/