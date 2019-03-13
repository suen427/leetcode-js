/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 *
 * https://leetcode.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (35.53%)
 * Total Accepted:    97K
 * Total Submissions: 272.8K
 * Testcase Example:  '10'
 *
 * Write a program to find the n-th ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3,
 * 5. 
 * 
 * Example:
 * 
 * 
 * Input: n = 10
 * Output: 12
 * Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10
 * ugly numbers.
 * 
 * Note:  
 * 
 * 
 * 1 is typically treated as an ugly number.
 * n does not exceed 1690.
 * 
 */
let uglySequence = [1]
let i2 = i3 = i5 = 0
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    while (uglySequence.length < n) {
        let max = uglySequence[uglySequence.length-1]
        let n2 = uglySequence[i2]*2
        let n3 = uglySequence[i3]*3
        let n5 = uglySequence[i5]*5
        while (n2 <= max) { n2 = uglySequence[++i2] * 2 }
        while (n3 <= max) { n3 = uglySequence[++i3] * 3 }
        while (n5 <= max) { n5 = uglySequence[++i5] * 5 }
        uglySequence.push(Math.min(n2,n3,n5))
    }
    return uglySequence[n-1]
};

