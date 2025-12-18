const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  // start: function() {
  //   console.log('Engine started');
  // },
  start() {
    console.log("Engine started");
  },
  stop: function () {
    console.log("Engine stopped");
  },
};

// Accessing object properties
console.log(car.brand); // Output: Toyota
console.log(car.year); // Output: 2022

// Calling object methods
car.start(); // Output: Engine started
car.stop(); // Output: Engine stopped




// Objects also have some predefined objects.

const nameObj = {
  firstName: "Ashar",
  middleName: "Ali",
  lastName: "Khan"
};

/*
Object.keys() -> The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
*/
console.log("nameObj keys", Object.keys(nameObj));

/*
Object.values() -> The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
*/
console.log("nameObj values", Object.values(nameObj));

/*
Object.entries() -> The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
*/
for(const [key, value] of Object.entries(nameObj)) {
  console.log(`this is the key-${key} and this is the value-${value}`)
};

/*
Object.assign() -> The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
console.log(returnedTarget === source);
console.log(source === target);
// Expected output: true


/*
Object.freeze() -> The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
Freezing an object is the highest integrity level that JavaScript provides.
*/
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42


/*
Object.seal() -> The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.
*/
const object = {
  foo: 42,
};

Object.seal(object);
object.foo = 33;
console.log(object.foo);
// Expected output: 33

delete object.foo; // Cannot delete when sealed
console.log(object.foo);
// Expected output: 33