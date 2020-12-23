/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString()
  var left = 0
  var right = x.length -1
  while (left < right) {
    if (x[left] !== x[right]) return false
    left += 1
    right -= 1
  }
  return true
};
// @lc code=end
console.log(isPalindrome(121), true)
console.log(isPalindrome(1221), true)
console.log(isPalindrome(12321), true)
console.log(isPalindrome(-121), false)
console.log(isPalindrome(10), false)
