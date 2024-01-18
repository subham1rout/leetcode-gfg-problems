/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let n=nums.length;
    let lb=lowerBound(nums,n,target);
    if(lb==n || nums[lb]!=target){
        return [-1,-1];
    }
    let ub=upperBound(nums,n,target);
    return [lb,ub-1];
};

let lowerBound=function(arr, n, k) {
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

let upperBound=function(arr, n, k) {
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
