# Understanding Powerful Array.reduce() method

Array.reduce() is one of the most powerful methods available on JavaScript arrays that can be used to perform different types of actions like segregation, aggregation, running things in sequence/series, etc.
```js
// verbose
arr.reduce(callbackfn, initialValue);

// simplified
// callback function with parameters
arr.reduce((previousValue, currentValue, currentIndex, array) => {
  const nextValue = previousValue + currentValue;
  return nextValue;
}, initialValue);
```

Array.reduce() accepts a function and initial value as an input (initial value is optional). The function will be called for each element of the array with the initial value at the beginning and then with the value returned from the last call of the same function.

The function has 4 parameters, (previousValue, currentValue, currentIndex, array).
1. **previousValue -** The value returned from the last call of the same function or the initial value at the beginning.
2. **currentValue -** Current value of the array.
3. **currentIndex -** Current index position of the iteration.
4. **array -** The array itself.

Using this method we can perform different types of operations like,

Sum all the elements of the array or multiply all the elements of the array.

```js
const arr = [1, 2, 3, 4];

const sum = arr.reduce((previousValue, currentValue) => {
  const nextValue = previousValue + currentValue;
  return nextValue;
}, 0);

console.log(sum);
// 10

const product = arr.reduce((previousValue, currentValue) => {
  const nextValue = previousValue * currentValue;
  return nextValue;
}, 1);

console.log(product);
// 24
```
We can group a certain set of values depending on our requirements.
```js
const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segg = arr.reduce((previousValue, currentValue) => {
  
  // round of the value
  const floored = Math.floor(currentValue);
  
  // if the key is not present
  // create a new entry with the array value
  if(!previousValue[floored]){
    previousValue[floored] = [];
  }
  
  // segregate the current value in the respective key
  previousValue[floored].push(currentValue);
  
  // return the updated value
  return previousValue;
}, {});

console.log(segg);
/*
{
  1: [1.1, 1.2, 1.3],
  2: [2.2, 2.3, 2.4]
}
*/
```

Let's say we have an array of functions and a value, the value has to be passed through these functions in a pipe. Like the initial value has to be passed to the first function and then the returned value from the first function has to be passed to the next function and so on.
```js
// functions
const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) => {
  return str.split('').reverse().join('');
};

const append = (str) => {
  return "Hello " + str;
};

// array of functions to be piped
const arr = [upperCase, reverse, append];

// initial value
const initialValue = "learnersbucket";

const finalValue = arr.reduce((previousValue, currentElement) => {
  // pass the value through each function
  // currentElement is the function from the array
  const newValue = currentElement(previousValue);
  
  // return the value received from the function
  return newValue;
  
}, initialValue);

console.log(finalValue);

// "Hello TEKCUBSRENRAEL"
```

Similarly, if we want to run a promise in a sequence we can do the same with this.
```js
// helper function to create a promise
// that resolves after a certain time
const asyncTask = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
  });
}

// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

// manin function to run promise in series
const asyncSeriesExecuter = function(promises) {
  promises.reduce((acc, curr) => {
    // return when previous promise is resolved
    return acc.then(() => {
      // run the current promise
      return curr.then(val => {console.log(val)});
    });
  }, Promise.resolve());
};

asyncSeriesExecuter(promises);

"Completing 3"
"Completing 1"
"Completing 7"
"Completing 2"
"Completing 5"
```

## Polyfill   
```js
Array.prototype.reducePolyfill = function(callback, initialValue) {
    let accumulator;
    let firstIndex;
    //we get only the callback param,in this case we know initialValue is not pass and 
    //we set the accumulator to be with the first item and set firstIndex to be 1
    if (arguments.length === 1) {
      accumulator = this[0];
      firstIndex = 1;
    } 
    //we get both callback and initialValue
    //in this case we set the accumulator to initialValue and firstIndex to be 0
    else {
      accumulator = initialValue;
      firstIndex = 0;
    }
    //we will iterate on each item in the array (depend what we set for the firstIndex)
    //and each time we keep the new accumulator
    for (let index = firstIndex; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index);
    }
    //when iteration is done we return the accumulator
    return accumulator;
}