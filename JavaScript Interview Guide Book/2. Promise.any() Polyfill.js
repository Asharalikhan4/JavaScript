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

let promiseArray = [createRejectPromise(10, 1), createRejectPromise(100, 2), createRejectPromise(200, 3)];

try {
  const res = await Promise.any(promiseArray)
  console.log("Response 1: ", res);
} catch (error) {
  console.error("Error 1: ", error)
}

// Promise.any Polyfill using .then().catch()
function promiseAnyPolyfillUsingThenCatch(promiseArray) {
  let errors = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      promise.then((result) => {
        resolve(result);
      }).catch((error) => {
        errors[index] = error;
        if (errors.length === promiseArray.length) {
          reject(errors);
        }
      })
    })
  })
};

promiseAnyPolyfillUsingThenCatch(promiseArray)
  .then((res) => {
    console.log("Response 2:", res);
  })
  .catch((error) => {
    console.error("Error 2:", error);
  })


// Promise.any Polyfill using async/await
function promiseAnyPolyfillUsingAsyncAwait(promiseArray) {
  let errors = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach(async (promise, index) => {
      try {
        const result = await promise;
        resolve(result);
      } catch (error) {
        errors[index] = error;
        if(errors.length === promiseArray.length) {
          reject(errors);
        }
      }
    })
  })
};


try {
  const res = await promiseAnyPolyfillUsingAsyncAwait(promiseArray)
  console.log("Response 3: ", res);
} catch (error) {
  console.error("Error 3: ", error)
}