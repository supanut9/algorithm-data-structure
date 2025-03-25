/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};

nums = [1, 1, 2];

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

nums = [-1, 0, 0, 0, 0, 3, 3];

console.log(removeDuplicates(nums));
