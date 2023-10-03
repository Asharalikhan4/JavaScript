const percentage = (population) => {
    return `${((population / 7900) * 100).toFixed(2)}`;
}

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentage(population)}% of the world`;
}

const country1 = describePopulation('Portugal', 10);
const country2 = describePopulation('China', 1441);
const country3 = describePopulation('USA', 332);

console.log(country1);
console.log(country2);
console.log(country3);