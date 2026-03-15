function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("From cache");
      return cache[key];
    }

    console.log("Calculating...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
};

const memoizeAdd = memoize(add);
memoizeAdd(1, 2);
memoizeAdd(1, 2);