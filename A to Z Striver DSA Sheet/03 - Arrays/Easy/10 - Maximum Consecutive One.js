const arr = [1, 1, 0, 1, 1, 1];

function maxOnesCount(arr) {
    let onesCount = 0;
    let maxOnes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            onesCount++;
            if(onesCount > maxOnes){
                maxOnes = onesCount;
            }
        } else {
            onesCount = 0;
        }
    }
    return maxOnes;
}

console.log("Maximum continue ones in this array is : ", maxOnesCount(arr));