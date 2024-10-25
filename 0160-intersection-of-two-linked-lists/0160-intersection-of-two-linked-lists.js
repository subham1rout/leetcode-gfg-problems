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

var getPoint=function(h1,h2,d){
    while(d){
        h2=h2.next;
        d--;
    }
    while(h1!=h2){
        h1=h1.next;
        h2=h2.next;
    }
    return h1;
}
var getIntersectionNode = function(headA, headB) {
    let temp1=headA;
    let temp2=headB;
    let len1=0;
    let len2=0;
    while(temp1){
        len1++;
        temp1=temp1.next;
    }
    while(temp2){
        len2++;
        temp2=temp2.next;
    }
    if(len1<len2) return getPoint(headA,headB,len2-len1);
    else return getPoint(headB,headA,len1-len2);
};