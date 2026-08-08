/*
Create a toggle function in JavaScript that accepts a list of arguments and toggles each of them when invoked in a cycle.

Example
let hello = toggle("hello");
hello() // "hello";
hello() // "hello";

let onOff = toggle("on", "off");
onOff() // "on"
onOff() // "off"
onOff() // "on"
Note: You have to implement a function that evaluates the above expression. There are no test cases to this. Test it yourself with different values.
*/

function toggle() {
    let howManyTimesFunctionCalled = 0;
    const parentFunctionArguements = arguments;
    return function() {
        if(howManyTimesFunctionCalled >= parentFunctionArguements?.length) {
            howManyTimesFunctionCalled = 0;
        };
        console.log(parentFunctionArguements[howManyTimesFunctionCalled]);
        howManyTimesFunctionCalled++;
    };
};

const toggleFn = toggle("hello", "hi");

toggleFn();
toggleFn();
toggleFn();
toggleFn();