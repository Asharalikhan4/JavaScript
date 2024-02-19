// Count the occurrence/frequency of each element in the array.

let nums = [1,1,1,3,4,3,6,6,4,3,8,2,7,9,2,10];

let hashArr = new Array(11).fill(0);

for(let i = 0; i < nums.length; i++){
    hashArr[nums[i]]++;
}
for(let i = 0; i < hashArr.length; i++){
    console.log("Value " + i + " occured " + hashArr[i] + " times.")
}