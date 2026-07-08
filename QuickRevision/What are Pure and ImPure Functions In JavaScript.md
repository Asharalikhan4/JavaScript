# What are Pure and ImPure Functions In JavaScript?

Functions are what we are going to use very often, it is very important to understand what is the difference between pure and impure functions in JavaScript.

## What is a function?
A function is an enclosed program that takes certain arguments and processes the logic written inside it and may and may not return an output, depending upon how it is designed.

For example,
```js
// sample function 1
function sum(a + b){
  return a+b;
}
 
// sample function 2
function print(msg){
  console.log(msg);
}
```

The first function takes two numbers and returns their sum, and the second function takes a message and prints it, this is how a function works.

## What is a pure function?
A pure function is a function without any side effects, it will provide the same output for the same inputs/arguments provided.The output values do not change it remains consistent for the given arguments. For example,
```js
function sum(a, b){
  return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 5
```

In the above function, every time you pass 2, or 3 as arguments you will get 5 in the output.

Examples of pure in-built JavaScript functions.
- String.prototype.toUpperCase()
- Maths.abs()
- Array.protoype.filter()
- ...etc

## What is an impure function?
Impure functions are functions whose output value may or may not change for the same arguments, it is not consistent.The result can be affected because of external factors or entities. For example,
```js
var c = 0;
function sum(a, b){
  return a + b + c++;
}

console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 6
```

In this, even if we call the function with the same arguments 2, 3 the output values change because of an external variable.

Examples of impure in-built JavaScript functions.

- Math.random()
- Date.now()
- setTimeout()
- ...etc

### Benefits of using Pure functions
- **Predicatable:-** You are always sure about the output you will get for the input you will provide.
- **Reusable:-** As they are predictable pure functions can be reused or extended.
- **Parallelization:-** As pure functions do not have any side effects or do not mutate external things, they can be used in sync with others without worry.