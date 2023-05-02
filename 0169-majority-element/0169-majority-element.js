/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(nums[i], 0);
    }
    for (let i = 0; i < n; i++) {
        let value = map.get(nums[i]);
        value++;
        map.set(nums[i], value);
    }
    for (let [key, value] of map) {
        if (value > n / 2) {
            return key;
        }
    }
};