// //https://leetcode.com/problems/shuffle-an-array/
//
//
// /**
//  * @param {number[]} nums
//  */
// var Solution = function(nums) {
//   this.nums = nums;
//   this.perms = this.getPerms(nums);
//   this.permIdx = 0;
// };
//
// /**
//  * @return {number[]}
//  */
// Solution.prototype.reset = function() {
//   return this.nums;
// };
//
// /**
//  * @return {number[]}
//  */
// Solution.prototype.shuffle = function() {
//   if(this.permIdx === this.perms.length) this.permIdx = 0;
//   return this.perms[this.permIdx++];
// };
//
// Solution.prototype.getPerms = function (nums) {
//   let perms = [[nums[0]]];
//   for(let i = 1; i < nums.length; i++) {
//     let curNum = nums[i];
//     let tmpResults = [];
//     for(let j = 0; j < perms.length; j++) {
//       let perm = perms[j];
//       for(let x = 0; x <= perm.length; x++) {
//         let temp = perm.slice();
//         temp.splice(x, 0, curNum);
//         tmpResults.push(temp);
//       }
//     }
//     perms = tmpResults;
//   }
//   return perms;
// }
//
// /**
//  * Your Solution object will be instantiated and called as such:
//  * var obj = new Solution(nums)
//  * var param_1 = obj.reset()
//  * var param_2 = obj.shuffle()
//  */
//
// let temp = new Solution([1,2,3]);
// console.log(temp.getPerms([1,2,3]));

console.log(Math.floor(Math.random() * 3));