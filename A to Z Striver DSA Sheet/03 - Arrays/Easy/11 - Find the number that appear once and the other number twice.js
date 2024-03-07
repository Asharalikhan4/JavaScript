const arr = [1, 1, 2, 5, 5];


// Brute 
function appearOnceBrute(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count === 1) {
            return arr[i];
        }
    }
}

// Optimal
function appearOnceOptimal(arr) {
    let hashArray = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hashArray[arr[i]]++;
    }
    for (let i = 0; i < hashArray.length; i++) {
        if (hashArray[i] === 1) {
            return arr[hashArray[i] + 1];
        }
    }
    return -1;
}

// Best
function appearOnceBest(arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}




console.log("The number that appear once is (Using Brute Approach): ", appearOnceBrute(arr));
console.log("The number that appear once is (Usign Optimal Approach): ", appearOnceOptimal(arr));
console.log("The number that appear once is (Usign Best Approach): ", appearOnceBest(arr)); 