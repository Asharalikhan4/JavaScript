# JavaScript Map Data Structure

Before ES6 in order to store the key value pair we had to use objects. We never had any extra data structure except for an array.

With the introduction of javascript Map and Set, we have something extra to handle the data.

## Maps
Just like Sets, Maps are also used to store the unique values except here it is key value pair.

## Before ES6
Prior to the introduction of javascript Map developers used to have a workaround to handle the key value pair but there was limitations to that workaround. Let us see the workaround first to see why there was need for the Maps.
```js
var map = {};
map.foo = "bar";

// retrieving a value
let value = map.foo;
console.log(value);
```

This approach works fine but if the situation gets more complex when we run into the limitations of the object properties.
```js
var map = {};
map[5] = "bar";
console.log(map["5"]);
```

Object internally converts anything to string to store the values. So the numeric 5 is converted to "5". Thus we cannot use numeric key.

The same happens when we use objects as the key.
```js
var map = {};
var key = {};
var key2 = {};
map[key] = 'prashant';
console.log(map[key2]); //prashant
```

It converts the object to string.

Maps with falsy key were also difficult to handle.
```js
var map = {};
map.foo = false;
// checking for the existence of "foo" or a nonzero value?
if (map.foo) {
    // ...
}
```

Here we want to check if value is present inside the key foo but the falsy value is automatically converted to the false.

**Note:** we could use in operator, but that still check in the prototype of the objects. which makes it only safe to use when an object has a null prototype.

## After ES6
Maps are ordered list of key value pair where key as well as value can be of any type.
```js
let map = new Map([iterable]);
```
If an Iterable object like Array(arrays with two elements, e.g. [[ 1, 'one' ],[ 2, 'two' ]]) whose elements are key-value pairs is passed then all its items will be added to the Map.

null values are treated as undefined.
```js
let map = new Map();
map.set(5, 'prashant');
map.set('5', 'yadav');
console.log(map.size); // 2
console.log(map.get(5)); // 'prashant'
console.log(map.get('5')); // 'yadav'

let map2 = new Map([["name", "prashant"], ["age", 23]]);
console.log(map2.size); // 2
console.log(map2.get('name')); // prashant
```
we can also use objects as the key.
```js
let map = new Map();
let key1 = {};
let key2 = {};
map.set(key1, 'prashant');
map.set(key2, 'yadav');
console.log(map.size); // 2
console.log(map.get(key1)); // 'prashant'
console.log(map.get(key2)); // 'yadav'
```

### Map Properties
- **Map.prototype.constructor:** Returns the function that created an instance's prototype.
- **Map.prototype.size:** Returns the size of the map.

### Map Methods
- **Map.prototype.set(key, value):** Add the value for the key and returns the Map object.
- **Map.prototype.clear():** Removes all the items.
- **Map.prototype.delete(key):** Removes particular items with the given key.
- **Map.prototype.enteries():** Returns an Iterator object that contains an array of key value in the way they were added.
- **Map.prototype.foreach(callback, thisArg):** Calls the callback function once for each of the items in their insertion order. If thisArgs is passed then it will be called like this for each callback.
- **Map.prototype.has(key):** Returns true if item with given key is present, false otherwise.
- **Map.prototype.get(key):** Returns value of the item with given key, undefined otherwise.
- **Map.prototype[@@iterator]():** Returns a new Iterator object that contains the array of key value for each element in the Map.
- **Map.prototype.keys():** Returns a new Iterator object that contains the keys for each element in the Map
- **Map.prototype.values():** Returns a new Iterator object that contains the values for each element in the Map.

Adding item to the javascript map
```js
let map = new Map();
map.set(1, 'prashant');
map.set(2, 'anil');
map.set(3, 'taha');
map.set(4, 'ankit');
map.set(4, 'ankit');   //ignores the duplicate values
map.set('4', 'yadav');
map.set('fullname', 'My name is Prashant Yadav');
map.set(undefined, 20);
let key = {a: 0, b: 1};
map.set(key, 25);
let key2 =  function() {};
map.set(key2, 27);
map.set(null, 23);
console.log(map.size); // 9
console.log(map);

/*
Map(9) {1 => "prashant", 2 => "anil", 3 => "taha", 4 => "ankit", "4" => "yadav", …}
size: (...)
__proto__: Map
[[Entries]]: Array(9)
0: {1 => "prashant"}
1: {2 => "anil"}
2: {3 => "taha"}
3: {4 => "ankit"}
4: {"4" => "yadav"}
5: {"fullname" => "My name is Prashant Yadav"}
6: {undefined => 20}
7: {Object => 25}
8: {null => 23}
length: 9
*/
```

