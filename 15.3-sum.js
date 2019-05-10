/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let memory = {}
    let valueCounter = {}
    nums = nums.filter(v => {
        if (!valueCounter[v] || valueCounter[v] < 3) {
            valueCounter[v] = (valueCounter[v] || 0) + 1
            return true
        } else {
            return false
        }
    })
    nums.sort((a,b) => a-b)
    for(let i = 0; i < nums.length-2; i++) {
        let a = nums[i]
        if(a > 0) break
        for (let j = i+1; j < nums.length; j++) {
            let b = nums[j]
            let c = -a - b
            if (c < 0) break
            if (valueCounter[c]) {
                if (c>b) {
                    memory['' + a + b + c] = [a, b, c]
                } else if (nums.lastIndexOf(c) > j) {
                    memory['' + a + b + c] = [a, b, c]
                }
            }
        }
    }
    return Object.values(memory)
};

