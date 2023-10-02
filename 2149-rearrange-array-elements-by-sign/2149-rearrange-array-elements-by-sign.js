/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let parr=[];
    let narr=[];
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]<0) narr.push(nums[i]);
        else parr.push(nums[i]);
    }
    let ans=[];
    for(let i=0,j=0;i<parr.length&&j<narr.length;i++,j++){
        ans.push(parr[i]);
        ans.push(narr[j]);
    }
    return ans;
};