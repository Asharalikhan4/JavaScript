/*
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Approach 1 -> We'll use nested loop here, for each iteration we'll take one element and check the difference and if the difference is higher then previous then we keep it.

Approach 2 -> Take two variable, maxProfit = 0, minPrice = Infinity, now we'll use loop with each iteration check weather the current value in array is less than minPrice if yes then assign it and if not then check which one is greater maxProfit or currentPrice - minPrice, which is greater take it.
*/

let testCase1 = [7, 1, 5, 3, 6, 4];
let testCase2 = [7, 6, 4, 3, 1];

function stockBuyAndSellApproach1(prices) {
  /*
    T.C -> O(N*N)
    S.C -> O(1)
  */
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
};

console.log(
  "Approach 1, Test case 1: ",
  stockBuyAndSellApproach1(testCase1),
);
console.log(
  "Approach 1, Test case 2: ",
  stockBuyAndSellApproach1(testCase2),
);


function stockBuyAndSellApproach2(prices) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let minPrice = Infinity, maxProfit = 0;
  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }
  return maxProfit;
};

console.log(
  "Approach 2, Test case 1: ",
  stockBuyAndSellApproach2(testCase1),
);
console.log(
  "Approach 2, Test case 2: ",
  stockBuyAndSellApproach2(testCase2),
);