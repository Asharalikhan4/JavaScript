/*
Array.Reduce -> Takes a callback function and a initial value.
in this callback fuction we get three things
(previousValue, currentValue, currentIndex, array) -> this the same order
previousValue -> the value returned from the last call of the same function or the initial value at the beginning.
currentValue -> current value of the array
currentIndex -> current index position of the iteration
array -> the array itself.
*/


// Aggregation - Sum of all the elements of the array or multiply all the elements of the array.
const arr = [1, 2, 3, 4];
const sum = arr.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log("Aggregation", sum);


// Segregation - We can group a certain set of values depending on our requirements.
const arr1 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];
const segregate = arr1.reduce((previousValue, currentValue) => {
  const floored = Math.floor(currentValue);
  if(!previousValue[floored]){
    previousValue[floored] = [];
  }
  previousValue[floored].push(currentValue);
  return previousValue;
}, {})
console.log("Segregate", segregate)

// Run In Sequence - Let's say we have an array of functions and a value, the value has to be passed through these fuctions in a pipe, like the initial value has to be passed to the first function and then the returned value from the first function has to be passed to the next function and so on.

const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};

const append = (str) => {
  return "Hello" + str;
};

// array of function to be piped
const arr2 = [upperCase, reverse, append];
const initialValue = "mustang";

const finalValue = arr2.reduce((previousValue, currentValue) => {
  const newValue = currentValue(previousValue);
  return newValue;
}, initialValue);

console.log(finalValue);


// Similiarly if we want to run a promise in a sequence we can do the same with this

const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5)
];

const asyncSeriesExecuter = function (promises) {
  promises.reduce((acc, curr) => {
    return curr.then(val => {
      console.log(val);
    })
  }, Promise.resolve())
};

asyncSeriesExecuter(promises);
