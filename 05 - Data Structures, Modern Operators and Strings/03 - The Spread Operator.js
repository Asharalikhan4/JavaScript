/*

Spread opeartor is used to spread the value of the iterable's.

Important use case of spread operator -
1. Shallow copies of array.
2. Merge two arrays.

- Objects are not iterable.
- Iterable: arrays, string, maps, sets
- after 2018 spread operator also work on objects.

*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];
// Syntax of spread operator.
console.log(...arr1, ...arr2);


const restaurant = {
    name: "Classico Italino",
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Garlic"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    location: "Via Angelo, Italy"
};

const nam = {
    na: "Ashar",
}
console.log({...restaurant, ...nam});
