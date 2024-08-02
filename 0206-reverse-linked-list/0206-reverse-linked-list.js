/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if(head==undefined || head.next==null){
        return head;
    }
    let newhead=reverseList(head.next);
    let temp=head.next;
    temp.next=head;
    head.next=null;
    return newhead;
};