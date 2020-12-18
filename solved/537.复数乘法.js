/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  var parseComplexNumber = numString => {
    return numString.split('+').map(v=> parseInt(v, 10))
  }

  a = parseComplexNumber(a)
  b = parseComplexNumber(b)

  return (a[0] * b[0] - a[1] * b[1]) + '+' + (a[0] * b[1] + a[1] * b[0]) + 'i'
};
// @lc code=end
// console.log(complexNumberMultiply("9+-10i", "1+1i"))
