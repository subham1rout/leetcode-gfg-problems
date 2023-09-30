/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxsum=0;
    let min=prices[0];
    for(let i=1;i<prices.length;i++){
        let cost=prices[i]-min;
        if(cost>maxsum){
            maxsum=cost;
        }
        if(min>prices[i]){
            min=prices[i];
        }
    }
    return maxsum;
};