// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * @param {*} root 
 * 
 * 思路一：题目没看清
 * 以为输入的是用数组存储的树
 * 所以使用数组的长度来判断
 * 
 * 但其实这个方法想想其实存在一点小问题，好吧其实不存在问题，想多了，前面是我瞎说的
 *            /\
 *           /\/\
 *          /\/\/\
 *         /\/\/\/\
 *        /\/\/\/\/\
 *       /\/\/\/\/\/\
 *      /\/\/\/\/\/\/\
 *     /\/\/\/\/\/\/\/\
 *    /\/\/\/\/\/\/\/\/\
 *   /\/\/\/\/\/\/\/\/\/\
 *  /\/\/\/\/\/\/\/\/\/\/\
 * /\/\/\/\/\/\/\/\/\/\/\/\
 * 
 * 
 *            /\
 *           /\/\
 *          /\/\/\
 *         /\/\/\/\
 *        /\/\/\/\/\
 *           /\/\/\/\
 *              /\/\/\
 *               /\/\/\
 *                /\/\/\
 *                 /\/\/\
 *                  /\/\/\
 *                   /\/\/\
 * 
 * 
 */
// var maxDepth = function(root) {
//   if (root == null ){
//     return 0;
//   }
//   let lengths = root.lengths;
//   if (lengths === 1){
//     return 1;
//   }
//   let depth = 2;
//   let ratio = 2;
//   while(ratio * 2 < lengths){
//     depth = depth + 1;
//     ratio = ratio * 2;
//   }
  
//   return depth;
// };

/**
 * 这是树的结构
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//       从其他地方借来的树
//                   a
//                 /   \  
//                b     c
//               / \     \
//              d   e     f

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
 * 
 * @param {*} root 
 * 
 * 思路一：深度遍历
 * 用一个
 */
// var maxDepth = function(root) {
//   if(root == null){
//     return 0;
//   }
//   var max_depth = 1
//   var now_depth = 1
//   var depthTree = function(root){
//     if(now_depth > max_depth){
//       max_depth = now_depth;
//     }
//     // console.log(root.val)
//     if(root.left !== null ){
//       now_depth++;
//       depthTree(root.left)
//     }
//     if(root.right !== null){
//       now_depth++;
//       depthTree(root.right)
//     }
//     now_depth--;
//   }
//   depthTree(root)
//   return max_depth;
// }

// var maxDepth = function(root) {
//   if(root == null){
//     return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

/**
 * 
 * @param {*} root 
 * 
 * 思路二：
 * 广度遍历
 * 使用两个循环
 * 内循环为当前层循环
 * 外循环为进入下一层，此时可以使depth+1
 */
// 广度遍历方法
// var queue = []
// var head = 0
// var end = 0
// var depth = 0
// var maxDepth = function(root) {
//   queue[end] = root;
//   end++;
//   depth = 0
//   while(head !== end){
//     root = queue[head];
//     console.log(root.val)
//     head++;
//     if(root.left != null){
//       queue[end] = root.left;
//       end++;
//     }
//     if(root.right != null){
//       queue[end] = root.right;
//       end++;
//     }
//   }
// }
// 

var maxDepth = function(root) {
  let queue = [];
  let head = 0;
  let end = 0;
  let layer = 0;
  let depth = 0;
  if(root == null){
    return 0;
  }
  queue[end] = root;
  end++;
  while(head !== end){
    layer = end - head;
    while(layer > 0){
      root = queue[head];
      head++;
      if(root.left != null){
        queue[end] = root.left;
        end++;
      }
      if(root.right != null){
        queue[end] = root.right;
        end++;
      }
      layer--;
    }
    depth++;
  }
  return depth;
}

console.log(maxDepth(a))