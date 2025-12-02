/*
The two main features that distinguish arrow functions are:
1. Concise Syntax: They offer shorter ways to write functions, especially for simple, single-expression functions.
2. Lexical this: They do not create their own this context. Instead, they inherit the this value from the enclosing scope.

const user = {
  name: "Alex",
  // ❌ Traditional function causes issues
  logNameDelayedBad: function() {
    setTimeout(function() {
      // 'this' here refers to the global object (or undefined in strict mode), NOT 'user'.
      console.log(`Bad: ${this.name}`); // Output: "Bad: " 
    }, 100);
  },
  
  // ✅ Arrow function solves the issue
  logNameDelayedGood: function() {
    setTimeout(() => {
      // 'this' here is inherited from the surrounding 'logNameDelayedGood' method, 
      // which correctly refers to the 'user' object.
      console.log(`Good: ${this.name}`); // Output: "Good: Alex"
    }, 100);
  }
};

user.logNameDelayedBad();
user.logNameDelayedGood();
*/

const printName = () => {
  const name = "Ashar";
  console.log(name);
};

printName();
