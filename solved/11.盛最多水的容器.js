/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0
  var left = 0
  var right = height.length - 1
  while (left < right) {
    max = Math.max(Math.min(height[left], height[right])*(right - left), max)
    if (height[left] < height[right]) {
      left += 1
    } else {
      right -= 1
    }
  }
  return max
};
// var maxArea = function(height) {
//   var n = height.length
//   var max = 0
//   for (var right = 1; right < n; right ++) {
//     for (var left = 0; left < right; left ++) {
//       max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
//     }
//   }
//   return max
// };
// @lc code=end
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
console.log(maxArea([1, 1]), 1)
console.log(maxArea([4, 3, 2, 1, 4]), 16)
console.log(maxArea([1, 2, 1]), 2)
