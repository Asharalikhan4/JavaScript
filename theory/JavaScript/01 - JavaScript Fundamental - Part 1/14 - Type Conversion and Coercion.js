/*

Type Conversion:
- Type conversion is the explicit (where we declare for the conversion) or intentional conversion of one data type to another using JavaScript functions or methods. It is done when you want to change the data type of a value deliberately.
- Type conversion results in creating a new value with a different data type while leaving the original value unchanged.
- For example, you can use functions like parseInt(), parseFloat(), and String() to explicitly convert values from one type to another.

*/

// Type conversion example
console.log("Type Conversion");
let num = "42";
console.log(typeof(num));

let integerNum = parseInt(num);
console.log(typeof(integerNum));

let floatNum = parseFloat(num);
console.log(typeof(floatNum));

let booleanNum = Boolean(num);
console.log(typeof(booleanNum));

console.log("\n")

/*

Type Coercion:
- Type coercion is the implicit (here compiler did the conversion itself) or automatic conversion of values between data types when operators or functions expect a particular type. JavaScript automatically converts values to match the expected data type in an operation.
- Type coercion is sometimes referred to as "type casting" or "type juggling."
It can lead to unexpected results in some cases, as JavaScript attempts to make the operation work by converting one or both operands.
- Type coercion is a common source of confusion and potential bugs in JavaScript, as it may not always behave as expected. It's important to be aware of how type coercion works and to handle type conversions explicitly when needed to ensure that your code behaves as intended.

*/

// Example of type coercion
let x = 5;
let y = "5";
let answer = x + y;
console.log("Type Coercion");
console.log(answer);
console.log(typeof(answer));