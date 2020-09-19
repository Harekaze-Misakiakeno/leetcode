// 计算给定二叉树的所有左叶子之和。

// 示例：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sum-of-left-leaves
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//       从其他地方借来的树
//                   a1
//                 /   \  
//                b2     c3
//               / \     \
//              d4   e5     f6

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
c.right = f;


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
 * 
 * 思路一：深度遍历
 */
// var sumOfLeftLeaves = function(root) {
//   if(!root){
//     return 0;
//   }
//   if(!root.left && !root.right){
//     return 0;
//   }
//   var left = function(root) {
//     if(!root){
//       return 0;
//     }
//     let l = left(root.left);
//     let r = right(root.right);
//     if(!root.left && !root.right){
//       return l + r + root.val
//     }else{
//       return l + r;
//     }
//   }
//   var right = function(root) {
//     if(!root){
//       return 0;
//     }
//     let l = left(root.left);
//     let r = right(root.right);
//     return l + r;
//   }
//   return left(root)
// };

// console.log(sumOfLeftLeaves(a))

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
 * 思路二：广度遍历
 */
var sumOfLeftLeaves = function(root) {
  let result = 0;
  if(!root || (!root.left && !root.right)){
    return result;
  }
  let start = 0, end = 1;
  let queue = [];
  queue[start] = root;
  while(start < end){
    let len = end - start;
    while(len > 0){
      root = queue[start];
      start++;
      if(root.left){
        if(!root.left.left && !root.left.right){
          result += root.left.val;
        }else{
          queue[end] = root.left;
          end++;
        }
      }
      if(root.right){
        queue[end] = root.right;
        end++;
      }
      len --;
    }
  }
  return result;
};

console.log(sumOfLeftLeaves(a))