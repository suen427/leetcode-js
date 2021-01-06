/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let diff = Number.MAX_VALUE;
  let sum = 0
  const len = nums.length;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const newSum = nums[i] + nums[L] + nums[R];
      const newDiff = newSum - target;
      if (newDiff === 0) {
        return newSum
      }
      if (diff > Math.abs(newDiff)) {
        diff = Math.abs(newDiff)
        sum = newSum
      }
      if (newDiff < 0) L++;
      else if (newDiff > 0) R--;
    }
  }
  return sum;
};
// @lc code=end
// console.log(threeSumClosest([-1, 2, 1, -4], 1), 2)
// console.log(threeSumClosest([-1, 2, 1, -4], 2), 2)
// console.log(threeSumClosest([-102, 90, -889, 12, 8, -8, 12, 45, -89, 0, -2, 890], -8), -7)
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128],82), 82)
