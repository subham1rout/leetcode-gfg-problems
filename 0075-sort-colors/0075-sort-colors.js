/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let countzero = 0;
    let countone = 0;
    let counttwo = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) countzero++;
        else if (nums[i] == 1) countone++;
        else counttwo++;
    }
    for (let i = 0; i < countzero; i++) {
        nums[i] = 0;
    }
    for (let i = countzero; i < countzero + countone; i++) {
        nums[i] = 1;
    }
    for (let i = countzero + countone; i < countzero + countone + counttwo; i++) {
        nums[i] = 2;
    }
};