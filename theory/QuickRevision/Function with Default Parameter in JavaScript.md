# Function with Default Parameter in JavaScript

Functions are really amazing in javascript as they allow to pass any numbers of parameters regardless of the numbers of parameters declared. Thus there is a need to handle function with default parameters.

Before exploring the default parameters of ES6. let us see how to handle it in older versions of javascript.

## Before [ES6](https://learnersbucket.com/tutorials/es6/es6-intro/).
In javascript the function parameters were default to undefined. To handle them we had to check the parameters and assign values if they were undefined.
```js
function increment(value, by){
  by = (typeof by === 'undefined') ? 1 : by;
  return value + by;
}

console.log(increment(2, 2)); // 4
console.log(increment(2)); // 3
```

If we have not checked and assigned the value for by then it would have returned NaN.

While this approach is good but imagine we have more paramaters and we have to check for every parameters and assign value to it. It will get quite lengthy.

## After [ES6](https://learnersbucket.com/tutorials/es6/es6-intro/).
With default parameters introduction in [ES6](https://learnersbucket.com/tutorials/es6/es6-intro/) we can now assign the default values in the function head itself.
```js
function increment(value, by = 1){
  return value + by;
}

console.log(increment(2, 2)); // 4
console.log(increment(2)); // 3
```

The default value is assigned only to the undefined parameters not to the other falsy values.
```js
function increment(value, by = 1){
  return value + by;
}

console.log(increment(2, 2)); // 4
console.log(increment(2, undefined)); // 3
console.log(increment(2, '')); // 2
console.log(increment(2, null)); // 2
```

## Passing Functions, [Arrays](https://learnersbucket.com/tutorials/array/javascript-array-complete-reference) and [Objects](https://learnersbucket.com/tutorials/javascript/javascript-objects-complete-reference)
We could also set default parameters to be function, arrays and objects in javascript.
```js
function store(num = add(1), b = [], c = {}){
   b.push(num);
   c[num] = b;
   return c;
}

function add(num){
 return num + 1;
}

console.log(store()); // {2: Array(1)} 
```

## We can also set the existing parameters as the default value.
The left parameters can be used as default parameters for its right parameters.
```js
function double(first, second = first){
   return first + second;
};

console.log(double(10)); // 20
```

## Default values are evaluated at call time.
Every time a new object is created when the function is called.
```js
function store(num, arr = []){
 arr.push(num);
 return arr;
};

console.log(store(10));  // [10]
console.log(store(11));  // [11]
```

This also applies for the functions and variables.
```js
function add(num){
 return num + 1;
};

function increment(value = add(1)){
 return value;
};

console.log(increment());  //2
console.log(increment());  //2
```

## Default parameters with arguments object
```js
function test(inp){
   console.log(inp === arguments[0]);
   inp = 'different';
   console.log(inp === arguments[0]);
 }

test();
//true
//true
```

In nonstrict mode the arguments objects are updated as the parameters values updates to reflect changes.

However with [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) this can be prevented.

## Destructured values with default parameters.
we can set the default parameters with [destructuring](https://learnersbucket.com/tutorials/es6/destructuring).

We will use => function. Learn more about it [here](https://learnersbucket.com/tutorials/es6/fat-arrow-function).

```js
let calculate = (quantity, price = 10, tax = 0.15) => {
  return quantity * price * tax;
}

console.log(calculate(10)); // 15
console.log(calculate(10,11)); //16.5
console.log(calculate(10, undefined, 0.25)); // 25
```

In the third example console.log(calculate(10, undefined, 0.25)) we had to pass undefined to the second parameter to use the default value. This is acceptable, but it is not so nice.

We can improve this with [destructuring](https://learnersbucket.com/tutorials/es6/destructuring).

```js
let calculate = ({quantity, price = 10, tax = 0.15}) => {
  return quantity * price * tax;
}

console.log(calculate({quantity: 10})); // 15
console.log(calculate({quantity: 10,price: 11})); //16.5
console.log(calculate({tax: 0.25, quantity:10})); // 25
```

We can pass the parameters in any order console.log(calculate({tax: 0.25, quantity:10}));. Javascript knows how to match them.