/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n=intervals.length;
    intervals.sort((a,b)=>a[0]-b[0]);
    let ans=[];
    for(let i=0;i<n;i++){
        let start=intervals[i][0];
        let end=intervals[i][1];
        if(ans.length!==0 && ans[ans.length-1][1]>=end){
            continue;
        }
        for(let j=i+1;j<n;j++){
            if(intervals[j][0]<=end){
                if(end<intervals[j][1]){
                    end=intervals[j][1];
                }

            }else{
                break;
            }
        }
        ans.push([start,end]);
    }
    return ans;
};