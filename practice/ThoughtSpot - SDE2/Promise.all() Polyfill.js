/*
The Promise.all() accepts an array of promises and returns a promise that resolves when all of the promises in the array are fulfilled or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.

Example 1 - All promises resolve
Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);

Output:
//"got results" [1000,5000,3000]


Example 2 - Some promises reject
Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(time < 3000){
        reject("Rejected");
      }else{
        resolve(time);
      }
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);

Output:
"Rejected"
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
    console.log("Response 1: ", res);
} catch (err) {
    console.error("Error 1: ", err);
};


// Promise.all() Polyfill Using .then().catch()
function promiseAllPolyfill(promiseArray) {
    let results = [], promisesCompleted = 0;
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise
                .then((result) => {
                    results[index] = result;
                    promisesCompleted += 1;
                    if (promisesCompleted === promiseArray.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        });
    });
};

promiseAllPolyfill([createResolvePromise(100, 1), createResolvePromise(200, 2)])
    .then((res) => console.log("Response 2: ", res))
    .catch((err) => console.error("Error 2: ", err));




// Promise.all() Polyfill Using async/await
function promiseAllPolyfill(promiseArray) {
    let results = [], promisesCompleted = 0;
    return new Promise((resolve, reject) => {
        promiseArray.forEach(async (promise, index) => {
            try {
                let result = await Promise.resolve(promise);
                results[index] = result;
                promisesCompleted += 1;
                if (promisesCompleted === results.length) {
                    resolve(results);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
};

try {
    const res = await promiseAllPolyfill([createResolvePromise(100, 1), createResolvePromise(200, 2)]);
    console.log("Response 3: ", res);
} catch (err) {
    console.error("Error 3: ", err);
};