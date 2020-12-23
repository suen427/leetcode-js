/*
 * @lc app=leetcode.cn id=756 lang=javascript
 *
 * [756] 金字塔转换矩阵
 */

/**
 * 
 * 回溯算法
 */

// @lc code=start
/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
  var m = {}
  for (var i=0; i < allowed.length; i++) {
    var abc = allowed[i]
    m[abc.slice(0, 2)] = m[abc.slice(0, 2)] || []
    m[abc.slice(0, 2)].push(abc[2])
  }

  var bt = function(bottom, top) {
    if (bottom.length === 1) {
      return true
    }

    if (bottom.length === top.length + 1) {
      return bt(top, '')
    }

    var ab = bottom.slice(top.length, top.length+2)
    var c = m[ab]
    if (!c) {
      return false
    }
    for (var i=0; i<c.length; i++) {
      if (bt(bottom, top+c[i])) {
        return true
      }
    }
    return false
  }

  return bt(bottom, '')
};
// @lc code=end

console.log(pyramidTransition("BCD", ["BCG", "CDE", "GEA", "FFF"]), true)
console.log(pyramidTransition("AABA", ["AAA", "AAB", "ABA", "ABB", "BAC"]), false)
