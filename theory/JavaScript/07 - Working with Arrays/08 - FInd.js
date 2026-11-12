/*
The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const first = movements.find((mov) => mov < 0);
console.log(first);
