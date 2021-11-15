/*
  Input: an array (coins) of distinct positive ints representing coin denominations and a single non negative int (n)
  Task: write function that returns the number of ways to make change for that target amount using given coins
  Note: you may use each coin an unlimited number of times

  Example:
    n = 6
    coins = [1,5]
    output: 2 // 6x(1 coin) and 1(1 coin) + 1 (5 coin)

  Approach:
 */

//Time: O(n*d) - where d is the number of coins, and n is the target amount
//Space: O(n) - where n is the target amount
function numberOfWaysToMakeChange(n, denoms) {
  let numWays = Array(n+1).fill(0);
  numWays[0] = 1;
  for(let d = 0; d < denoms.length; d++) {
    let coin = denoms[d];
    for(let i = 1; i <= n; i++) {
      if(coin <= i) {
        numWays[i] += numWays[i - coin];
      }
    }
  }
  return numWays[n];
}

numberOfWaysToMakeChange(6, [1,5]);