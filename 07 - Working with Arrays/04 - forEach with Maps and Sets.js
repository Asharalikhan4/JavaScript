// forEach implmentation on map.
const currencies = new Map([
    ["USD", "United State Dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound Streling"]
]);

console.log("Using forEach on map.")
currencies.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
});



// forEach implementation on set.
const currenciesUnique = new Set([
    "USD", "GBP", "USD", "EUR", "EUR"
]);

console.log("Using forEach on Sets");
currenciesUnique.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
});