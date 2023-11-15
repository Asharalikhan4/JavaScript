// Numeric operator is used to seperate the values in the number. Javascript ignore these underscore.
// You can only put underscsore between the numbers.

const diameter = 287_460_000_000;
console.log(diameter);

// Converting a string to number with underscore will not work in javascript it will give you NAN.
console.log(Number("123_123"));

// If you try getting number with parseInt then you will only get the number before the underscore
console.log(parseInt("123_123"));