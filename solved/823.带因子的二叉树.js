/*
 * @lc app=leetcode.cn id=823 lang=javascript
 *
 * [823] 带因子的二叉树
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// var numFactoredBinaryTrees = function(arr) {
//   arr.sort(function(a, b) { return a - b })
  
//   var numMap = {}
//   for (var i=0; i<arr.length; i++) {
//     var count = 1
//     var n = arr[i]
//     for (var f1 in numMap) {
//       var f2 = n / f1
//       if (numMap[f2]) {
//         count += numMap[f1] * numMap[f2]
//       }
//     }
//     numMap[n] = count
//   }

//   var res = 0
//   for (var f in numMap) {
//     res += numMap[f]
//   }

//   return res % (10 ** 9 + 7)
// };

var numFactoredBinaryTrees = function (A) {
  var dp = []
  var map = new Map()
  var out = 0
  var i = 0
  A.sort((a, b) => {
    return a - b
  })
  for (i; i < A.length; i++) {
    // 数字到index的映射
    map.set(A[i], i)
  }
  for (i = 0; i < A.length; i++) {
    dp[i] = 1
    for (var j = i - 1; j >= 0; j--) {
      if (A[i] % A[j] === 0) {
        if (map.has(A[i] / A[j])) {
          //因子索引j，k
          var k = map.get(A[i] / A[j])
          dp[i] += dp[j] * dp[k]
        }
      }
    }
    out += dp[i]
  }
  return out % (10 ** 9 + 7)
};
// @lc code=end
// console.log(numFactoredBinaryTrees([4]), 1)
// console.log(numFactoredBinaryTrees([2, 4]), 3)
// console.log(numFactoredBinaryTrees([2, 4, 5, 10]), 7)
// console.log(numFactoredBinaryTrees([2, 4, 8, 16, 32, 64, 128, 256, 512]), 16178)
// var arr = new Array(58).fill(0).map((n,i) => {
//   i = i + 1
//   if (i < 10) {
//     return 2**i
//   }
//   if (i < 18) {
//     return 3**(i - 9)
//   }
//   if (i < 28) {
//     return 2**(i - 17) * 3
//   }
//   if (i < 38) {
//     return 2**(i - 27) * 3 * 3
//   }
//   if (i < 48) {
//     return 2**(i - 37) * 3**3
//   }
//   if (i < 59) {
//     return 2**(i - 47) * 3**4
//   }
// })
// console.log(JSON.stringify(arr))
// console.log(numFactoredBinaryTrees(arr), 874329124)
