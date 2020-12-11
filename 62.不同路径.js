/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
var resultMap = {
  '1,2': 1,
  '2,1': 1,
  '2,2': 2,
}

var getUniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1
  }
  if (resultMap[m+','+n]) {
    return resultMap[m + ',' + n]
  }
  var result = getUniquePaths(m - 1, n) + getUniquePaths(m, n - 1)
  resultMap[m + ',' + n] = result
  return result
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  return getUniquePaths(m,n)
};
// @lc code=end
