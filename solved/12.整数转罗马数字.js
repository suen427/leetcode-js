/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var values =  [1000, 900,  500, 400,  100,  90,  50,   40,  10,   9,    5,   4,    1]
  var symbols = ['M',  'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var pointer = 0
  var res = ''
  while (pointer < values.length) {
    if (num >= values[pointer]) {
      res += symbols[pointer]
      num -= values[pointer]
    } else {
      pointer += 1
    }
  }
  return res
};
// @lc code=end
console.log(intToRoman(1), 'I')
console.log(intToRoman(3), 'III')
console.log(intToRoman(4), 'IV')
console.log(intToRoman(9), 'IX')
console.log(intToRoman(58), 'LVIII')
console.log(intToRoman(1994), 'MCMXCIV')
console.log(intToRoman(3999), 'MMMCMXCIX')
