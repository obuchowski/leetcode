/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    let maxProfit = 0
    if (prices.length === 1) {
        return 0
    }

    let nextHighestPrice = 0,
        hInd = 0,
        currentLowestPrice = prices[0] + 1

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] >= currentLowestPrice || prices[i + 1] <= prices[i]) continue
        currentLowestPrice = prices[i]
        if (hInd <= i) {
            nextHighestPrice = 0
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[j] >= nextHighestPrice) {
                    nextHighestPrice = prices[j]
                    hInd = j
                }
            }
        }

        let currentProfit = nextHighestPrice - prices[i]
        if (maxProfit < currentProfit) maxProfit = currentProfit
    }

    return maxProfit
};
// ============================================================================================================
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0,
        sell = prices[prices.length - 1]
    for (let i = prices.length - 2; i >= 0; i--) {
        if (prices[i] >= sell) {
            sell = prices[i]
            continue
        }

        if (prices[i-1] <= prices[i]) continue;

        let profit = sell - prices[i]
        if (profit > result) result = profit
    }

    return Math.max(prices[0], result)
};