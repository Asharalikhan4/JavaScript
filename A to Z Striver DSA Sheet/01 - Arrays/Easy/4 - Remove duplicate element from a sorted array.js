// https://practice.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1


let arr = [2, 2, 2, 2, 2];

function removeDuplicate(arr){
    let i = 0;
    for(let j = 0; i < arr.length; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(removeDuplicate(arr));

