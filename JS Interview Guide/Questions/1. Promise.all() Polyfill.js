/*
# Promise.all()
- Promise.all() takes an array of promises and return a promise that resolve when all the promise in the array is fullfilled or when the iterables contain no promises, it reject with the reason of the first promise that rejects.
*/

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

function task2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
};

const tasksList = [task(1000), task(5000), task(8000)];
const tasksList2 = [task2(4000), task2(1000), task2(3000)];

function promiseAllPolyfill(tasksList) {
  const result = [];
  let promiseResolved = 0;
  return new Promise((resolve, reject) => {
    tasksList.forEach((promise, index) => {
      promise
        .then((val) => {
          result[index] = val;
          promiseResolved++;
          if (promiseResolved === tasksList.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

promiseAllPolyfill(tasksList)
  .then((results) => {
    console.log("Results", results);
  })
  .catch((error) => {
    console.log("Error", error);
  });

promiseAllPolyfill(tasksList2)
  .then((results) => {
    console.log("Results2", results);
  })
  .catch((error) => {
    console.log("Error2", error);
  });
