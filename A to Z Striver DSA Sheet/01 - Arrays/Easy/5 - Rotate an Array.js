// https://leetcode.com/problems/rotate-array/

let arr = [1,2,3,4,5,6,7];
let n = 3;

function rotateArray(arr, start, end){
    while(start <= end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotate(arr, n){
    rotateArray(arr, 0, n-1);
    rotateArray(arr, n, arr.length-1);
    rotateArray(arr, 0, arr.length-1);
    printArray(arr);
}

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr.at(i));
    }
}