/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let temp=head;
    let map=new Map();
    while(temp){
        if(map.has(temp)){
            return true;
        }
        map.set(temp,1);
        temp=temp.next;
    }
    return false;
};