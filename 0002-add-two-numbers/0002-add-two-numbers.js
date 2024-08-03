/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var reverse=function(str){
    str=str.split('');
    let i=0;
    let j=str.length-1;
    while(i<j){
        let temp=str[i];
        str[i]=str[j];
        str[j]=temp;
        i++;
        j--;
    }
    str=str.join('');
    return str;
}
var addTwoNumbers = function (l1, l2) {
    let temp1=l1;
    let temp2=l2;
    let str1='';
    let str2='';
    while(temp1){
        str1+=temp1.val;
        temp1=temp1.next;
    }
    while(temp2){
        str2+=temp2.val;
        temp2=temp2.next;
    }
    console.log(str1,str2);
    str1=reverse(str1);
    str2=reverse(str2);
    console.log(str1,str2)
    let sum=BigInt(str1)+BigInt(str2);
    console.log(str1,str2,sum)
    let newhead=new ListNode(sum%10n);
    let temp=newhead;
    let div=BigInt(sum/10n);
    while(div!=0){
        let newnode=new ListNode(div%10n);
        div=div/10n;
        temp.next=newnode;
        temp=temp.next;
    }
    return newhead;
};