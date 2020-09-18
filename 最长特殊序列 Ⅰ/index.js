// 给你两个字符串，请你从这两个字符串中找出最长的特殊序列。

// 「最长特殊序列」定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。

// 子序列 可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。

// 输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。

//  

// 示例 1：

// 输入: "aba", "cdc"
// 输出: 3
// 解释: 最长特殊序列可为 "aba" (或 "cdc")，两者均为自身的子序列且不是对方的子序列。
// 示例 2：

// 输入：a = "aaa", b = "bbb"
// 输出：3
// 示例 3：

// 输入：a = "aaa", b = "aaa"
// 输出：-1
//  

// 提示：

// 两个字符串长度均处于区间 [1 - 100] 。
// 字符串中的字符仅含有 'a'~'z' 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-uncommon-subsequence-i
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 * 
 * 思路：题目有点绕
 * 想不出来
 */
// var findLUSlength = function(a, b) {
//   return a.indexOf(b)
// };
// let a = "aaa", b = "bbb"
// console.log(findLUSlength(a, b))

// 字符串 aa 和 bb 共有 3 种情况：

// a=ba=b。如果两个字符串相同，则没有特殊子序列，返回 -1。

// length(a)=length(b)length(a)=length(b) 且 a \ne ba 
// 
// ​	
//  =b。例如：abcabc 和 abdabd。这种情况下，一个字符串一定不会是另外一个字符串的子序列，因此可以将任意一个字符串看作是特殊子序列，返回 length(a)length(a) 或 length(b)length(b)。

// length(a) \ne length(b)length(a) 
// 
// ​	
//  =length(b)。例如：abcdabcd 和 abcabc。这种情况下，长的字符串一定不会是短字符串的子序列，因此可以将长字符串看作是特殊子序列，返回 max(length(a),length(b))max(length(a),length(b))。

// 作者：LeetCode
// 链接：https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/solution/zui-chang-te-shu-xu-lie-i-by-leetcode/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * 
 * @param {String} a 
 * @param {String} b 
 * 
 * 网上思路：
 * 由于是最长特殊序列，所以如果不等长，长的那个就是最长特殊序列
 * 如果相同，则为0
 * 不同则就是该长度
 */
var findLUSlength = function(a, b) {
  if(a === b)
    return -1;
  return a.length>b.length?a.length:b.length;
};
// let a = "aaa", b = "bbbb"
let a = "swoegxvzsfetrdtnoucawucug"
let b = "gaqrzczpmtsxlwxdacitrcgklziiya"
console.log(findLUSlength(a, b))