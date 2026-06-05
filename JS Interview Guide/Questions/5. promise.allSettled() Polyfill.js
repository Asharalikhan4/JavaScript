/*
# promise.allSettled()
- The promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describe the outcome of each promise.
*/

const task1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 200);
});

const task2 = new Promise((resolve, reject) => {
  reject(9);
});

const task3 = new Promise((resolve) => {
  resolve(5);
});

function allSettledPolyfill(tasksList) {
  const mappedPromises = tasksList.map((p) =>
    Promise.resolve(p).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ staus: "rejected", value: err }),
    ),
  );

  return Promise.all(mappedPromises);
}

const tasksList = [task1, task2, task3];

allSettledPolyfill(tasksList).then((result) => {
  console.log("Result", result);
});
