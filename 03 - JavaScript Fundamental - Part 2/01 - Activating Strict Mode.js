"use strict";           // this is how you activate the strict mode. add them into the start

/*


Strict mode is a feature in JavaScript introduced in ECMAScript 5 (ES5) that allows you to opt into a restricted variant of the language. When you use strict mode in your JavaScript code, it enforces stricter parsing and error handling rules. Here are some key characteristics of strict mode and reasons why you might want to use it:

Stricter Error Handling:
In strict mode, some common coding mistakes and "bad" syntax that would be silently ignored or allowed in non-strict mode are treated as errors. This can help catch and fix problems early.

Safer Variables:
Variables must be declared with var, let, or const before they are used. In non-strict mode, using a variable without declaring it creates an implicit global variable, which can lead to unexpected behavior and bugs.

No Duplication of Parameters or Variables:
In strict mode, you cannot declare the same variable or parameter name multiple times within the same function or scope. This helps prevent naming conflicts and unintended overwriting of variables.

Reserved Words:
In strict mode, using reserved words as variable names (e.g., let, class, enum) results in a syntax error, which is not the case in non-strict mode.

Safer this Value:
In strict mode, the value of this is not automatically coerced to the global object when it's not specified. This can prevent accidental global variable modification and makes this behavior more predictable.

Eliminates Octal Literal Syntax:
In strict mode, you can't use octal literals (e.g., 0123) because they can lead to unexpected results in non-strict mode.

*/

function printMyName(){
    "use strict";    // this is how we activate the strict mode in the function. use strict are not allowed in the function with default parameter.
    console.lof("Ashar Ali Khan");
}

// the entire content of the module and classes in javascript are in strict mode.