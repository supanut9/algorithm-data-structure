/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  // Sort the array to simplify duplicate handling and two-pointer traversal
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first pointer
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const threeSum = nums[i] + nums[j] + nums[k];

      if (threeSum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        // Move both pointers to avoid duplicates
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (threeSum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};

// Example Test Case
nums = [0, 0, 0];
console.log(threeSum(nums)); // [[0, 0, 0]]
