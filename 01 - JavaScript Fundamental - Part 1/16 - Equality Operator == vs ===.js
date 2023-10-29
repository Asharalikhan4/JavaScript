/*

In JavaScript, == and === are two different comparison operators used to compare values, but they have distinct behaviors:

1. Equality Operator (==):

- The == operator checks for equality between values but performs type coercion, which means it can convert the operands to the same type before making the comparison.
- If the types of the operands are different, JavaScript will attempt to convert one or both of them to a common type.
- For example, 2 == '2' would return true because JavaScript coerces the string to a number for the comparison.


2. Strict Equality Operator (===):

- The === operator checks for strict equality between values without performing type coercion. It compares both the value and the data type of the operands.
- If the types of the operands are different, === returns false without attempting to convert them to a common type.
- For example, 2 === '2' would return false because the types are different.


Here's a summary of the differences:

- == performs type coercion and checks if the values are equal after possible type conversion.
- === checks for strict equality, meaning it compares both the values and their data types without type coercion.
- It is generally recommended to use === (strict equality) in JavaScript because it avoids unexpected type coercion, leading to more predictable and less error-prone code. However, there may be specific cases where == is intentionally used, but it's important to be aware of how it performs type conversion and its potential side effects.

*/