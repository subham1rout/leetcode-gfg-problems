/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let temp = head;
    let map = new Map();
    while (temp) {
        if (map.has(temp)) {
            return temp;
        }
        map.set(temp, 1);
        temp = temp.next;
    }
    return null;
};