class Person {
  constructor(fullName, birthYear) {
    this.fullName = this.fullName
    this.birthYear = this.birthYear
  }

  calcAge() {
    console.log(2037 - this.birthYear)
  }

  greet() {
    console.log(`Hey ${this.fullName}`)
  }

  get age() {
    return 2037 - this.birthYear
  }

  // set fullName(name) {
  //   if (name.includes(" ")) {
  //     this._fullName = name
  //   } else {
  //     alert(`${name} is not a full name`)
  //   }
  // }

  // get fullName() {
  //   return this._fullName
  // }

  static hey() {
    console.log("Hey there")
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // here super() is basically constructor function of the parent class. Needs to happen first.
    super(fullName, birthYear)
    this.course = course
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`)
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
  }
}

const martha = new Student("Martha Jones", 2012, "Computer Science")
martha.introduce()
martha.calcAge()