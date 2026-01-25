/*
Question -> Retry Promise N number of times
*/

function retryPromiseNumberOfTimes(asyncFn, retries = 3, delay = 50, finalError = "failed") {
  let count = 1;
  if (count === retries) {
    return;
  }
  asyncFn.then(() => {
    
  }).catch((error) => {
    setTimeout(() => {
      count++;
      asyncFn()
    }, delay)
  })
}