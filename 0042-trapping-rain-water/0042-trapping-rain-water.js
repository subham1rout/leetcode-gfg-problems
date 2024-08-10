/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n=height.length;
    let maxL=0;
    let maxLArr=[];
    maxLArr.push(maxL);
    for(let i=1;i<n;i++){
        if(maxL<height[i-1]){
            maxL=height[i-1];
        }
        maxLArr.push(maxL);
    }
    let maxR=0;
    let maxRArr=new Array(n).fill(0);
    maxRArr[n-1]=maxR;
    for(let i=n-2;i>=0;i--){
        if(height[i+1]>maxR){
            maxR=height[i+1];
        }
        maxRArr[i]=maxR;
    }
    let min=[];
    for(let i=0;i<n;i++){
        if(maxLArr[i]<=maxRArr[i]){
            min.push(maxLArr[i]);
        }else{
            min.push(maxRArr[i]);
        }
    }
    let sum=0;
    for(let i=0;i<n;i++){
        let temp=min[i]-height[i];
        if(temp>0){
            sum+=temp;
        }
    }
    return sum;
};