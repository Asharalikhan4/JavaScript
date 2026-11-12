/*
It is extremely common question in JavaScript interviews where it is asked to implement polyfill for the filter() method. It was asked in Birdeye's SSE frontend interview.

A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers.

JavaScript array has an inbuilt method filter() which takes a callback function as input and returns a new array with the all elements the has passed the test implemented in the callback function.

Example
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filterPolyfill((e) => e % 2 === 0);
console.log(filtered);

//[2, 4, 6]

Array.filter polyfill should have these three functionalities.
- The filter() function should take an callback function as an argument.
- Current element, its index, and the context should be passed as an argument to the callback function.
- All the elements which pass text implemented in this callback function should be returned in a new array.
*/

Array.prototype.filterPolyfill = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      result.push(this[i]);
    };
  };
  return result;
};

const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filterPolyfill((e) => e % 2 === 0);
console.log(filtered);  //[2, 4, 6]