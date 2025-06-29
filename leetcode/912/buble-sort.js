/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    Buble sort is O(n^2) => Time Limit Exceeded for this problems
*/
var sortArray = function (nums) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let noSwaps;

  for (let i = nums.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return nums;
};
