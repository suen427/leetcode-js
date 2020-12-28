/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

 /* 
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = 0
  let pointer = 0
  while (pointer < symbols.length) {
    let symbol = symbols[pointer]
    if (s.indexOf(symbol) === 0) {
      res += values[pointer]
      s = s.slice(symbol.length)
    } else {
      pointer += 1
    }
  }
  return res
};
// @lc code=end
console.log(romanToInt('I'), 1)
console.log(romanToInt('III'), 3)
console.log(romanToInt('IV'), 4)
console.log(romanToInt('IX'), 9)
console.log(romanToInt('LVIII'), 58)
console.log(romanToInt('MCMXCIV'), 1994)
console.log(romanToInt('MMMCMXCIX'), 3999)
