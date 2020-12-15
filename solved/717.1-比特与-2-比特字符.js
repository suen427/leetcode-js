/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  var i = bits.length - 2;
  while (i >= 0 && bits[i] > 0) i--;
  return (bits.length - i) % 2 == 0;
};
// @lc code=end
// var isOneBitCharacter = function(bits) {
//   var isValid = function (bits) {
//     if (bits.length > 2) {
//       return (
//         (isValid(bits.slice(bits.length - 1)) && isValid(bits.slice(0, bits.length - 1)))
//         || (isValid(bits.slice(bits.length - 2)) && isValid(bits.slice(0, bits.length - 2)))
//       )
//     }
//     if (bits.length === 2) {
//       return !(bits[0] === 0 && bits[1] === 1)
//     }
//     if (bits.length === 1) {
//       return bits[0] === 0
//     }
//   }

//   return bits[bits.length - 1] === 0 && (bits.length === 1 || isValid(bits.slice(0, bits.length - 1)))
// };
