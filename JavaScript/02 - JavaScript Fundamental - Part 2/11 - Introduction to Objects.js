/*
Objects are always pass by reference in javascript so is another variable pointing to the same object make some changes and then you try to access the obj using other variable then you can see the changes.

//Referencing to the same object
let a = b = c = {};

//Referencing to the different objects
let a = {}, b = {}, c = {};
*/

const obj = {
  firstName: "Ashar",
  lastName: "Ali Khan",
  age: "45",
  job: "Developer",
  Bikes: ["S1000rr", "MV Agusta"],
};

console.log(obj);
