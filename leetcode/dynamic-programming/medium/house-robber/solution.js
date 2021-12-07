
/*
How can we identify that this is a dp problem?
- maximum of something
- previous decision affects future decision - if I robbed the previous house I can't rob this one

What are the base cases?
- If there is one house, the max we can rob is that house
- If there are two houses, the max we can rob is the max of those two houses

What is the recurrence relation?
- dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
 */

//11/27/21
//Time: O(n)
//Space: O(n) - call stack
//Top-down approach (recursion w/ memoization)
// const rob = function(nums) {
//   let memo = {};
//
//   function dp(i) {
//     if(i === 0) return nums[0] ;
//     if(i === 1) return Math.max(nums[0], nums[i]);
//
//     if(!(i in memo)) {
//       memo[i] = Math.max(dp(i-2) + nums[i], dp(i-1))
//     }
//     return memo[i];
//   }
//
//   return dp(nums.length-1);
// };

//11/27/21
//Time: O(n)
//Space: O(1) - we're only store the last 2 solutions
const robIter = function(nums) {
  if(nums.length === 1) {
    return nums[0];
  }
  let nMinusTwo = nums[0];
  let nMinusOne = Math.max(nums[0], nums[1]);

  let len = nums.length;
  let i = 2;
  for(; i < len; i++) {
    let current = Math.max(nMinusTwo + nums[i], nMinusOne);
    nMinusTwo = nMinusOne;
    nMinusOne = current;
  }
  return nMinusOne;
};

//11/27/21
//Time: O(n)
//Space: O(n)
//Bottom Up approach (tabulation / iterative)
const robRec = function(nums) {
  if(nums.length <=2) {
    return Math.max(...nums);
  }

  let ways = [];
  ways[0] = nums[0];
  ways[1] = Math.max(nums[0], nums[1]);

  for(let i = 2; i < nums.length; i++) {
    ways[i] = Math.max(ways[i-2] + nums[i], ways[i-1]);
  }
  return Math.max(ways[ways.length-1] , ways[ways.length-2]);
};