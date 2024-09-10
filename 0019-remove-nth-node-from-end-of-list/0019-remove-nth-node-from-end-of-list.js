/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp = head;
    let count = 0;
    while (temp) {
        count++;
        temp = temp.next;
    }
    if (count == n) {
        return head.next;
    }
    temp = head;
    let res = count - n;
    while (temp) {
        res--;
        if (res == 0) break;
        temp = temp.next;
    }
    temp.next = temp.next.next;
    return head;
};