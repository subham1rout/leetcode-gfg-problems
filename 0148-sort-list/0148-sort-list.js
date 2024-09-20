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

function getMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge(lefthead, righthead) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;
    while (lefthead && righthead) {
        if (lefthead.val <= righthead.val) {
            temp.next = lefthead;
            lefthead = lefthead.next;
        } else {
            temp.next = righthead;
            righthead = righthead.next;
        }
        temp = temp.next;
    }
    if (lefthead) temp.next = lefthead;
    else temp.next = righthead;
    return dummyNode.next;
}
    
var sortList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let middle = getMiddle(head);
    let lefthead = head;
    let righthead = middle.next;
    middle.next = null;
    lefthead = sortList(lefthead);
    righthead = sortList(righthead);
    return merge(lefthead, righthead);
};