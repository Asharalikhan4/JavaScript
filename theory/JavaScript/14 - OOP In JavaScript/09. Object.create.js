/*
- Third way to implement the prototypes and prototypes inheritance.
- This is the least used way of implementing the prototypal inheritance.
- Object.create() creates a new object, and the prototype of that object will be the object that we passed in.
*/

const PersonProto = {
  calcAge() {
    console.log(`${this.firstName}'s age: ${2037 - this.birthYear}`)
  },

  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = "Steven"
steven.birthYear = 2002
steven.calcAge()
console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto)
sarah.init("Sarah", 1979)
sarah.calcAge()
