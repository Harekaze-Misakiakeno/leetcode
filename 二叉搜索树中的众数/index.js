// 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

// 假定 BST 有如下定义：

// 结点左子树中所含结点的值小于等于当前结点的值
// 结点右子树中所含结点的值大于等于当前结点的值
// 左子树和右子树都是二叉搜索树
// 例如：
// 给定 BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2
// 返回[2].

// 提示：如果众数超过1个，不需考虑输出顺序

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-mode-in-binary-search-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//                   a1
//                 /   \  
//                b2    c3
//               / \     \
//              d4  e5    f6

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
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 思路：深度遍历
 * 
 */
var findMode = function(root) {
  let results = new Map();
  var modeTree = function(root){
    if(!root){
      return -1000;
    }else{
      let left = modeTree(root.left)
      results.set(left, (results.get(left) || 0) + 1);
      let right = modeTree(root.right)
      results.set(right, (results.get(right) || 0) + 1);
      return root.val;
    }
  }
  let res = modeTree(root);
  results.set(res, (results.get(res) || 0) + 1);
  results.delete(-1000)
  console.log(JSON.stringify(results))
  let max = 0;
  let keys = [];
  results.forEach((value, key) => {
    if(value > max){
      max = value
      keys = [key]
    }else if(value === max){
      keys.push(key)
    }
  })
  return keys;
};

console.log(findMode(a))