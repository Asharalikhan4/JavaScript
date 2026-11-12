/*
# Promise.all()
- The Promise.all() accepts an array of promise and return a promise that resolve when all of the promises in the array are fulfilled(resolved) or when the iterable contains no promises. it rejects with the reason of the first promise that reject.
*/

const myPromsieAll = function (taskList) {
  return new Promsie((resolve, reject) => {
    taskList.forEach((item, index) => {
      Promsie.resolve(item).then()
    })
  })
}

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
};

const taskList = [task(1000), task(5000), task(3000)];
myPromiseAll(taskList).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
