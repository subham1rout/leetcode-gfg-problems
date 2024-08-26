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
var oddEvenList = function(head) {
    if(head==null || head.next==null){
        return head;
    }
    let temp=head;
    let arr=[];
    while(temp && temp.next){
        arr.push(temp.val);
        temp=temp.next.next;
    }
    if(temp) arr.push(temp.val);
    temp=head.next;
    while(temp && temp.next){
        arr.push(temp.val);
        temp=temp.next.next;
    }
    if(temp) arr.push(temp.val);
    let i=0;
    temp=head;
    while(temp){
        temp.val=arr[i];
        i++;
        temp=temp.next;
    }
    return head;
};