/*
 * @lc app=leetcode id=464 lang=javascript
 *
 * [464] Can I Win
 *
 * https://leetcode.com/problems/can-i-win/description/
 *
 * algorithms
 * Medium (26.84%)
 * Total Accepted:    33.1K
 * Total Submissions: 123.1K
 * Testcase Example:  '10\n11'
 *
 * In the "100 game," two players take turns adding, to a running total, any
 * integer from 1..10. The player who first causes the running total to reach
 * or exceed 100 wins. 
 * 
 * What if we change the game so that players cannot re-use integers? 
 * 
 * For example, two players might take turns drawing from a common pool of
 * numbers of 1..15 without replacement until they reach a total >= 100.
 * 
 * Given an integer maxChoosableInteger and another integer desiredTotal,
 * determine if the first player to move can force a win, assuming both players
 * play optimally. 
 * 
 * You can always assume that maxChoosableInteger will not be larger than 20
 * and desiredTotal will not be larger than 300.
 * 
 * 
 * Example
 * 
 * Input:
 * maxChoosableInteger = 10
 * desiredTotal = 11
 * 
 * Output:
 * false
 * 
 * Explanation:
 * No matter which integer the first player choose, the first player will lose.
 * The first player can choose an integer from 1 up to 10.
 * If the first player choose 1, the second player can only choose integers
 * from 2 up to 10.
 * The second player will win by choosing 10 and get a total = 11, which is >=
 * desiredTotal.
 * Same with other integers chosen by the first player, the second player will
 * always win.
 * 
 * 
 */
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= maxChoosableInteger) {
        return true
    }
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) {
        return false
    }
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 === desiredTotal) {
        return maxChoosableInteger%2 !== 0
    }

    function canIWinDp(maxChoosableInteger, currentDesiredTotal, chosen, dp) {
        if (currentDesiredTotal <= 0) {
            return
        }

        let key = chosen.join('');
        if (dp[key] !== undefined) {
            return dp[key]
        }
        for (let i = 1; i <= maxChoosableInteger; i++) {
            if (chosen[i]) continue
            chosen[i] = 1
            if (!canIWinDp(maxChoosableInteger, currentDesiredTotal - i, chosen, dp)) {
                dp[key] = true
                chosen[i] = 0;
                return true 
            }
            chosen[i] = 0
        }
        dp[key] = false
        return false
    }

    let dp = {}
    let chosen = new Array(maxChoosableInteger + 1).fill(0)

    return canIWinDp(maxChoosableInteger, desiredTotal, chosen, dp)
};

