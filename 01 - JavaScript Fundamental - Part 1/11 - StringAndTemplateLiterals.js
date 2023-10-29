const firstName = "Ashar";
const lastName = "Ali Khan";
const occupation = "Full stack developer";

// if you want to use this variable in your string you have two ways.

// first way -> by concatination of string
const firstWay = "Hey my name is " + firstName + " " + lastName + " and I'm a " + occupation;

console.log(firstWay);

// Or you can use the template literals
const secondWay = `Hey my name is ${firstName} ${lastName} and I'm a ${occupation}`;

console.log(secondWay);

// Both will return you same output.
