/**
 * @param {number[]} nums
 * @return {number[]}
 */

const swap = (nums, idx1, idx2) => {
  [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
};

const pivot = (nums, start = 0, end = nums.length) => {
  let randomPivotIndex = Math.floor(Math.random() * (end - start) + start);
  swap(arr, start, randomPivotIndex);

  let pivot = nums[start];
  let pivotIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > nums[i]) {
      pivotIdx++;
      swap(nums, pivotIdx, i);
    }
  }

  swap(nums, start, pivotIdx);

  return pivotIdx;
};

var sortArray = function (nums, left = 0, right = nums.length) {
  if (left < right) {
    const pivotIdx = pivot(nums, left, right);

    sortArray(nums, left, pivotIdx);
    sortArray(nums, pivotIdx + 1, right);
  }

  return nums;
};

console.log(sortArray([4, 8, 2, 1, 5, 7, 6, 3]));
