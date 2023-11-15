// Introduced in ES2020
// Number are respresent as 64 bits internally. only 53 are used in storing the digit themself. the rest are used to store the position of decimal point and the sign.

console.log(2 ** 53 - 1);   // biggest number js can represent.
console.log(Number.MAX_SAFE_INTEGER);

// To handle number bigger then this we use BigInt.
console.log(21364723678326475264856934785634786456n);   // this is a bigInt number.
// You can also create a bigInt number using BigInt();
console.log(BigInt(56324578694658325364256485267896454652346)); // this constructor function will only be use with small function.

// All the opeartor work the same.
// you can use operator between bigInt() and normal number.
console.log(typeof(20n));



const huge = 56324578694658325364256485267896454652346n;
console.log(huge + " is really big.");  // this will work fine.

// Math. function dosen't work with the bigInt.

// Divison
console.log(11n/3n);
console.log(10/3);
