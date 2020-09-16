// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// 备注:
// 这个问题是受到 Max Howell 的 原问题 启发的 ：

// 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/invert-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 * 思路一：广度优先遍历
 * 结果：没做完，还是深度简单，广度的话要重组
 */
// var invertTree = function(root) {
//   if(!root && typeof(root) !== "undefined" && root !== 0){
//     return root;
//   }
//   let queue = [];
//   let start = 0, end = 1;
//   queue[start] = root;
//   while(start < end){
//     let len = end - start;
//     while(len > 0){
//       if(!(queue[start].left && typeof(queue[start].left) !== "undefined" && queue[start].left !== 0)){
//         queue[end] = queue[start].left;
//         end++;
//       }
//       if(!(queue[start].right && typeof(queue[start].right) !== "undefined" && queue[start].right !== 0)){
//         queue[end] = queue[start].right;
//         end++;
//       }
//       len --;
//       let temp = queue[start].left;
//       queue[start].left = queue[start].right;
//       queue[start].right = temp;
//       start++;
//     }
//   }
//   return root;
// };

// console.log(invertTree(a).right.right.val)



/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 * 思路二：深度
 * 结果：通过
 * 查看答案 不用那么复杂
 */
// var invertTree = function(root) {
//   if(!root && typeof(root) !== "undefined" && root !== 0)
//   {
//     return root;
//   }
//   let temp_left = null;
//   let temp_right = null;
//   if(!(!root.left && typeof(root.left) !== "undefined" && root.left !== 0))
//   {
//     temp_left = invertTree(root.left)
//   }
//   if(!(!root.right && typeof(root.right) !== "undefined" && root.right !== 0))
//   {
//     temp_right = invertTree(root.right)
//   }
//   root.right = temp_left;
//   root.left = temp_right;
//   return root;
// };

var invertTree = function(root) {
  if(!root && typeof(root) !== "undefined" && root !== 0)
  {
    return root;
  }
  let temp_left = invertTree(root.left)
  let temp_right = invertTree(root.right)
  root.right = temp_left;
  root.left = temp_right;
  return root;
};



var printTree = function(root) {
  if(!(!root && typeof(root) !== "undefined" && root !== 0))
  {
    console.log(root.val)
  }
  if(!(!root.left && typeof(root.left) !== "undefined" && root.left !== 0))
  {
    printTree(root.left)
  }
  if(!(!root.right && typeof(root.right) !== "undefined" && root.right !== 0))
  {
    printTree(root.right)
  }
};

printTree(invertTree(a))