/*
Promise.any()
- It takes an iterable of Promise objects. It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. if no promise in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an Aggeregate Error, a new subclass of Error that groups together individual errors.
*/

// Normal Working of Promise.any()
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
  const res = await Promise.any([createRejectPromise(10, 1), createRejectPromise(100, 2), createRejectPromise(200, 3)])
  console.log("Response: ", res);
} catch (error) {
  console.error("Error: ", error)
}