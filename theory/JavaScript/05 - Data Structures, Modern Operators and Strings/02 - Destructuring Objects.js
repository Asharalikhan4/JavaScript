const restaurant = {
  name: "Classico Italino",
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Garlic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  location: "Via Angelo, Italy",
};

// Syntax
const { name, categories, location } = restaurant;

// If we want to give custom names
const { name: restaurantName } = restaurant;

// Pre-defined value work same as it was in the array.
