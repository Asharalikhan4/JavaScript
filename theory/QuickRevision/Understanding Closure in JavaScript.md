# Understanding Closure in JavaScript

Closures are one of the essential concepts of JavaScript that make the language very flexible and resilient to work with, having a good understanding of it is really important.In simple terms, closure is a bundling of two or more functions where inner functions have access to the properties and methods of the outer functions even after the execution of the external function is done.
```js
function example() {
  let blog = "learnersbucket";
  function displayBlog() {
    console.log(blog);
  }

  displayBlog();
}

example();
// "learnersbucket"
```

If you notice the variable blog is declared above the function displayBlog(), but it can be accessed inside it.This is because variables are lexical scoped in JavaScript and then can be accessed anywhere inside that scope unless and until they are overridden. In the above example, the variable is function scoped and it can be accessed anywhere within the function body (even in the inner functions).
```js
function example() {
  // outer scoped
  let blog = "learnersbucket";
  
  function displayBlog() {
    // new variable with the same name
    // declared in a new scope
    // this will be printed
    let blog = "hello";
    console.log(blog);
  }
  
  displayBlog();
}

example();
// hello
```

Preference is always given to the nearest declared one.This feature makes the closures extremely powerful as even if we return the inner function, it will have access to the variables (it will be alive) in the outer scope and perform all sorts of operations.
```js
function sum() {
  let a = 10;
  
  function add(b) {
    return a + b
  }
  
  return add;
}

// sum will return a function that will accept an argument
const fn = sum();

// pass the argument and it will sum with
// the value of variable 'a' that is in outer scope
// and return the total
let total = fn(20);

console.log(total);
// 30 
```

Not only variable but also access to all the other properties and methods of the outer function, not just parent but at any level in the scope it is declared.
```js
function x(a) {  
  function y(b) {
    function z(c) {
       return a + b + c;
     };

     return z;
  }
  
  return y;
}

// the outer function accepts an argument and returns a function
const a = x(10);

// the inner function also accepts an argument and returns the total of both
// outer and inner argument
let b = a(20);

let c = b(30);

console.log(c);
// 60
```

If you notice, in this, the inner function has access to the outer function's arguments and can use it for each instance it is created. This paradigm really helps in solving some of the complex problems and implementing solutions.