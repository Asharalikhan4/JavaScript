// All numbers are presented as floating point numbers internally.

console.log(23 === 23.0);   // this will return true.

console.log(Number("23"));  // Converting string into number.
console.log(+("23"));     // this will also convert it into number.
console.log(Number.parseInt("30px", 10));   // String should start with number. second arguement is regex, here we're using base10 value so we give it 10.
console.log(Number.parseFloat("2.5ren"));

// Checking if the value is a number
console.log(Number.isNaN(10));  // this will return false.
console.log(Number.isNaN("+20"));   // this will return true.

console.log(Number.isFinite(200));  // this will return true.

console.log(Number.isInteger());