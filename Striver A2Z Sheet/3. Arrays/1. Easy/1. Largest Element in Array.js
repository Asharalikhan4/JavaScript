function largestElementInArray(arr) {
  let n = arr.length, largestElement = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
};

let arr = [2, 5, 1, 3, 0]
console.log(largestElementInArray(arr));