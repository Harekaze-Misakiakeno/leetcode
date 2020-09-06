// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var a = { val: 'a', right: null, left: null };
var b = { val: 'b', right: null, left: null };
var c = { val: 'c', right: null, left: null };
var d = { val: 'd', right: null, left: null };
var e = { val: 'e', right: null, left: null };
var f = { val: 'f', right: null, left: null };
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root){
    return [];
  }
  let queue = [];
  let head = 0;
  let end = 0;
  queue[end] = root;
  end++;
  let layer = 0;
  let results = [];
  while(head < end){
    layer = end - head;
    let result = [];
    while(layer > 0){
      let root = queue[head];
      result.push(queue[head].val);
      head++;
      if(!(!root.left && typeof(root.left) !== "undefined" && root.left !== 0)){
        queue[end] = root.left;
        end++;
      }
      if(!(!root.right && typeof(root.right) !== "undefined" && root.right !== 0)){
        queue[end] = root.right;
        end++;
      }
      layer--;
    }
    // console.log(result)
    results.unshift(result);
  }
  return results
};
// console.log(a.left.left.left)
console.log(levelOrderBottom(a))