/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//brute force method
// let twoSum = function(nums, target) {
    
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

let twoSum = function (nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) { //assu
        map.set(nums[i], i);
        if(map.has(target - nums[i])) {
            return [map.get(target-nums[i]), i];
        }
        map.set(nums[i], i);
    }
}



console.log(twoSum([2,7,11,15], 9));