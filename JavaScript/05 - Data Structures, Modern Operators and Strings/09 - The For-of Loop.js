/*

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

*/

const menu = ["pizza", "maggie", "Burger"];
for(const item of menu){
    console.log(item);
}