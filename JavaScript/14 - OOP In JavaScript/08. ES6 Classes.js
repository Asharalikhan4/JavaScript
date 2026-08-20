/*
- The ES6 classes let's us do the same thing, but with a more nicer way.
- JS Classes are very different from the classes we learn in other language, it is just synthetic sugar over the constructor functions.
*/

// Class Expression
const PersonClassExpression = class {

};

// Class Declaration (more preferred)
class PersonClassDeclaration {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  // whatever function/method you write here will be on the prototype of the object not on the object itself. (Instance Method)
  calcAge() {
    console.log(2037 - this.birthYear)
  }

  // getter in class
  get age() {
    return 2037 - this.birthYear
  }

  // setter in class
  set fullName(name) {
    // you have to do all this when you set a property that already exists
    if (name.includes(" ")) {
      this._fullName = name
    } else {
      alert(`${name} is not a full name!`)
    }
  }

  get fullName() {
    return this._fullName
  }

  // Static Method
  static hey() {
    console.log("Hey there")
    console.log("this keyword inside Static Method", this)
  }
}

const jessica = new PersonClassDeclaration("Jessica Davis", 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.__proto__ === PersonClassDeclaration.prototype)
console.log(jessica.age)

/*
You can also write a prototype on this class and that will work fine as well.
*/
PersonClassDeclaration.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`)
}

jessica.greet()

const walter = new PersonClassDeclaration("Walter White", 1965)

PersonClassDeclaration.hey();

/*
# Some important things about classes.
1. Classes are not hoisted. (Declaration and Expression both)
2. Just like function, Classes are also first class citizens. (can be passed into function and can be returned from functions)
3. The body of classes are always executed in strict mode.
*/

/*
- There'a a property called getters and setters which is common to all object. these properties are called assessor properties while the normal properties are called data properties.
*/

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],
  // with the use of get keyword we make it a getter function, useful when you want something as a property and do some calculation before.
  get latest() {
    return this.movements.slice(-1).pop()
  },

  // we can do the same thing with the setter, a setter need a atlest one arguements and it will act like a property.
  set latest(move) {
    this.movements.push(move)
  }
}

console.log(account.latest)
account.latest = 50
console.log(account.movements)

/*
- Classes also have the getter and setters
*/
