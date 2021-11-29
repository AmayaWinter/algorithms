//https://leetcode.com/problems/coin-change/
/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Approach: Every value i (amount we're trying to generate) is equal to the minimum number of coins
it took to generate i - coin (where coin is the current coin we're dealing with)

Example:
coins = [1,2,5], amount = 11

      0 1 2 3 4 5 6 7 8 9 10 11  -> amounts
coins
    1 0 1 2 3 4 5 6 7 8 9 10 11  at 2 it takes 2 - 1 + 1, at 3: 3 - 1 + 1
    2 0 1 1 2 -> 3 - 2 = 1 it takes 1 coin to make 1, then add 2 to it, that's 2 coins for a total of 2 coins
    5

relationship recurrence = dp[i] = Math.min(dp[i-coin] + 1 , dp[i]);
 */



/*
Time: O(c * a) - where c is the number of unique coins, and a is the amount
Space: O(a) - we create an array of size amount + 1
 */
const coinChange = function(coins, amount) {

  if(amount === 0) return 0;;

  let numWays = Array(amount+1).fill(Infinity);
  numWays[0] = 0;

  for(let d = 0; d < coins.length; d++) {
    let coin = coins[d]
    for(let i = coin; i <= amount; i++) {
      if(i - coin >= 0) {
        numWays[i] = Math.min(numWays[i-coin] + 1, numWays[i])
      }
    }
  }

  return numWays[amount] === Infinity ? -1 : numWays[amount];
};

console.log(coinChange([1,2,5], 11)); // -> 3  (5 + 5 + 1)