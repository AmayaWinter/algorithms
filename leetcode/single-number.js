//https://leetcode.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) {
  let singles = new Set();
  let doubles = new Set();
  while(nums.length) {
    let num = nums.pop();
    if(doubles.has(num)) { continue;}
    else if(singles.has(num)) {
      singles.delete(num);
      doubles.add(num)
    }
    else singles.add(num);
  }
  return Array.from(singles);
};


console.log(singleNumber( [1,2,1,3,2,5]));
console.log(singleNumber( [-1,0]));
console.log(singleNumber( [1,0]));
console.log(singleNumber( [1,0]));
console.log(singleNumber([2,1,2,3,4,1]));