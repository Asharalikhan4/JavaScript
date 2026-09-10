/*
Caesar Cipher: An earlier encryption technique which used to substitute the current alphabets with alphabet after a number of count.

Implement an algorithm to solve the ceaser cipher.

Input:
text = ABCD , Key = 13
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
13 shift to A is N
13 shift to B is O
13 shift to C is P
13 shift to D is Q

Output:
NOPQ

Input:
console.log(ceaserCipher('ATTACKATONCE', 13));
console.log(ceaserCipher('prashantyadav', 13));

Output:
"NGGNPXNGBAPR"
"cenfunaglnqni"
*/

function ceaserCipherApproach1(str, key) {
  let newStr = "";
  for (let char of str) {
    newStr += String.fromCharCode((char.charCodeAt(0)-65 + key ) % 26 + 65)
  }
  return newStr;
}

console.log(ceaserCipherApproach1("ATTACKATONCE", 13))