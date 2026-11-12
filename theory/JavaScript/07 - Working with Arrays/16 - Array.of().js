/*
The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
*/

console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []


Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)

/*
Parameters
element1, …, elementN
Elements used to create the array.

Return value
A new Array instance.
*/