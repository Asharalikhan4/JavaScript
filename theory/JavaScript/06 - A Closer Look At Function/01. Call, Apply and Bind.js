function printFlightName() {
  console.log(this.airline);
}

const eurrowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss",
  iataCode: "LX",
  bookings: [],
};

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book : function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// Normally invoking the function
lufthansa.book(239, "Ashar Ali Khan");

/*
# call()
- Now using the call method, Call method help us to borrow the function, means you can write a function that can be used on differnt objects.(also known as function borrowing)
- here the first arguement will be the object where the this will be pointed and later on all the arguement that are being accepted by the function.
*/
lufthansa.book.call(eurrowings, 239, "Ashar Ali Khan");

// and suppose i have a function defined somewhere else then we can also use on the object using call method
printFlightName.call(lufthansa);
printFlightName.call(eurrowings);

/*
# apply()
- the only difference between the call and apply method is how we passed the arguements
lufthansa.book.apply(swiss, [121, "Ashar Ali Khan"]);
*/

/*
# bind()
- Unlike the other, bind does not invoke the function immediately. Instead, it return a new function with this permanently "locked" to the provided value.
- Now let's talk about the bind method it look like the call method but it bind the method with the object passed and return a function, it dosen't directly call the function like it does in the call and apply.
*/

let flightBookMessage = lufthansa.book.bind(eurrowings, 220, "Ashar Ali Khan");
flightBookMessage();
