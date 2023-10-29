// We have three ways of declaring a variable in js 

var varName = "Ashar";
const constName = "Ali";
let letName = "Khan";

console.log(varName);
console.log(constName);
console.log(letName);


/*

Main differnece between let, const and var.

var:
- Function-scoped: Variables declared with var are function-scoped, which means they are only available within the function where they are defined.
- Hoisting: Variables declared with var are hoisted, which means they are moved to the top of their containing function or global scope during the compilation phase. This can sometimes lead to unexpected behavior.
- Reassignable: You can reassign values to a variable declared with var multiple times.


let:
- Block-scoped: Variables declared with let are block-scoped, which means they are only available within the block (e.g., an if statement or a loop) where they are defined.
- Hoisting: Variables declared with let are hoisted, but they are not initialized until they are declared. This avoids some of the issues associated with var hoisting.
- Reassignable: You can reassign values to a variable declared with let, but you can't redeclare it in the same scope.


const:
- Block-scoped: Variables declared with const are also block-scoped.
- Hoisting: Like let, variables declared with const are hoisted but not initialized until they are declared.
- Immutable: Variables declared with const cannot be reassigned. However, for objects and arrays declared with const, their properties or elements can still be modified.

*/