/*
- A Promise is a proxy for a value not necessarily known when the promise is created.
- A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/
"use strict";

// Promises are ES6 feature.

const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request); // this will return a promise.