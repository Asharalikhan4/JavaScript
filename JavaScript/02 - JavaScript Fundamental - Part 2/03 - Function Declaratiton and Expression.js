/*
Function Declaration
- They are fully hoisted, the javascript engine moves the entire function definition to the top of its scope during the compile phase. You can call the function before it appears in the code.

- This works because the declaration is hoisted
console.log(greet("Alice")); // Output: Hello, Alice!
function greet(name) {
  return "Hello, " + name + "!";
}

- These function processed before any code is executed.

- Use Case:
1. Main logic/API surface: Making the primary "actions" of a module available regardless of where they are called.
2. Readability: Some teams prefer placing helper functions at the bottom of the file (logic first, implementation details later), which requires hoisting.
*/

function printName1() {
  // Function Declaration
  const name = "Ashar";
  console.log(name);
}

printName1();

/*
Function Expression
-They are not hoisted only the variable in which they are stored get hoisted.
- it follow the hoisting rule of variable, if using let or const, they are in the temporal dead zone and can't be accessed before declaration.

- if using var, the variable is hoisted as undefined, so calling it results in a TypeError:... is not a function.
- The variable 'greet' is hoisted but is 'undefined'
console.log(greet("Alice")); // TypeError: greet is not a function
var greet = function(name) {
  return "Hello, " + name + "!";
};
- The variable 'greet' is in the Temporal Dead Zone (TDZ)

- console.log(greet("Alice")); // ReferenceError: Cannot access 'greet' before initialization
const greet = function(name) {
  return "Hello, " + name + "!";
};

- Evaluated only when the execution flow reaches that specific line. This allows for Conditional Declaration (e.g defining a function differntly based on a if statement), which is impossible with standard declarations in strict mode.

- Use Case:
1. Closures and Callbacks: Passing logic into .map(), .filter(), or event listeners.
2. Encapsulation: Keeping functions local to a specific block or scope.
3. Immutability: Using const to ensure the function reference is never overwritten.
4. Arrow Functions: When you need to lexically bind this (Expressions are the only way to use Arrow syntax).
*/
const printName2 = function () {
  const name = "Ashar2";
  return name;
};

console.log(printName2());
