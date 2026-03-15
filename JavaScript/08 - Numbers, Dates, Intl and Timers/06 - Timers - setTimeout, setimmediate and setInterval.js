/*

In JavaScript, timers are functions that allow you to execute code at a specified time or after a certain interval. There are three main types of timers in JavaScript:

setTimeout Function:

setTimeout is used to execute a function or a piece of code once after a specified delay in milliseconds.

Syntax: setTimeout(callback, delay);

Example:

javascript
Copy code
setTimeout(function() {
  console.log("This code will execute after 2000 milliseconds (2 seconds).");
}, 2000);
setInterval Function:

setInterval is used to repeatedly execute a function or a piece of code at a specified interval in milliseconds.

Syntax: setInterval(callback, interval);

Example:

javascript
Copy code
setInterval(function() {
  console.log("This code will execute every 1000 milliseconds (1 second).");
}, 1000);
To stop the interval, you can use clearInterval and provide it with the ID returned by setInterval.

javascript
Copy code
var intervalId = setInterval(function() {
  console.log("This code will execute every 1000 milliseconds (1 second).");
}, 1000);

// To stop the interval after a certain time (e.g., 5000 milliseconds or 5 seconds)
setTimeout(function() {
  clearInterval(intervalId);
}, 5000);
setImmediate (Node.js):

In Node.js, there's a function called setImmediate that is used to execute a callback function in the next iteration of the event loop.

Syntax: setImmediate(callback);

Example:

javascript
Copy code
setImmediate(function() {
  console.log("This code will execute in the next iteration of the event loop.");
});

*/
// we pass arguement after the time in setTimeout function. and if your arguemnent is in the array then simply use the spread operator to use to use arguement.
const ingredients = ["pizza","spinach"];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here's your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);  // execution doesn't stop here, code after this will be execute and this will be execute in the background.
console.log("Hi I'm after the setTimeout");

// This whole mechanism called async js.
if(ingredients.includes("spinach")) clearTimeout(pizzaTimer);   // this will delete the set timeout function.



// Now we'll talk about the setInterval
setInterval(function(){
    const now = new Date();
    console.log(now);
},1000)