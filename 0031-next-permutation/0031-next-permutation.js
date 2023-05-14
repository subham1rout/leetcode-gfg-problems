/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse=(arr,start,end)=>{
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr;
}
var nextPermutation = function(nums) {
    let n=nums.length;
    let index=-1;
    for(let i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index=i;
            break;
        }
    }
    if(index==-1){
        return reverse(nums,0,n-1);
    }
    for(let i=n-1;i>index;i--){
        if(nums[i]>nums[index]){
            let temp=nums[i];
            nums[i]=nums[index];
            nums[index]=temp;
            break;
        }
    }
    return reverse(nums,index+1,n-1);
};