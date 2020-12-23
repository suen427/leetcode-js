/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var min = -(2**31)
  var max = (2**31) - 1
  var sign = x < 0 ? -1 : 1
  var res = x.toString().split('')
  if (sign < 0) {
    res.shift()
  }
  res = sign * parseInt(res.reverse().join(''), 10)
  if (res > max || res < min) {
    return 0
  }
  return res
};
// @lc code=end
console.log(reverse(210), 12)
console.log(reverse(-123), -321)
console.log(reverse(-1147483649), 0)
console.log(reverse(-11483649), 0)
