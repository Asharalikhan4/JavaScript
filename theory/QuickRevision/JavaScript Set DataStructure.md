# JavaScript Set DataStructure

Before ES6 there was only one data-structure, Array which we could have used for numeric operations and for other non-numeric operations we had to use Objects. Arrays came with extra methods which we could use to create stack and queue.

With the introduction of javascript Set and Map. we now have some extra data-structures in javascript's library.

## Javascript Set
Sets are the unique collections of values of any types, Which also includes NaN and undefined.

## Before ES6
Before sets introduction in ES6 there was workaround which developers used to have to create sets but there was limitations to that workaround. Let us see that first to exactly know why there was need for it.
```js
var set = {};
if(!set.foo){
 set.foo = true;
}
```
We have created an empty object and assigned true to the properties so that we can check if that value is present.
This works well in the simple scenarios but when we have to use more complex situations we run into the limitations of the object properties.
```js
var set = {};
var key = {};
set[25] = 'prashant';
set[key] = 5;
console.log(set['25']); // prashant
console.log(set[key]); // 5
```

Here the object internally converts the numeric 25 and key to string '25' because object parameters must be string, Thus we cannot use both of them simultaneously.

## After ES6
With introduction of Set and WeakSet in ES6 we don't have to worry about the workaround limitations.
```js
let set = new Set([iterable]);
```

If an Iterable object like Array is passed then all its items will be added to the set.
```js
let set = new Set();
set.add(25);
set.add("25");

let set2 = new Set([1,2,3,4,5,6,7,8]);
let set3 = new Set('Prashant');

console.log(set.size); // 2
console.log(set2.size); // 8
console.log(set3.size); // 7 ['P','r','a','s','h','n','t']
```

Sets do not convert the values while checking (Except for +0 and -0).
```js
let set = new Set();
let key = {};
let key2 = {};
set.add(key);
set.add(key2);

console.log(set.size); // 2
```

## Sets Properties
- **Set.prototype.constructor:** Returns the function that created an instance's prototype.
- **Set.prototype.size:** Returns the size of the set.

## Sets Methods
- **Set.prototype.add(item):** Adds an item or items or values to the set.
- **Set.prototype.clear():** Removes all the items.
- **Set.prototype.delete(item):** Removes particular items from the set.
- **Set.prototype.enteries():** Returns an Iterator object that contains an array of items in the way they were added.
- **Set.prototype.foreach(callback, thisArg):** Calls the callback function once for each of the items in their insertion order. If thisArgs is passed then it will be called as this for each callback.
- **Set.prototype.has(item):** Returns true if item is present false otherwise.
- **Set.prototype[@@iterator]():** Returns a new Iterator object that contains the values for each element in the Set.
- **Set.prototype.keys():** Returns a new Iterator object that contains the values for each element in the Set.- **Set.prototype.values():** Returns a new Iterator object that contains the values for each element in the Set.
### Adding item to the set
```js
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(4);   //ignores the duplicate values
set.add('4');
set.add('My name is Prashant Yadav');
set.add(undefined);
set.add({a: 0, b: 1});
set.add(null);
console.log(set.size); // 9
```

### Checking if item is present in the set
```js
set.add(document.body);
set.has(document.querySelector('body')); // true

console.log(set.has(5)); // false
console.log(set.has(4)); // true
```

### Remove item from the set
```js
console.log(set.size); // 9
set.delete(null);    // Remove null
console.log(set.size); // 8

set.clear();         // Remove all items
console.log(set.size); // 0
```

### Iterating with javascript Set
#### Simple Iteration
```js
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
//foreach loop
set.forEach((e) => {console.log(e);});
// 1
// 2
// 3
// 4

//for of loop
for (let item of set) {
  console.log(item);
}
// 1
// 2
// 3
// 4
```

### Iterating objects of Set
```js
let set = new Set();
set.add(1);
set.add('prashant');
set.add({a: 1, b: 2, c: 3, d: 4});

for (let item of set.keys()) {
  console.log(item);
}
// 1
// prashant
// {a: 1, b: 2, c: 3, d: 4}

for (let item of set.values()) {
  console.log(item);
}
// 1
// prashant
// {a: 1, b: 2, c: 3, d: 4}

for (let [key, value] of set.entries()) {
  console.log(key, value);
}
// 1 1
// prashant prashant
// {a: 1, b: 2, c: 3, d: 4} {a: 1, b: 2, c: 3, d: 4}
```
```js
let set = new Set();
set.add(1);
set.add('prashant');
set.add({a: 1, b: 2, c: 3, d: 4});

// using `.next()`
const iterator = set.values();

console.log(iterator.next().value);
// 1

console.log(iterator.next().value);
// prashant

console.log(iterator.next().value);
// {a: 1, b: 2, c: 3, d: 4}
```

## WeakSets
A WeakSet is same as the Set except it can only store objects.
```js
let user = {name: "Prashant Yadav", age: 23};
const users = new WeakSet(user);
```

### Difference between Sets and WeakSets
- WeakSets can only store objects unlike the Sets.
- The add() method throws error when non-oject item is passed to the WeakSet.
- The has() and delete() method returns false for non-object.
- WeakSets are not Iteratable.
- They do not have size and foreach as well.

```js
let user = {name: "Prashant Yadav", age: 23}; 
let user2 = {name: "Prashant Yadav", age: 23}; 
let user3 = {name: "Prashant Yadav", age: 23}; 

const users = new WeakSet(); 
users.add(user);
users.add(user2);
users.add(user3); 

console.log(users.has(user2)); // true 

users.delete(user2); 

console.log(users.has(user2)); // false
```

The WeakSet cleans itself once the object is deleted or if there is no reference to the object.
```js
console.log(users)
user3 = null;
console.log(users);
//WeakSet {{…}, {…}}

//Wait for few seconds
console.log(users);
//WeakSet {{…}} 
//It automatically garbage collect the object.
```
