console.log(varVariable);   // Accessible but initialized with undefined.
console.log(constVariable); // Error - Can't access variable before Initialization.
console.log(letVariable); // Error - Can't access variable before Initialization.

var varVariable = 10;
const constVariable = 10;
let letVariable = 10;


function functionDeclaration() {
  console.log("function Decalaration");
};