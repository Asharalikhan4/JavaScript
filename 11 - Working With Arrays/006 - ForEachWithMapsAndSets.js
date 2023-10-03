const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map)  {
    console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach(function(value, key) {
    console.log(`${key}: ${value}`);
    // In set we don't have keys and indexes so the keys part won't be printed.
})