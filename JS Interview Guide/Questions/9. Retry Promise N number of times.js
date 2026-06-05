/*
Implement a function in JavaScript that retries promises N number of times with a delay between each call.
*/

// We can implement this using two approached first one is with .then and second is using async await

// Delay function
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

// Approach 1
const retryWithDelay = (
  operation,
  retries = 3,
  delay = 50,
  finalErr = "Retry Failed.",
) => {
  return new Promise((resolve, reject) => {
    return operation()
      .then(resolve)
      .catch((reason) => {
        if (retries > 0) {
          return wait(delay)
            .then(
              retryWithDelay.bind(
                null,
                operation,
                retries - 1,
                delay,
                finalErr,
              ),
            )
            .then(resolve)
            .catch(reject);
        }
        return reject(finalErr);
      });
  });
};

// Test Function
const getTestFunc = () => {
  let callCounter = 0;
  
  return async () => {
    callCounter += 1;
    if (callCounter < 5) {
      throw new Error("Not Yet")
    }
  }
}

// Code Testing
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("Success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("Will fai before getting here.")
}

test().catch(console.error);
