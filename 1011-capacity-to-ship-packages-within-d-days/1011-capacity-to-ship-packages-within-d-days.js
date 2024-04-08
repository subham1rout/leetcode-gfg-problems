/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function getMax(weights) {
    let max = weights[0];
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > max) {
            max = weights[i];
        }
    }
    return max;
}

function getSum(weights) {
    let sum=0;
    for(let i=0;i<weights.length;i++){
        sum+=weights[i];
    }
    return sum;
}

function getDays(weights, capacity) {
    let load = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
        if (load + weights[i] <= capacity) {
            load += weights[i];
        } else {
            days++;
            load = weights[i];
        }
    }
    return days;
}
var shipWithinDays = function(weights, days) {
    let max = getMax(weights);
    let sum = getSum(weights);
    while(max<=sum){
        let mid=Math.floor((max+sum)/2);
        let daysTaken=getDays(weights,mid);
        if(daysTaken<=days){
            sum=mid-1;
        }else{
            max=mid+1;
        }
    }
    return max;
};