/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  if (j >= 0) {
    nums1.splice(0, j + 1, ...nums2.slice(0, j + 1));
  }

  console.log(nums1, nums2);
};

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);

(nums1 = [1]), (m = 1), (nums2 = []), (n = 0);

(nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);

(nums1 = [2, 5, 6, 0, 0, 0]), (m = 3), (nums2 = [1, 2, 3]), (n = 3);

merge(nums1, m, nums2, n);
