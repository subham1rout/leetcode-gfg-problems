/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

function getMin(arr, n) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
function getMax(arr, n) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function isPossibleBouquets(arr,n,m,k,day){
    let count=0;
    let noOfBouquets=0;
    for(let i=0;i<n;i++){
        if(arr[i]<=day){
            count++;
        }else{
            noOfBouquets+=Math.floor(count/k);
            count=0;
        }
    }
    noOfBouquets+=Math.floor(count/k);
    if(noOfBouquets>=m){
        return true;
    }else{
        return false;
    }
}
var minDays = function(bloomDay, m, k) {
    let n=bloomDay.length;
    if(m*k>n) return -1;
    let low=getMin(bloomDay,n);
    let high=getMax(bloomDay,n);
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(isPossibleBouquets(bloomDay,n,m,k,mid)){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
};