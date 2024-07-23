// Creating dates.

// First way
const now = new Date();
console.log(now);

// Second way
console.log(new Date("2023-11-15T06:55:37.953Z"));
console.log(new Date("December 24, 2015"));

console.log(new Date(2037, 10, 19, 15, 23, 5));
// Month in javascript is zero based.
// if you pass the wrong date js will itself make it correct.

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000))  // calculating the dates of three days letter.

// Dates are just special type of objects, they also have some methods like arrays.
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(Date.now());

future.setFullYear(2040);
console.log(future);