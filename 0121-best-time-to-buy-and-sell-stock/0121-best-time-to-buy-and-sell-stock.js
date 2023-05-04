/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let cost = prices[i] - min;
        if (cost > profit) {
            profit = cost;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return profit;
};