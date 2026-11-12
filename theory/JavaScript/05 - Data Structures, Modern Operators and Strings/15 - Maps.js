/*
-> The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
-> Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).
-> The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).


We also have maps method's that we can use to make our work easy.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

*/

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2




/*
Weak Map -> A WeakMap is essentially a restricted version of a Map. It exists for one very specific, highly advanced purpose: preventing memory leaks.

To understand WeakMap, you have to understand JavaScript's Garbage Collector. Normally, if an object is stored in memory, JavaScript keeps it alive as long as there is a "reference" pointing to it. If you put an object inside an Array or a standard Map, that Map is holding a reference to it. Even if you delete all other traces of that object in your code, the Map keeps it alive in memory forever.

A WeakMap holds a "weak" reference to its keys. It tells the Garbage Collector: "If I am the only thing holding onto this object, go ahead and delete it. I don't need it."

The Strict Rules of WeakMap:

Keys MUST be Objects: You cannot use primitives (strings, numbers, booleans) as keys in a WeakMap. Why? Because primitives are not garbage collected the way objects are.

Not Iterable: You cannot loop over a WeakMap. It has no keys(), values(), or size property. Why? Because the Garbage Collector runs randomly in the background. If you were looping over a WeakMap, an object might be deleted halfway through your loop. To prevent the engine from crashing, JavaScript simply makes them un-loopable.
*/

let john = {
  name: "John"
};
const weakCache = new WeakMap();

weakCache.set(john, "Some hidden data about john");
console.log(weakCache.has(john));   // Output: True
// Now, we overwrite the only reference to the original object
john = null;

// BACKGROUND MAGIC: 
// The Garbage Collector sees that the original object is gone.
// It automatically deletes it from memory AND silently removes it from weakCache!
