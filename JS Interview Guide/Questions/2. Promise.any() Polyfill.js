/*
# promise.any()
- promise.any() takes an iterable of Promise objects. it returns a single promise that fulfills as soon as any of the promise in the iterable fulfills, with the value of the fulfilled promise. if no promise in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that group together individual errors.
- in simple terms promise.any() is just opposite of promise.all()
*/

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

const test4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "four");
});

const test5 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, "five");
});

const test6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "six");
});

function promiseAnyPolyfill(tasksList) {
  const promiseErrors = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    tasksList.forEach((promise, index) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((error) => {
          promiseErrors[counter] = error;
          counter++;
          if (counter === tasksList.length) {
            reject(promiseErrors);
          }
        });
    });
  });
}

const tasksList = [test1, test2, test3];
const tasksList2 = [test4, test5, test6];

promiseAnyPolyfill(tasksList)
  .then((result) => {
    console.log("Result", result);
  })
  .catch((err) => {
    console.log("Error", err);
  });

promiseAnyPolyfill(tasksList2)
  .then((result) => {
    console.log("Result2", result);
  })
  .catch((err) => {
    console.log("Error2", err);
  });
