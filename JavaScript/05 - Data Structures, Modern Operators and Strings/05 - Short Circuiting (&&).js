// In a logical AND operation, if the first operand evaluates to false, the whole expression is false, and there's no need to evaluate the second operand. (&&)
let result = false && someFunction();  // someFunction() is not called because the first operand is false


// In a logical OR operation, if the first operand evaluates to true, the whole expression is true, and there's no need to evaluate the second operand. (||)
let result2 = true || someFunction();  // someFunction() is not called because the first operand is true