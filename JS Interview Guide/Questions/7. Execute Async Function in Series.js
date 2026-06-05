/*
# Problem
Implement a function that takes a list of async functions as input and executes them in a series that is one at time. The next task is executed only when the previous task is completed.

Input:
[
  asyncTask(3),
  asyncTask(1),
  asyncTask(2)
]

Output:
3
1
2
*/

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

/*
Approach 1: Using async and await
*/

async function asyncTaskInSeriesExecuter(tasksList) {
  for (let promise of tasksList) {
    try {
      const result = await promise;
      console.log("Result", result);
    } catch (error) {
      console.log("Error", error);
    }
  }
};

const tasksList = [asyncTask(3), asyncTask(1), asyncTask(7), asyncTask(2), asyncTask(5)];

asyncTaskInSeriesExecuter(tasksList);
