/**
 * @param {number[]} nums
 * @return {number}
 */

// Simple O(n^2) -> Time Limit Exceeded
var reversePairs = function (nums) {
  let swaps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > 2 * nums[j]) {
        swaps++;
      }
    }
  }

  return swaps;
};

let nums = [1, 3, 2, 3, 1];
nums = [2, 4, 3, 5, 1];

console.log(reversePairs(nums));
