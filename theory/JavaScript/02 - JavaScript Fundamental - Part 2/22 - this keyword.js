"use strict";
/*
-> this keyword
- While learning about this variable, where it is defined dosen't matter what does matter is how you calling it.
- this refer to the context in which it is being called.
- this keyword is also behave differently inside the strict mode and normal mode.
*/


/*
- this in global space
- global object -> in case of broswer this global object is window, but if you go inside the nodejs it value will be global object.
*/
console.log("this in global space", this);


/*
- this inside a function
- there's a phenomena called this subsitution -> if the value of this keyword is undefined or null then this keyword will be replaced with global object only in non-strict mode.
*/
function x() {
  console.log("this inside function", this);  
  // strict mode -> it is undefined.
  // normal mode -> Here it is again window, but this window is not same as the above window
};
x();


/*
As we already know the value also depend how the function containing this keyword is called.
*/
// window.x(); // Now the value of this keyword will become global object in browser.

/*
- this keyword inside the object method.
*/
const obj = {
  // this called inside the method will point to the object
  a: 10,
  // A function which is a part of object will be called as the method.
  x: function () {
    console.log("this keyword inside method", this)
  }
};
obj.x();  // Here the value of this will be this object. not because it is defined in this object but because we called this method on this object.

/*
this with call, apply and bind
- call, apply and bind are used when you have to share methods.
- 
*/

const student = {
  name: "Ashar",
  printName: function () {
    console.log(`Student Name: ${this.name}`);
  }
};

student.printName();

const student2 = {
  name: "Hamza"
};

student.printName.call(student2);

/*
- this keyword inside the arrow functions.
- Arrow function does not have their own this, they take the value of their lexical environment where they are enclosed or you can say enclosing lexical context.
*/

const objWithArrowMethod = {
  a: 10,
  x: () => {
    console.log(this)
  }
};

objWithArrowMethod.x();

const objWithArrowMethodInClosedInNormalFunction = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this)
    }
    y();
  }
}

objWithArrowMethodInClosedInNormalFunction.x()

/*
-> this inside the DOM is the reference to the HTML Element.
*/

