function rotateArray(nums, k) {
  let n = nums.length;
  let newArr = [];
  for (let i = k + 1; i < n; i++) {
    newArr.push(nums[i]);
  }
  for (let i = 0; i <= k; i++) {
    newArr.push(nums[i]);
  }
  arr1.splice(0, arr1.length, ...arr2);
}

let nums = [1, 2, 3, 4, 5, 6, 7], k = 3
console.log(rotateArray(nums, k));