const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3];

// Brute 
function findUnionBrute(arr1, arr2) {
    let freq = new Map();
    let union = [];

    for (let num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let num of arr2) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let [num, count] of freq) {
        union.push(num);
    }

    return union;
}



// Optimal
function findUnionOptimal(arr1, arr2) {
    let i = 0, j = 0;
    let union = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) { // Case 1 and 2
            if (union.length === 0 || union[union.length - 1] !== arr1[i])
                union.push(arr1[i]);
            i++;
        } else { // Case 3
            if (union.length === 0 || union[union.length - 1] !== arr2[j])
                union.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) { // If any elements left in arr1
        if (union[union.length - 1] !== arr1[i])
            union.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) { // If any elements left in arr2
        if (union[union.length - 1] !== arr2[j])
            union.push(arr2[j]);
        j++;
    }

    return union;
}

let union = findUnionOptimal(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(union.join(" "));