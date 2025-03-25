/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const copy = [...nums];

  for (let i = 0; i < copy.length; i++) {
    nums[(i + k) % copy.length] = copy[i];
  }

  console.log(copy);
  console.log(nums);
};

var rotate = function (nums, k) {
  k = k % nums.length; // Handle cases where k > nums.length

  // Use a helper function to reverse parts of the array
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  };

  // Step 1: Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Step 2: Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(nums, k, nums.length - 1);

  console.log(nums); // The array is now rotated
};

var rotate = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->

  console.log(nums); // The array is now rotated
};

(nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);

(nums = [-1, -100, 3, 99]), (k = 5);

rotate(nums, k);
