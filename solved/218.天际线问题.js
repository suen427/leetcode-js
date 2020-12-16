/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  var res = []
  var currentBuildings = []
  var previousLeft = 0
  var previousHeight = 0
  var left = 0
  while (buildings.length > 0 || currentBuildings.length > 0) {
    left = buildings.length > 0 ? buildings[0][0] : currentBuildings[0][1]
    for (var i = 0; i < currentBuildings.length; i++) {
      left = currentBuildings[i][1] < left ? currentBuildings[i][1] : left
    }

    if (buildings.length > 0 && left === buildings[0][0]) {
      currentBuildings.push(buildings.shift())
    }

    var height = 0
    currentBuildings = currentBuildings.filter(function(b) {
      if (b[1] > left) {
        height = height < b[2] ? b[2] : height
        return true
      }
      return false
    })

    if (previousHeight !== height) {
      if (previousLeft === left) {
        res.pop()
      }

      if (res.length == 0 || res[res.length - 1][1] !== height) {
        res.push([left, height])
      }
      previousHeight = height
      previousLeft = left
    }
  }

  return res
};
// @lc code=end
console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2], [2, 3, 3]]))
