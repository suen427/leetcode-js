/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let matches = function (s, p, i, j) {
    if (i === 0) {
      return false
    }
    if (p[j-1] === '.') {
      return true
    }
    return s[i - 1] === p[j - 1]
  }

  let sLen = s.length
  let pLen = p.length
  let dp = new Array(sLen+1)
  for(let i = 0; i < sLen+1; i++) {
    dp[i] = new Array(pLen+1).fill(false)
  }
  dp[0][0] = true
  for(let i = 0; i <=sLen; i++) {
    for(let j = 1; j<=pLen; j++) {
      if (p[j-1] === '*') {
        dp[i][j] = dp[i][j-2]
        if (matches(s, p, i, j-1)) {
          dp[i][j] = dp[i][j] || dp[i-1][j]
        }
      } else {
        dp[i][j] = matches(s,p,i,j) && dp[i-1][j-1]
      }
    }
  }

  return dp[sLen][pLen]
}

// var isMatch = function(s, p) {
//   var partMatch = function(s, p, multi) {
//     if (multi) {
//       if (s === '' || p === '.') {
//         return true
//       }
//       for(var i = 0; i < s.length; i++) {
//         if (s[i] !== p) return false
//       }
//       return true
//     } else {
//       if (p === '.') {
//         return s.length === 1
//       } else {
//         return s === p
//       }
//     }
//   }

//   var parsePattern = function(p) {
//     var patterns = []
//     var i = 0
//     while(i < p.length) {
//       if (p[i+1] === '*') {
//         patterns.push([p[i], true])
//         i += 2
//       } else {
//         patterns.push([p[i], false])
//         i += 1
//       }
//     }
//     return patterns
//   }

//   var bt = function (s, patterns) {
//     if (s.length === 0 && patterns.length === 0) {
//       return true
//     }
//     if (s.length > 0 && patterns.length === 0) {
//       return false
//     }
//     for (var i = 0; i < patterns.length; i++) {
//       var pattern = patterns[i]
//       if (pattern[1]) {
//         for (var j = 0; j <= s.length; j++) {
//           if (partMatch(s.slice(0, j), pattern[0], pattern[1]) && bt(s.slice(j), patterns.slice(1))) {
//             return true
//           }
//         }
//       } else {
//         if (partMatch(s.slice(0, 1), pattern[0], pattern[1]) && bt(s.slice(1), patterns.slice(1))) {
//           return true
//         }
//       }
//       return false
//     }
//     return false
//   }

//   var patterns = parsePattern(p)
//   return bt(s, patterns)
// };
// @lc code=end
console.log(isMatch("aa", "a"), false)
console.log(isMatch("aa", "a*"), true)
console.log(isMatch("aa", ".*"), true)
console.log(isMatch("aab", "c*a*b"), true)
console.log(isMatch("mississippi", "mis*is*p*."), false)
console.log(isMatch("", "a*"), true)
console.log(isMatch("aa", "b*a"), false)
console.log(isMatch("aaa", "ab*a"), false)
