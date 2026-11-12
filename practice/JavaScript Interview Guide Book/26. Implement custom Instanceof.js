/*
-> instanceof syntax:
  object instanceof constructor
*/

const a = "String Primitive";
const b = new String("String Object");

console.log("typeof Logs")
console.log(typeof a);
console.log(typeof b);

console.log("instanceof Logs")
console.log(a instanceof String)
console.log(b instanceof String)

/*
yourObject.__proto__ and Object.getPrototypeOf(yourObject) does the same thing, second is more preferrd in modern JS.
*/
console.log("Prototype of b", b.__proto__, Object.getPrototypeOf(b))

const customInstanceOf = (obj, target) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  };

  while (obj) {
    if (obj.__proto === target.prototype) {
      return true;
    };
    obj = obj.__proto__;
  };

  return false;
};


/*
-> Recursive Implementation with getPrototypeOf(object)
*/
const recursiveInstanceOf = (obj, target) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  };

  const proto = Object.getPrototypeOf(obj);

  return proto === target.prototype ? true : recursiveInstanceOf(proto, target);
};


/*
Test Cases:
*/

class P { }
class Q extends P { }

const q = new Q()
console.log(customInstanceOf(q, Q));  // true
console.log(customInstanceOf(q, P));  // true
console.log(customInstanceOf(q, Object)); // true