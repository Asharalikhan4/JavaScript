"use strict";
/*
-> this keyword
1. it behave different in different condition.
*/

// this keyword is also behave differently inside the strict mode and normal mode.

// this in global space
console.log("this in global space", this);    // global object -> in case of broswer this global object is window, but if you go inside the nodejs it value will be global object.


// this inside in a function
function x() {
  console.log("this inside function", this);  
  // strict mode -> it is undefined.
  // unstrict mode -> Here it is again window, but this window is not same as the above window
};
x();


// there's a phenomena called this subsitution -> if the value of this keyword is undefined or null then this keyword will be replaced with global object only in non-strict mode.


// Now the value also depend how the function containing this keyword is called.
// window.x()

// this keyword inside method
const obj = {
  // this called inside the method will point to the object
  a: 10,
  x: function () {
    console.log("this keyword inside method", this)
  }
};
obj.x();

// there are three methods name as call, apply and bind and we use them for function sharing.