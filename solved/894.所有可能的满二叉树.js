/*
 * @lc app=leetcode.cn id=894 lang=javascript
 *
 * [894] 所有可能的满二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  if (N % 2 === 0) {
    return []
  }
  if (map.has(N)) {
    return map.get(N)
  }

  if (N === 1) {
    return [new TreeNode(0)]
  }

  var res = []
  for (var i = 1; i < N; i += 2) {
    var leftNodes = allPossibleFBT(i)
    var rightNodes = allPossibleFBT(N - i - 1)
    for (var j = 0; j < leftNodes.length; j++) {
      for (var k = 0; k < rightNodes.length; k++) {
        var root = new TreeNode(0)
        root.left = leftNodes[j]
        root.right = rightNodes[k]
        res.push(root)
      }
    }
  }

  map.set(N, res)
  return res
};

const map = new Map()
// @lc code=end
