/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    console.log(i, nums[i], goal);
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

nums = [2, 3, 1, 1, 4];

nums = [3, 2, 1, 0, 4];

nums = [2, 3, 3, 0, 0, 4];

console.log(canJump(nums));
