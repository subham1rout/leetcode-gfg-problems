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

class Stack{
    constructor(){
        this.items=[];
    }
    push(data){
        this.items.push(data);
    }
    pop(){
        let item=this.items.pop();
        return item;
    }
}
var reverseList = function(head) {
    let temp=head;
    let newstack=new Stack();
    while(temp){
        newstack.push(temp.val);
        temp=temp.next;
    }
    temp=head;
    while(temp){
        temp.val=newstack.pop();
        temp=temp.next;
    }
    return head;
};