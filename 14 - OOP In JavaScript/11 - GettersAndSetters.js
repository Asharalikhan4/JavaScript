// Below down is the basic of how the getter and setter work in the javaScript.
const account = {
    owner : "Ashar",
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Getter and Setter in JavaScript
// Getter and Setter are very useful for the data validation.
class Person{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(" ")){
            // if setter is trying to set the peoperty that is already assign by constructor then we use the underScore while using the this keyword. this is just a convention.
            this._fullName = name;
        } else {
            alert(`${name} is not a full name.`);
        }
    }

    get fullName() {
        return this._fullName;
    }
}

const Ashar = new Person("Ashar Ali Khan", 2003);
console.log(Ashar);
console.log(Ashar.age)
