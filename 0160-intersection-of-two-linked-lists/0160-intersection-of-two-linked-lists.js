/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp1=headA;
    let temp2=headB;
    let map=new Map();
    while(temp1){
        map.set(temp1,1);
        temp1=temp1.next;
    }
    while(temp2){
        if(map.has(temp2)){
            return temp2;
        }
        temp2=temp2.next;
    }
    return null;
};