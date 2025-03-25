/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /*
    This method will show both candidate and frequency that have high frequency
   */

  nums.sort((a, b) => a - b); // nlogn for sorting

  let candidate = nums[0];
  let prevF = 1;
  let curF = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      curF++;
    } else if (nums[i] !== nums[i + 1] && curF > prevF) {
      prevF = curF;
      curF = 1;
      candidate = nums[i];
    }
  }

  console.log(prevF);
  return candidate;
};

var majorityElement = function (nums) {
  /*
    This method will show only candidate that have high frequency
   */

  let candidate = null;
  let count = 0;

  // Phase 1: Find the majority candidate
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Phase 2 (Optional): Verify the candidate
  // In this problem, it's guaranteed that a majority element exists,
  // so verification is unnecessary.

  return candidate;
};

nums = [3, 2, 3];

nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
