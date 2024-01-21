/*

Question:
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula.
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK😀

*/

// Solution
const marksHeight = 1.69;
const marksWeight = 78;
const johnHeight = 1.95
const johnWeight = 92;

const marksBMI = marksWeight / marksHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if(marksBMI > johnBMI){
    console.log("Marks has a height BMI");
} else {
    console.log("John has a high BMI");
}