// Swap two number without using third variable

let a = 10;
let b = 20;
console.log("Number before swapping");
console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log("Number after swapping");
console.log(a, b);