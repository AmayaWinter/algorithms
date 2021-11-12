//https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent

/*
Input: array of positive ints
Output: maximum sum of non-adjacent elements
Edge Case: return 0 if empty

Considerations:
  numbers can repeat

 */
/*
Brute Force Approach:
  We know that we're either going to start at the first position or the second, and that from
  each position we can move over 2 or 3 spaces
 */
function solutionRec(arr) {
  let maxSum = 0;
  function findMax(arr, start, currentSum) {
    if(!arr[start]) {
      return 0;
    }
    currentSum += arr[start];
    if(currentSum > maxSum) {
      maxSum = currentSum;
    }
    findMax(arr, start + 2, currentSum);
    findMax(arr, start + 3, currentSum);
  }
  findMax(arr, 0, 0);
  findMax(arr, 1, 0);
  console.log('ops', ops);
  return maxSum;
}

/*
Approach:
  using DP to solve the smaller problem
  We keep an array of the max sum we can generate up until i
 */
function solutionDPSums(arr) {
  if(arr.length <=2 ) {
    return Math.max(arr);
  }
  const sums = [arr[0], Math.max(arr[0], arr[1])];
  for(let i = 2; i < arr.length; i++) {
    sums[i] = Math.max(sums[i-1], arr[i] + sums[i-2]);
  }
  return Math.max(sums[arr.length -1], sums[arr.length -2]);
}

/*
 Approach:
  using DP to solve the smaller problem
  same as above, but we don't actually need an array because we only care about the last two sums
  We keep an array of the max sum we can generate up until i
 */
function solutionDPOpt(arr) {
  if(arr.length <=2 ) { return Math.max(...arr); }
  let first = arr[0];
  let second = Math.max(arr[0], arr[1]);
  for(let i = 2; i < arr.length; i++) {
    let temp = second;
    second = Math.max(second, arr[i] + first);
    first = temp;
  }
  return Math.max(first, second);
}




// console.log(solutionDPOpt([7,10,12,7,9,14]));
// console.log(solution([75, 105, 120, 75, 90, 135]));
console.log(solutionRec([7, 10, 12, 7, 9, 14, 15, 16, 25, 20, ]));
console.log(18 * 3);