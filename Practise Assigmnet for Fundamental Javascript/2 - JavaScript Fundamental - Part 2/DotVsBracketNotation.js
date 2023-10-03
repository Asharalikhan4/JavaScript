const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// Dot notation
myCountry.population += 2;

// Bracket notation
myCountry['population'] -= 2;