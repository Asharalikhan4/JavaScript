/*
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// We're storing map output into new variable cause map function will return us a new array.
const movementUSD = movements.map(function (mov) {
  return Number((mov * eurToUsd).toFixed(2));
});

/*
Writing the same thng using arrow function
const movementUSD = movements.map(mov => mov * eurToUsd);
*/

console.log("Original Array");
console.log(movements);
console.log("Array after map function");
console.log(movementUSD);
