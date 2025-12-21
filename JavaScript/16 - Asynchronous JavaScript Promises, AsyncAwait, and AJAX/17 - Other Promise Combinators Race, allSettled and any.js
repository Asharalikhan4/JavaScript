/*
| Method               | Resolves When  | Rejects When  | Returns            |
| -------------------- | -------------- | ------------- | ------------------ |
| `Promise.all`        | All resolve    | Any reject    | Array of values    |
| `Promise.race`       | First settles  | First rejects | Single value/error |
| `Promise.allSettled` | All settle     | ❌ Never       | Status objects     |
| `Promise.any`        | First resolves | All reject    | Single value       |

*/


// Promise.race -> Recieve an array of promise and return a promise. In promise.race we only get the one result that finish first. and not the array of result like we used to have in Promise.all.
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/${c1}`),
    getJSON(`https://restcountries.com/v3.1/name/${c2}`),
    getJSON(`https://restcountries.com/v3.1/name/${c3}`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/${c1}`),
  timeout(0.2),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled -> This method is used to get the result of all the promise whether they are rejected or resolved. It will return an array of object. In each object we have a status property which is either fulfilled or rejected and we also have a value property which is the value of the promise if it is fulfilled and if it is rejected then we have a reason property which is the reason why the promise was rejected.

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any -> This method is used to get the result of all the promise whether they are rejected or resolved. It will return the first fulfilled promise. If all the promise are rejected then it will throw an error.

Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
