/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

function getMax(arr, n) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function getSum(arr, n, div) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(arr[i] / div);
    }
    return sum;
}
var smallestDivisor = function(nums, threshold) {
    let n=nums.length;
    let low=1;
    let high=getMax(nums,n);
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let sum=getSum(nums,n,mid);
        if(sum<=threshold){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
};