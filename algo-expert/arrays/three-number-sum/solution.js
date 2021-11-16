/*
  Input:
    arr - array of distinct integers, unsorted
    target - a target sum
  Task:
    find any combination of three numbers which add up to the target sum

  Approach:
    1. sort the array
    2. start with the first value in the array (num)
    3. set a pointer on the left, and the right
    4. add num to the values at pointer left and right,
          if this sum is equal to the target, store this combo of three numbers
          if the sum is less than target then move the left pointer to the right to try and get closer to the target
          else move the right pointer to the left
       ... repeat while start < end

 */

function threeNumberSum(arr, target) {
  let combos = [];
  arr.sort((a,b) => a-b);
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let start = i + 1;
    let end = arr.length -1;
    while(start < end) {
      let sum = num + arr[start] + arr[end];
      if(sum === target) {
        combos.push([num, arr[start], arr[end]]);
      }
      sum < target ? start++ : end --;
    }
  }
  return combos;
}