// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

//  

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
//  

// 限制：

// 0 <= 节点个数 <= 5000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof
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
 * 
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode} 
 * 思路一：就这样
 */
var reverseList = function(head) {
  if((!head && typeof(head) !== "undefined" && head !== 0)){
    return head
  }
  let result_node = new ListNode(head.val);
  while(!(!head.next && typeof(head.next) !== "undefined" && head.next !== 0)){
    let node = new ListNode(head.next.val);
    node.next = result_node;
    result_node = node;
    head = head.next;
  }
  return result_node;
};

console.log(reverseList(a).val)