/*
It is extremely common question in JavaScript interviews where it is asked to implement polyfill for the Array.map() method. It was asked in Birdeye's SSE frontend interview.

A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers

JavaScript array has an inbuilt method map() which takes a callback function as input and returns the processed data from this function in a new array.

Example
const arr = [1, 2, 3];
const multipliedArr = arr.mapPolyfill((e) => e * 2);
console.log(multipliedArr);

//[2, 4, 6]

Array.map polyfill should have these two functionalities.
- The map() function should take an callback function as an argument.
- Current element, its index, and the context should be passed as an argument to the callback function.
*/

Array.prototype.mapPolyfill = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callbackFn(this[i], i, this));
  };
  return result;
};

const arr = [1, 2, 3];
const multipliedArr = arr.mapPolyfill((e) => e * 2);
console.log(multipliedArr);
//[2, 4, 6]