// Link -> https://leetcode.com/problems/majority-element/

const arr = [3, 2, 3];

// Brute
function majorityElementBrute(arr) {
    arr.sort((a, b) => a - b);  // sorting in ascending order
    return arr[(arr.length - 1) / 2];
}

// Better
function majorityElementBetter(arr) {
    const myMap = new Map();
    for (let num of arr) {
        if (myMap.has(num)) {
            myMap.set(num, myMap.get(num) + 1);
        } else {
            myMap.set(num, 1);
        }
    }
    let majorElementCount = (arr.length - 1) / 2;
    for (let [num, count] of myMap) {
        if (count > majorElementCount) {
            return num;
        }
    }
    return -1;
}

// Optimal (Moore's voting algo)
function majorityElementOptimal(arr){
    let n = arr.length;
    let cnt = 0;
    let el;

    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

console.log("Answer (Brute) :", majorityElementBrute(arr));
console.log("Answer (Better) :", majorityElementBetter(arr));
console.log("Answer (Optimal) :", majorityElementOptimal(arr));
