/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (44.23%)
 * Total Accepted:    213.4K
 * Total Submissions: 482.2K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n
    let history = {
        n: true
    }
    while(true) {
        let digits = sum.toString().split('').map(d => parseInt(d))
        sum = digits.reduce((sum, d) => {
            return sum + d*d
        }, 0)
        if(sum === 1) return true
        if(history[sum]) return false
        history[sum] = true
    }
};


