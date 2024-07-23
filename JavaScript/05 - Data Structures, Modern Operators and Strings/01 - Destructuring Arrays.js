/*

Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays and objects and assign them to variables in a more concise and expressive way. When you destructure an array, you unpack its elements into individual variables.

*/

const name = ["ashar", "hamza", "hammaz", "afzal"];

const [x,y,z] = name;   // Destructuring of array

const [a = "no name", b = "no name"] = name;    // we can also set predefined value, if the value is not availble then pre-defined will take over.

const[m,,n] = name;     // if we want to skip some value in the array then we can use this type of syntax.

console.log(m,n);

console.log(x,y,z);