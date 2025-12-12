let arr = ["a", "b", "c", "d", "e"];

// Slice
console.log("Slice");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// Splice
console.log("Splice");
console.log(arr.splice(2));
console.log(arr.splice(1, 2));

// Reverse -> method to reverse an array.
let arr1 = [9, 8, 7, 6, 5, 4];
console.log("Reverse");
console.log(arr1.reverse());

// Concat -> method to add two array and return as a one array.
console.log("Conact");
// you can also do the same thing with the spread operator [...arr1, ...arr2]
let arr2 = new Array(1, 2, 3, 4, 5); // you can also define your array like this.
console.log(arr1.concat(arr2));

// Join -> this will insert the arguement in between the array element.
console.log(arr1.join("-"));

// push -> add an element at the last and return the length of the array
let push = arr2.push(10);
console.log("push", arr2, push);

// pop -> pop the last element and return it.
let pop = arr2.pop();
console.log("pop", arr2, pop);

// Shift -> Pop the first element and return it
let shift = arr2.shift();
console.log("shift", arr2, shift);

// unShift -> add the element at the start and return the length of array
let unShift = arr2.unshift(100);
console.log("unShift", arr2, unShift);

// splice -> remove elements from an array and return an array of removed elements
let splice = arr2.splice(1, 1); // from index 1 remove 1 element
arr2.splice(0, 3, "Let's", "dance"); // remove 3 first elements and replace them with another
console.log("splice", arr2, splice);

// slice -> remove elements from an array
let slice = arr2.slice(1, 2); // Copy from index 1 and last index is not inclusive
console.log("slice", arr2, slice);
