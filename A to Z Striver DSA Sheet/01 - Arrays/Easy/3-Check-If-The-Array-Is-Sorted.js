/*

Given an array arr[] of size N, check if it is sorted in non-decreasing order or not. 

Input:
N = 5
arr[] = {10, 20, 30, 40, 50}

Output: true

Explanation: The given array is sorted.

*/

const arr = [1,2,3,4,5,6,7];

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
};

if(isSorted(arr)){
    console.log("Array is sorted");
} else {
    console.log("Array is not sorted");
}