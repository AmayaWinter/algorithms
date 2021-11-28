//https://leetcode.com/problems/min-cost-climbing-stairs/

/*
 At the first step, cost to get here 0
 At the second step, cost to get here 0
 At the third step, cost to get here is the minimum of:
  minimumAtFirstStep + costOfFirstStep or
  minimumAtSecondStep + costOfSecondStep

  This is the recurrence relationship
  minCost[step] = Math.min(minCost[i-2] + cost[i-2], minCost[i-1] + cost[i-1]);
 */

// 11/27/21
//Time: O(n)
//Space: O(1)
var minCostClimbingStairs = function(cost) {

  let nMinusOne = 0;
  let nMinusTwo = 0

  for(let i = 2; i <= cost.length; i++) {
    let current = Math.min(nMinusTwo + cost[i-2], nMinusOne + cost[i-1]);
    nMinusTwo = nMinusOne;
    nMinusOne = current;
  }

  return nMinusOne;
};


//11/27/21
//Time: O(n)
//Space: O(n) - call stack(n) + memo(n)
const minCostClimbingStairsRec = function(cost) {
  let memo = {};

  function dp(i) {
    if(i <= 1) return 0;
    if(!(i in memo)) {
      memo[i] = Math.min(dp(i-2) + cost[i-2], dp(i-1) + cost[i-1]);
    }
    return memo[i];
  }

  return dp(cost.length);
}