/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 *
 * https://leetcode.com/problems/summary-ranges/description/
 *
 * algorithms
 * Medium (35.30%)
 * Total Accepted:    125.3K
 * Total Submissions: 355K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * Given a sorted integer array without duplicates, return the summary of its
 * ranges.
 * 
 * Example 1:
 * 
 * 
 * Input:  [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:  [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 * Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0) return []
    let res = []
    let begin = nums[0]
    let end = nums[0]

    for(let i=1; i<nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i]
            continue
        }
        if(end === begin) {
            res.push(begin.toString())
        } else {
            res.push(begin + '->' + end)
        }
        begin = end = nums[i]
    }

    if (end === begin) {
        res.push(begin.toString())
    } else {
        res.push(begin + '->' + end)
    }

    return res
};

