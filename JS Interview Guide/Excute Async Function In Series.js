/*
Implement a function that takes a list of async function as input and executes then in a series that is one at a time. The next task is executed only when the previous task is completed.

Input: [asyncTask(3), asyncTask(1), asyncTask(2)]

Output: 3
1
2
*/


// Using Async Await.

const asyncTask = function (i) {
  // Helper function to build async tasks.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${i}`)
    }, 100 * i)
  })
};

const promises = [asyncTask(3), asyncTask(1), asyncTask(7), asyncTask(2), asyncTask(5)];

const executeAsyncOperationInSeries = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
};

executeAsyncOperationInSeries(promises);

