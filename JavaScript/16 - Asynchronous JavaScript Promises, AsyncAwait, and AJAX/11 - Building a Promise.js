// Building a Promise
const lotteryPromise = new Promise(function (reject, resolve) {
  console.log("Lottery draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win");
    } else {
      reject(new Error("You Lost"));
    }
  }, 2000);
});

// Consuming a Promise
lotteryPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Promsifying setTimeout
const wait = function (seconds) {
  // timer is never going to be rejected so no need of reject.
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 second passed");
  })
  .catch((err) => {
    console.error(err);
  });

// Code above is same as below code but above code is more readable and clean.
// setTimeout(() => {
//     console.log("1 second passed");
//     setTimeout(() => {
//         console.log("2 second passed");
//         setTimeout(() => {
//             console.log("3 second passed");
//             setTimeout(() => {
//                 console.log("4 second passed");
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
