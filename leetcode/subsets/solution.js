//https://leetcode.com/problems/subsets/solution/

const subsets = function(nums) {
  debugger;
  let powerSet = [[]];
  for(let i = 0; i < nums.length; i++) {
    for(let set of powerSet) {
      powerSet = [...powerSet, [...set, nums[i]]];
    }
  }
  return powerSet;
};


const subsetBinary = function(nums) {
  let sets = [];
  for (let i = Math.pow(2, nums.length); i < Math.pow(2, nums.length+ 1); i++) {
    let mask = i.toString(2).substring(1);
    let set = [];
    for(let j = 0; j < mask.length; j++) {
      if(mask[j] == 1) {
        set.push(nums[j]);
      }
    }
    sets.push(set);
  }
  return sets;
}


console.log(subsetBinary([1,2,3]));