// Anatomy of Promises

const promise = new Promise((resolve, reject) => {
  // resolve or reject;
});

// Create a promise that will resolve after 5 seconds.

const promiseFor5Second = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 5000)
});

console.log("Promise", promise);
promiseFor5Second.then((val) => {
  console.log(val);
});

/*
- Helper Methods in Promises
1. .resolve()
2. .reject()
*/


/*
- Process Methods
These methods help to process async task concurrency.
1. Promise.All()
2. Promise.allSettled()
3. Promise.any()
4. Promise.race()
*/



// Interview Question

/*
-> Error Handling
1. When should you use try-catch?
2. How to create custom errors?
3. What happen in finally block?
*/