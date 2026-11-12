// Iterating on simple objects
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Iterating on complex objects

const openingHours = {
    Monday : {open: 12, close: 22},
    Tuesday : {open: 11, close: 23},
    Wednesday : {open: 0, close: 24}
};

// const properties = Object.keys(openingHours);
// console.log(properties);
const entries = Object.entries(openingHours);
for(const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
