/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var isPalindrome = function (s) {
    var i = 0
    var half = s.length / 2
    while (i < half) {
      if (s[i] !== s[s.length - i - 1]) {
        return false
      }
      i += 1
    }
    return true
  }

  for (var i = 0; i < s.length; i++) {
    for(var j = 0; j <= i; j++) {
      if (isPalindrome(s.slice(j, s.length - i + j))) {
        return s.slice(j, s.length - i + j)
      }
    }
  }
  return ''
};
// @lc code=end
console.log(longestPalindrome("ac"), "a")
console.log(longestPalindrome("babad"), "bab or aba")
console.log(longestPalindrome("cbbd"), "bb")
console.log(longestPalindrome(""), "")
console.log(longestPalindrome("jfdkaghfjakshgkkksbvbskkkasdfdf"), "kkksbvbskkk")
