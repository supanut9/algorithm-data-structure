/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = -1;
  let dup = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && dup) {
      continue;
    }

    k++;
    dup = true;
    nums[k] = nums[i];

    if (nums[i] !== nums[i + 1]) {
      dup = false;
    }
  }

  return k + 1;
};

nums = [1, 1, 1, 2, 2, 3];

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log(removeDuplicates(nums));
