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
var middleNode = function(head) {
    let temp = head;
    let count = 0;
    while (temp) {
        count++;
        temp = temp.next;
    }
    let middle = Math.floor(count / 2) + 1;
    temp = head;
    count = 0;
    while (temp) {
        count++;
        if (count == middle) {
            break;
        }
        temp = temp.next;
    }
    return temp;
};