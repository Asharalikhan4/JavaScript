"use strict";

// Promises are ES6 feature.

const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request); // this will return a promise.