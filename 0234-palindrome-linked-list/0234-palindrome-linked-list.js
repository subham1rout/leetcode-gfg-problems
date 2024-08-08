/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverse=function(head){
    let temp=head;
    let prev=undefined;
    while(temp){
        let front=temp.next;
        temp.next=prev;
        prev=temp;
        temp=front;
    }
    return prev;
}

var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast.next && fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let newhead=reverse(slow.next);
    let temp1=head;
    let temp2=newhead;
    while(temp2){
        if(temp1.val!==temp2.val) return false;
        temp1=temp1.next;
        temp2=temp2.next;
    }
    reverse(newhead);
    return true;
};