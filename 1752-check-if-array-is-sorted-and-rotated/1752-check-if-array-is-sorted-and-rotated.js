/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let length=nums.length;
    let count=0;
    if(nums[length-1]>nums[0]) count++;
    for(let i=1;i<length;i++){
        if(nums[i]<nums[i-1] ){
            count++;
        }
        if(count>1) return false;
    }
    return true;
};
