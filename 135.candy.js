/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 *
 * https://leetcode.com/problems/candy/description/
 *
 * algorithms
 * Hard (27.68%)
 * Total Accepted:    97K
 * Total Submissions: 349.6K
 * Testcase Example:  '[1,0,2]'
 *
 * There are N children standing in a line. Each child is assigned a rating
 * value.
 * 
 * You are giving candies to these children subjected to the following
 * requirements:
 * 
 * 
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * 
 * 
 * What is the minimum candies you must give?
 * 
 * Example 1:
 * 
 * 
 * Input: [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2,
 * 1, 2 candies respectively.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1,
 * 2, 1 candies respectively.
 * ⁠            The third child gets 1 candy because it satisfies the above two
 * conditions.
 * 
 * 
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies = new Array(ratings.length)

    let minimums = []
    let hasMin = false
    for (let index = 0; index < ratings.length; index++) {
        let preRatting
        let nextRatting
        let currentRatting = ratings[index]
        if (index === 0) {
            preRatting = Infinity
        } else {
            preRatting = ratings[index - 1]
        }
        if (index === ratings.length - 1) {
            nextRatting = Infinity
        } else {
            nextRatting = ratings[index + 1]
        }
        
        if (currentRatting < preRatting && currentRatting < nextRatting) {
            minimums.push(index)
            hasMin = true
        } else if (currentRatting <= preRatting && currentRatting < nextRatting && hasMin === false) {
            minimums.push(index)
            hasMin = true
        }
        if (nextRatting > currentRatting ) {
            hasMin = false
        }
    }
    let maximums = []
    let hasMax = false
    for (let index = 0; index < ratings.length; index++) {
        let preRatting
        let nextRatting
        let currentRatting = ratings[index]
        if (index === 0) {
            preRatting = -Infinity
        } else {
            preRatting = ratings[index - 1]
        }
        if (index === ratings.length - 1) {
            nextRatting = -Infinity
        } else {
            nextRatting = ratings[index + 1]
        }
        
        if (currentRatting > preRatting && currentRatting > nextRatting) {
            maximums.push(index)
            hasMax = true
        } else if (currentRatting >= preRatting && currentRatting > nextRatting && hasMax === false) {
            maximums.push(index)
            hasMax = true
        }
        if (nextRatting > currentRatting ) {
            hasMax = false
        }
    }

    console.log(minimums)
    console.log(maximums)

    // for(index of minimums) {
    //     candies[index] = 1
    //     setNeighborsCandy(index, 1, ratings[index])
    // }
    // console.log(candies)
    // return candies.reduce((sum, val) => { return sum + val }, 0)

    let mixIndex = minimums.shift()
    let maxIndex = maximums.shift()
    if(maxIndex >= mixIndex && maxIndex > 0) {
        
    }
};


console.log(candy([1,2,2]))
console.log(candy([1,0,2]))
console.log(candy([1,1,2,3,2,2,5]))
console.log(candy([2,2,1,1,1]))
console.log(candy([0,0,1,1,1,0,0]))
