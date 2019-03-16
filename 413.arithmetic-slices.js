/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 *
 * https://leetcode.com/problems/arithmetic-slices/description/
 *
 * algorithms
 * Medium (55.34%)
 * Total Accepted:    58.3K
 * Total Submissions: 105.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * A sequence of number is called arithmetic if it consists of at least three
 * elements and if the difference between any two consecutive elements is the
 * same.
 * 
 * For example, these are arithmetic sequence:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 * 
 * The following sequence is not arithmetic. 1, 1, 2, 5, 7 
 * 
 * 
 * A zero-indexed array A consisting of N numbers is given. A slice of that
 * array is any pair of integers (P, Q) such that 0 
 * 
 * A slice (P, Q) of array A is called arithmetic if the sequence:
 * ⁠   A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this
 * means that P + 1 < Q.
 * 
 * The function should return the number of arithmetic slices in the array
 * A. 
 * 
 * 
 * Example:
 * 
 * A = [1, 2, 3, 4]
 * 
 * return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3,
 * 4] itself.
 * 
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    if(A.length<3) {
        return 0
    }

    let maxSubArithmeticLens = []

    let start = 0;
    let preDiff = A[1] - A[0]
    let currentDiff
    for (let i = 2; i < A.length; i++) {
        currentDiff = A[i] - A[i-1]
        if (preDiff === currentDiff) {
            continue
        }

        maxSubArithmeticLens.push(i - start)
        start = i - 1
        preDiff = currentDiff
    }
    if (start !== A.length - 1) {
        maxSubArithmeticLens.push(A.length - start)
    }

    return maxSubArithmeticLens
        .filter(val => val > 2)
        .reduce((sum, val) => {
            return sum + (val-2)*(val-1)/2
        }, 0)
};

