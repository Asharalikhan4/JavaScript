/*
Problem Statement: Given a number of stairs. Starting from the 0th stair we need to climb to the “Nth” stair. At a time we can climb either one or two steps. We need to return the total number of distinct ways to reach from 0th to Nth stair.
*/

function climbingStairsApproach1(n) {
  const tab = new Array(n+1).fill(0);
  if (n >= 0) tab[0] = 1;
  if (n >= 1) tab[1] = 1;
  for (let i = 2; i <= n; i++) {
      tab[i] = tab[i-1] + tab[i-2];
  };
  return tab[n];
};

console.log(climbingStairsApproach1(2))
