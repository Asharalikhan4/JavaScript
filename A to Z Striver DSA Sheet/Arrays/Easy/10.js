/*

Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

Input:
N = 5

A[] = {1,2,3,5}
Output: 4

*/

const arr = [1,2,3,5];

function num(arr){
    let arrSum = 0, n = arr.length;
    for(let n of arr){
        arrSum += n;
    }
    return arrSum - (n*(n+1))/2;
}

console.log(num(arr));