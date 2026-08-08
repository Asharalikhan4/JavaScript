/*
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

let testCase1 = [7, 1, 5, 3, 6, 4];
let testCase2 = [7, 6, 4, 3, 1];

function stockBuyAndSellApproach1(prices) {
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
  "Brute Force Approach, Test case 1: ",
  stockBuyAndSellApproach1(testCase1),
);
console.log(
  "Brute Force Approach, Test case 2: ",
  stockBuyAndSellApproach1(testCase2),
);

