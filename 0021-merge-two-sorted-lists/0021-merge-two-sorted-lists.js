/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var arrTOLL=(arr)=>{
    let head=new ListNode(arr[0]);
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let newhead=new ListNode(arr[i]);
        temp.next=newhead;
        temp=temp.next;
    }
    return head;
}
var mergeTwoLists = function(list1, list2) {
    let arr = [];
    let temp = list1;
    while (temp) {
        arr.push(temp.val);
        temp = temp.next;
    }
    temp = list2;
    while (temp) {
        arr.push(temp.val);
        temp = temp.next;
    }
    if(arr.length==0) return null;
    arr = arr.sort((a, b) => a - b);
    return arrTOLL(arr);
};