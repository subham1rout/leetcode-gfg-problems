/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head==undefined) return head;
    while(head.val==val){
        head=head.next;
        if(head==undefined) return head;
    }
    
    let temp=head;
    let prev=undefined;
    while(temp){
        if(temp.val==val){
            prev.next=temp.next;
        }else{
            prev=temp;
        }
        temp=temp.next;
    }
    return head;
};