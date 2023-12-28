/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let gap=Math.ceil((m+n)/2);
    while(gap>0){
        let left=0;
        let right=left+gap;
        while(right<n+m){
            if(left<m && right>=m){
                if(nums1[left]>nums2[right-m]){
                    let temp=nums1[left];
                    nums1[left]=nums2[right-m];
                    nums2[right-m]=temp;
                }
            }else if(left<m && right<m){
                if(nums1[left]>nums1[right]){
                    let temp=nums1[left];
                    nums1[left]=nums1[right];
                    nums1[right]=temp;
                }
            }else{
                if(nums2[left-m]>nums2[right-m]){
                    let temp=nums2[left-m];
                    nums2[left-m]=nums2[right-m];
                    nums2[right-m]=temp;
                }
            }
            left++;
            right++;
        }
        if(gap==1) break;
        gap=Math.ceil(gap/2);
    }
    let merge=[];
    for(let k=0;k<m+n;k++){
        if(k<m){
            merge[k]=nums1[k];
        }else{
            merge[k]=nums2[k-m];
        }
    }
    for(let i=0;i<m+n;i++){
        nums1[i]=merge[i];
    }
};