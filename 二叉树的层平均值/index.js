// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

//  

// 示例 1：

// 输入：
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 输出：[3, 14.5, 11]
// 解释：
// 第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
//  

// 提示：

// 节点值的范围在32位有符号整数范围内。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//       从其他地方借来的树
//                   a
//                 /   \  
//                b     c
//               / \     \
//              d   e     f

var a = { val: 1, right: null, left: null };
var b = { val: 2, right: null, left: null };
var c = { val: 3, right: null, left: null };
var d = { val: 4, right: null, left: null };
var e = { val: 5, right: null, left: null };
var f = { val: 6, right: null, left: null };
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if(!root && typeof(root) !== "undefined" && root !== 0){
    return [];
  }
  let result = [];
  let queue = [];
  let start = 0;
  let end = 1;
  queue[start] = root;
  while(start < end){
    let lenth = end - start;
    let division = lenth;
    let average = 0;
    while(lenth > 0){
      average += queue[start].val;
      if(!(!queue[start].left && typeof(queue[start].left) !== "undefined" && queue[start].left !== 0)){
        queue[end] = queue[start].left;
        end++;
      }
      if(!(!queue[start].right && typeof(queue[start].right) !== "undefined" && queue[start].right !== 0)){
        queue[end] = queue[start].right;
        end++;
      }
      start++;
      lenth--;
    }
    result.push(average/division);
  }
  return result;
};

console.log(averageOfLevels(a))