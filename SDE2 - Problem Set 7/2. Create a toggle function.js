/*
Problem Statement - Create a toggle function in JavaScript that accepts a list of arguments and toggles each of them when invoked in a cycle.

Example:
let hello = toggle("hello");
hello() // "hello";
hello() // "hello";

let onOff = toggle("on", "off");
onOff() // "on"
onOff() // "off"
onOff() // "on"
*/

function toggle(...list) {
  let current = -1;
  const length = list.length;
  return function () {
    current = (current + 1) % length;
    return list[current];
  }
}

let hello = toggle("hello");
console.log(hello());
console.log(hello());
console.log(hello());
console.log(hello());


let onOff = toggle("on", "off");
console.log(onOff());
console.log(onOff());
console.log(onOff());
console.log(onOff());