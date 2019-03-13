/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 *
 * https://leetcode.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (27.51%)
 * Total Accepted:    99K
 * Total Submissions: 359.3K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]'
 *
 * Given a 2D board and a list of words from the dictionary, find all words in
 * the board.
 * 
 * Each word must be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once in a word.
 * 
 * Example:
 * 
 * 
 * Input: 
 * words = ["oath","pea","eat","rain"] and board =
 * [
 * ⁠ ['o','a','a','n'],
 * ⁠ ['e','t','a','e'],
 * ⁠ ['i','h','k','r'],
 * ⁠ ['i','f','l','v']
 * ]
 * 
 * Output: ["eat","oath"]
 * 
 * 
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let res = []
    board.forEach(row => {
        flaten = flaten.concat(row)
    })
    words.forEach(word => {
        let visited = {}
        for(let c of word) {
            if (findIndexOf(c, board, visited))
        }
    })
};

function findIndexOf(char, board, visited) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; i < board[0].length; j++) {
            if (board[i][j] === char && !visited[''+i+j]) {
                visited['' + i + j] = true
                return ture
            }
        }
    }
    return false
}

