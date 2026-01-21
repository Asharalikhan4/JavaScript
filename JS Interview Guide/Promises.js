// Anatomy of promise
const promise = new Promise((resolve, reject) => {
  // resolve or reject
});

/*
Promise has three methods available to it (then, catch & finally) that can be used once it is settled (resolved or rejected). Each method accept a callback function that is invoked depending on the state of the promise.
*/

/*
Question -> Working of promise, Create a promise that will resolve after 5 seconds.
*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 5000);
});

// Initially the promise will be in the pending state.
console.log(promise1);

/*
After 5 seconds, the state of the promise will be updated.
We can assign the .then(onResolvedFn, onRejectFn) method to the promise but on the onResolvedFn callback function will be called only after the promise is resolved and will have the value.
*/

promise1.then((val) => console.log(val));

// Thenable promise can be chained furthur.
promise1
  .then((val) => {
    return "ABC" + val;
  })
  .then((val) => console.log(val));

// We can attach a finally block independently to the then, as well as catch and it will be invoked at the end.
promise1
  .then((val) => {
    return "ABC" + val;
  })
  .then((val) => console.log(val))
  .finally(() => console.log("Task Done"));

// Similarly, let's say we reject a promise after 5 seconds, then we can either use the .then(null, onRejectedFn) or .catch(onRejectedFn).

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error 404");
  }, 5000);
});

promise2.then(null, (error) => {
  console.error("Called from then method", error);
});

promise2.catch((error) => {
  console.error("Called from catch method", error);
});

/*
Helper Methods -> The promise object has many static methods. Some are helper's methods while others help to process the promise better.

Promise.resolve(value) -> creates a resolved promise.
Promise.reject(value) -> create a rejected promise.

These methods help to process async task concurrency. We have covered each of them in the problems section.

Promise.all()
Promise.allSettled()
Promise.any()
Promise.race()

async....await
This is new syntax introduced in ES6 that helps to process the promise better.
*/

const promise4 = Promise.resolve("I am resolved");

async function example(promise) {
  try {
    const resp = await promise;
    console.log(resp);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Task Done.");
  }
};

example(promise);
