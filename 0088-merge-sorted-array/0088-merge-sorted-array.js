/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=0;
    let j=0;
    let mrgArr=[];
    let index=0;
    while(i<m && j<n){
        if(nums1[i]<=nums2[j]){
            mrgArr.push(nums1[i]);
            i++;
            index++;
        }else{
            mrgArr.push(nums2[j]);
            j++;
            index++
        }
    }
    while(i<m){
        mrgArr.push(nums1[i++]);
        index++;
    }
    while(j<n){
        mrgArr.push(nums2[j++]);
        index++;
    }
    for(let k=0;k<m+n;k++){
        nums1[k]=mrgArr[k];
    }
};