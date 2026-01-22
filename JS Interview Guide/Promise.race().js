/*
Question -> The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or readon from that promise.
*/

function asyncTask(time, name) {
  return new Promise((resolve, reject) => {
    if (time != 200) {
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
  asyncTask(100, "second"),
  asyncTask(200, "third"),
];

const race = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => resolve(val))
        .catch((err) => reject(err));
    });
  });
};

race(arr)
  .then((val) => {
    console.log("val", val);
  })
  .catch((err) => {
    console.log("err", err);
  });
