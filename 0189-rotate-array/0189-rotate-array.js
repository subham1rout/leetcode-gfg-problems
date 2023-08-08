/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [];
    let n=nums.length;
    k=k%n;
    if(n==1) return nums;
    for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
    }
    for (let i = n - 1; i >= k; i--) {
        nums[i] = nums[i - k];
    }
    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }
    return nums;
};
