/*
Question -> Promise.any() take an iterable of Promise objects. It returns a single promise that fulfills as soon as any of the promise in the iterable fulfills, with the value of the fulfilled promises. If no promise in the iterable fulfilled (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
*/

function asyncTask(time, name) {
  return new Promise((resolve, reject) => {
    if (time > 500) {
      setTimeout(() => {
        resolve(name + " resolved");
      }, time);
    } else {
      setTimeout(() => {
        reject(name | " reject");
      }, time);
    }
  });
}

const arr = [
  asyncTask(500, "first"),
  asyncTask(600, "second"),
  asyncTask(200, "third"),
];

const any = function (promisesArray) {
  const promisesErrors = new Array(promisesArray.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          promisesErrors[counter] = error;
          counter = counter + 1;
          if (counter === promisesArray.length) {
            reject(promisesErrors);
          }
        });
    });
  });
};

any(arr)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
