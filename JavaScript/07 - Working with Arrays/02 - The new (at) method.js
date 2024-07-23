const arr = [1,2,3,4,5,6,7,8,9];


// at
// both will print the same thing.
console.log(arr.at(0));
console.log(arr[0]);


// getting the last element in an array.
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);


// getting last element using at method
console.log(arr.at(-1));


// use this (at) method when you're doing method chaining.