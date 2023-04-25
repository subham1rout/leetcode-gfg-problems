/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i];
        let temp = map.has(remain);
        if (temp) {
            let index = map.get(remain); //logn
            return [i, index];
        }
        map.set(nums[i], i);
    }
};