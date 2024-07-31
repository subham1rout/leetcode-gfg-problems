/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n=nums.length;
    let nearest=Number.MAX_SAFE_INTEGER;
    let sumTemp=0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                let sum=nums[i]+nums[j]+nums[k];
                let tempX=Math.abs(sum-target);
                // console.log(sum,tempX,i,j,k,nearest,sumTemp)
                if(tempX<nearest){
                    nearest=tempX;
                    sumTemp=sum;
                }
            }
        }
    }
    return sumTemp;
};