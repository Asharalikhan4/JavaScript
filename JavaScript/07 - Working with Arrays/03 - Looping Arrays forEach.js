/*
- The forEach() method of Array instances executes a provided function once for each array element.
- continue and break statements are not allowed inside forEach(). or we can say they don't work inside forEach().
*/

const movements = [200, 450, -400, 3000, -650, -30, 70, 1300];

console.log("For");
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${movement}`);
  }
}

console.log("forEach");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${mov}`);
  }
});
