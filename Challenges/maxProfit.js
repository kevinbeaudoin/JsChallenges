const utils = require("../utils");

/***************************************************
 *
 * Given an array of stock prices, find the minimum buy price
 * and the maximum sell price that produce the greatest profit.
 *
 ***************************************************/

/*
 Let's take an example

 [2, 1, 5, 3, 4] would give us [1,5]

 - I need to buy first before selling.  So any max number before my min is useless.  Same the other way around.

 - Starting from left, try to identify the best min.
 - Starting from right try to identify the best max.

  - [2,1,5,3,4] max profit:[2, 5] for 3
  - [1,5,3,4] max profit: [1,5] for 4
  - [5,3,4] max profit: [5, 4] for -1
  - [3,4] max profit: [3, 4] for 1



*/
function maxProfitLeetcode(prices) {
    let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1];
    let maxBuyPrice = prices[0] < prices[1] ? prices[1] : prices[2];
    let maxProfit = maxBuyPrice - minBuyPrice;
    let tempBuyPrice = minBuyPrice;
    // min : 1
    // max : 2
    // temp: 1
    // current: 1
    // profit: 1

    for (let i = 2; i < prices.length; i++) {
        let current = prices[i];
        if (tempBuyPrice > current) {
            // we have a potential new min price.
            tempBuyPrice = current;
        } else if (current - tempBuyPrice > maxProfit) {
            minBuyPrice = tempBuyPrice;
            maxBuyPrice = current;
            maxProfit = maxBuyPrice - minBuyPrice;
        } else if (current >= maxBuyPrice) {
            maxBuyPrice = current;
            minBuyPrice = Math.min(minBuyPrice, tempBuyPrice);
            maxProfit = maxBuyPrice - minBuyPrice;
        }
    }
    return Math.max(maxProfit, 0);
}

function maxProfit(stockPrices) {
    let minBuyPrice =
        stockPrices[0] < stockPrices[1] ? stockPrices[0] : stockPrices[1];
    let maxSellPrice =
        stockPrices[0] < stockPrices[1] ? stockPrices[1] : stockPrices[2];
    let tempBuyPrice = minBuyPrice;
    let max = maxSellPrice - minBuyPrice;

    for (let i = 2; i < stockPrices.length; i++) {
        const sellPrice = stockPrices[i];

        if (minBuyPrice > sellPrice) {
            tempBuyPrice = stockPrices[i];
        } else {
            const profit = sellPrice - minBuyPrice;
            if (profit > max) {
                max = profit;
                maxSellPrice = sellPrice;
                minBuyPrice = tempBuyPrice;
            }
        }
    }
    return [minBuyPrice, maxSellPrice];
}

utils.expect("maxProfit", maxProfit([2, 1, 5, 3, 4]), [1, 5]);
utils.expect("maxProfit", maxProfit([2, 10, 1, 3]), [2, 10]);
utils.expect("maxProfit", maxProfit([2, 1, 2, 11]), [1, 11]);
utils.expect("maxProfit", maxProfit([2, 10, 1, 12]), [1, 12]);
