/*

The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.


*/

const foo = null ?? "Default String";
console.log(foo);


// we can use this operator with logical operator
(undefined || null) ?? "foo";   // this will return foo.