function isPalindrome(x) {
  if (x < 0) return false;
  let originalNumber = x,reversedX = 0;
  while (x !== 0) {
    reversedX = reversedX * 10 + (x % 10);
    x = Math.floor(x / 10);
    console.log(originalNumber, reversedX)
  }
  return originalNumber === reversedX;
}

console.log(isPalindrome(121), 121%10)