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

const promiseArray = [createResolvePromise(100, 1), createRejectPromise(200, 2)];

try {
  const res = await Promise.race(promiseArray);
  console.log("Response 1: ", res);
} catch (error) {
  console.error("Error 1: ", error);
}

// Promise.race() Polyfill using .then().catch()
function promiseRacePolyfillUsingThenCatch(promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      promise
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    });
  });
};

promiseRacePolyfillUsingThenCatch(promiseArray)
  .then((result) => {
    console.log("Response 2:", result);
  })
  .catch((error) => {
    console.error("Error 2:", error);
  })

// Promise.race() Polyfill using async/await
function promiseRacePolyfillUsingAsyncAwait(promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach(async (promise) => {
      try {
        const result = await promise;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
};

try {
  const res = await promiseRacePolyfillUsingAsyncAwait(promiseArray);
  console.log("Response 3: ", res);
} catch (error) {
  console.error("Error 3: ", error);
}
