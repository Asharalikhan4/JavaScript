let arr = [9,8,7,6,5,4,3,2,1];

function BubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n-1; i++){
        let swapped = false;
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
                swapped = true;
            }
        }
        if(swapped == false){
            break;
        }
    }
}

BubbleSort(arr);

console.log("Sorted Array: ", arr)