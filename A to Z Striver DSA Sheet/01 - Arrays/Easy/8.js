/*

Given a array and a number, Check whether is present or not.

Input:
N = 5
Array = {1,2,3,4,5,6}

output: True

Explanation: Given number is present in the array

*/

const num = 5, arr = [1,2,3,4,5,6,7];

const answer = function isNumberPresent(arr, num){
    for(let n of arr){
        if(n === num){
            return true;
        }
    }
    return false;
};

if(answer){
    console.log("Number is present");
} else {
    console.log("Number is not present");
}