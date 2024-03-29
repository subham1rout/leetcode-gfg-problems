/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let missingNo=arr[mid]-mid-1;
        if(missingNo<k){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return high+k+1;
};