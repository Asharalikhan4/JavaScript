/*
Promsise.allSettled()
- The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
*/

// Normal Working of Promise.allSettled()
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
  const res = await Promise.allSettled([createResolvePromise(100, 1), createRejectPromise(200, 2)])
  console.log("Response: ", res);
} catch (error) {
  console.error("Error: ", error);
}