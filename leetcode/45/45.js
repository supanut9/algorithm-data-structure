/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < nums.length - 1) {
    let max = 0;

    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] + i, max);
    }
    left = right + 1;
    right = max;

    res++;
  }
  return res;
};

nums = [2, 3, 1, 1, 4];

nums = [2, 1, 1, 1, 4];

nums = [2, 3, 0, 1, 4];

nums = [2, 2, 0, 1, 4];

nums = [2, 1, 0, 1, 4];

nums = [1, 2];

console.log(jump(nums));
