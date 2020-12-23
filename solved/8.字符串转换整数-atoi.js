/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  var res = parseInt(s, 10)
  if (isNaN(res)) return 0
  if (res > 2 ** 31 - 1) return 2 ** 31 - 1
  if (res < -(2 ** 31)) return -(2 ** 31)
  return res
};
// @lc code=end
console.log(myAtoi("42"), 42)
console.log(myAtoi("   -42"), -42)
console.log(myAtoi("4193 with words"), 4193)
console.log(myAtoi("words and 987"), 0)
console.log(myAtoi("-91283472332"), -2147483648)
