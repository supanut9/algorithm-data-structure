/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  if (nums.length === 1) {
    return [nums[0].toString()];
  }

  const result = [];

  for (let index = 0; index < nums.length; index++) {
    const list = result[result.length - 1]?.split('->');

    if (!list) {
      result.push(nums[index].toString());
      continue;
    }

    if (nums[index] - Number(list[list?.length - 1]) === 1) {
      result[result.length - 1] = `${list[0]}->${nums[index]}`;
    } else {
      result.push(nums[index].toString());
    }
  }

  return result;
};

var summaryRanges = function (nums) {
  const result = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
      if (start === i) {
        result.push(nums[start].toString());
      } else {
        result.push(`${nums[start]}->${nums[i]}`);
      }
      start = i + 1;
    }
  }

  return result;
};

nums = [0, 1, 2, 4, 5, 7];

nums = [0, 2, 3, 4, 6, 8, 9];

nums = [-2147483648, -2147483647, 2147483647];

console.log(summaryRanges(nums));
