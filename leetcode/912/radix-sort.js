/**
 * @param {number[]} nums
 * @return {number[]}
 */

const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSortHelper = (nums) => {
  const maxDigitsCount = mostDigits(nums);
  let sortedNums = [...nums];

  for (let k = 0; k < maxDigitsCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < sortedNums.length; i++) {
      const digit = getDigit(sortedNums[i], k);
      digitBuckets[digit].push(sortedNums[i]);
    }
    sortedNums = [].concat(...digitBuckets);
  }
  return sortedNums;
};

const sortArray = (nums) => {
  const positiveNums = [];
  const negativeNumsAbs = [];
  for (const num of nums) {
    if (num < 0) {
      negativeNumsAbs.push(Math.abs(num));
    } else {
      positiveNums.push(num);
    }
  }

  const sortedPositives = radixSortHelper(positiveNums);
  const sortedNegativeAbs = radixSortHelper(negativeNumsAbs);

  const finalSortedNegatives = sortedNegativeAbs.reverse().map((num) => -num);

  return [...finalSortedNegatives, ...sortedPositives];
};

console.log(sortArray([-1, 2, -8, -10]));
