// 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。

// 二叉搜索树的定义如下：

// 任意节点的左子树中的键值都 小于 此节点的键值。
// 任意节点的右子树中的键值都 大于 此节点的键值。
// 任意节点的左子树和右子树都是二叉搜索树。
//  

// 示例 1：



// 输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
// 输出：20
// 解释：键值为 3 的子树是和最大的二叉搜索树。
// 示例 2：



// 输入：root = [4,3,null,1,2]
// 输出：2
// 解释：键值为 2 的单节点子树是和最大的二叉搜索树。
// 示例 3：

// 输入：root = [-4,-2,-5]
// 输出：0
// 解释：所有节点键值都为负数，和最大的二叉搜索树为空。
// 示例 4：

// 输入：root = [2,1,3]
// 输出：6
// 示例 5：

// 输入：root = [5,4,8,3,null,6,3]
// 输出：7
//  

// 提示：

// 每棵树最多有 40000 个节点。
// 每个节点的键值在 [-4 * 10^4 , 4 * 10^4] 之间。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
    
};