### Finding item in Map
```js
console.log(map.has(key));  // true
console.log(map.has(null)); // true
console.log(map.has(key2)); // true
console.log(map.has(0));  // false
```

Always pass objects as keys by storing it in variables let key = {a: 0, b: 1};

#### Getting the value of a given key
```js
console.log(map.get(key));  // 25
console.log(map.get(null)); // 23
console.log(map.get(0));  // undefined
```

#### Removing an item with the given key from the Map
```js
map.delete(key);
map.delete(null);

console.log(map.has(key));  // false
console.log(map.has(null)); // false
Iterating with mapsSimple Iterationsmap.forEach((value, key, ownerMap) => {
    console.log(key + " " + value);
    console.log(ownerMap === map);
});

/*
1 prashant
true

2 anil
true

3 taha
true

4 ankit
true

4 yadav
true

fullname My name is Prashant Yadav
true

undefined 20
true

[object Object] 25
rue

null 23
true
*/
```

We have used => arrow function, ownerMap is passed as this which equals to the current object ownerMap === map that is why it is returning true.

#### Using for of loop.
```js
for(const [key,val] of map){
  console.log(key,val);
}
/*
1 "prashant"
2 "anil"
3 "taha"
4 "ankit"
4 yadav
fullname My name is Prashant Yadav
undefined 20
{a: 0, b: 1} 25
ƒ () {} 27
null 23
*/
```

#### Using Map.prototype.keys().
```js
for (var key of map.keys()) {
  console.log(key);
}

/*
1 
2 
3 
4 
'4' 
fullname
undefined
{a: 0, b: 1}
ƒ () {}
null
*/
```

#### Using Map.prototype.values().
```js
for (var key of map.values()) {
  console.log(key);
}

/*
prashant
anil
taha
ankit
yadav
My name is Prashant Yadav
20
25
27
23
*/
```

#### Using Map.prototype.entries().
We can destructure the value to access them separately.
```js
for (let [key, value]  of map.entries()) {
   console.log(key + ' = ' + value);
}

/*
1 = prashant
2 = anil
3 = taha
4 = ankit
4 = yadav
fullname = My name is Prashant Yadav
undefined = 20
[object Object] = 25
function() {} = 27
null = 23
*/
```
## WeakMaps
WeakMaps are to the Maps what WeakSets are to the Sets. In weakMap every key must be object, inserting an non-object will result in error. Objects are held weakly so that if there is no reference to key then that key value will be removed from the WeakMap or garbage collected.

**Note:** Key should be objects, but value can be anything.
```js
let key1 = {}, key2 = {};
let weakMap = new WeakMap([[key1, "prashant"], [key2, 23]]);
console.log(weakMap.has(key1));     // true
console.log(weakMap.get(key1));     // "prashant"
console.log(weakMap.has(key2));     // true
console.log(weakMap.get(key2));     // 23
```

The WeakMap cleans itself once the key is deleted or if there is no reference to the key.
```js
let dad = { name: "Daddy" };
let mom = { name: "Mommy" };

const map = new Map();
const weakMap = new WeakMap();

map.set(dad, 1);
weakMap.set(mom, 2);

dad = null;
mom = null;

map;
// Map(1) {{…}}
weakMap;
//Wait for few seconds
// WeakMap {}
```

As we can see we mom was garbage collected when we set its value to null while dad is still present.

### Difference between Maps and WeakMaps
- WeakSets can use objects as key unlike the Maps.
- Passing non-objects as key will result in error.
- The has(key) and delete(key) method returns false for non-object.
- They have only four methods has(key), delete(key), get(key), set(key, value).
- WeakMaps are not Iteratable.

WeakMaps are very useful when creating objects related to particular DOM elements. That way when DOM element is no longer associated then it will automatically be garbage collected.