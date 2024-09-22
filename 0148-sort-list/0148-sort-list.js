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
var getMiddle=(head)=>{
    if(head==null || head.next==null) return head;
    let slow=head;
    let fast=slow.next;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}

var merge=(lefth,righth)=>{
    let dummyN=new ListNode(-1);
    let temp=dummyN;
    while(lefth && righth){
        if(lefth.val<=righth.val){
            temp.next=lefth;
            temp=lefth;
            lefth=lefth.next;
        }else{
            temp.next=righth;
            temp=righth;
            righth=righth.next;
        }
    }
    if(lefth) temp.next=lefth;
    else temp.next=righth;
    return dummyN.next;
} 

var sortList = function(head) {
    if(head==null || head.next==null){
        return head;
    }
    let middle=getMiddle(head);
    let lefthead=head;
    let righthead=middle.next;
    middle.next=null;
    lefthead=sortList(lefthead);
    righthead=sortList(righthead);
    return merge(lefthead,righthead);
};