/**
 * @param {number[]} nums
 * @return {number}
 */

var countPairs=function(arr,low,mid,high){
    let count=0;
    let right=mid+1;
    for(let i=low;i<=mid;i++){
        while(right<=high && arr[i]>2*arr[right]){
            right++;
        }
        count+=right-(mid+1);
    }
    return count;
}
var merge=function(arr,low,mid,high){
    let left=low;
    let right=mid+1;
    let temp=[];
    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }
    for(let i=low;i<=high;i++){
        arr[i]=temp[i-low];
    }
}
var mergeSort=function(arr,low,high){
    if(low>=high) return 0;
    let mid=Math.floor((low+high)/2);
    let count=0;
    count += mergeSort(arr,low,mid);
    count += mergeSort(arr,mid+1,high);
    count += countPairs(arr,low,mid,high);
    merge(arr,low,mid,high);
    return count;
}
var reversePairs = function(nums) {
    return mergeSort(nums,0,nums.length-1);
};