function secondLargestElementInArray(arr) {
  let n = arr.length;
  let largest = -1, secondLargest = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
};

let arr = [12, 35, 1, 10, 34, 1];
console.log(secondLargestElementInArray(arr));