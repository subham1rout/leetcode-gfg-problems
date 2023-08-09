/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp=[];
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]!=0) temp.push(nums[i]);
    }
    for(let i=0;i<temp.length;i++){
        nums[i]=temp[i];
    }
    for(let i=temp.length;i<n;i++){
        nums[i]=0;
    }
};