/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let parr=[];
    let narr=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0) narr.push(nums[i]);
        else parr.push(nums[i]);
    }
    let i=0;
    let j=0;
    while(i<parr.length&&j<narr.length){
        nums[2*i]=parr[i];
        nums[2*i+1]=narr[j];
        i++;
        j++;
    }
    return nums;
};