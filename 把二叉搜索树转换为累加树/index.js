// 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

//  

// 例如：

// 输入: 原始二叉搜索树:
//               5
//             /   \
//            2     13

// 输出: 转换为累加树:
//              18
//             /   \
//           20     13
//  

// 注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/convert-bst-to-greater-tree
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 思路：广度遍历
 */
var convertBST = function(root) {
  if(!root){
    return root
  }
  let queue = [];
  let start = 0, end = 1;
  queue[start] = root;
  while(start < end){
    let len = end - start;
    while(len > 0){
      //  && queue[end].val
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
  }
  let result = []
  for(let i = 0; i < queue.length; i++){
    result[i] = queue[i].val
    for(let j = 0; j < queue.length; j++){
      if(queue[j].val > queue[i].val){
        result[i] += queue[j].val
      }
    }
  }
  for(let i = 0; i < queue.length; i++){
    queue[i].val = result[i]
  }
  return root;
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

let r = convertBST(a)
printTree(r)