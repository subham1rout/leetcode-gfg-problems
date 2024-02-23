/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n=nums.length;
    if(n==1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[n-1]>nums[n-2]) return n-1;
    let low=1;
    let high=n-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid;
        }else if(nums[mid]>nums[mid-1]){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
};