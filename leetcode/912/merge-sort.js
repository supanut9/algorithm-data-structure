/**
 * @param {number[]} nums
 * @return {number[]}
 */

const merge = (arr1, arr2) => {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  return merge(left, right);
};

console.log(sortArray([4, 20, 12, 10, 7, 9]));
