/*
The every() method of Array instances returns false if it finds one element in the array that does not satisfy the provided testing function. Otherwise, it returns true.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));