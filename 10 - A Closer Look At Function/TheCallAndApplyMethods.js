const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // book : function(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, "Ashar Ali Khan");

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

lufthansa.book.call(eurrowings, 23, "Hamza Khan");
lufthansa.book.call(swiss, 45, "Hammaz Khan");



// Doing the same thing with apply keyword.

const flightData = [583, "Afzal Khan"];
lufthansa.book.apply(swiss, flightData);
// lufthansa.book.call(swiss, ...flightData);

// We don't use apply anymore.


// Doing the same thing with the bind method
const bookEW = lufthansa.book.bind(eurrowings);
bookEW("67", "Ash");
