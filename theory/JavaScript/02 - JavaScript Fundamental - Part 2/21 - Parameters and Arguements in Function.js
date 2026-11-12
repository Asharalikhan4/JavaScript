/*
There are different ways to handle the parameters
1. Default
- Default parameters allow you to initialize a parameter with a value if an argument is either not provided (missing) or explicitly passed as undefined when the function is called.
- Syntax: You assign the default value directly in the parameter list.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));   // Output: 10 (b = 2)
console.log(multiply(5));      // Output: 5 (b defaults to 1)
console.log(multiply(5, undefined)); // Output: 5 (b defaults to 1)
console.log(multiply(5, null)); // Output: 0 (b is explicitly null, which coerces to 0 in math)


2. Rest
- The Rest Parameter allows a function to treat an indefinite number of arguments as an array. It gathers all remaining arguments into a single, actual Array object.
- Syntax: It is denoted by three dots (...) followed by a variable name, and it must be the last parameter in the function definition.

function sumAll(firstNum, ...theOthers) {
  console.log(theOthers); // [2, 3, 4]

  let sum = firstNum;
  for (const num of theOthers) {
    sum += num;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10


3. Spread Syntax
- The Spread Syntax is the exact opposite of the Rest Parameter. While Rest collects elements into an array in a function definition, Spread expands an iterable (like an array or string) into its individual elements when the function is called or when defining a new array/object.
- Syntax: Also denoted by three dots (...), but used when calling a function or creating a new iterable.

const numbers = [10, 20, 30];

function showNumbers(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

showNumbers(...numbers); // Is the same as: showNumbers(10, 20, 30);
// Output: a: 10, b: 20, c: 30
*/
