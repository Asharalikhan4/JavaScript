// https://leetcode.com/problems/move-zeroes/

const nums = [0,1,0,3,12];

function moveZeros(arr){
    let i = 0, n = arr.length;
    for(let j = 0; j < arr.length - 1; j++){
        if(arr[j] != 0){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

moveZeros(nums);
console.log("Final Array:", nums);