/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    Selection sort is O(n^2) => Time Limit Exceeded for this problems
*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) swap(nums, lowest, i);
  }

  return nums;
};
