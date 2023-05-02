/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let size=nums.length;
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count > size / 2) {
            return nums[i];
        }
    }
};