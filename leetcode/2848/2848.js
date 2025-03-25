/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  nums.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]; // Sort by the second index if the first is equal
    }
    return a[0] - b[0]; // Sort by the first index
  });

  const current = [[0, 0]];
  let value = 0;

  for ([start, end] of nums) {
    console.log(current);

    lasted = current[current.length - 1];
    if (start >= lasted[0] && start <= lasted[1] && end > lasted[1]) {
      value += end - lasted[1];
      current.push([lasted[0], end]);
    } else if (start > lasted[1]) {
      value += end - start + 1;
      current.push([start, end]);
    }

    console.log([start, end], value);
  }

  return value;
};

nums = [
  [3, 6],
  [1, 5],
  [4, 7],
];

nums = [
  [1, 3],
  [5, 8],
];

nums = [
  [4, 4],
  [9, 10],
  [9, 10],
  [3, 8],
];

nums = [
  [2, 5],
  [3, 8],
  [1, 6],
  [4, 10],
];

nums = [
  [8, 9],
  [6, 7],
  [6, 9],
  [3, 5],
  [7, 10],
  [5, 9],
  [10, 10],
];

numberOfPoints(nums);
