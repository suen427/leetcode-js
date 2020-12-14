/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//   var res = []
//   var mo = {}
//   for (var i = 0; i < nums.length; i++) {
//     if (mo[nums[i]]) {
//       res.push(nums[i])
//     }
//     mo[nums[i]] = true
//   }
//   return res
// };

var findDuplicates = function(nums) {
  var res = []
  for (var i = 0; i < nums.length; i++) {
    var tmp = Math.abs(nums[i]) - 1;
    // 如果 nums[tmp] < 0 则表示该数已出现过进行记录
    if (nums[tmp] > 0) {
      nums[tmp] = -nums[tmp];
    } else {
      res.push(tmp + 1);
    }
  }
  return res
};

// findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
// @lc code=end

