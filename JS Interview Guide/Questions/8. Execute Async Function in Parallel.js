/*
Implement a function that takes a list of async functions as input and executes them in a series that is one at time. The next task is executed only when the previous task is completed.
*/

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

function asyncParallel(tasksList, callback) {
  const results = [];
  let tasksCompleted = 0;
  tasksList.forEach((asyncTask) => {
    asyncTask((value) => {
      results.push(value);
      tasksCompleted++;
      if (tasksCompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}
