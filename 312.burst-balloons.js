/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 *
 * https://leetcode.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (46.41%)
 * Total Accepted:    58K
 * Total Submissions: 125K
 * Testcase Example:  '[3,1,5,8]'
 *
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a
 * number on it represented by array nums. You are asked to burst all the
 * balloons. If the you burst balloon i you will get nums[left] * nums[i] *
 * nums[right] coins. Here left and right are adjacent indices of i. After the
 * burst, the left and right then becomes adjacent.
 * 
 * Find the maximum coins you can collect by bursting the balloons wisely.
 * 
 * Note:
 * 
 * 
 * You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can
 * not burst them.
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * 
 * 
 * Example:
 * 
 * 
 * Input: [3,1,5,8]
 * Output: 167 
 * Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  -->
 * []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums.push(1)
    nums.unshift(1)
    let dp = new Array(nums.length).fill(0).map(() => new Array(nums.length))
    
    function maxCoinsDP(nums, begin, end, dp) {
        if(begin > end) {
            return 0
        }
        if (dp[begin][end] != undefined) {
            return dp[begin][end]
        }

        let max = nums[begin]
        for (let i = begin; i <= end; i++) { // https://leetcode.com/problems/burst-balloons/discuss/76229/For-anyone-that-is-still-confused-after-reading-all-kinds-of-explanations
            max = Math.max(max, maxCoinsDP(nums, begin, i - 1, dp) + nums[begin - 1] * nums[i] * nums[end+1] + maxCoinsDP(nums, i + 1, end, dp))
        }
        dp[begin][end] = max
        return max
    }

    return maxCoinsDP(nums, 1, nums.length - 2, dp)
}
   
