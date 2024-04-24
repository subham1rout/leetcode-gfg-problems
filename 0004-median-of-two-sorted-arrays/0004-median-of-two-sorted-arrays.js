/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let n1=nums1.length;
    let n2=nums2.length;
    let arr3 = [];
    while (i < n1 && j < n2) {
        if (nums1[i] <= nums2[j]) {
            arr3.push(nums1[i++]);
        } else {
            arr3.push(nums2[j++]);
        }
    }
    while (i < n1) {
        arr3.push(nums1[i++]);
    }
    while (j < n2) {
        arr3.push(nums2[j++]);
    }
    let n = n1 + n2;
    if (n % 2 == 1) {
        return arr3[Math.floor(n / 2)];
    } else {
        return (arr3[n / 2] + arr3[(n / 2) - 1]) / 2;
    }
};