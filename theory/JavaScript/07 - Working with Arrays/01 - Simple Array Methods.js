let arr = ["a", "b", "c", "d", "e"];

// Slice
console.log("Slice");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// Splice - Mutate the original Array.
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


/*
# Method that modify the original array. ( Mutate the original array)

1. push(...items)
2. pop()
3. shift()
4. unshift(...items)
5. splice(start, deleteCount, ...items)
6. sort(compareFn)
7. reverse()
8. fill(value, start, end)
9. copyWithin(target, start, end)
*/

/*
# Accessor & Transformation Methods (Return a new array/value)

1. map(callback): Returns a new array with transformed elements.
2. filter(callback): Returns a new array of elements that pass a test.
3. concat(...items): Merges arrays into a new one.
4. slice(start, end): Returns a shallow copy of a portion.
5. flat(depth): Flattens nested arrays into a new single array.
6. flatMap(callback): Maps then flattens; useful for one-level deep transformations.
7. reduce(callback, initial): Distills array into a single value (number, object, etc.).
8. join(separator): Joins elements into a string.
9. toString(): Returns a comma-separated string.
10. toSorted(), toReversed(), toSpliced(): Modern (ES2023) non-mutating versions of the original methods.
*/

/*
# Search and Iteration Method

1. forEach(callback): Executes a function for each element; returns undefined.
2. find(callback): Returns the first element that matches a condition.
3. findIndex(callback): Returns the index of the first match.
4. indexOf(item): Returns the index of a primitive value.
5. includes(value): Returns true/false if an item exists.
6. every(callback): Returns true if all elements pass a test.
7. some(callback): Returns true if at least one element passes.
*/

/*
# Static Methods (Called on Array itself)

1. Array.from(iterable): Creates an array from an array-like object (e.g., NodeList).
2. Array.isArray(obj): The standard way to verify if a variable is an array.
3. Array.of(...items): Creates a new array with the provided arguments.
*/

