/*
 * @lc app=leetcode.cn id=1147 lang=javascript
 *
 * [1147] 段式回文
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  var start = 0
  var end = 0
  var length = text.length
  var half = Math.floor(length / 2)
  var left = ''
  var right = ''
  var res = 0
  var isEven = length % 2 === 0
  var lastIsDecomposition = false
  while(start <= half) {
    for(end = start; end < half; end++) {
      left = left+text[end]
      right = text[length - end - 1] + right
      if (left === right) {
        res += 1
        lastIsDecomposition = end +1 === half
        break
      }
    }
    start = end + 1
    left = ''
    right = ''
  }
  return res * 2 + (lastIsDecomposition && isEven ? 0 : 1)
};
// @lc code=end

/**
 * 思路分析：
 * 
 */