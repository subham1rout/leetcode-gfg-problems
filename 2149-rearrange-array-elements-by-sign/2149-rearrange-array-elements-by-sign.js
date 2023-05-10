/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let length=nums.length;
    let parr=[];
    let narr=[];
    for(let i=0;i<length;i++){
        if(nums[i]>=0){
            parr.push(nums[i]);
        }else{
            narr.push(nums[i]);
        }
    }
    for(let i=0;i<parr.length;i++){
        nums[2*i]=parr[i];
    }
    for(let i=0;i<narr.length;i++){
        nums[2*i+1]=narr[i];
    }
    return nums;
};