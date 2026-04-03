/*
# promise.race()
- promise.race() method return a promise that fulfills or rejects as soon as one of the promise in an iterable fulfills or rejects, with the value or reason from that promise.
*/

const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

const test4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "four");
});

const test5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "five");
});

const test6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 40, "six");
});

function promiseRacePolyfill(tasksList) {
  return new Promise((resolve, reject) => {
    tasksList.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
}

const tasksList = [test1, test2, test3];
const tasksList2 = [test4, test5, test6];

promiseRacePolyfill(tasksList)
  .then((result) => {
    console.log("Result", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });

promiseRacePolyfill(tasksList2)
  .then((result) => {
    console.log("Result2", result);
  })
  .catch((error) => {
    console.log("Error2", error);
  });
