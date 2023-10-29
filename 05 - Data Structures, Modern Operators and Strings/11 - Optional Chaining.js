/*

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

*/

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
};

console.log(adventurer.dog.name);   // this line will throw error

console.log(adventurer?.dog?.name);    // this line will give us undefined output.

// we can also use the optional chaining will calling the methods of an objects.