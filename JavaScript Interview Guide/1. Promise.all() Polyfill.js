/*
Promise.all()
- It accepts an array of promises and returns a promise that resolve when all of the promises in the array are fullfilled or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.
*/

// Normal Working of Promise.all()
function createResolvePromise(time, promiseNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise ${promiseNumber} Resolved.`);
    }, time);
  })
};

function createRejectPromise(time, promiseNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Promise ${promiseNumber} Rejected.`);
    }, time);
  })
};

try {
  const res = await Promise.all([createResolvePromise(100, 1), createResolvePromise(200, 2)]);
  console.log("Response: ", res);
} catch (err) {
  console.error("Error: ", err);
}