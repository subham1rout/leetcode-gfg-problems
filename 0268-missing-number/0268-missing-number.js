/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let hasharr = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        hasharr[nums[i]] = 1;
    }
    for (let i = 0; i <= nums.length+1; i++) {
        if (hasharr[i] == 0) {
            return i;
        }
    }
     
};