const nums = [0,1,0,3,12];

function moveZeros(arr){
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] !== 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }
}

moveZeros(nums);
console.log("Final Array:", nums);