/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  let len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    let j = i + 1
    let k = len - 1

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    while(j < k) {
      if (j > i + 1 && nums[j] === nums[j-1]) {
        j += 1
        continue
      }
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]])
      }
      if (sum <= 0) {
        j += 1
      } else {
        k -= 1
      }
    }
  }
  return res
};
// @lc code=end
// console.log(threeSum([-1, 0, 1, 0]), [[-1, 0, 1]])
// console.log(threeSum([0, 0, 0, 0, 0]), [[0, 0, 0]])
// console.log(threeSum([-2, -1, 0, 0, 1, 1, 2, 3]), [[-2, -1, 3], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]])
console.log(
  threeSum([-9, -5, -4, -3, -1, 0, 0, 0, 1, 1, 2, 3, 3, 3, 5, 7, 8, 10]),
  [[-9, -1, 10], [-9, 1, 8], [-9, 2, 7], [-5, -3, 8], [-5, 0, 5], [-5, 2, 3], [-4, -3, 7], [-4, -1, 5], [-4, 1, 3], [-3, 0, 3], [-3, 1, 2], [-1, 0, 1], [0, 0, 0]]
)
