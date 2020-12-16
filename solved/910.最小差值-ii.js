/*
 * @lc app=leetcode.cn id=910 lang=javascript
 *
 * [910] 最小差值 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  A.sort(function(a,b) {
    return a - b
  })
  var len = A.length
  var res = A[len - 1] - A[0]
  for (var i=1; i<len; i++) {
    var min = Math.min(A[0]+K, A[i] - K)
    var max = Math.max(A[len-1]-K, A[i-1]+K)
    res = Math.min(res, max-min)
  }
  return res
};
// @lc code=end

