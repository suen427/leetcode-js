/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let res = strs[0]
  for (let s of strs) {
    let i = 0
    while(true) {
      if (res.slice(0, i) === s.slice(0, i)) {
        if (i > res.length && i > s.length) {
          res = res.slice(0, i-1)
          break
        }
        i += 1
      } else {
        res = res.slice(0, i-1)
        if (res === "") {
          return res
        }
        break
      }
    }
  }
  return res
};
// @lc code=end
console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl")
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "")
console.log(longestCommonPrefix(["do", "dog", "dog"]), "do")
console.log(longestCommonPrefix(["dog", "dog"]), "dog")
console.log(longestCommonPrefix(["dog", "do"]), "do")
