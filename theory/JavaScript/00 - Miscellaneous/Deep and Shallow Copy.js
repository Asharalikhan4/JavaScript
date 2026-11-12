const user = {
  id: 1,
  name: "Ashar",
  address: { city: "Lucknow", pin: 226001 },
};

// Shallow Copy -> New object, but nested objects/arrays still point to the same references as the original.
/*
# Shallow Copy
- A shallow copy creates a new object, but it only copies the top-level values. if the original object contains nested objects or arrays, the copy will still point to the same memory locations for those nested items.

# Common methods
1. Spread Operator: {...obj}
2. Object.assign(): Object.assign({}, obj);
3. Array.prototype.slice(): arr.slice()
*/
const copy1 = Object.assign({}, user);
const copy2 = { ...user };

copy1.name = "Hamza";
copy1.address.city = "Shahajhanpur"

console.log(user, copy1, copy2);
// Explanation: address is a nested object, so in a shallow copy it is still the same reference.



/*
# Deep Copy
- A deep copy creates a new object and recursively copies every nested object and array. There are no shared reference between the original and the copy.

# Common methods.
1. new web api - structuredClone()
2. The legacy hack - JSON.parse(JSON.stringfy())
3. The manual/lib way using Loadash (_.cloneDeep)
*/
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Only deep copy will changed.";

console.log("Deep Copy", deepCopy, user, copy1, copy2);