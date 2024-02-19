// https://leetcode.com/problems/rotate-array/

const nums = [1,2,3,4,5,6,7];
const k = 3

function rotateNumber(arr, start, end){
    while(start <= end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotate(arr, k){
    rotateNumber(arr, 0, arr.length-1);
    rotateNumber(arr, 0, k-1);
    rotateNumber(arr, k, arr.length-1);
}

rotate(nums, k);
console.log(nums);