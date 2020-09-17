// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

//  

// 示例：

// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2
//  

// 提示：你可以假定该字符串只包含小写字母。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {number}
 * 
 * 思路一：遍历统计
 * 
 * 结果：可行
 * 但js有更方便的方法
 */
// var firstUniqChar = function(s) {
//   let know_map = new Map();
//   for(let i = 0; i < s.length; i++){
//     if(know_map.has(s[i])){
//       know_map.set(s[i], know_map.get(s[i]) + 1);
//     }else{
//       know_map.set(s[i], 1);
//     }
//   }
//   for(let x of know_map){
//     if(x[1] === 1){
//       for(let i = 0; i < s.length; i++){
//         if(x[0] === s[i]){
//           return i;
//         }
//       }
//     }
//   }
//   return -1;
// };

// console.log(firstUniqChar("loveleetcode"))

// console.log(null || 0)

// 可以使用 || 来进行优化 
// 但速度没有之前的快
var firstUniqChar = function(s) {
  let know_map = new Map();
  for(let i = 0; i < s.length; i++){
    const k = know_map.get(s[i]) || 0;
    know_map.set(s[i], k + 1);
  }
  for(let i = 0; i < s.length; i++){
    if(know_map.get(s[i]) === 1){
      return i;
    }
  }
  return -1;
};



/**
 * 
 * @param {String} s 
 * 
 * 思路二：使用Indexof 与 Lastindexof
 */
// var firstUniqChar = function(s) {
//   for(let i = 0; i < s.length; i++){
//     if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(firstUniqChar("loveleetcode"))

