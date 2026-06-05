/*
# Throttling
- Throttling is a way/technique to restrict the number of function execution/call in the specified amount of time.
- Execessive function invocations in applications hamper the performance drastically. To optimize an app we need to handle this correctly.
- There are scenarios where we may invoke the functions where it isn't necessary. For example, consider a scenario where we want to make an API call to the server on a button click.
- if the user spam's the click then this will make an API call on each click. This is not what we want, we want to restrict the number of API calls that can be made. The other call will be made only after a specified interval of time.
- Throttling helps us to gain control over the rate at which function is called or executed.
*/

const throttle = (func, limit) => {
  // track the timerid and time
  let lastFunc;
  let lastRan;

  return function () {
    // capture the context and arguements
    const context = this;
    const args = arguments;

    // if not yet run, run it once
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      // reset the timer
      clearTimeout(lastFunc);

      // start it again
      lastFunc = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
};

const print = () => {
  console.log("hello");
}

const throttled = throttle(print, 2500);

window.addEventListener("mousemove", throttled, false);