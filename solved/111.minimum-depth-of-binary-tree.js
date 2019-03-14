/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (34.91%)
 * Total Accepted:    277.2K
 * Total Submissions: 793.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 * 
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * return its minimum depth = 2.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    return minDepthInner(root)

    function minDepthInner(node) {
        if(node === null) {
            return 0
        }
        if(node.left === null && node.right === null) {
            return 1
        }
        if(!(node.left !== null && node.right !== null)) {
            return Math.max(minDepthInner(node.left) + 1, minDepthInner(node.right) + 1)
        }
        return Math.min(minDepthInner(node.left) + 1, minDepthInner(node.right) + 1)
    }
};

// console.log(minDepth({val: null, left: null, right: null}))

