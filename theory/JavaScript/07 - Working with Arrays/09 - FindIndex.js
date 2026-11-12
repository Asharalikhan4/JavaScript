/*
The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const indexValue = movements.findIndex((element) => element < 2);

console.log(indexValue);
