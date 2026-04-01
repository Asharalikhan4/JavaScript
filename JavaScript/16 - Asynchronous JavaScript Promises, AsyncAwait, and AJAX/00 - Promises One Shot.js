/*
# Promise
- Assurance that one will do something or that a particular thing will happen.
- When a promise is created there is only two outcomes to that promise, either it will be fulfilled or it will be rejected.
- By the time promises are not fulflled or rejected, they will be in a pending state.
- Promises are fulfilled with a certain value, that value can be furthur processed (if the value also is a promise) or given back raw.
- Promise are rejcted with the reason that caused them to be rejected.
- After either of the results, we can perform the next set of operations.
*/

// Anatomy of promise
const promise = new Promise((resolve, reject) => {
  // resolve or reject
});

/*
Promise has three methods available to it (then, catch & finally) that can be used once it is settled (resolved or rejected). Each method accept a callback function that is invoked depending on the state of the promise.
- then(onResolvedFn, onRejectedFn) -> This will be called either when the promise is rejected or resolved. Depending upon the state, appropriate callback function will be invoked with the value.
- catch(onRejectFn) -> This will be called when the promise is rejected with the reason.
- finally(onFinallyFn) -> This will be called every time after then and catch.
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

# Process Methods:
- These methods help to process async task concurrency. We have covered each of them in the problems section.

1. Promise.all()
2. Promise.allSettled()
3. Promise.any()
4. Promise.race()

# async/await
- This is new syntax introduced in ES6 that helps to process the promise better.
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

/*
- To use it we have to mark the function with the async keyword and then we can use the await keyword inside the async function.
- the code is wrapped inside a try-catch-finally block for frictionless execution.
- async keyword with different function declaration.
*/

// Fat Arrow
const example4 = async () => {
  // await can be used.
};

// assigning the function variable
const example3 = async function () {
  // await can be used
};

// A function declared with the async keyword returns a promise.

const promise5 = Promise.resolve("I am resolved");

// fat Arrow
const example2 = async (promise) => {
  // promise is wrapped in a try-catch block to handle it better
  try {
    const resp = await promise5;
    return resp;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Task Done.")
  }
}

console.log("example2", example2(promise5));


example2(promise5).then((val) => {
  console.log("example2 then", val);
});