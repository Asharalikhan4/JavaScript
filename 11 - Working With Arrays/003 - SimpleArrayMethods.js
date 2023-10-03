const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// Run each of the method independently to get the right answer.

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
// we can also use slice method to create a shallow of the array
console.log(arr.slice());
console.log([...arr]);


// Splice method
// It changes the original array.
console.log("Below down in the use of splice")
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1,2));

// Reverse
console.log("Below down is the use of reverse")
// Reverse method does actually mutate the original array.
// to reverse an array without mutating array use toReversed();
const arr2 = ['f', 'j', 'h', 'i', 'j'];
console.log(arr2.reverse());

// Concat
console.log(arr.concat(arr2));
// it works same as the spread operator [...arr, ...arr2];

// Join
console.log(arr2.join("-"));