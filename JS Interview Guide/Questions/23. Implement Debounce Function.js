/*
# Debounce
- Debouncing is a method or a way to execute a function when it is made sure that no furthur repeated event will be triggered in a given frame of time.
- A technical example is when we search something on any ecommerce site, we don't want to trigger a search function and make a request to the server as the user keeps typing each letter, We want the user to finish typing and then wait for a sepcified window of time to see if the user is not going to type anything else or has finished typing then make the request and return the result.
- Excessively invoking the function majorly hampers the performance and is considered as one the key hurdles.
*/

const debounceFn = (fn, delay) => {
  // 'private' variable to store the instance in clousure each timer will be assigned to it
  let inDebounce;
  // debounceFn return a new anonymous function (closure)
  return function () {
    // reference the context and args for the setTimeout function
    const context = this;
    const args = arguments;
    
    // base case
    // clear the timeout to assign the new timeout to it.
    // when the event is fired repeatedly then this helps to reset
    clearTimeout(inDebounce);
    // set the new timeout and call the original function with apply.
    inDebounce = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};


/*
# Explanation
- We created a function that will return a function. The outer function uses a variable to keep track of timerId for the execution of the inner function.
- The inner function will be called only after a specified window of time, to achieve this we use setTimeout function.
- We store the reference of the setTimeout function so that we can clear it if the outer function is re-invoked before the specified time clearTimeout(inDebounce) and again recall it.
- if we invoking for the first time, our function will execute at the end of our delay. if we invoke and then reinvoke again before the end of our delay, the delay restarts.
*/

const onMouseMove = (e) => {
  console.clear();
  console.log(e.x, e.y);
};

const debouncedMouseMove = debounceFn(debouncedMouseMove, 50);
window.addEventListener("mousemove", debouncedMouseMove);