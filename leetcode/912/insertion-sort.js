/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    Insertion sort is O(n^2) => Time Limit Exceeded for this problems
*/

var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    let j = i - 1;
    for (j; j >= 0 && currentVal < nums[j]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentVal;
  }

  return nums;
};
