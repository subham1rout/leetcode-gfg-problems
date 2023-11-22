/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let set = new Set();
    let n=nums.length;
    for (let i = 0; i < n; i++) {
        let tempSet = new Set();
        for (let j = i + 1; j < n; j++) {
            let k = -(nums[i] + nums[j]);
            if (tempSet.has(k)) {
                let x = [nums[i], nums[j], k].sort((a, b) => a - b);
                set.add(JSON.stringify(x));
            }
            tempSet.add(nums[j]);
        }
    }
    let ans = [];
    for (const value of set) {
        ans.push(JSON.parse(value));
    }
    return ans;
};