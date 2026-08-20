/*
- We implement the encapsulation (Private class fields and Methods) using the concept of class fields that is introduced in ES2022
  1. Public fields
  2. Private fields
  3. Public Methods
  4. Private Methods
  5. Static version of these (Static Fields and Static Methods are not accessible on the instance)
*/

class Acccount {

  // Public Fields
  locale = navigator.language
  bank = "Bankist"
  // Private Fields
  #movements = []
  #pin;
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an accoount, ${owner}`)
  }

  // Public Methods
  get movements() {
    return this.#movements
  }
  
  deposit(value) {
    this.#movements.push(value)
  }

  withdraw(value) {
    this.deposit(-value)
  }

  // Private Methods
  #approveLoan(value) {
    return true
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value)
      console.log(`Loan Approved`)
    }
  }
}

const account1 = new Acccount("Jonas", "EUR", 1111);
console.log(account1);

/*
# Not a good way
account1.movements.push(250)
account1.movements.push(-140)
*/

account1.deposit(250)
account1.withdraw(140)
account1.requestLoan(1000)

console.log(account1)

/*
// if you uncomment this, This will throw an error.
console.log(account1.#pin)
console.log(account1.#movements)
*/