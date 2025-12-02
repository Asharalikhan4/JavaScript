/*
Function Declaration
- They are hoisted

// This works because the declaration is hoisted
console.log(greet("Alice")); // Output: Hello, Alice!

function greet(name) {
  return "Hello, " + name + "!";
}
*/

function printName1() {
  const name = "Ashar";
  console.log(name);
}

printName1();

/*
Function Expression
-They are not hoisted only the variable in which they are stored get hoisted.

// The variable 'greet' is hoisted but is 'undefined'
console.log(greet("Alice")); // TypeError: greet is not a function

var greet = function(name) {
  return "Hello, " + name + "!";
};


// The variable 'greet' is in the Temporal Dead Zone (TDZ)
console.log(greet("Alice")); // ReferenceError: Cannot access 'greet' before initialization

const greet = function(name) {
  return "Hello, " + name + "!";
};
*/
const printName2 = function () {
  const name = "Ashar";
  return name;
};

console.log(printName2());
