// https://practice.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1


let arr = [2, 2, 2, 2, 2, 3];

function removeDuplicate(arr){
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

const newArrayLength = removeDuplicate(arr);
for(let i = 0; i < newArrayLength; i++){
    console.log(arr[i]);
}

