let arr = ['a','b','c','d','e'];

// Slice
console.log("Slice");
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));


// Splice
console.log("Splice");
console.log(arr.splice(2));
console.log(arr.splice(1,2));


// Reverse -> method to reverse an array.
let arr1 = [9,8,7,6,5,4];
console.log("Reverse");
console.log(arr1.reverse());



// Concat -> method to add two array and return as a one array.
console.log("Conact");
// you can also do the same thing with the spread operator [...arr1, ...arr2]
let arr2 = [1,2,3,4,5];
console.log(arr1.concat(arr2));


// Join -> this will insert the arguement in between the array element.
console.log(arr1.join("-"));
