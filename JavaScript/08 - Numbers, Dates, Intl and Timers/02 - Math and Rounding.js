console.log(Math.sqrt(25));     //5
console.log(25 ** (1/2));       //5 (square root)
console.log(8 ** (1/3));        //2 (cubic root)

console.log(Math.max(5, 19, 188, 200, 4, 20));      //188
console.log(Math.min(5, 19, 188, 200, 4, 20));      //4

console.log(Math.PI);

console.log(Math.random());     // give you a number between 0 and 1

console.log(Math.trunc(23.3));      // Remove all the decimale part.

// Generalizing the random formula
const randomInt = (min, max) => {
    Math.trunc(Math.random() * (max - min) + 1) + min;
}

console.log(Math.round(23.6));      // round up to the nearest integer.

console.log(Math.ceil(23.9));       // this will always round up.

console.log(Math.floor(23.9));      // this will always round down.

// Check for the negative number they behave different.

console.log((2.3345).toFixed(2));       // number you want after the point. this will return a string.