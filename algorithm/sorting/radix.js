function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSortHelper(nums) {
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
}

function radixSort(nums) {
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
}

console.log(radixSort([23, 345, 5467, -50, 12, 2345, 9852, -5]));
console.log(radixSort([8, -1, 29, -5, 120, -50, 77]));
