/*
-> Simple Throttling
*/
function throttling(fn, delay) {
  let timerFlag = null;
  return function() {
    const context = this;
    const args = arguments;
    if (timerFlag === null) {
      fn.apply(context, args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay)
    }
  };
};


/*
-> Throttling with Leading and Trailing Options
- Trailing - Where the first call will be made after the specified delay and all the calls thereafter.
- Leading - The first call will be made immediately and all the calls thereafter. (Normal Working of throttling.)
*/

function throttlingWithLeadingAndTrailing(fn, delay, option = { leading: false, trailing: true}) {
  
}


function greet() {
  console.log("Hello");
};

const controlledGreet = throttling(greet, 2500);
// 2.5 sec

window.addEventListener("mousemove", controlledGreet, false);