// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

// 注意：本题相对原题稍作改动

// 示例：

// 输入： 1->2->3->4->5 和 k = 2
// 输出： 4
// 说明：

// 给定的 k 保证是有效的。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var a = {val: 'a', next: null};
var b = {val: 'b', next: null};
var c = {val: 'c', next: null};
var d = {val: 'd', next: null};
var e = {val: 'e', next: null};
var f = {val: 'f', next: null};
var g = {val: 'g', next: null};
var h = {val: 'h', next: null};

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 * 
 * 思路：反转后，在数
 */
var kthToLast = function(head, k) {
  if(!head){
    return head;
  }
  let result = new ListNode(head.val);
  head = head.next;
  while(head){
    let temp = new ListNode(head.val);
    temp.next = result;
    result = temp;
    head = head.next;
  }
  while(k > 1){
    result = result.next
    k--
  }
  return result.val;
};

