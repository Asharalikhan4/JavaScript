/*
# Function
- Function are the building blocks of JavaScript, it is one of the programming langugaes that uses functional programming at the core.
- As easy as it to use the functions, understanding this keyword is that complex. Because the value of this is decided at the execution time.
- Majorly there are four different ways to invoke the function in javascript.
*/

// 1. As a normal function
function example() {
  console.log("Hello World!");
}

example();

// 2. As a method
const obj = {
  name: "Ashar Ali Khan",
  displayName: function () {
    console.log(this.name);
  },
};

obj.displayName();

// 3. As a constructor
const number = new Number("10");
console.log(number);

// Indirectly using call, apply and bind
function example2(arg1, arg2) {
  console.log(arg1 + arg2);
}

example2.call(undefined, 10, 20);

/*
- The value of this is decided upon how the function is invoked/called, each invocation created its own context and the context decides the value of this. Also this "strict mode" affects the behaviour of this too.

# Value of this when invoked as a normal function
- The value of this in the function invocation refer to the global object. window in the browser and global in Nodejs.
*/

function example3() {
  // in browser this refers to window
  console.log(this === window);
}

example3();

/*
- Because this refer to the window object, if we assign any property to it we can access it outside.
*/
function example4() {
  this.name = "Ashar Ali Khan";
  this.displayName = function () {
    console.log(`Name : ${this.name}`);
  };
}

example4();
console.log(this.name);
this.displayName();

/*
# Strict mode
- If you invoke the function with the strict mode the value of this will be undefined.
*/

function example5() {
  "use strict";
  console.log(this === undefined);
}

example5();
// true

// it also affects all the inner functions that are defined in the function which is declared in strict mode.

function example6() {
  "use strict";
  // in strict mode this refer to undefined.
  console.log(this === undefined);

  // inner function
  function inner() {
    // in strict mode this refer to undefined.
    console.log(this === undefined);
  }

  // invoke the inner function
  inner();
}

example6();
// true
// true

/*
# IIFE (Immediately Invoked Function Expression)
- when we immediately invoke the function, it is invoked as a normal functiont thus depending upon the mode, the value of this inside it is decided.
*/

// Normal mode
(function example7() {
  // in strict mode this refer to undefined.
  console.log(this === undefined);
})();
// true

// strict mode
(function example() {
  "use strict";
  // in strict mode this refers to undefined.
  console.log(this === undefined);
})();
// true

/*
# Value of this when invoked as a method.
- When a function is declared inside an object the value of this inside that function will refer to the object it is declared in.
*/

const example9 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    // this refer to the current object
    console.log(this === example9);
    console.log(this.name);
  },
};

example9.displayName();
// true
// Ashar Ali Khan

// The context is set at the time of invocation, thus if we update the value of the object property, it will be reflected.

const example10 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    // this refer to the current object
    console.log(this === example10);
    console.log(this.name);
  },
};

example10.name = "Hamza Ali Khan";
example10.displayName();
// true
// Hamza Ali Khan

// if the object is passed as a reference, then the context is shared between both the variables, the original and the one that has the reference.

const example11 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    // this refer to the current object
    console.log(this === example);
    console.log(this === example2);
    console.log(this.blog);
  },
};

const example12 = example11;
example12.name = "Hamza Ali Khan";

example11.displayName();
// true
// true
// Ashar Ali Khan

example12.displayName();
// true
// true
// Hamza Ali Khan

// But if we extract the method and save it in a variable, and then invoke the variable, the outcomes will change.

const example13 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    console.log(this === example13);
    console.log(this.name);
  },
};

const display = example13.displayName;
display();
// false
// undefined

// this is because when extracted to a variable and invoked it will be treated as a normal function.

const example14 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    // this refers to the window object
    console.log(this === window);
    console.log(this.name);
  },
};

const display2 = example14.displayName;
display2();
// true
// undefined

/*
The same happens when you pass the methods to the timers i.e setTimeout and setInterval. Timers invoke the function as a normal function or throw errors in strict mode.
*/

const example15 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    // this refers to the window object
    console.log(this === window);
    console.log(this.blog);
  },
};

setTimeout(example15.displayName, 200);
// true
// undefined

// if there are any inner function inside the methods, the value of this inside them depends upon how the inner function is invoked.

const example16 = {
  name: "Ashar Ali Khan",
  displayName: function () {
    function inner() {
      // this refer to the window object
      console.log(this === window);
      console.log(this.blog);
    }

    inner();
  },
};

example16.displayName();
// true
// undefined

/*
- Because the inner function is invoked as a normal function the value of this is a window object.
- To access the value of the parent we can use either the Fat Arrow Function or indirect invocation technique using call & apply.

# Fat Arrow Function
- The Fat Arrow Function does not have this of its own
*/