// Normal function, functin declaration
function describeCountry(country, population, capitalCity) { return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

// Arrow function, function expression
const describeCountry = (country, population, capitalCity) => {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descPortugal, descGermany, descFinland);