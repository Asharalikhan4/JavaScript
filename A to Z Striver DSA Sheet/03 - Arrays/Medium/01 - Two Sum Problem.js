// Link -> https://leetcode.com/problems/two-sum/

const arr = [2, 7, 11, 15];
const target = 9;


// Brute
function twoSumBrute(arr, target) {
    let answerArray = new Array(1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                answerArray[0] = i;
                answerArray[1] = j;
                return answerArray;
            }
        }
    }
    return answerArray;
};

// Better
function twoSumBetter(arr, target) {
    const myMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const left = target - arr[i];
        if (myMap.has(left)) {
            return [myMap.get(left), i];
        }
        myMap.set(arr[i], i);
    }
    return [];
};

// Optimal
function twoSumOptimal(arr, target){
    arr.sort((a, b) => a - b);
    let left = 0, right = arr.length - 1
    while(left < right){
        if(arr[left] + arr[right] < target){
            left++;
        } else if (arr[left] + arr[right] > target){
            right--;
        } else {
            return [left, right];
        }
    }
    return [0];
}


console.log("Answer (Brute)", twoSumBrute(arr, target));
console.log("Answer (Better)", twoSumBetter(arr, target));
console.log("Answer (Optimal)", twoSumOptimal(arr, target));
