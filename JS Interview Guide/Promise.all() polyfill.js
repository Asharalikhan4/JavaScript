/*
The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves to an array of the results of the input promises. It resolves when all of the input promises have resolved, or rejects if any of the input promises reject.
*/

const myPromiseAll = function (taskList) {
  const results = [];
  let completedTasks = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise.then((val) => {
        results[index] = val;
        completedTasks++;
      });
      if (completedTasks === taskList.length) {
        reject(results);
      }
    })
      .catch((error) => {
        reject(error);
      })
  });
};
