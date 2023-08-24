/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1=nums1.sort((a,b)=>a-b);
    nums2=nums2.sort((a,b)=>a-b);
    let visited=new Array(nums2.length).fill(0);
    let result=[];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j] && visited[j]==0 && !result.includes(nums1[i])){
                result.push(nums1[i]);
                visited[j]=1;
            }
        }
    }
    return result;
};