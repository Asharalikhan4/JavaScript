/*
The some() method of Array instances returns true if it finds one element in the array that satisfies the provided testing function. Otherwise, it returns false.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const even = (element) => element % 2 === 0;
console.log(movements.some(even));
