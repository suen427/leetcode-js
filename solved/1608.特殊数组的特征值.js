/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  var left = 0
  var right = nums.length
  while(left < right) {
    var res = Math.ceil((left + right) / 2)
    var count = nums.reduce(function(c, n) {
      return n >= res ? c + 1 : c
    }, 0)
    if (count === res) {
      return res
    }
    if (count < res) {
      right = Math.floor((left + right) / 2)
    } else {
      left = Math.ceil((left + right) / 2)
    }
  }
  return -1
};
// @lc code=end

