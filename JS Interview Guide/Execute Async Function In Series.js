/*
Implement a function that takes a list of async function as input and executes then in a series that is one at a time. The next task is executed only when the previous task is completed.
*/

// Using Async Await.

const asyncTask = function (i) {
  // Helper function to build async tasks.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${i}`);
    }, 100 * i);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

// Using for Loop
const executeAsyncOperationInSeriesUsingLoop = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
};

// Recursion
const executeAsyncOperationInSeriesUsingRecursion = function (promises) {
  const promise = promises.shift();
  promise
    .then((val) => {
      console.log(val);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      if (promises.length > 0) {
        executeAsyncOperationInSeriesUsingRecursion(promises);
      }
    });
};

// Using Array.reduce() function
const executeAsyncOperationInSeriesUsingReduce = function (promises) {
  promises.reduce((prevValue, currValue, currIndex, promises) => {
    return prevValue.then(() => {
      return currValue.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};

// console.log("Using for Loop");
// executeAsyncOperationInSeriesUsingLoop(promises);

// console.log("Using Recursion");
// executeAsyncOperationInSeriesUsingRecursion(promises);

console.log("Using Recursion");
executeAsyncOperationInSeriesUsingReduce(promises);
