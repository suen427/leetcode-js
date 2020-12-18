/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

 /**
  * 
  * 思路
  * 奖所有单词顺序反转
  * 根据转后的单词顺序生成字典树
  * 遍历树将所有树的深度相加
  */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  var root = {
    level: 1,
    children: {}
  }

  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    var node = root
    for (var j = word.length - 1; j > -1; j--) {
      var char = word[j]
      if (node.children[char]) {
        node = node.children[char]
      } else {
        node.children[char] = node = {
          level: node.level + 1,
          children: {}
        }
      }
    }
  }
  
  var stack = [root]
  var res = 0
  while(stack.length > 0) {
    var node = stack.shift()
    var isLeaf = true
    for (var k in node.children) {
      stack.push(node.children[k])
      isLeaf = false
    }
    if (isLeaf) {
      res += node.level
    }
  }

  return res
};
// @lc code=end
// console.log(minimumLengthEncoding(["time", "me", "bell"]), 10)
// console.log(minimumLengthEncoding(["this", "article", "is", "based", "on", "free", "code", "camp", "basic", "a", "a", "string", "is", "one", "of", "the", "most", "asked", "in", "the", "round", "of", "may", "ask", "you", "to", "write", "ways", "to", "reverse", "a", "or", "they", "may", "ask", "you", "to", "reverse", "a", "string", "without", "using", "or", "they", "may", "even", "ask", "you", "to", "reverse", "a", "string", "using", "there", "are", "tens", "of", "ways", "to", "do", "the", "reverse", "as", "does", "not", "have", "below", "are", "my", "three", "most", "ways", "to", "solve", "the", "problem", "of", "a", "string", "in", "reverse", "the", "you", "may", "need", "to", "turn", "the", "string", "into", "an", "array", "before", "you", "can", "reverse", "your", "result", "must", "be", "a", "return", "test", "cases", "should", "become", "should", "become", "from", "should", "morf", "reverse", "a", "string", "with", "for", "this", "we", "will", "use", "three", "the", "the", "method", "and", "the", "the", "method", "splits", "a", "string", "object", "into", "an", "array", "of", "string", "by", "the", "string", "into", "sub", "the", "method", "an", "array", "in", "the", "first", "array", "element", "becomes", "the", "last", "and", "the", "last", "becomes", "the", "the", "method", "joins", "all", "of", "an", "array", "into", "a", "step", "use", "the", "method", "to", "return", "a", "new", "array", "var", "var", "step", "use", "the", "method", "to", "reverse", "the", "new", "created", "array", "var", "var", "step", "use", "the", "method", "to", "join", "all", "of", "the", "array", "into", "a", "string", "var", "var", "return", "the", "string", "return", "the", "three", "methods", "return", "reverse", "a", "string", "with", "a", "for", "loop", "step", "create", "an", "empty", "string", "that", "will", "host", "the", "new", "created", "string", "var", "step", "create", "the", "for", "loop", "the", "point", "of", "the", "loop", "will", "be", "which", "to", "the", "last", "of", "the", "as", "long", "as", "i", "is", "greater", "than", "or", "equals", "the", "loop", "will", "go", "on", "we", "i", "after", "each", "for", "i", "i", "or", "here", "length", "equals", "5", "for", "each", "i", "1", "and", "first", "i", "5", "1", "second", "i", "4", "1", "third", "i", "3", "1", "fourth", "i", "2", "1", "fifth", "i", "1", "1", "end", "of", "the", "for", "step", "return", "the", "string", "return", "without", "var", "for", "i", "i", "return", "reverse", "a", "string", "with", "for", "this", "we", "will", "use", "two", "the", "method", "and", "the", "the", "method", "returns", "the", "in", "a", "string", "at", "the", "through", "the", "number", "of", "the", "method", "returns", "the", "from", "a", "the", "depth", "of", "the", "is", "equal", "to", "the", "length", "of", "the", "this", "is", "not", "the", "best", "one", "and", "will", "be", "really", "slow", "if", "the", "string", "is", "very", "long", "and", "the", "stack", "size", "is", "of", "major", "if", "this", "is", "the", "case", "that", "will", "end", "the", "return", "else", "return", "first", "part", "of", "the", "method", "you", "need", "to", "that", "you", "have", "just", "one", "have", "several", "nested", "calls", "each", "str", "1st", "call", "will", "return", "2nd", "call", "will", "return", "3rd", "call", "will", "return", "4th", "call", "will", "return", "5th", "call", "will", "return", "second", "part", "of", "the", "method", "the", "method", "hits", "the", "if", "and", "the", "most", "highly", "nested", "call", "returns", "5th", "call", "will", "return", "4th", "call", "will", "return", "3rd", "call", "will", "return", "2nd", "call", "will", "return", "1st", "call", "will", "return", "without", "if", "return", "else", "return", "return", "a", "string", "in", "is", "a", "small", "and", "simple", "that", "can", "be", "asked", "on", "a", "phone", "or", "a", "you", "could", "take", "the", "short", "route", "in", "solving", "this", "or", "take", "the", "by", "solving", "it", "with", "or", "even", "more", "complex", "i", "hope", "you", "found", "this", "this", "is", "part", "of", "my", "to", "solve", "fcc", "series", "of", "on", "the", "free", "code", "camp", "where", "i", "propose", "several", "and", "explain", "what", "happens", "under", "the", "three", "ways", "to", "repeat", "a", "string", "in", "in", "this", "explain", "how", "to", "solve", "a", "string", "repeat", "a", "this", "two", "ways", "to", "confirm", "the", "ending", "of", "a", "string", "in", "in", "this", "explain", "how", "to", "solve", "the", "three", "ways", "to", "a", "number", "in", "this", "article", "is", "based", "on", "free", "code", "camp", "basic", "a", "two", "ways", "to", "check", "for", "in", "this", "article", "is", "based", "on", "free", "code", "camp", "basic", "for", "three", "ways", "to", "find", "the", "longest", "word", "in", "a", "string", "in", "this", "article", "is", "based", "on", "free", "code", "camp", "basic", "the", "longest", "word", "in", "a", "three", "ways", "to", "title", "case", "a", "in", "this", "article", "is", "based", "on", "free", "code", "camp", "basic", "case", "a", "if", "you", "have", "your", "own", "or", "any", "share", "them", "below", "in", "the", "or", "you", "can", "follow", "me", "on", "github", "and", "right", "after", "you", "click", "the", "green", "heart", "below", "method", "mdn", "method", "mdn", "method", "mdn", "mdn", "method", "mdn", "method", "mdn", "sonya", "moisset", "lead", "tech", "owasp", "member", "tech", "if", "you", "read", "this", "tweet", "to", "the", "author", "to", "show", "them", "you", "tweet", "a", "thanks", "learn", "to", "code", "for", "open", "source", "has", "helped", "more", "than", "people", "get", "jobs", "as", "get", "started"]), 1048)
