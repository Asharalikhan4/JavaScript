/*
Spread Operator is used to unpack the value's of objects. Think of spread as "unboxing.", it takes an iterable (like an Array or Object) and expands it into individual elements.

- Use case
1. Used for cloning or merging without mutating the original.
2. The industry standard for state updates (e.g in React). It creates a shallow copy.
3. Passing an array as an individual arguments.
*/
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6