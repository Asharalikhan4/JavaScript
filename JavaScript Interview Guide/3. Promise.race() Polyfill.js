/*
Promise.race()
- it is a method that returns a promise that fulfills or rejects as soon as one of the promises is an iterable fulfills or rejects, with the value or reason from that promise.
*/

// Normal Working of Promise.race()
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
  const res = await Promise.race([createResolvePromise(100, 1), createRejectPromise(200, 2)])
  console.log("Response: ", res);
} catch (error) {
  console.error("Error: ", error);
}