/*
Question -> Sum of all the elements of the array. (Aggregation)
*/

const arr = [1, 2, 3, 4];

const answer = arr.reduce((prevValue, currValue, currIndex, arr) => {
  prevValue = prevValue + currValue;
  return prevValue;
}, 0);

console.log("answer", answer);

/*
Question -> Group a certain set of values depending on our requirement. (Segregation)
*/

const arr2 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const answer2 = arr2.reduce((prevValue, currValue, currIndex, arr) => {
  const floored = Math.floor(currValue);
  if (!prevValue[floored]) {
    prevValue[floored] = [];
  }

  prevValue[floored].push(currValue);
  return prevValue;
}, {});

console.log("answer2", answer2);

/*
Question -> Let' say we have an array of functions and a value, the value has to be passed through these functions in a pipe, like the initial value has to be passed to the first function and then the returned value from the first function passed has to be passed to the next function and so on.
*/

const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};

const append = (str) => {
  return "Hello " + str;
};

const arr3 = [upperCase, reverse, append];
const initialValue = "learningJavaScript";

const answer3 = arr3.reduce((prevValue, currValue, currIndex, arr) => {
  return (prevValue = currValue(prevValue));
}, initialValue);

console.log("answer3", answer3);

/*
Question -> Similiarly if we want to run a promise in a sequence we can do the same with this.
*/

const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};

// creating an array of promises
const arr4 = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

arr4.reduce((prevValue, currValue, currIndex, arr) => {
  return currValue.then((val) => {
    console.log(val);
  });
}, {});
