/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 
var getLastN=function(head,k,len){
    let val=len-k;
    let temp=head;
    let count=1;
    while(temp){
        if(count==val){
            return temp;
        }
        temp=temp.next;
        count++;
    }
    return temp;
}

var rotateRight = function(head, k) {
    if(head==null) return head;
    let len=1;
    let tail=head;
    while(tail.next){
        len++;
        tail=tail.next;
    }
    if(k%len==0) return head;
    k=k%len;
    tail.next=head;
    let last=getLastN(head,k,len);
    head=last.next;
    last.next=null;
    return head;
};