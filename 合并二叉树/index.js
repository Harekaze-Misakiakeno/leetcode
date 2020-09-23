// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

// 示例 1:

// 输入: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// 输出: 
// 合并后的树:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
// 注意: 合并必须从两个树的根节点开始。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-binary-trees
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//       从其他地方借来的树
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

//       从其他地方借来的树
//                   Y1
//                 /    \  
//                O2     S3
//               / \     / \
//              H4  I5  N6  A7

var Y = { val: 1, right: null, left: null };
var O = { val: 2, right: null, left: null };
var S = { val: 3, right: null, left: null };
var H = { val: 4, right: null, left: null };
var I = { val: 5, right: null, left: null };
var N = { val: 6, right: null, left: null };
var A = { val: 7, right: null, left: null };
Y.left = O;
Y.right = S;
O.left = H;
O.right = I;
S.left = N;
S.right = A;


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if(!t1 && !t2){
    return t1;
  }
  if(!t1){
    return t2;
  }
  if(!t2){
    return t1;
  }
  let root = new TreeNode(0);
  var mergeTree = function(root, root1, root2) {
    if(!root1 && !root2){
      return null;
    }
    if(!root1){
      root1 = new TreeNode(0)
    }
    if(!root2){
      root2 = new TreeNode(0)
    }
    root = new TreeNode(0)
    let tv1 = root1.val || 0;
    let tv2 = root2.val || 0;
    root.val = tv1 + tv2;
    root.left = mergeTree(root.left, root1.left, root2.left)
    root.right = mergeTree(root.right, root1.right, root2.right)
    return root;
  }
  return mergeTree(root, t1, t2);
};


var printTree = function(root) {
  if(!root){
    return root
  }
  let queue = [];
  let start = 0, end = 1;
  queue[start] = root;
  while(start < end){
    let len = end - start;
    let str = ""
    while(len > 0){
      str = str + queue[start].val + " "
      if(queue[start].left){
        queue[end] = queue[start].left;
        end++;
      }
      if(queue[start].right){
        queue[end] = queue[start].right;
        end++;
      }
      start++;
      len--;
    }
    console.log(str)
  }
};

let tre = mergeTrees(a, Y)
printTree(tre)