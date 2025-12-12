/*
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Only the value that can satisfy this condition can make it to the deposit array.
const deposit = movements.filter(function (num) {
  return num > 0;
});

console.log("filtered array", deposit);
