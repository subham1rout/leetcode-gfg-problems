/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ans = new Set();
    let n=nums.length;
    let arr=nums;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let newset=new Set();
                for (let y = j + 1; y < n; y++) {
                    let sum = arr[i] + arr[j] + arr[y];
                    let temp=target-sum;
                    if (newset.has(temp)) {
                        ans.add(JSON.stringify([arr[i], arr[j], arr[y], temp].sort((a, b) => a - b)));
                    }
                    newset.add(arr[y]);
                }
            }
        }
        let ansarr=[];
        for(const value of ans){
            ansarr.push(JSON.parse(value));
        }
        return ansarr.sort((a,b)=>{
            for(let i=0;i<a.length && i<b.length;i++){
                if(a[i]!==b[i]){
                    return a[i]-b[i];
                }
        
            }
            return a.length-b.length;
        });
};