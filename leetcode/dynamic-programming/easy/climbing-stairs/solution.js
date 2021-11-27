//11/27/21

//Time: O(n)
//Space: O(1)
//Bottom up dp approach, no need to store previous values so we can reduce space
//complexity to O(1)
const climbStairs = function(n) {
  if(n <= 2) return n;
  let first = 1;
  let second = 2;
  for(let i = 3; i <=n; i++) {
    let current = second + first;
    first = second;
    second = current;
  }
  return second;
}


// 11/27/21
//dp top-down recursive approach with memoization

//Time: O(n) - we only need to calculate once for each value of i
//Space: O(n) - we need a hashmap to store the possible return values
const climbStairsRec = function(n) {
  let memo = {};

  function dp(i) {
    if(i <= 2) return i;
    if(!memo[i]) {
      memo[i] = dp(i-1) + dp(i-2);
    }

    return memo[i];
  }

  return dp(n);
};