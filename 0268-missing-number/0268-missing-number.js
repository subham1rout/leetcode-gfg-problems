/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor1=0;
    let xor2=0;
    for(let i=0;i<nums.length;i++){
        xor1=xor1^i;
        xor2=xor2^nums[i];
    }
    xor1=xor1^nums.length;
    return xor1^xor2;
};