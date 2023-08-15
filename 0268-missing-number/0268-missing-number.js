/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    for (let i = 0; i <= n; i++) {
        let flag = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i == nums[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) return i;
    }
};