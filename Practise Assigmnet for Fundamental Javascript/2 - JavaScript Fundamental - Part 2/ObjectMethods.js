const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function(){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },
    checkIsLand: function(){
        this.isLand = this.neighbours.length === 0 ? true : false
    }
};

myCountry.describe();