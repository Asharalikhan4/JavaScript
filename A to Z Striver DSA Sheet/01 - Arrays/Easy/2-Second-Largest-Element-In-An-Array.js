/*

Given an array Arr of size N, print second largest distinct element from an array.

Input: 
N = 6
Arr[] = {12, 35, 1, 10, 34, 1}

Output: 34

Explanation: The largest element of the 
array is 35 and the second largest element
is 34.

*/
const arr = [1,2,3,4,5,6,7,8];

let largest = 0, secondLargest = -1;

function secondLargestNumber(arr){
    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        } else if(num < largest && num > secondLargest){
            secondLargest = num;
        }
    }
    return secondLargest;
}

const answer = secondLargestNumber(arr);
console.log(answer);