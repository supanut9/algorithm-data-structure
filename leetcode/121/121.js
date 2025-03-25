/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }

    profit = Math.max(profit, prices[i] - buy);
  }

  return profit;
};

prices = [7, 1, 5, 3, 6, 4];

prices = [2, 4, 1];

console.log(maxProfit(prices));
