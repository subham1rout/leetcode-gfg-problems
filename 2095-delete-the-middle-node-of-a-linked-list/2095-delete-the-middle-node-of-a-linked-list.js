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
var deleteMiddle = function(head) {
    let count=0;
    let temp=head;
    while(temp){
        count++;
        temp=temp.next;
    }
    if(count==1) return null;
    let res=Math.floor(count/2);
    temp=head;
    while(res!=1){
        res--;
        temp=temp?.next;
    }
    temp.next=temp.next.next;
    return head;
};